var copyPromise = 0;
var kAudio = new Audio(chrome.runtime.getURL("tones/app.mp3"));
log = console.log

function kiCopyText(text) {
  	copyPromise = navigator.clipboard.writeText(text)
      .writeText(copyText.value)
      .then(() => {
        log("successfully copied");
      })
      .catch(() => {
        log("something went wrong");
      });
    log("The promise is ",copyPromise)
}

function restrictAlphabets(e) {
	var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}

function kiloInit(){
	console.log("Initializing");
	document.querySelector("input[type=\'text\'].v-textfield.v-textfield-page_header_search.page_header_search").addEventListener("keypress",(e)=>{
    	restrictAlphabets(e);
    });
}


function getSpecificParentElement(element,tagName,matchCount){
    if(element.tagName == tagName){
        return element;
    }

    while(element.parentElement.tagName != tagName.toUpperCase()){
        element = element.parentElement;
    }
    return element.parentElement;
}

function exportToExcel(){
    var table = document.getElementById("tblStocks");

    /* Declaring array variable */
    var rows =[];

      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
        column4 = row.cells[3].innerText;
        column5 = row.cells[4].innerText;

    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
                column4,
                column5
            ]
        );
    }
}