let menuIcon = document.querySelector('#menuIcon'); //ham icon (bars and cross)
let menuLinks = document.querySelector('.links'); 
let spanList = document.querySelectorAll('span')
let iconList = document.querySelectorAll('i')
let menuList = document.querySelectorAll('.menu')
let paragraphList = document.querySelectorAll('p')
let nav = document.querySelector('nav')
let colour = 'rgb(224, 223, 223)'
let currentTheme = 'light';
var d = new Date();
let sliderDivList = document.querySelectorAll('.headerSlider');


// check time
var time = d.getHours();


// set default theme
if(time<4 || time> 21){
    changeTheme();
}


window.onresize = changeNavWidth;
changeNavWidth()
function changeNavWidth(){
    if (window.innerWidth <= 650){
        document.querySelector('.logo').style.width = window.innerWidth -((parseInt(window.getComputedStyle(document.querySelector('.logo')).paddingLeft) * 2) + 2)  +'px'

    }
    else{
    nav.style.width = window.innerWidth -((parseInt(window.getComputedStyle(nav).paddingLeft) * 2) + 2)  +'px'
}}

document.addEventListener('keydown',(event) => {
    var name = event.key;
    var code = event.code;
    if (name === 'Control') {
      // Do nothing.
      return;
    }
    if (event.ctrlKey & (name ==='q' || name ==='Q')) {
      changeTheme(currentTheme);
    } 
  }, false);


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
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(238, 238, 238)"
        }
        else{
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(13, 13, 21)"
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
        makeMenuLinksWhite();
        makeNavDark();
        makeParaTextWhite();
        makeShadowDark()
        currentTheme = 'dark'
        if(window.innerWidth <= 650){
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(26, 25, 39)"
            document.querySelector("body > div.container1 > div > ul").style.boxShadow = "-1px -11px 7px -4px rgb(26, 25, 39)"
            for (let i = 0; i < sliderDivList.length; i++) {
             sliderDivList[i].style.boxShadow = '10px 10px 10px 0px rgb(26, 25, 39), -10px -10px 12px 0px  rgb(26, 25, 39), -10px 10px 10px 0px  rgb(26, 25, 39), 10px -10px 12px 0px  rgb(26, 25, 39)'              
            }
        }
        else{
            makeIconsWhite();
            for (let i = 0; i < sliderDivList.length; i++) {
            sliderDivList[i].style.boxShadow = '10px 10px 10px 0px rgb(27, 26, 41), -10px -10px 12px 0px  rgb(27, 26, 41), -10px 10px 10px 0px  rgb(27, 26, 41), 10px -10px 12px 0px  rgb(27, 26, 41) '                             
            }
        }
    }
    else{
        makeBackgroundLight();
        makeIconsDefault();
        makeMenuLinksDefault();
        makeNavDefault();
        makeParaTextDefault();
        makeShadowLight()
        makeNav2Default();
        for (let i = 0; i < sliderDivList.length; i++) {
            sliderDivList[i].style.boxShadow = '10px 10px 10px 0px  rgb(245, 245, 245), -10px -10px 12px 0px  rgb(245, 245, 245), -10px 10px 10px 0px  rgb(245, 245, 245), 10px -10px 12px 0px  rgb(245, 245, 245) '    
        }

        if(window.innerWidth <= 650){
            document.querySelector("body > div.container1 > div > ul").style.boxShadow = "-1px -11px 7px -4px rgb(238, 238, 238)"
            document.querySelector("body > div.container1 > nav > div.logo").style.boxShadow = "-1px 11px 7px -4px rgb(238, 238, 238)"
            sliderDivList[0].style.boxShadow = '10px 10px 10px 0px  rgb(238, 238, 238), -10px -10px 12px 0px  rgb(243, 243 243), -10px 10px 10px 0px  rgb(243, 243 243), 10px -10px 12px 0px  rgb(243, 243 243) '    

        }
        else{

        }
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#716aec');
        currentTheme = 'light'
    }
}
function makeNav2Default(){
    let menu2List = document.querySelectorAll('.menu2')
    for (let i = 0; i < menu2List.length; i++) {
        menu2List[i].style.color = colour
    }

}
function makeParaTextWhite(){
    for (let i = 0; i < paragraphList.length; i++) {
        paragraphList[i].style.color = '#8f8ead';
    }
}
function makeParaTextDefault(){
    for (let i = 0; i < paragraphList.length; i++) {
        paragraphList[i].style.color = '#8f8ead';
    }
}
 
function makeNavDark(){
    if (window.innerWidth > 650) {
        nav.style.backgroundColor = "rgb(29, 28, 42)"
    }
    else{
        
        nav.style.backgroundColor = "rgb(18, 18, 26)"
    }
}
function makeNavDefault(){
    nav.style.backgroundColor = 'rgb(248, 248, 248)';
}

