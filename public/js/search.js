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
		    	showOptions();
		    	return false;	
			}
		});

		$('#typeWriter').click(function(){
			showKeyInput();
		});

		$('#bgk').change(function(){
			var bgkValue = $('#bgk').val();
			$('#bgkValue').html(bgkValue);
		});

		var bgkValue = $('#bgk').val();
		$('#bgkValue').html(bgkValue);

		$('#search').click(function(){
			if(showingOptions){
				// execute search
			} else {
				showOptions();
			}
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

	function showOptions(){
		$("#topSection").css("background", "white");
		$('body').css('color', 'black');
		$('.blueText').css('color', '#3498db');
		$('#changing').css('borderBottom', 'solid black 1px');
		$('#options').slideDown(800);
	}

	function showKeyInput(){
		$("#typeWriter").fadeOut(500, function(){
			$("#input").fadeIn(500);
		});
	}

})();