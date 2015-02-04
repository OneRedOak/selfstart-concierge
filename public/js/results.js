(function() {

    window.onload = function(){
    	width = window.innerWidth - window.innerWidth/5;
    	height = window.innerHeight - window.innerHeight/5;
    	$('#introVideo').attr('width', width);
    	$('#introVideo').attr('height', height);
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