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

liko = document.createElement("style");
liko.innerHTML = ".material-symbols-outlined {font-variation-settings:'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24}";
document.querySelector("head").append(liko);

document.addEventListener("keydown", async function(e){
    if((e.ctrlKey == true)&&(e.keyCode == 226)){
        kilo = document.createElement("div")
        document.body.appendChild(kilo)
        kilo.innerHTML = '<div><span class="material-symbols-outlined" style="cursor: pointer;">close</span></div>'
        kilo.setAttribute("style","position: fixed;top: 0px;left: 0px;width: 100vw;height: 100vh;z-index: 9999;background: #000000e3;display: flex;justify-content: center;align-items: center;")
        kilo.querySelector("div").setAttribute("style","max-width: 800px;min-width: 200px;width: 500px;background: grey;min-height: 20vh;height: 80vh;border: solid #808080 2px;border-radius: 5px;")
        kilo.querySelector("span").setAttribute("style","cursor: pointer;position: relative;right: -98%;top: -15px;")
        kilo.querySelector("span").addEventListener("click",()=>{
            kilo.remove()
        })
        shasha = '<div style="height: calc(100% - 99px);overflow-y: scroll;">'
        for (const item of genresp) {
          shasha += '<div style="color: white;border: 2px #ffffff solid;padding: 20px;cursor: pointer;border-radius: 3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;height: fit-content; max-height:100px;text-wrap: pretty;">'
          shasha += item
          shasha += '</div>'
        }
      
        shasha += '</div>'
        console.log("pla"+genresp)
        kilo.querySelector("span").parentElement.insertAdjacentHTML('beforeend',shasha)
        console.log(kilo.querySelector("span").parentElement.querySelectorAll("div > div").length)
        console.log("Is the field available",(!!(document.querySelector("#messaging-gadget div[role='textbox']"))))
        // kilo.querySelector("span").parentElement.querySelector(":last-child")
        resp = kilo.querySelector("span").parentElement.querySelector("div").querySelectorAll("div")
        for (const item of resp) {
          item.addEventListener("click",()=>{
            if(!!(document.querySelector("#messaging-gadget div[role='textbox']"))){
              document.querySelector("#messaging-gadget div[role='textbox']").innerHTML = "<p>"+item.innerText+"</p>"
            }else{
              kiCopyText(item.innerText)
            }
            kilo.remove()
          })
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


