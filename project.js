let addbtn=document.querySelector("#btn")
let save=document.querySelector("#savebtn")
let todobtn=document.querySelector("#todo")
let popup=document.querySelector("#pop")

todobtn.addEventListener("click",() =>{
    popup.classList.remove("d-none");
});

save.addEventListener("click",()=>{
    popup.classList.add("d-none");
});