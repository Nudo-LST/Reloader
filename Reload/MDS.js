if(document.location.host == '10.254.9.76:8003'){
	console.log("Right url");
	document.addEventListener("keydown", function(e){
		try{
			debugger;
			if((e.altKey == true)&&(e.key == "1")){
		    	document.querySelector("td[id^='ext-gen'] > div > span").click();
		    }else if((e.altKey == true)&&(e.key == "2")){
		    	document.querySelector("td[id^='ext-gen'] > div > span").click();
		    }else if((e.altKey == true)&&(e.key == "3")){
		    	document.querySelector("td[id^='ext-gen'] div > span").click();
		    }
		}catch(err){

		}
	});
}