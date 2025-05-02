/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.clarityvisionsolutions.ticketing;

import org.json.JSONObject;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import reactor.core.publisher.Mono;


/**
 */
@RequestMapping("/object/action/ticket-suggestion")
@RestController
public class TicketActionSuggestionRestController extends BaseRestController {

	@PostMapping
	public ResponseEntity<String> post(
		@AuthenticationPrincipal Jwt jwt, @RequestBody String json) {

		log(jwt, _log, json);
		
		WebClient.Builder builder = WebClient.builder();

		WebClient webClient = builder.baseUrl(
			lxcDXPServerProtocol + "://" + lxcDXPMainDomain
		).defaultHeader(
			HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE
		).defaultHeader(
			HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE
		).build();

		JSONObject inputObject = new JSONObject(json);
		JSONObject objectEntry = inputObject.getJSONObject("objectEntry");
		int id = objectEntry.getInt("id");
		JSONObject suggestion = getSuggestion(inputObject);
		String uri = "/o/c/tickets/" + id;
		if (_log.isInfoEnabled()) {
					_log.info("uri: " + uri);
					_log.info("suggestion: " + suggestion);
				}
		webClient.patch().uri(uri).bodyValue(
			suggestion.toString()).exchangeToMono(
			clientResponse -> {
				HttpStatus httpStatus = clientResponse.statusCode();

				if (httpStatus.is2xxSuccessful()) {
					return clientResponse.bodyToMono(String.class);
				}
				else if (httpStatus.is4xxClientError()) {
					return Mono.just(httpStatus.getReasonPhrase());
				}

				Mono<WebClientResponseException> mono =
					clientResponse.createException();

				return mono.flatMap(Mono::error);
			}
		).doOnNext(
			output -> {
				if (_log.isInfoEnabled()) {
					_log.info("Output: " + output);
				}
			}
		).subscribe();

		return new ResponseEntity<>(json, HttpStatus.OK);
	}

	private JSONObject getSuggestion (JSONObject jsonObject){
		String suggestion = "There are no suggestions for this ticket";
		//TODO: implement your own logic/integration to get suggestions
		JSONObject response = new JSONObject();
		response.put("suggestions", suggestion);
		return response;
	}

	private static final Log _log = LogFactory.getLog(
		TicketActionSuggestionRestController.class);

}