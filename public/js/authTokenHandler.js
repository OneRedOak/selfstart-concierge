/* Function for Receiving & Handling JWT Token (for User Authentication) */

var authTokenHandler = function() {
    var storage = window.localStorage;
    var cachedToken;
    var userToken = 'userToken';

    var authToken = {
        setToken: function(token) {
            cachedToken = token;
            storage.setItem(userToken, token);
        },
        getToken: function() {
            if(!cachedToken) {
                cachedToken = storage.getItem(userToken);
            }
            return cachedToken;
        },
        isAuthenticated: function() {
            return !!authToken.getToken();
        },
        removeToken: function() {
            cachedToken = null;
            storage.removeItem(userToken);
        }
    };

    return authToken;
};

/* Intercepts HTTP call and attaches header with JWT (for token authentication purposes) */
var authInterceptor = function(authToken) {
    return {
        request: function(config) {
            var token = authToken.getToken();

            if(token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        response: function(response) {
            return response;
        }
    }
};