	document.querySelector("#div_all").style.margin = "0";
	console.log(chrome.runtime.getURL("fuck.js"))
	document.addEventListener("keydown", function(e){
		try{
			if((e.key == "Shift")&&(e.ctrlKey == true)){
				if(document.querySelector("#ContractSearchValue")){
					document.querySelector("#ContractSearchValue").select();
				}
		    }

		    if((e.ctrlKey == true)&&(e.keyCode == 66)){
		    	kiCopyText("Pinreset");
		    	var audio = new Audio(chrome.runtime.getURL('icons/1.mp3'));
		    	audio.play();
		    }
		    
		    if((e.altKey == true)&&(e.key == "1")){
		    	document.querySelector("#ContractNode_sl > td:nth-child(2) > table:nth-child(1) > tbody > tr > td.vtLeafCell > a").click();
		    }else if((e.altKey == true)&&(e.key == "2")){
		    	document.querySelector("#ContractNode_sl > td:nth-child(2) > table:nth-child(2) > tbody > tr > td.vtLeafCell > a").click();
		    }else if((e.altKey == true)&&(e.key == "3")){
		    	document.querySelector("#ContractNode_sl > td:nth-child(2) > table:nth-child(3) > tbody > tr > td.vtLeafCell > a").click();
		    }else if((e.altKey == true)&&(e.key == "4")){
		    	document.querySelector("#ContractNode_sl > td:nth-child(2) > table:nth-child(6) > tbody > tr > td.vtLeafCell > a").click();
		    }

		    if((e.keyCode == 39)){
		    	document.querySelector("img[src$='table_next_row.png']").parentElement.click();
			}

			if((e.keyCode == 37)){
		    	document.querySelector("img[src$='table_previous_row.png']").parentElement.click();
			}
		}catch(err){

		}
	});