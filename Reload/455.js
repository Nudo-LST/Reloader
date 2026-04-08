
let liko = document.createElement("link");
liko.setAttribute("rel","stylesheet");
liko.setAttribute("href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
document.querySelector("head").append(liko);

liko = document.createElement("style");
liko.innerHTML = ".material-symbols-outlined {font-variation-settings:'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24}";
document.querySelector("head").append(liko);

liko = document.createElement("div");
liko.classList.add("liko");
liko.setAttribute("style","width: fit-content;height: fit-content;position: fixed;background: #dadadc;right: 0px;bottom: 50px;padding: 32px;border-radius: 5px 0px 0px 5px;");
document.querySelector("body").append(liko);
liko.innerHTML = '<div><div style="display: flex; gap: 10px;flex-direction: row;"><span class="material-symbols-outlined" style="cursor: pointer;">content_copy</span><label style="flex-flow: 1;">Username:</label><div style="flex-grow: 1;width: 140px;">vikrant</div></div><div style="display: flex;gap: 10px;flex-direction: row;"><span class="material-symbols-outlined" style="cursor: pointer;">content_copy</span><label style="flex-grow: 1;">Password:</label><div style="flex-grow: 1;width: 140px;">mtn@test1</div></div></div>';

liko.querySelectorAll("span")[0].addEventListener("click",()=>{
    kiCopyText("vikrant");
});

liko.querySelectorAll("span")[1].addEventListener("click",()=>{
    kiCopyText("mtn@test1");
});