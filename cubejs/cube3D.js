﻿
let block = document.querySelector(".block");

let side = document.querySelectorAll("side");

document.onmousemove = function(event) {
    
    console.log(event);
    
    rotateX = event.pageX;
     rotateY = event.pageY;
    
    block.style.transform = "rotateY(" + rotateX + "deg)" + "rotateX(" + -rotateY + "deg)";
    
    
    
    
    console.log(rotateX );
    
    
    
}