console.log("Sho...")

document.addEventListener("keydown", function(e){
		console.log("Sho 2...")
		try {
				
			    if((e.ctrlKey == true)&&(e.keyCode == 191)){
					kiCopyText("Pin reset");
					//ki = document.querySelector(".transactionSearchPanel > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)").innerText+"\t"+document.querySelector(".transactionSearchPanel > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td tr:nth-child(2)").innerText+"\t"+document.querySelector(".transactionSearchPanel > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)").innerText+"\t"+document.querySelector(".listRowOdd > td:nth-child(2)").innerHTML.replace(" SZL","").replace("-","")
					console.log("Sho...")
			    }
		}
		catch(err) {
		  // if any error, Code throws the error
		}
	});

	document.addEventListener("keydown", function(e){

		try {
				if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
					console.log("Its me");
			        document.querySelector("#search-field").select();
			    }

				

			    if((e.ctrlKey == true)&&(e.keyCode == 66)){
					kiCopyText("Pin reset");
			    	var audio = new Audio(chrome.runtime.getURL('icons/1.mp3'));
			    	audio.play();
			    }
				
				if((e.ctrlKey == true)&&(e.keyCode == 77)){
					console.log("Okay")
					rec = document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(5) > div:nth-child(2) > div.content > div > div > div:nth-child(4) > a > span").innerText
					misal = "Y'ello,\n\nThe details are to be added on the message on WhatsApp about a reversal from a momo agent to a customer.\n\nRef : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(5) > div:nth-child(1) > div.content > div > div > div:nth-child(6) > span").innerText.replace("FRI:","").replace("/MSISDN","")+"\nWho receive : "+rec.substring(0,rec.indexOf(" "))+"\nIntended : \nAmount : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(5) > div:nth-child(1) > div.content > div > div > div:nth-child(12)").innerText+"\nTransaction ID : "+document.querySelector("#menu-title > div.title.open-menu > div > span").innerText.replace("Transaction - ","")+"\nTransaction Timestamp : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(2) > div > div.content > div > div > div:nth-child(6)").innerText+"\nReversal ID : \nWhatsapp Line : 76066519\n\nKR."
					kiCopyText(misal);
			    }

				if((e.ctrlKey == true)&&(e.keyCode == 190)){
					if(!!(document.querySelector("tbody>tr>td"))){
						cp = document.querySelector("span[data-test=link-Account]").innerText.replace("FRI:","").replace("/MM","")+"\t"+document.querySelector("tbody>tr>td").innerText
						kiCopyText(cp);
					}else{
						document.querySelector("a[href=\""+location.pathname.substring(0,location.pathname.length-8)+"changelog"+"\"]").click()
					}
					
				}

			    if((e.ctrlKey == true)&&(e.keyCode == 191)){
					cp = ""
					if(!!(document.querySelector("#app div.item.pin-reset-account-holder"))){
						document.querySelector("#app div.item.pin-reset-account-holder").click();
						cp = "Customer requests."
					}
					debugger
					if(!!(document.querySelector(".revive-account"))){
						debugger
						document.querySelector(".revive-account").click();
						cp = "Main account is active."
					}
					
					kiCopyText(cp);
					if(cp == "Customer requests."){
						setTimeout(function(){
							document.querySelector("textarea#reason").parentElement.parentElement.addEventListener("submit",()=>{
								kiCopyText("Pin reset");
							})
						}, 1000);
					}
			    }

				if((e.ctrlKey == true)&&(e.keyCode == 226)){
					cp = ""
					if(!!(document.querySelector("#app div.item.pin-reset-account-holder"))){
						document.querySelector("#app div.item.pin-reset-account-holder").click();
						cp = "Customer requests."
					}
					debugger
					if(!!(document.querySelector(".revive-account"))){
						debugger
						document.querySelector(".revive-account").click();
						cp = "Customer once requested."
					}
					
					kiCopyText(cp);
					if(cp == "Customer requests."){
						setTimeout(function(){
							document.querySelector("textarea#reason").parentElement.parentElement.addEventListener("submit",()=>{
								kiCopyText("Pin reset");
							})
						}, 1000);
					}
			    }

			   

		}
		catch(err) {
		  // if any error, Code throws the error
		}
	});