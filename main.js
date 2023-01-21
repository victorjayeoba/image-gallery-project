"use strict"
let overlay = document.querySelector(".overlay")
let bigImage = document.getElementsByClassName("big-image");
let preview = document.querySelectorAll("#preview")

let slideIndex = 1;
function  openLightBox(){
overlay.style.display = "block";
}
function closeLightBox(){
overlay.style.display = "none";
}
console.log(bigImage.length)
function changeSlide(n){
  showImage(slideIndex+n)
}


function clickShow(n){
  showImage(n)
}
 function showImage(n){
    for(let i = 0; i<bigImage.length; i++){
      bigImage[i].style.visibility = "hidden"
      bigImage[i].style.opacity = 1;
    }
 slideIndex= n;
 if(n <1){
   slideIndex = bigImage.length
 }
 if(n> bigImage.length){
   slideIndex = 1
 }
    bigImage[slideIndex-1].style.visibility = "visible"
  for(let j = 0; j<preview.length;j++){
    preview[j].className ="";
preview[slideIndex - 1].className= "active";
  }/*
let text = bigImage[slideIndex-1].alt
alt.innerHTML = text*/
}
