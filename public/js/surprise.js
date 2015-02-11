(function() {

    window.onload = function(){
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

		$("#submitSurvey").click(function(){
            if(validateEmail($("#surveyEmail").val())){
    			blur();
                submitFormPost(); // POSTs form to backend route
            } else {
                alert("Please enter valid Email");
            }
		});

		$('#closeModal').click(function(){
			unblur();
		});

        $('#surveyEmail').keypress(function (e) {
           var key = e.which;
           if(key == 13)  // the enter key code
            {
                if(validateEmail($("#surveyEmail").val())){
                    $('#blurModal').modal('show');
                    blur();
                    submitFormPost();
                } else {
                    alert("Please enter valid Email");
                } 
            }
          });

	}

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
		$('#continue').css("-webkit-filter", "blur(7px)");
        $('#footer').css("-webkit-filter", "blur(7px)");
	}

	function unblur(){
		$('#survey').css("-webkit-filter", "none");
		$('#continue').css("-webkit-filter", "none");
        $('#footer').css("-webkit-filter", "none");
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
            })
            .fail(function() {
                alert('Opps! Something went wrong registering.', 'Please try again.');
            });
    }

})();