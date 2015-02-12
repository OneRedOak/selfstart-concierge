(function() {

    window.onload = function(){

        // -------- Handles message animation on top --------------

    	setTimeout(function(){
			$("#b").slideDown(300, function(){
				setTimeout(function(){
					$("#c").slideDown(300, function(){
						setTimeout(function(){
							$("#d").slideDown(300, function(){
                                $("#topGoDown").css("margin-top", "25px");
                                $("#topGoDown").addClass("animated");
                                $("#topGoDown").addClass("bounce");
							});
						}, 1300);
					});
				}, 1000);
			});
    	}, 800);


    	setChevron();

        /* Show or hide content based on users authentication status */
        updatePageAuthStatus();

        $('#surveyQuery').val(getParameterByName('search'));
        $('#surveyQbackground').val(getParameterByName('bg'));
        $('#surveyQformat').val(getParameterByName('pformat'));
        $('#surveyQbudget').val(getParameterByName('spend'));

        $('#feedbackSubmit').click(submitFeedbackForm);

    	$('#actionButton').click(function(){
    		$('#start').ScrollTo();
    	});


    	$('.learnmore').click(function(){
    		$('#nav').ScrollTo();
    	});

    	$('#howTo').click(function(){
    		$('#timelineSection').ScrollTo();
    	});

    	$('#aboutUs').click(function(){
    		$('#nav').ScrollTo();
    	});

    	$('#getPresent').click(function(){
    		$('#start').ScrollTo();
    	});

        $('#learnYouButton').click(function(){
            $('#learnYou').slideDown();
            ga('send', 'event', 'button', 'click', 'LearnMore_1', 1);
        });

        $('#learnMagicButton').click(function(){
            $('#learnMagic').slideDown();
        });

        $('#learnResultsButton').click(function(){
            $('#learnResults').slideDown();
        });

    	// Timeline javascript

    	var my_posts = $("[rel=tooltip]");

		var size = $(window).width();
		for(i=0;i<my_posts.length;i++){
			the_post = $(my_posts[i]);

			if(the_post.hasClass('invert') && size >=767 ){
				the_post.tooltip({ placement: 'left'});
				the_post.css("cursor","pointer");
			}else{
				the_post.tooltip({ placement: 'rigth'});
				the_post.css("cursor","pointer");
			}
		}

        // ---------------- Handles request form submission -------------------
        //                  via clicking "Submit"

		$("#submitSurvey").click(function(){
            if(validateEmail($("#surveyEmail").val())){
                submitFormPost(); // POSTs form to backend route
            } else {
                alert("Please enter valid Email");
            }
		});

        // ---------------- Handles request form submission -------------------
        //                  via pressing enter

        $('#surveyEmail').keypress(function (e) {
           var key = e.which;
           if(key == 13)  // the enter key code
            {
                if(validateEmail($("#surveyEmail").val())){
                    submitFormPost();
                } else {
                    alert("Please enter valid Email");
                } 
            }
          });

        // ---------------- Handles feedback form -------------------

        $("#feedbackSubmit").click(function(){
            var feedback = $("#feedbackForm").val();
            if(feedback.length < 1){
                alert("Please type in feedback");
            } else {
                // submit feedback into database
            }
        });
	};

    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

	function typeWriter(text, n) {
	  if (n < (text.length)) {
	    $('#changing').html(text.substring(0, n+1));
	    n++;
	    setTimeout(function() {
	      typeWriter(text, n)
	    }, 100);
	  }git
	}

	function setChevron(){
		var width = window.innerWidth / 4;
		var border = width + "px solid transparent";
		$('#triangle-down').css('border-left', border);
		$('#triangle-down').css('border-right', border);
	}

    /* Submission Form JS Wiring to POST to BackEnd */

    var submitFormPost = function() {
        var url = 'http://localhost:3000/form/register';
        var user = {
            fullname: $("#surveyFullName").val(),
            email: $("#surveyEmail").val(),
            password: 'selfstart',
            query: $("#surveyQuery").val(),
            qlearn: $("#surveyQlearn").val(),
            qwhy: $("#surveyQwhy").val(),
            qbackground: $("#surveyQbackground").val(),
            qformat: $("#surveyQformat").val(),
            qbudget: $("#surveyQbudget").val(),
            qdate: new Date().getTime()
        };

        $.post(url, user)
            .done(function(res) {
                alert('Successful register!');
                authTokenHandler().setToken(res.token);
                window.location.href = 'dashboard.html';
            })
            .fail(function() {
                alert('Opps! Something went wrong registering.', 'Please try again.');
            });
    };

    /* Submits data from feedback form to /form/feedback route to be saved in DB */
    var submitFeedbackForm = function() {
        var url = 'http://localhost:3000/form/feedback';
        var data = {
            message: $("#feedbackForm").val()
        };

        $.post(url, data)
            .done(function(res) {
                alert('Feedback submitted - thanks!');
                $('#feedbackForm').val('');
            })
            .fail(function(err) {
                alert('Opps! Something went wrong submitting your feedback.', err.message);
            });
    };

    /* Show or hide content based on authentication status */
    var updatePageAuthStatus = function() {

        var isAuth = authTokenHandler().isAuthenticated();

        if(isAuth) {
            $('#signupFormUserCredentials').hide();
        }

    };

    /* Receive & decode query string parameters */
    var getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

})();