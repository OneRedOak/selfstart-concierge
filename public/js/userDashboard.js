(function() {

    window.onload = function(){

        updatePageAuthStatus();

        $('#sidebarSignout').click(userLogOut);

    };

    var userLogOut = function() {
        authTokenHandler().removeToken();
        $('#requestsList').hide();
        $('#sidebarRequests').hide();
        $('#sidebarCreate').hide();
        $('#sidebarSignout').hide();
        $('#loginForm').show();
    };

    /* Show or hide content based on authentication status */
    var updatePageAuthStatus = function() {

        var isAuth = authTokenHandler().isAuthenticated();

        if(!isAuth) {
            $('#loginForm').show();
        } else {
            $('#requestsList').show();
            $('#sidebarRequests').show();
            $('#sidebarCreate').show();
            $('#sidebarSignout').show();

            /* Hide */
            var prevSearches = getPrevUserSearches();

            alert(prevSearches);
        }
    };

    var getPrevUserSearches = function() {
        $.get('http://localhost:3000/form/searches', function(data) {
            console.log(data);
        }).done(function() {
            alert('Success');
        }).fail(function() {
            alert('Failed');
        });
    };

})();