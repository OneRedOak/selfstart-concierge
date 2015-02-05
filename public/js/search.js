(function() {

	var showingOptions = false;

	window.setTimeout(function(){
		$('.topdescribe').fadeIn(1800, function(){
			setTimeout(function(){
				$('.topdescribe2').fadeIn(1800, function(){
					setTimeout(function(){
	    				$('.learnmore').css('display', 'initial');
					},3500);
				});
			},0);
    	});
    },3000);

    window.onload = function(){
    	topWriter();

    	$('#coreWant').keypress(function (e) {
			var key = e.which;
			if(key == 13)  // the enter key code
			{
		    	return false;	
			}
		});

		$('#typeWriter').click(function(){
			showKeyInput();
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

	function topWriter() {
		setTimeout(function(){
			$("#changing").typed({
				strings: ["build an iOS app", "learn node.js", "learn a new skill",""],
				typeSpeed: 30
			});
			setTimeout(function(){
				showKeyInput();
			}, 9500);
    	}, 800);
	}

	function showKeyInput(){
		$("#typeWriter").fadeOut(500, function(){
			$("#input").fadeIn(500);
			$('#options').slideDown(500);
		});
	}

})();