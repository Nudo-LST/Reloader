
let default_Storage = {
	"MoMo":{
		"MoMoAgent":{
			"Number": null,
			"Name": null
		},
		"Customer": {
			"Number": null,
			"Name": null,
			"ID": null,
			"balance": null
		},
		"Transaction":{
			"ID": null,
			"sender": null,
			"ref": null,
			"Timestamp": null,
			"amount": null
		},
		"loan":{
			"loan-date": null,
			"loan-amount": null,
		}
	}
}

function set_storage(data){
    debugger
    chrome.storage.sync.set({ "reload": data }).then(() => {
        console.log("Value is set");
        console.log(data);
    });
}

// set_storage({})
chrome.storage.sync.get("reload", (data) => {
	// con
  if (data.MoMo == null) {
    set_storage(default_Storage)
  }
});


// chrome.storage.sync.set({ "reload": default_Storage }).then(() => {
//   console.log("Value is set");
// });

function get_storage(){
    // let data = null
    chrome.storage.sync.get(["reload"]).then((result) => {
        return result.reload;
    });
    result = chrome.storage.sync.get(["reload"]).then((result) => {
        console.log("Value is ")
        console.log(result)
        return result;
    });
	console.log("Pla")
	console.log(result)
    return result
}

