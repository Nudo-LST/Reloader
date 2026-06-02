account_link = ""
if(document.title == 'Request Rejected'){
    open(window.history.state.back,"_self");
}

// chrome.storage.sync.get(["reload"]).then((result) => {
//   console.log("Value is " + result.reload["User"]);
// });

ji = document.createElement("div")
document.body.append(ji)
ji.style.position = "fixed"
ji.style.right = "-200px"
ji.style.top = "0px"
ji.style.height = "100vh"
ji.style.width = "200px"
ji.style.background = "aqua"
transition : "right 5s"

ji.innerHTML = "<button id=\"pTop_misallo\" class=\"btn primary\">Customer Misallocation</button>"

ji.querySelector("#pTop_misallo").onclick = function(){
	transaction_id = document.querySelector("#menu-title span[data-test=\link-Transaction]").innerHTML.replace("Transaction - ","")

sender_number = document.querySelectorAll(".root")[1].querySelector("div.key-value-grid.col-2 > div:nth-child(6)").innerText.replace("FRI:","").replace("/MSISDN","")

receiver_number = document.querySelectorAll(".root")[2].querySelector("div.key-value-grid.col-2 > div:nth-child(6)").innerText.replace("FRI:","").replace("/MSISDN","")

amount = document.querySelectorAll(".root")[1].querySelector("div.key-value-grid.col-2 > div:nth-child(12)").innerText

timestamp = document.querySelectorAll(".root")[0].querySelector("div.key-value-grid.col-4 > div:nth-child(6)").innerText


kil = "Y'ello,\n\nMoMo Misallocation Issue\n\nPlease kindly assist, There is a customer who sent money on MoMo and she is requesting that we reverse the funds back to her.\n\nSender : "+sender_number+"\nReceiver : "+receiver_number +"\nIntended : \nAmount : "+amount+"\nTransaction ID : "+transaction_id+"\nTransaction Timestamp : "+timestamp+"\nReversal ID : \n\nRegards."
	kiCopyText(kil)
}

document.addEventListener("keydown", function(e){
	if((e.shiftKey == true)&&(e.keyCode == 37)){
		ji.style.right = "0px";
	}else if((e.shiftKey == true)&&(e.keyCode == 39)){
		ji.style.right = "-200px";
	}
})

setInterval(()=>{
	if(!!(document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(2) > div > div.content > div > div.scrollpane > table"))){
	document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(2) > div > div.content > div > div.scrollpane > table").addEventListener("mouseover", function(e){
		if(!!(document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1) > div > div.content > div"))){
			main_acc = document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1) > div > div.content > div").innerText.includes("dormant")

			default_acc = document.querySelectorAll("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(2) > div > div.content > div > div.scrollpane > table > tbody > tr")

			for(let i = 0; i < default_acc.length; i++){
				if((default_acc[i].querySelector("td").innerText == "Yes")){
					default_acc = default_acc[i];("td").innerText
					break
				}
			}

			if(main_acc | default_acc.innerText.includes("Dormant")){
				default_acc.parentElement.parentElement.style.background = "#6c0000"
			}
		}
	});
}
},1000)

