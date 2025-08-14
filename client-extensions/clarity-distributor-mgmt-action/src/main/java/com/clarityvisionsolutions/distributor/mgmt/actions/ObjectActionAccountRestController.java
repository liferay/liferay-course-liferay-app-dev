

package com.clarityvisionsolutions.distributor.mgmt.actions;

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


@RequestMapping("/object/action/account")
@RestController
public class ObjectActionAccountRestController extends BaseRestController {

    @Autowired
    public ObjectActionAccountRestController(
            AccountCreationRequestQueueManager queueManager) {

        _queueManager = queueManager;
    }

    /**
     * Invoked when a Distributor Application is approved and an Account
     * needs to be created.
     *
     * @param jwt  the JWT token
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

        AccountCreationRequest request = new AccountCreationRequest(json, jwt);

        // Enqueue the request

        _queueManager.enqueue(request);

        // Return a success response

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    private static final Log _log = LogFactory.getLog(
            ObjectActionAccountRestController.class);

    private final AccountCreationRequestQueueManager _queueManager;

}