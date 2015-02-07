/* Function for Receiving & Handling JWT Token (for User Authentication) */

var authTokenHandler = function() {
    var storage = window.localStorage;
    var cachedToken;
    return {
        setToken: function(token) {
            cachedToken = token;
            storage.setItem('userToken', token);
        },
        getToken: function() {
            if(!cachedToken) {
                cachedToken = storage.getItem('userToken');
            }
            return cachedToken;
        },
        isAuthenticated: function() {
            return !!this.getToken();
        }
    }
}