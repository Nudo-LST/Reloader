document.addEventListener("keydown", function(e){
	try {
		console.log((e.code == "ShiftLeft")&&(e.ctrlKey == true));
		console.log((e));
		if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
			if(!!(document.querySelector("#msisdn"))){
				document.querySelector("#msisdn").click();
				document.querySelector("#msisdn").focus();
			}else if(!!(document.querySelector("#CaptchaInput")) && !!(document.querySelector("#password")) && !!(document.querySelector("#username"))){
				document.querySelector("#username").value = "cc_user2";
				document.querySelector("#password").value = "SibiyelweM@1609#";
				document.querySelector("#CaptchaInput").value = "53RMO";
			}
		}
	}
	catch(err) {
	  // if any error, Code throws the error
	}
});



