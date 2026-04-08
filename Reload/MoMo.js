

if(document.location.host == 'cc.mtn.co.sz'){


    let kiche = setInterval(()=>{
    	if((document.readyState == "complete") && !!(document.querySelector("input[type=\'text\'].v-textfield.v-textfield-page_header_search.page_header_search"))){
    		
    		clearInterval(kiche);
    		kiloInit();
    	}
    },1);

	setInterval(()=>{
		if(document.hasFocus()){
			setInterval(() => {
				if(!(document.hasFocus())){
					location.reload();
				}
			}, 1000);
		}
		location.reload();
	},420000);

	document.addEventListener("keydown", function(e){
		try {
				if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
					console.log("Its me");
			        document.querySelector("input[type=\'text\'].v-textfield.v-textfield-page_header_search.page_header_search").select();
			        document.querySelector("input[type=\'text\'].v-textfield.v-textfield-page_header_search.page_header_search").addEventListener("keyup",(e)=>{
				    	restrictAlphabets(e);
				    });
			    }

			    if((e.ctrlKey == true)&&(e.keyCode == 66)){
			    	kiCopyText("Pin reset");
			    	var audio = new Audio(chrome.runtime.getURL('icons/1.mp3'));
			    	audio.play();
			    }	

			    if((e.ctrlKey == true)&&(e.keyCode == 191)){
			    	if(document.querySelectorAll("div>div>div>div>div>div>div>div>div>span>span")[28].innerText == 'Pincode Reset'){
			    		document.querySelectorAll("div>div>div>div>div>div>div>div>div>span>span")[28].click();
			    		kiCopyText("Pin reset");
			    	}else if(document.querySelectorAll("div>div>div>div>div>div>div>div>div>span>span")[8]){
			    		document.querySelectorAll("div>div>div>div>div>div>div>div>div>span>span")[8].click()
			    	}
			    }

			    if((e.ctrlKey == true)&&(e.keyCode == 73)){
			    	if(!!(document.querySelector("div[id$='VIEW_ACCOUNTHOLDER_SUMMARY_BUTTON_VIEW'] > span > img[src$='view_ah.png']"))){
				    	document.querySelector("img[src$='view_ah.png']").parentElement.click();
				    }
				   	if(!!(document.querySelectorAll("div>input")[32])){
				   		document.querySelectorAll("div>input")[32].scrollIntoView();	
				   	}
				}	

				if(e.keyCode == 39){
			    	document.querySelector("img[src$='page_next.png']").parentElement.click();
				}

				if(e.keyCode == 37){
			    	document.querySelector("img[src$='page_previous.png']").parentElement.click();
				}	
		}
		catch(err) {
		  // if any error, Code throws the error
		}
	});

	setInterval(addMoMoTransCopy,1000);
}

function addMoMoTransCopy(){
	if(!!(document.querySelectorAll("div[id*='VIEW_ACCOUNT_TRANSACTION'] table:nth-child(2)"))){
		let tr = document.querySelectorAll("div[id*='VIEW_ACCOUNT_TRANSACTION'] table:nth-child(2) > tbody > tr");
		for(let i = 0; i < tr.length; i++){
			if(!!(tr[i].dataset.kiloListener)){
				continue;
			}
			tr[i].addEventListener("dblclick",(e)=>{
				let trE = getSpecificParentElement(e.target,"tr");
				kiCopyText(trE.querySelector("td:nth-child(5) > div").innerText+" from "+trE.querySelector("td:nth-child(9) > div").innerText+" to "+trE.querySelector("td:nth-child(13) > div").innerText+" amount "+trE.querySelector("td:nth-child(18) > div").innerText);
			});
			tr[i].setAttribute("data-kilo-listener","true");
		}
	}

	if(!!(document.querySelector("div[id*='VIEW_ACCOUNT_LIST_TABLE']"))){
		let ad = document.querySelector("div[id*='VIEW_ACCOUNT_LIST_TABLE']");
		if(!!(ad.dataset.kiloListener)){
			return;
		}
		ad.addEventListener("dblclick",(e)=>{
			kiCopyText(e.target.innerText);
		});
		ad.setAttribute("data-kilo-listener","true");
	}

}