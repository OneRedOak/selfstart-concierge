(function() {

	var showingOptions = false;

	// window.setTimeout(function(){
	// 	$('.topdescribe').fadeIn(1800, function(){
	// 		setTimeout(function(){
	// 			$('.topdescribe2').fadeIn(1800, function(){
	// 				setTimeout(function(){
	//     				$('.learnmore').css('display', 'initial');
	// 				},3500);
	// 			});
	// 		},0);
 //    	});
 //    },3000);

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

		$("#change").click(function(){
			$("#options").animate({
				width: "70%"
			}, 1000, function(){});
			$("#format").fadeIn(1000);
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
				strings: ["build an iOS app"],
				typeSpeed: 30
			});
			setTimeout(function(){
				$("#speaker").typed2({
					strings: [" specific to you"],
					typeSpeed: 30
				});
				setTimeout(function(){
					$("#suchAs").typed2({
						strings: [" such as"],
						typeSpeed: 30
					});
					setTimeout(function(){
						uncoverOptions();
					}, 1000);
				}, 1800);
			}, 2500);
			// setTimeout(function(){
			// 	showKeyInput();
			// }, 8700);
    	}, 1500);
	}

	function uncoverOptions(){
		$("#options").slideDown(1000);
		setTimeout(function(){
			$(".col3").css('float', 'left');
			$(".col3").animate({
				width: "49%"
			}, 1000, function(){});
			$("#options").animate({
				width: "35%"
			}, 1000, function(){
				$("#format").fadeIn(1000);
				// $("#format").css('display', 'initial');
			});
			$("#backKnow").addClass("marginRight");
			setTimeout(function(){
				$(".col3").animate({
					width: "32%"
				}, 1000, function(){});
				$("#options").animate({
					width: "50%"
				}, 1000, function(){
					$("#spend").css('display', 'initial');
				});
				$("#format").addClass("marginRight");
				$("#typeWriter").css("border-bottom-left-radius", "0px");
				$("#typeWriter").css("border-bottom-right-radius", "0px");
				$("#options").css("border-top-left-radius", "0px");
				$("#options").css("border-top-right-radius", "0px");
				$("#options").css("border-left", "lightgray 2px solid");
				$("#options").css("border-right", "lightgray 2px solid");
				$("#options").css("border-bottom", "lightgray 2px solid");
				setTimeout(function(){
					$("#typeWriter").css("display", "none");
					$("#coreWant").css("display", "initial");
					$("#input").fadeIn(800);
				}, 1500);
			}, 2500);
		}, 2500);
	}

	function showKeyInput(){
		$("#typeWriter").css('display', 'none');
		$("#input").css('display', 'initial');
		$('#options').slideDown(500);
		// $("#typeWriter").fadeOut(500, function(){
		// 	$("#input").fadeIn(500);
		// 	$('#options').slideDown(500);
		// });
	}

})();