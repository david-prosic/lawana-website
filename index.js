//SWIPER

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
  });

const swiper1BtnLeft = document.querySelector(".swiper1-box .btn-left")
const swiper1BtnRight = document.querySelector(".swiper1-box .btn-right")

swiper1BtnLeft.addEventListener("click", ()=>{
    swiper1.slidePrev();
})

swiper1BtnRight.addEventListener("click", ()=>{
    swiper1.slideNext();
})

let viewportWidth = window.innerWidth;
let swiper2Gap = (viewportWidth < 640)?12:32;
const swiper2 = new Swiper('.swiper2', {
    spaceBetween: swiper2Gap,
    slidesPerView: 'auto',
    center: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

const swiper2BtnLeft = document.querySelector(".swiper2-box .btn-left")
const swiper2BtnRight = document.querySelector(".swiper2-box .btn-right")

swiper2BtnLeft.addEventListener("click", ()=>{
    swiper2.slidePrev();
})

swiper2BtnRight.addEventListener("click", ()=>{
    swiper2.slideNext();
})


let swiper3Direction = (viewportWidth < 1024)? 'vertical': 'horizontal';

const swiper3 = new Swiper('.swiper3', {
    spaceBetween: 24,
    direction: swiper3Direction,
    slidesPerView: 'auto',
    center: true,
  });


//NAVBAR BACKGROUND

const navBar = document.querySelector('nav');

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop && st > 5){
      navBar.classList.add('-translate-y-full');
      navBar.classList.remove('active');
   } else if(st<5)
   {navBar.classList.remove('active');}
   else{
    navBar.classList.remove('-translate-y-full');
    navBar.classList.add('active');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

//MOBILE NAVBAR 

const hamburgerBtn  = document.querySelector('.hamburger-btn');
const navMobile = document.querySelector(".mobile-nav")

hamburgerBtn.addEventListener('click', ()=>{
    navMobile.classList.toggle('translate-x-full');
})

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((el)=>{
    el.addEventListener("click", ()=>{
        navMobile.classList.add('translate-x-full');
    })
})

//Refresh on window resize
window.addEventListener("resize", ()=>{
  location.reload();
})