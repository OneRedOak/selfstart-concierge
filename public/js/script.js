(function() {
	var rhinoTime = 2000;
	window.setTimeout(function(){
			// $('.learnmore').css('display', 'initial');
    		// $('.learnmore').textillate();
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
			$("#changing").typed({
				strings: ["build a website", "learn node.js", "build an iOS app", "learn a new skill"],
				typeSpeed: 60
			});
    	}, 800);

    	$('#rhino').hover(
    		function(){
    			$('#rhino').attr('src','img/rhino-blue.png');
    		}, function(){
    			$('#rhino').attr('src','img/rhino.png');
    		}
		);

    	setTimeout(function(){
    		$('#rhino').css('right','-60');
    		setTimeout(function(){
    			$('#rhino').css('right','-50');
    			setTimeout(function(){
	    			$('#rhino').css('right','-40');
	    			setTimeout(function(){
		    			$('#rhino').css('right','-30');
		    			setTimeout(function(){
			    			$('#rhino').css('right','-20');
			    			setTimeout(function(){
				    			$('#rhino').css('right','-10');
				    			setTimeout(function(){
					    			$('#rhino').css('right','0');
					    		},rhinoTime);
				    		},rhinoTime);
			    		},rhinoTime);
		    		},rhinoTime);
	    		},rhinoTime);
    		},rhinoTime);
    	},rhinoTime);

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

})();