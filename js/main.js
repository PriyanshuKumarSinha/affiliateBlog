let menuIcon = document.querySelector('#menuIcon'); //ham icon (bars and cross)
let menuLinks = document.querySelector('.links'); 
let spanList = document.querySelectorAll('span')
let iconList = document.querySelectorAll('i')
let menuList = document.querySelectorAll('.menu')
let paragraphList = document.querySelectorAll('p')
let nav = document.querySelector('nav')
let colour = 'rgb(224, 223, 223)'
let currentTheme = 'light';

//sets shadow for nav2
document.querySelector("body > div.container1 > div > ul").style.boxShadow = "-1px -11px 7px -4px rgb(243, 243, 243)"

window.onresize = changeNavWidth;
changeNavWidth()
function changeNavWidth(){
    if (window.innerWidth <= 650){
        document.querySelector('.logo').style.width = window.innerWidth -((parseInt(window.getComputedStyle(document.querySelector('.logo')).paddingLeft) * 2) + 2)  +'px'
        iconList[iconList.length -1].style.color = 'rgb(248, 248, 248)'

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
        if (currentTheme === 'light'){
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(243, 243, 243)"
        }
        else{
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(27, 26, 40)"
        }

    }
    else{
        //changes logo
        menuIcon.setAttribute('class','fas fa-bars')    
        //hides menu
        menuLinks.style.display = 'none';
        document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = ""

    }
}


function changeTheme(){

    if(currentTheme === 'light'){
        makeBackgroundDark();
        makeHeadingsWhite();
        // makeIconsWhite();
        makeMenuLinksWhite();
        makeNavDark();
        makeParaTextWhite();
        makeShadowDark()
        currentTheme = 'dark'
        if(window.innerWidth <= 650){
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(27, 26, 40)"
            document.querySelector("body > div.container1 > div > ul").style.boxShadow = "-1px -11px 7px -4px rgb(27, 26, 40)"
        }
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#3F3D56');


    }
    else{
        makeBackgroundLight();
        makeHeadingsDefault();
        makeIconsDefault();
        makeMenuLinksDefault();
        makeNavDefault();
        makeParaTextDefault();
        makeShadowLight()
        if(window.innerWidth <= 650){
            document.querySelector("body > div.container1 > div > ul").style.boxShadow = "-1px -11px 7px -4px rgb(243, 243, 243)"
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(243, 243, 243)"
        }
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#716aec');
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
    nav.style.backgroundColor = 'rgb(16, 16, 24)';
}
function makeNavDefault(){
    nav.style.backgroundColor = 'rgb(248, 248, 248)';
}

function makeMenuLinksWhite(){
    menuList[0].style.color = "#716aec"

    for (let i = 1; i < menuList.length; i++) {
        menuList[i].style.color = colour
    }
}

function makeMenuLinksDefault(){
    if(window.innerWidth <= 650){
    menuList[0].style.color = "#716aec"
    
    }
    else{
        menuList[0].style.color = "#3F3D56"
    }
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
        iconList[i].style.color = "#716aec"
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
    nav.style.boxShadow = "-1px 11px 7px -4px rgb(243, 243, 243)"
}
function makeShadowDark(){
    nav.style.boxShadow = "-1px 11px 7px -4px rgb(27, 26, 40)"
}
paddingTopContainer();
