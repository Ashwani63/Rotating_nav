let first = document.getElementById('first');
let second = document.getElementById('second') ;
let navbar = document.getElementById('navbar');
let container = document.getElementById('container') ;4
let content = document.getElementById('content') ;
let home = document.getElementById('home') ;
let contact = document.getElementById('contact') ;
let about = document.getElementById('about') ;


first.addEventListener('click' , (e)=>{
    // console.log('event fired')
    navbar.style.transform = 'rotate(-80deg)' ;
    container.style.transform = 'rotate(-20deg)' ;
    // content.style.transform = 'translate(150px,0px)' ;
    home.style.transform = 'translate(160px,0px)' ;
    contact.style.transform = 'translate(180px,0px)' ;
    about.style.transform = 'translate(220px,0px)' ;
    home.style.position = 'sticky' ;
    // home.style.left = '30px' ;
    // contact.style.left = '50px' ;
    // about.style.left = '70px' ;

    e.preventDefault() ;
})

second.addEventListener('click',(e)=>{

    navbar.style.transform = 'rotate(0deg)' ;
    container.style.transform = 'rotate(0deg)' ;
    // content.style.transform = 'translate(-150px,0px)' ;
    home.style.transform = 'translate(-150px,0px)' ;
    contact.style.transform = 'translate(-160px,0px)' ;
    about.style.transform = 'translate(-170px,0px)' ;


    e.preventDefault() ;
})