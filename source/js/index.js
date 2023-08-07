const menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let scrollMaster = document.getElementById('scroll-wrapper');
let scrollSlave = document.getElementsByClassName('scroll-section');
const anchorPos = document.getElementById('anchor').getBoundingClientRect();
let backgroundObject = document.getElementById('bg');
let screenWidth = window.screen.width;

burger.addEventListener('click', function(){

    if (menu.style.height != '150px'){
        menu.style.height = '150px';
    }
    else {
        menu.style.height = '0';
    }
})


document.addEventListener('DOMContentLoaded', function(){
    if (screenWidth > 920){
        backgroundObject.src='./source/images/hero_bgx1.jpg';
    }
    else if ((screenWidth < 920)||(screenWidth > 500)){
        backgroundObject.src='./source/images/hero_bgx2.jpg';
    }
    else if (screenWidth < 500){
        backgroundObject.src='./source/images/hero_bgx3.jpg';
    }
})