let menuIcon = document.querySelector('#menuIcon'); //ham icon (bars and cross)
let menuLinks = document.querySelector('.links'); 
let spanList = document.querySelectorAll('span')
let iconList = document.querySelectorAll('i')
let menuList = document.querySelectorAll('.menu')
let paragraphList = document.querySelectorAll('p')
let nav = document.querySelector('nav')
let colour = 'rgb(224, 223, 223)'
let currentTheme = 'light';

window.onresize = changeNavWidth;
changeNavWidth()
function changeNavWidth(){
    if (window.innerWidth <= 650){
        document.querySelector('.logo').style.width = window.innerWidth -((parseInt(window.getComputedStyle(document.querySelector('.logo')).paddingLeft) * 2) + 2)  +'px'
    }
    else{
    nav.style.width = window.innerWidth -((parseInt(window.getComputedStyle(nav).paddingLeft) * 2) + 2)  +'px'
}}

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
        makeNavDark();
        makeParaTextWhite();
        makeShadowDark()
        currentTheme = 'dark'
    }
    else{
        makeBackgroundLight();
        makeHeadingsDefault();
        makeIconsDefault();
        makeMenuLinksDefault();
        makeNavDefault();
        makeParaTextDefault();
        makeShadowLight()

        currentTheme = 'light'
    }
}
function makeParaTextWhite(){
    for (let i = 0; i < paragraphList.length; i++) {
        paragraphList[i].style.color = colour
    }
}
function makeParaTextDefault(){
    for (let i = 0; i < paragraphList.length; i++) {
        paragraphList[i].style.color = "#2F2E41"
    }
}
 
function makeNavDark(){
    nav.style.backgroundColor = 'rgb(29, 28, 42)';
}
function makeNavDefault(){
    nav.style.backgroundColor = 'rgb(248, 248, 248)';
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
    document.querySelector('body').style.backgroundColor = "rgb(28, 27, 41)"
}

function makeBackgroundLight(){
    document.querySelector('body').style.backgroundColor = "rgb(248, 248, 248)"
}

function paddingTopContainer(){
    document.querySelector(".container").style.paddingTop = nav.offsetHeight+20 + 'px'
}
function makeShadowLight(){
    nav.style.boxShadow = "-1px 11px 7px -4px rgb(222, 222, 222)"
}
function makeShadowDark(){
    nav.style.boxShadow = "-1px 11px 7px -4px rgb(26, 25, 39)"
}
paddingTopContainer();