function makeMenuLinksWhite(){
    if (window.innerWidth > 650) {
        menuList[0].style.color = colour
    }
    else{
        menuList[0].style.color = "#716aec"
    }

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
    iconList[0].style.color = "#716aec"
    iconList[1].style.color = "#716aec"

    for (let i = 2; i < iconList.length; i++) {
        iconList[i].style.color = "colour"
    }
}





function makeBackgroundDark(){
    if (window.innerWidth > 650) {
        document.querySelector('body').style.backgroundColor = "rgb(29, 28, 42)"
    }
    else{
        document.querySelector('body').style.backgroundColor = "rgb(29, 28, 42)"

        // document.querySelector('body').style.backgroundColor = "rgb(16, 16, 24)"
    }
}

function makeBackgroundLight(){
    document.querySelector('body').style.backgroundColor = "rgb(248, 248, 248)"
}

function paddingTopContainer(){
    document.querySelector(".container").style.paddingTop = nav.offsetHeight+20 + 'px'
}
function makeShadowLight(){
    nav.style.boxShadow = "-1px 11px 7px -4px rgb(238, 238, 238)"
}
function makeShadowDark(){
    if (window.innerWidth > 650) {
        nav.style.boxShadow = "-1px 11px 7px -4px rgb(27, 26, 41)"
    }
    else{
        nav.style.boxShadow = "-1px 11px 7px -4px rgb(26, 25, 39)"
    }
}
paddingTopContainer();



//slideshow
if (window.innerWidth < 650){
    sliderDivList[0].style.height = window.innerHeight-240 + 'px';
}
else{
    sliderDivList[0].style.height = window.innerHeight-270 + 'px';

}
isHovered = document.querySelector('.container').querySelector(':hover')
// // window.addEventListener('mousemove', checkHover(),false)

// document.addEventListener("mousemove", checkHover());

// document.onmousemove = checkHover;

let container = document.querySelector('.container')

let sliderDivPaddingLeft = parseInt(window.getComputedStyle(container).paddingLeft);
let sliderDivPaddingRight = parseInt(window.getComputedStyle(container).paddingRight);


function changePadding(){
    container.style.paddingLeft = sliderDivPaddingLeft - 5 +'px';
    container.style.paddingRight = sliderDivPaddingRight - 5 +'px';
    container.style.marginTop = '5px';
    container.style.marginBottom = '5px'; 
    if (currentTheme === 'dark') {
        sliderDivList[0].style.boxShadow = '10px 10px 10px 0px rgb(25, 24, 39), -10px -10px 12px 0px  rgb(25, 24, 39), -10px 10px 10px 0px  rgb(25, 24, 39), 10px -10px 12px 0px  rgb(25, 24, 39)'        
        if (window.innerWidth<650){
            sliderDivList[0].style.boxShadow = '10px 10px 10px 0px rgb(26, 25, 39), -10px -10px 12px 0px  rgb(26, 25, 39), -10px 10px 10px 0px  rgb(26, 25, 39), 10px -10px 12px 0px  rgb(26, 25, 39)'      

        }
    } else {
        sliderDivList[0].style.boxShadow = '10px 10px 10px 0px  rgb(238, 238, 238), -10px -10px 12px 0px  rgb(238, 238, 238), -10px 10px 10px 0px  rgb(238, 238, 238), 10px -10px 12px 0px  rgb(238, 238, 238)'
    }

    

}

function normalPadding(){
    container.style.paddingLeft = sliderDivPaddingLeft  +'px';
    container.style.paddingRight = sliderDivPaddingRight  +'px'; 
    container.style.marginTop = '2px';
    container.style.marginBottom = '0px'; 

    if (currentTheme === 'dark') {
        // rgb(15, 15, 21)

        sliderDivList[0].style.boxShadow = '10px 10px 10px 0px rgb(27, 26, 41), -10px -10px 12px 0px  rgb(27, 26, 41), -10px 10px 10px 0px  rgb(27, 26, 41), 10px -10px 12px 0px  rgb(27, 26, 41) '      
        if (window.innerWidth<650){
            sliderDivList[0].style.boxShadow = '10px 10px 10px 0px rgb(26, 25, 39), -10px -10px 12px 0px  rgb(26, 25, 39), -10px 10px 10px 0px  rgb(26, 25, 39), 10px -10px 12px 0px  rgb(26, 25, 39)'      

        }
    } else {
        sliderDivList[0].style.boxShadow = '10px 10px 10px 0px  rgb(245, 245, 245), -10px -10px 12px 0px  rgb(245, 245, 245), -10px 10px 10px 0px  rgb(245, 245, 245), 10px -10px 12px 0px  rgb(245, 245, 245) '    
    }




}