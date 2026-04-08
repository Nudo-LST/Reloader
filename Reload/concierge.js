if(document.location.host == '10.169.104.140:6001'){
	document.addEventListener("keydown", function(e){
		debugger;
		if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
			debugger;
			document.querySelector("#searchValue").select();
	    }
	});
}