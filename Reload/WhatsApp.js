document.addEventListener("keydown", function(e){
	if((e.code == "ShiftLeft")&&(e.ctrlKey == true)){
        if(!!(document.querySelector("#main > header > div > div > div > div > div > span"))){
            cp = document.querySelector("#main > header > div > div > div > div > div > span").innerText.replaceAll(" ","").replaceAll("+","")
            kiCopyText(cp);
        }
    }
})