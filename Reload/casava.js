if(document.location.host == '10.254.9.244:8086'){
	document.addEventListener("keydown", function(e){
		if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
			if(!!(document.querySelector("#msisdn"))){
				document.querySelector("#msisdn").select();
			}
	    }
	});

	setInterval(addMoMoLoanTransCopy,1000);

	function addMoMoLoanTransCopy(){
		if(!!(document.querySelector("tr"))){
			let ki = document.querySelectorAll("tr");
			let len = ki.length;
			for(let i = 0; i < len;i++){
				ki[i].addEventListener("dblclick",(e)=>{
					//kiCopyText(e.target.innerText);
					navigator.clipboard.writeText(e.target.innerText);
					alert("Hello world");
				});
			}
		}
	}
}