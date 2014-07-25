$(document).ready(function() {
	var sandwichCounter = 0;
    var sodaCounter = 0;
	
    $('#sandwich').click(function() {
		if (sandwichCounter == 0){
			document.getElementById('HeyYou').play();
			sandwichCounter = 1;
		}else if (sandwichCounter == 1){
			document.getElementById('IWantItNow').play();
			sandwichCounter = 2;
		}else if (sandwichCounter == 2){
			document.getElementById('DontMakeMe').play();
			sandwichCounter = 3;
		}else if (sandwichCounter == 3){
			document.getElementById('ShowMe').play();
			sandwichCounter = 0;
		}
	});
    
    $('#soda').click(function() {
        if (sodaCounter == 0){
            document.getElementById('UmmmINeed').play();
            sodaCounter = 1;
        }else if (sodaCounter == 1){
            document.getElementById('IKnowYou').play();
            sodaCounter = 2;
        }else if (sodaCounter == 2){
            document.getElementById('WhyAreYou').play();
            sodaCounter = 0;
        }
    });
});