(function() {

    window.onload = function(){

        updatePageAuthStatus();

        $('#sidebarSignout').click(userLogOut);
        $('#loginButton').click(submitUserLogin);

        $('#loginFormPassword').keypress(function (e) {
           var key = e.which;
           if(key == 13)  // the enter key code
            {
              submitUserLogin();
            }
          });

        $("#content").css("height", window.innerHeight);

        createRequest("hello", "true", "");
    };

    function populateRequests(targetRequest){
        createRequest(targetRequest.query, targetRequest.rstatus, targetRequest.rlink);
    };

    function createRequest(requestTitle, requestStatus, requestLink){
        // Creates the over all request div
        var container = document.createElement("div");
        container.className += " request";

        // Creates the title div + title heading
        var title = document.createElement("div");
        title.className += " title";
        var titleHeading = document.createElement("h1");
        titleHeading.innerHTML = requestTitle;
        title.appendChild(titleHeading);
       
        container.appendChild(title);  // Puts title into request div

        // Creates the attribute div
        var attribute = document.createElement("div");
        attribute.className += " attr";

        // Creates status + current status
        var status = document.createElement("div");
        status.className += " status";
        status.innerHTML = "Status :";
        var currentStatus = document.createElement("span");
        currentStatus.className += " currentStatus";
        var statusText = '';
        if (requestStatus) {
            statusText = ' Ready';
        } else {
            statusText = ' In Process';
        }
        currentStatus.innerHTML = statusText;
        status.appendChild(currentStatus);

        attribute.appendChild(status); // Puts status into attribute

        // Creates the View button
        var readyButton = document.createElement("div");
        readyButton.className += " viewButton";
        readyButton.innerHTML = "VIEW";

        if (requestStatus) {
            readyButton.className += " ready";

            // Creates link to results
            var link = document.createElement("a");
            link.setAttribute("href", requestLink + "");
            link.appendChild(readyButton);
            attribute.appendChild(link); // Puts link + button in attribute
        } else {
            readyButton.className += " pending";
            attribute.appendChild(readyButton); // Puts button in attribute
        }

        container.appendChild(attribute); // Puts attribute in results container

        // Puts request in request list
        document.getElementById("requestsList").appendChild(container);
    }

    /* Logs user out and updates dashboard accordingly */
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

            /* Returns user's auth status & previous searches */
            $.ajax({
                url: '/form/status',
                type: 'GET',
                headers: {
                    authorization: 'Bearer ' + authTokenHandler().getToken()
                }
            }).done(function(res) {

                res.queries.forEach(function(query) {

                    /* Populate previous user search requests */
                    populateRequests({
                        query: query.query,
                        rstatus: query.rstatus,
                        rlink: query.rlink
                    });
                });

                /* If user has validated email address, hide email validation reminder */
                if (res.registered) {
                    $('#confirmAlert').hide();
                }

            }).fail(function(err) {
                console.log('Searches did not load');
            });

        }
    };

    var submitUserLogin = function() {
        var url = '/form/login';
        var user = {
            email: $("#loginFormEmail").val(),
            password: $("#loginFormPassword").val()
        };

        $.post(url, user)
            .done(function(res) {
                alert('Successful login! ' + user.email);
                authTokenHandler().setToken(res.token);
                updatePageAuthStatus();
            })
            .fail(function(err) {
                alert('Opps! Something went wrong logging in.', err.message);
            });
    };

})();