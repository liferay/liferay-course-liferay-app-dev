package com.clarityvisionsolutions.distributor.mgmt.actions;

import com.liferay.petra.string.StringBundler;

import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.task.TaskExecutor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

/**
 * Processes account creation requests.
 *
 * @author dnebing
 */
@Service
public class AccountCreationRequestProcessorService {

	/**
	 * Constructs a new AccountCreationRequestProcessorService.
	 *
	 * @param queueManager the queue manager
	 * @param taskExecutor the task executor
	 */
	@Autowired
	public AccountCreationRequestProcessorService(
			AccountCreationRequestQueueManager queueManager,
			TaskExecutor taskExecutor) {

		_queueManager = queueManager;
		_taskExecutor = taskExecutor;

		_startProcessing();
	}

	@Value("${com.liferay.lxc.dxp.mainDomain}")
	protected String lxcDXPMainDomain;

	@Value("${com.liferay.lxc.dxp.server.protocol}")
	protected String lxcDXPServerProtocol;

	private void _log(String message) {
		if (_log.isInfoEnabled()) {
			_log.info(message);
		}
	}

	/**
	 * Processes an account creation request.
	 *
	 * @param accountJson the account creation request in JSON format
	 */
	private void _processRequest(AccountCreationRequest request) {
		try {
			JSONObject jsonObject = new JSONObject(request.getAccountJSON());

			JSONObject objectEntryDTODistributorApplicationJSONObject = jsonObject.getJSONObject(
					"objectEntryDTODistributorApplication");

			JSONObject propertiesJSONObject = objectEntryDTODistributorApplicationJSONObject.getJSONObject(
					"properties");

			String accountEmailAddress = propertiesJSONObject.getString(
					"applicantEmailAddress");

			String accountName = propertiesJSONObject.getString("businessName");

			String accountExternalReferenceCode = "ACCOUNT_".concat(
					accountName.toUpperCase().replace(
							' ', '_'));

			String tokenValue = request.getJwt().getTokenValue();

			String authHeader = "Bearer " + tokenValue;

			WebClient.Builder builder = WebClient.builder();

			WebClient webClient = builder.baseUrl(
					lxcDXPServerProtocol + "://" + lxcDXPMainDomain).defaultHeader(
							HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
					.defaultHeader(
							HttpHeaders.AUTHORIZATION, authHeader)
					.defaultHeader(
							HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
					.build();

			webClient.post().uri(
					"o/headless-admin-user/v1.0/accounts").bodyValue(
							StringBundler.concat(
									"{\"externalReferenceCode\": \"",
									accountExternalReferenceCode, "\", \"name\": \"",
									accountName, "\", \"type\": \"business\"}"))
					.retrieve().toEntity(
							String.class)
					.flatMap(
							responseEntity -> _transform(responseEntity))
					.doOnSuccess(
							responseEntity -> _log(
									"Created account: " + responseEntity.getBody()))
					.then(
							webClient.post().uri(
									StringBundler.concat(
											"o/headless-admin-user/v1.0/accounts",
											"/by-external-reference-code/",
											accountExternalReferenceCode,
											"/user-accounts/by-email-address/", accountEmailAddress))
									.retrieve().toEntity(
											String.class)
									.flatMap(
											responseEntity -> _transform(responseEntity)))
					.doOnSuccess(
							responseEntity -> _log(
									"Assigned user: " + responseEntity.getBody()))
					.then(
							webClient.get().uri(
									uriBuilder -> uriBuilder.path(
											StringBundler.concat(
													"o/headless-admin-user/v1.0/accounts",
													"/by-external-reference-code/",
													accountExternalReferenceCode, "/account-roles"))
											.queryParam(
													"filter", "name eq 'Account Administrator'")
											.build())
									.retrieve().bodyToMono(
											String.class)
									.map(
											pageJSON -> new JSONObject(
													pageJSON).getJSONArray(
															"items")
													.getJSONObject(
															0)
													.getInt(
															"id")))
					.flatMap(
							accountRoleId -> webClient.post().uri(
									StringBundler.concat(
											"o/headless-admin-user/v1.0/accounts",
											"/by-external-reference-code/",
											accountExternalReferenceCode, "/account-roles/",
											accountRoleId, "/user-accounts/by-email-address/",
											accountEmailAddress))
									.retrieve().toEntity(
											String.class)
									.flatMap(
											responseEntity -> _transform(responseEntity))
									.doOnSuccess(
											responseEntity -> _log(
													"Assigned role: " + responseEntity.getBody())))
					.subscribe();
		} catch (Exception exception) {
			_log.error(
					"Failed to process account: {}", request.getAccountJSON(), exception);
		}
	}

	/**
	 * Starts the processing of account creation requests.
	 */
	private void _startProcessing() {
		_taskExecutor.execute(
				() -> {
					while (true) {
						try {
							_queueManager.awaitWork(); // Wait for work if the queue is empty

							while (!_queueManager.isEmpty()) {
								AccountCreationRequest request = _queueManager.dequeue();

								_processRequest(request);
							}
						} catch (InterruptedException interruptedException) {
							Thread.currentThread().interrupt();

							_log.error(
									"Queue processing interrupted",
									interruptedException);
						} catch (Exception exception) {
							_log.error("Error processing queue entry", exception);
						}
					}
				});
	}

	private Mono<ResponseEntity<String>> _transform(
			ResponseEntity<String> responseEntity) {

		HttpStatus httpStatus = responseEntity.getStatusCode();

		if (httpStatus.is2xxSuccessful()) {
			return Mono.just(responseEntity);
		}

		return Mono.error(new RuntimeException(httpStatus.getReasonPhrase()));
	}

	private static final Logger _log = LoggerFactory.getLogger(
			AccountCreationRequestProcessorService.class);

	private final AccountCreationRequestQueueManager _queueManager;
	private final TaskExecutor _taskExecutor;

}