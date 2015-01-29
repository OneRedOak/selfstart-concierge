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
    		$('#overallSection').ScrollTo();
    		
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

})();