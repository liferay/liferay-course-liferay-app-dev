package com.clarityvisionsolutions.distributor.mgmt.actions;

import com.liferay.client.extension.util.spring.boot.BaseRestController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Invoked when a new user account has been created.
*/
@RequestMapping("/distributor/mgmt/create-account")
@RestController
public class CreateAccountActionRestController extends BaseRestController {
    @Autowired
    public CreateAccountActionRestController(
            UserCreatedRequestQueueManager queueManager) {
        _queueManager = queueManager;
    }

    /**
     * Invoked when a new user account has been created.
     *
     * @param jwt the JWT token
     * @param json the user creation request in JSON format
     * @return the response entity
     * @throws Exception if an error occurs
     */
    @PostMapping
    public ResponseEntity<String> post(
            @AuthenticationPrincipal Jwt jwt, @RequestBody String json)
            throws Exception {
        log(jwt, _log, json);
        // Create the request instance
        UserCreatedRequest request = new UserCreatedRequest(json, jwt);
        // Enqueue the request
        _queueManager.enqueue(request);
        // Return a success response
        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    private static final Log _log = LogFactory.getLog(
            CreateAccountActionRestController.class);
    private final UserCreatedRequestQueueManager _queueManager;
}