let currentLocation = location.href
let kiche = setInterval(()=>{
    	if((document.readyState == "complete") && !!(document.querySelector("input[type=\'text\'].v-textfield.v-textfield-page_header_search.page_header_search"))){
    		
    		clearInterval(kiche);
    		kiloInit();
    	}
    },1);



	document.body.addEventListener("click", function(e){
		if(!!(document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1) > div > div.content > div").innerText.includes("dormant"))){
			main_acc = document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1) > div > div.content > div").innerText.includes("dormant")

			default_acc = document.querySelectorAll("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(2) > div > div.content > div > div.scrollpane > table > tbody > tr")

			for(let i = 0; i < default_acc.length; i++){
				if((default_acc[i].querySelector("td").innerText == "Yes")){
					default_acc = default_acc[i];("td").innerText
					break
				}
			}

			if(main_acc | default_acc.innerText.includes("Dormant")){
				default_acc.parentElement.parentElement.style.background = "#6c0000"
			}
		}
	});

	document.addEventListener("keydown", function(e){

		try {
				if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
					console.log("Its me");
			        document.querySelector("#search-field").select();
			    }

				if((e.altKey == true)&&(e.key == "p")){

					misal = "Sender : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(5) > div:nth-child(1) > div.content > div > div > div:nth-child(6) > span").innerText.replace("FRI:","").replace("/MSISDN","")+"\nTransaction ID : "+document.querySelector("#menu-title > div.title.open-menu > div > span").innerText.replace("Transaction - ","")+"\nTransaction Reference : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(5) > div:nth-child(2) > div.content > div > div > div:nth-child(42)").innerText+"\nTransaction Timestamp : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(2) > div > div.content > div > div > div:nth-child(6)").innerText+"\nAmount : "+document.querySelector("#app > div > main > div > div > div.appcontent > section > div:nth-child(5) > div:nth-child(1) > div.content > div > div > div:nth-child(12)").innerText
					kiCopyText(misal);
					
				}

				

				if((e.altKey == true)&&(e.key == "s")){
					get_storage()
				}
				
				if((e.altKey == true)&&(e.key == "i")){
					if(!!(document.querySelector("#app form > section.identification div[data-test=\"id-number\"]"))){
						misal = document.querySelector("#app form > section.identification div[data-test=\"id-number\"]").innerText
						kiCopyText(misal);
					}

					if(!!(document.querySelector("div.full-name").nextSibling)){
						misal = document.querySelector("div.full-name").nextSibling.innerText
						kiCopyText(misal);
					}
					
					
				}

				if((e.altKey == true)&&(e.key == "c")){
					if(!!(document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1)"))){
						if(!!(document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1)").innerText.includes("Profile\nMTNSZ Merchant MM Agent Limit Profile"))){
							chrome.storage.sync.get(["reload"]).then((result) => {
								console.log("The returned data :")
								console.log(result)
								result = result['reload']
								result['MoMo']['MoMoAgent']['Name'] = document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1) div.full-name").nextElementSibling.innerText
								result.MoMo.MoMoAgent.Number = document.querySelector("#app > div > main > div > div > div.appcontent > div:nth-child(3) > div:nth-child(1) div.msisdn").nextElementSibling.innerText
								set_storage(result)						
							});
							
						}
					}
				}

				if((e.altKey == true)&&(e.key == "n")){
					if(!!(document.querySelector("div.msisdn "))){
						misal = document.querySelector("div.msisdn ").nextSibling.innerText
						kiCopyText(misal);
					}
					
					if(!!(document.querySelector("#app > div > main > div > div > div.appcontent > div.config-validation-component.tile.full-height > div > div.content > div.content > div > ul > li:nth-child(1) > div.root.content > div > div:nth-child(4) > div > div:nth-child(1)"))){
						misal = "Old Customer Name : "+document.querySelector("#app > div > main > div > div > div.appcontent > div.config-validation-component.tile.full-height > div > div.content > div.content > div > ul > li:nth-child(3) > form > div.root > div > div:nth-child(6)").innerText+" "+document.querySelector("#app > div > main > div > div > div.appcontent > div.config-validation-component.tile.full-height > div > div.content > div.content > div > ul > li:nth-child(3) > form > div.root > div > div:nth-child(8)").innerText+"\nCustomer's ID : "+document.querySelector("#app form > section.identification div[data-test=\"id-number\"]").innerText
						kiCopyText(misal);
					}
				}

				document.querySelector("#app form > section.identification")
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
						console.log("Account is 2 "+account_link)
						cp = document.querySelector("span[data-test=link-Account]").innerText.replace("FRI:","").replace("/MM","")+"\t"+document.querySelector("tbody>tr>td").innerText+"\t"+account_link+"\t"+document.location.href
						kiCopyText(cp);
					}else{
						account_link = document.querySelector("div.account-holder").nextElementSibling.querySelector("a").href
						document.querySelector("a[href=\""+location.pathname.substring(0,location.pathname.length-8)+"changelog"+"\"]").click()
						console.log("Account is "+account_link)
					}
					
				}

			    if((e.ctrlKey == true)&&(e.keyCode == 191)){
					cp = ""
					if(!!(document.querySelector("#app div.item.pin-reset-account-holder"))){
						let rson = [
							"Someone else blocked the account",
							"The customer used the old pin, instead of the new one",
							"Can't remember the old pin",
							"There are two MoMo numbers on the same phone, so the customer used the pin for the other account"
						]
						document.querySelector("#app div.item.pin-reset-account-holder").click();
						cp = rson[Math.floor(Math.random() * rson.length)]
						if((e.key == "q")){
							cp = rson[0]
						}
					}else if(!!(document.querySelector(".revive-account"))){
						document.querySelector(".revive-account").click();
						cp = "Main account is active."
					}else if(!!(document.querySelector("#app div.item.review-approval"))){
						if (document.querySelector("#app div.item.review-approval").classList.contains("is-disabled")){
							document.querySelector("#app div.item.review-approval").previousElementSibling.previousElementSibling.click()
							cp = "Misallocation reversal requested through WA 76066519 using "
						}else{
							document.querySelector("#app div.item.review-approval").click()
						}
						
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
						let rson = [
							"Someone else blocked the account",
							"The customer used the old pin, instead of the new one",
							"There are two MoMo numbers on the same phone, so the customer used the pin for the other account"
						]
						cp = rson[Math.floor(Math.random() * rson.length)]
					}
					
					if(!!(document.querySelector(".revive-account"))){
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

			    if((e.ctrlKey == true)&&(e.keyCode == 73)){
			    	if(!!(document.querySelector("#app form > section.identification") == null)){
				    	document.querySelector("#app div.item.edit-account-holder").click();
				    }else{
						document.querySelector("#app form > section.identification").scrollIntoView();	
				   	}
				}
				
				if((e.ctrlKey == true)&&(e.keyCode == 37)){
			    	liko.style.display = "block";
				}

				if((e.ctrlKey == true)&&(e.keyCode == 39)){
			    	liko.style.display = "none";
				}

				if((e.ctrlKey == true)&&(e.keyCode == 89)){
					document.querySelector("#password").value = "DDSThwala674@mtn";
					document.querySelector("#username").value = "lindokuhlet";
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

let pla = document.createElement("style");
pla.innerHTML = ".material-symbols-outlined {font-variation-settings:'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24}";
document.querySelector("head").append(pla);

pla = document.createElement("div");
pla.classList.add("pla");
pla.setAttribute("style","color: #e4f2cd;background: #0c0c0c;border: red 2px solid;border-width: 2px 0px 2px 2px;display: none;width: fit-content;height: fit-content;position: fixed;right: 0px;bottom: 50px;padding: 32px;border-radius: 5px 0px 0px 5px;transition: width 5s;");
document.querySelector("body").append(pla);
pla.innerHTML = '<div><div style="display: flex; gap: 10px;flex-direction: row;"><span class="material-symbols-outlined" style="cursor: pointer;">content_copy</span><label style="flex-flow: 1;">Username:</label></div><div style="display: flex;gap: 10px;flex-direction: row;"><span class="material-symbols-outlined" style="cursor: pointer;">content_copy</span><label style="flex-grow: 1;">Password:</label></div></div>';

pla.querySelectorAll("span")[0].addEventListener("click",()=>{
    kiCopyText("lindokuhlet");
});

pla.querySelectorAll("span")[1].addEventListener("click",()=>{
    kiCopyText("yJ5ULOx1tGsb$QNQ");
});

let interVal = setTimeout(() => {
	location.reload()
}, 270000);

setInterval(()=>{
	if(currentLocation != location.href){
		clearInterval(interVal)
		currentLocation = location.href
		interVal = setTimeout(() => {
			location.reload()
		}, 270000);
	}

},2000)


let liko = document.createElement("link");
liko.setAttribute("rel","stylesheet");
liko.setAttribute("href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=close");
document.querySelector("head").append(liko);

liko = document.createElement("style");
liko.innerHTML = ".material-symbols-outlined {font-variation-settings:'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24}";
document.querySelector("head").append(liko);

liko = document.createElement("link");
liko.setAttribute("rel","stylesheet");
liko.setAttribute("href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=close");
document.querySelector("head").append(liko);

let nazo_k = `@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOejdd8YyUxDqr8d395kxTQ&skey=b8dc2088854b122f&v=v343) format('woff2');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}`

liko = document.createElement("style");
liko.innerHTML = ".material-symbols-outlined {font-variation-settings:'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24}";
document.querySelector("head").append(liko);
document.querySelector("head").append(document.createElement("style").innerHTML = nazo_k);

document.addEventListener("keydown", async function(e){
    document.body.querySelectorAll("*")[0].click()
    if((e.ctrlKey == true)&&(e.keyCode == 226)){
        kilo = document.createElement("div")
        document.body.appendChild(kilo)
        kilo.innerHTML = '<div><span class="material-symbols-outlined" style="cursor: pointer;color: white;">close</span></div>'
        kilo.setAttribute("style","position: fixed;top: 0px;left: 0px;width: 100vw;height: 100vh;z-index: 9999;background: #000000e3;display: flex;justify-content: center;align-items: center;")
        kilo.querySelector("div").setAttribute("style","max-width: 800px;min-width: 200px;width: 500px;background: grey;min-height: 20vh;height: 80vh;border: solid #808080 2px;border-radius: 5px;")
        kilo.querySelector("span").setAttribute("style","cursor: pointer;color: white;position: relative;right: -98%;top: -15px;")
        kilo.querySelector("span").addEventListener("click",()=>{
            kilo.remove()
        })
        shasha = '<div style="height: calc(100% - 99px);overflow-y: scroll;">'
        for (const item of momo_pin_res) {
          shasha += '<div style="color: white;border: 2px #ffffff solid;padding: 20px;cursor: pointer;border-radius: 3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;height: 100px; max-height:fit-content;text-wrap: pretty;">'
          shasha += item
          shasha += '</div>'
        }
      
        shasha += '</div>'
        console.log("pla"+momo_pin_res)
        kilo.querySelector("span").parentElement.insertAdjacentHTML('beforeend',shasha)
        console.log(kilo.querySelector("span").parentElement.querySelectorAll("div > div").length)
        console.log("Is the field available",(!!(document.querySelector("#messaging-gadget div[role='textbox']"))))
        // kilo.querySelector("span").parentElement.querySelector(":last-child")
        resp = kilo.querySelector("span").parentElement.querySelector("div").querySelectorAll("div")
        for (const item of resp) {
          item.addEventListener("click",()=>{
            if((!!(document.querySelector("#app div.item.pin-reset-account-holder"))) && (!!(document.querySelector("#reason")))){
              document.querySelector("#reason").value = item.innerText
            }else{
              kiCopyText(item.innerText)
            }
            kilo.remove()
          });

          item.addEventListener('mouseleave',()=>{
              item.style.height = '100px';
              item.style.removeProperty("background-color")
          });

          item.addEventListener('mouseenter',()=>{
              item.style.height = 'fit-content';
              item.style.backgroundColor = '#4d4d4d'
          });
        }
        kilo_search = document.createElement('div')
        kilo_search.setAttribute("style","display: flex;align-items: center;margin: 20px 0px;top: 0px;align-content: center;justify-content: space-between;flex-direction: column;")
        kilo_search.innerHTML = '<div contenteditable="true" style="width: 80%;color: #fff;overflow: hidden;height: 32px;background: #a2a2a3;padding: 5px;border: solid 2px #656565;border-radius: 7px;"></div>'
        let kspan = kilo.querySelector("span")
        kspan.parentElement.insertBefore(kilo_search, kspan.nextElementSibling);

        kilo_search = kilo_search.querySelector("div")
        kilo_search.setAttribute("tabindex","0")
        kilo_search.addEventListener('input', (event) => {
          search_str = kilo_search.innerText
          search_str = search_str.trim()
          const regex = new RegExp(search_str,"i")
          for (const item of resp) {
            item_text = item.innerText
            if(!(regex.test(item_text))){
              item.style.display = "None"
            }else{
              if(item.style.display){
                item.style.removeProperty("display")
              }
            }
          }
        });
    }
});


