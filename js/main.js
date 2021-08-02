console.log(window.innerWidth)
let menuIcon = document.querySelector('#menuIcon');
let menuLinks = document.querySelector('.links');

function ham(cls){
    changeMenuSymbol(cls);

}

function changeMenuSymbol(cls){
    if (cls === 'fas fa-bars') {
        menuIcon.setAttribute('class','fas fa-times');
        menuLinks.style.display = 'block';

    }
    else{
        menuIcon.setAttribute('class','fas fa-bars')    
        menuLinks.style.display = 'none';
    }
}