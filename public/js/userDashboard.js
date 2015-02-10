(function() {

    window.onload = function(){

        populateRequests(JSON.stringify({
            query: 'querys',
            rstatus: 'rstatus',
            rlink: 'rlink'
        }));

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
    };

    function populateRequests(data){
        var targetRequest = JSON.parse(data);
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
        currentStatus.innerHTML = " Ready";
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
            attribute.appendChild(readyButton); // Puts buttin in attribute
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

            /* Hide */
            var prevSearches = getPrevUserSearches();

            console.log(prevSearches);
        }
    };

    var getPrevUserSearches = function() {

        $.ajax({
            url: 'http://localhost:3000/form/searches',
            type: 'GET',
            headers: {
                authorization: 'Bearer ' + authTokenHandler().getToken()
            }
        }).done(function(res) {
            return res;
        });
    };

    var submitUserLogin = function() {
        var url = 'http://localhost:3000/form/login';
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
    }

})();