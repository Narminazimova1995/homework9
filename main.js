"use strict"
let acardionItem= document.getElementsByClassName("accardionItem");
let accardionHeading=document.getElementsByClassName("accardionHeading");
for(let i=0; i < accardionHeading.length; i++){
    accardionHeading[i].addEventListener('click',myfunction,false);
}
function myfunction(){
   let getParent= this.parentNode.className;
   for(let i=0; i<acardionItem.length; i++){
       console.log( acardionItem[i]);
    acardionItem[i].classList = "accardionItem close";
   }
if(getParent=="accardionItem close"){
    this.parentNode.classList="accardionItem open";
}
}