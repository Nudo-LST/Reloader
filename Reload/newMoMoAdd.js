ji = document.createElement("div")
document.body.append(ji)
ji.style.position = "fixed"
ji.style.right = "-200px"
ji.style.top = "0px"
ji.style.height = "100vh"
ji.style.width = "200px"
ji.style.background = "aqua"
ji.style.transition = "right 2s"

ji.innerHTML = "<button id=\"pTop_misallo\" class=\"btn primary\">Customer Misallocation</button>"

ji.querySelector("#pTop_misallo").onclick = function(){
    debugger
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