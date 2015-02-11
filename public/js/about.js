(function() {

    window.onload = function(){

        // ---------------- Handles feedback form -------------------

        $("#feedbackSubmit").click(function(){
            var feedback = $("#feedbackForm").val();
            if(feedback.length < 1){
                alert("Please type in feedback");
            } else {
                // submit feedback into database
            }
        });
	}

})();