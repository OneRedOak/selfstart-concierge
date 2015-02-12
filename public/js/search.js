(function() {

	var showingOptions = false;

	var ifTyped = false;
	var ifBack = false;
	var ifFormat = false;
	var ifPay = false;

    window.onload = function(){
    	topWriter();

    	$('#coreWant').keypress(function (e) {
			var key = e.which;
			if(key == 13)  // the enter key code
			{
		    	return false;	
			}
		});

		document.getElementById("coreWant").onkeyup=function() {
			if (!ifTyped) {
				ga('send', 'event', 'textInput', 'typed', 'Search', 1);
				ifTyped = true;
			}
		};

		$("#backKnow").click(function(){
			if (!ifBack) {
				ga('send', 'event', 'dropdown', 'click', 'BackKnowDropdownClick', 1);
				ifBack = true;
			}
		});

		$("#format").click(function(){
			if (!ifFormat) {
				ga('send', 'event', 'dropdown', 'click', 'FormatDropdownClick', 1);
				ifFormat = true;
			}
		});

		$("#spend").click(function(){
			if (!ifPay) {
				ga('send', 'event', 'dropdown', 'click', 'SpendDropwdownClick', 1);
				ifPay = true;
			}
		});

		$('#typeWriter').click(function(){
			showKeyInput();
		});

		$('#search').click(function(){
            var bg = $('#selectBackKnow').val();
            var pformat = $('#selectFormat').val();
            var spend = $('#selectSpend').val();
			var textInput = $("#coreWant").val();
			if (textInput.length < 1) {
				$("#error").slideDown(100);
			} else {
				window.location.href = 'surprise.html?search=' + textInput + '&bg=' + bg + '&pformat=' + pformat + '&spend=' + spend;
			}
		});

    };

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
			$("#typeWriter").css("display", "none");
			$("#coreWant").css("display", "inline-block");
			$("#input").fadeIn(800);
		}, 1500);
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