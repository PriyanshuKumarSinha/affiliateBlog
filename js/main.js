console.log(window.innerWidth)
let menuIcon = document.querySelector('#menuIcon'); //ham icon (bars and cross)
let menuLinks = document.querySelector('.links'); 
let spanList = document.querySelectorAll('span')
let iconList = document.querySelectorAll('i')
let menuList = document.querySelectorAll('.menu')
let colour = 'rgb(224, 223, 223)'
let currentTheme = 'light';


function ham(cls){
    changeMenuSymbol(cls);
}

function changeMenuSymbol(cls){
    if (cls === 'fas fa-bars') {
        //changes logo
        menuIcon.setAttribute('class','fas fa-times');
        // make menu visible
        menuLinks.style.display = 'block';

    }
    else{
        //changes logo
        menuIcon.setAttribute('class','fas fa-bars')    
        //hides menu
        menuLinks.style.display = 'none';
    }
}


function changeTheme(){

    if(currentTheme === 'light'){
        makeBackgroundDark();
        makeHeadingsWhite();
        makeIconsWhite();
        makeMenuLinksWhite();
        currentTheme = 'dark'
    }
    else{
        makeBackgroundLight();
        makeHeadingsDefault();
        makeIconsDefault();
        makeMenuLinksDefault();
        currentTheme = 'light'
    }
}

function makeMenuLinksWhite(){
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].style.color = colour
    }
}

function makeMenuLinksDefault(){
    menuList[0].style.color = "#3F3D56"

    for (let i = 1; i < menuList.length; i++) {
        menuList[i].style.color = "#716aec"
    }
}

function makeIconsWhite(){
    for (let i = 0; i < iconList.length; i++) {
        iconList[i].style.color = colour
    }
}

function makeIconsDefault(){
    for (let i = 0; i < iconList.length; i++) {
        iconList[i].style.color = "#2F2E41"
    }
}

function makeHeadingsDefault(){
    for (let i = 0; i < spanList.length; i++) {
        spanList[i].style.color = "#3F3D56"
    }
}

function makeHeadingsWhite(){
    for (let i = 0; i < spanList.length; i++) {
        spanList[i].style.color = colour
    }
}

function makeBackgroundDark(){
    document.querySelector('body').style.backgroundColor = "rgb(29, 28, 42)"
}

function makeBackgroundLight(){
    document.querySelector('body').style.backgroundColor = "rgb(248, 248, 248)"
}

function paddingTopContainer(){
    document.querySelector(".container").style.paddingTop = document.querySelector('nav').offsetHeight + 'px'
}

paddingTopContainer();
