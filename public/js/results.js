(function() {

    window.onload = function(){
    	width = window.innerWidth - window.innerWidth/5;
    	height = window.innerHeight - window.innerHeight/5;
    	$('#introVideo').attr('width', width);
    	$('#introVideo').attr('height', height);
        setTimeout(function(){
            $("#heading").animate({
                height: "150px",
                lineHeight: "150px"
            }, 1500, function(){

            });
            $("#nav").slideDown(1500);
            $("#introVideo").fadeIn(1500);
        },800);
    }

    window.addEventListener('scroll', check);

    function check(){
    	console.log(window.pageYOffset);
    	console.log(window.innerHeight);
    	height = window.innerHeight + window.innerHeight * 0.15;
    	if(window.pageYOffset > height){
    		$('#sidebar').css('position', 'fixed');
    	} else {
    		$('#sidebar').css('position', 'initial');
    	}
    }

})();