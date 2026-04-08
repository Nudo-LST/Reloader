document.addEventListener("keydown", function(e){

    try {    

            if((e.ctrlKey == true)&&(e.keyCode == 190)){
                    debugger;
                    
                    cp = document.querySelector(".transactionSearchPanel > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)").innerText+"\t"+document.querySelector(".transactionSearchPanel > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)").innerText.replace("RESELLERID:","")+"\t"+document.querySelector(".transactionSearchPanel > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)").innerText+"\t"+document.querySelector(".listRowOdd > td:nth-child(2)").innerHTML.replace(" SZL","")
                    kiCopyText(cp);
                
            }
    }
    catch(err) {
        // if any error, Code throws the error
    }
});