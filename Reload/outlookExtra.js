let lo;
let lolen;
let num;
let findEle

function findElement() {
    findEle = setInterval(() => {
        lo = document.querySelectorAll("div[draggable]>div>span:nth-of-type(1)")
        lolen = lo.length;
        for(let i = 0; i < lolen; i++){
            if(!!(lo[i].innerText == "My Attention")){
                num = lo[i];
                break;
            }
        }
    }, 1000);
}

setInterval(() => {
    findElement();
    if(!!(typeof num == "object") && !!(num.innerText == "My Attention")){
        clearInterval(findEle);
        setCount(parseInt(num.parentElement.lastChild.innerText));
    }else{
        findElement();
    }
}, 1000);

function setCount(countV){
    if(!(parseInt(countV).toString() == "NaN")){
        outData = {"type":"outlook-Notification","outData":countV};
        chrome.storage.local.set({outlookData: outData});
    }
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
	'use strict';
	for (let [data, { oldValue, newValue }] of Object.entries(changes)) {
    	if(newValue.type == "outlook-Notification"){
    		extractingData(newValue.Element,newValue.link);
		}

        chrome.notifications.create({
            type: 'basic',
            iconUrl: "https://pics.freeicons.io/uploads/icons/png/13628192611684490204-512.png",
            title: "ktitle",
            message: "You have "+newValue.outData+" new email(s)"
        });
	}
});