console.log(chrome.runtime.getURL("image/404.gif"));
let delayT = 0;
setInterval(kilo,600000);

function kilo(){
	if(window.location.host == "10.169.33.14:5443"){
		if(document.querySelector("body > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(5) > td > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td:nth-child(3) > input")){
			document.querySelector("body > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(5) > td > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td:nth-child(3) > input").click();
		}
	}

	if(delayT == 0){
		delayT++;
	}else{
		if((document.location.host != 'outlook.office.com')||(document.location.host != '10.169.104.140:6001')){
			console.log(document.hidden);
			if(document.hidden){
				if(window.location.host == "52.22.41.84"){
					if(document.querySelector("#ctl00_Menu1n1 > table > tbody > tr > td > a")){
						document.querySelector("#ctl00_Menu1n1 > table > tbody > tr > td > a").click();
					}

					if(document.querySelector("#txtUserName")){
						document.querySelector("#txtUserName").value = "mtnswaziland";
						document.querySelector("#txtPassword").value = "mtnswaziland123";
						document.querySelector("#btnLogin").click();
					}
				}else if(window.location.host == '10.169.78.84:8080'){
				/*Reload for 455*/
					if(document.querySelector("#showUnsubMsisdnSearch")){
						document.querySelector("#showUnsubMsisdnSearch").click();
					}

				}else{
					location.reload();
				}


			}
		}
	}
}