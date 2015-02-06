(function() {

	window.setTimeout(function(){
		$('.topdescribe').fadeIn(1800, function(){
			setTimeout(function(){
				$('.topdescribe2').fadeIn(1800, function(){
					setTimeout(function(){
	    				$('.learnmore').css('display', 'initial');
	    				$('.learnmore').addClass('animated pulse infinite');
					},3500);
				});
			},0);
    	});
    },3000);

    window.onload = function(){
    	setTimeout(function(){
			$("#b").slideDown(300, function(){
				setTimeout(function(){
					$("#c").slideDown(300, function(){
						setTimeout(function(){
							$("#d").slideDown(300, function(){
								setTimeout(function(){
									$("#e").slideDown(300);
								}, 1600);
							});
						}, 1300);
					});
				}, 1000);
			});
    	}, 800);


    	setChevron();

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

		$("#submitSurvey").click(function(){
			blur();
            submitFormPost(); // POSTs form to backend route
		});

		$('#closeModal').click(function(){
			unblur();
		});

	}

	function typeWriter(text, n) {
	  if (n < (text.length)) {
	    $('#changing').html(text.substring(0, n+1));
	    n++;
	    setTimeout(function() {
	      typeWriter(text, n)
	    }, 100);
	  }
	}

	function setChevron(){
		var width = window.innerWidth / 4;
		var border = width + "px solid transparent";
		$('#triangle-down').css('border-left', border);
		$('#triangle-down').css('border-right', border);
	}

	function blur(){
		$('#survey').css("-webkit-filter", "blur(7px)");
		$('#timelineSection').css("-webkit-filter", "blur(7px)");
	}

	function unblur(){
		$('#survey').css("-webkit-filter", "none");
		$('#timelineSection').css("-webkit-filter", "none");
	}

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

    /* Submission Form JS Wiring to POST to BackEnd */

    var submitFormPost = function() {
        var url = 'http://localhost:3000/form/register';
        var user = {
            fullname: $("#surveyFullName").val(),
            email: $("#surveyEmail").val(),
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
            })
            .fail(function() {
                alert('Opps! Something went wrong registering.', 'Please try again.');
            });
    }

})();