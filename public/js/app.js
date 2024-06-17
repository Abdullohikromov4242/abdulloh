
let respomsive_menu = document.querySelector('#responsive')
let hamburger = document.querySelector('#hamburger-menu')
let close_btn = document.querySelector('#close_menu')

hamburger.addEventListener('click' , function () {
    respomsive_menu.classList.add('left-0')
    respomsive_menu.classList.remove('-left-full')
})
close_btn.addEventListener('click' , function () {
    respomsive_menu.classList.add('-left-full')
    respomsive_menu.classList.remove('left-0')
    body.classList.remove('overflow-hidden')
    
})

if(document.querySelector('.salom')){
    
    let imgmain = document.querySelector('.main-img')
    let salom = document.querySelector('.salom')
    
    
    imgmain.addEventListener('click', function () {
        salom.classList.toggle('hidden')
        imgmain.classList.toggle('rotate-180')
    })
}
let imgmain1 = document.querySelector('.main-img1')
let salom1 = document.querySelector('.salom1')


imgmain1.addEventListener('click', function () {
    salom1.classList.toggle('hidden')
    imgmain1.classList.toggle('rotate-180')
   
})
let imgmain2 = document.querySelector('.main-img2')
let salom2 = document.querySelector('.salom2')


imgmain2.addEventListener('click', function () {
    salom2.classList.toggle('hidden')
    imgmain2.classList.toggle('rotate-180')
   
})
let imgmain3 = document.querySelector('.main-img3')
let salom3 = document.querySelector('.salom3')


imgmain3.addEventListener('click', function () {
    salom3.classList.toggle('hidden')
    imgmain3.classList.toggle('rotate-180')
   
})
let imgmain4 = document.querySelector('.main-img4')
let salom4 = document.querySelector('.salom4')


imgmain4.addEventListener('click', function () {
    salom4.classList.toggle('hidden')
    imgmain4.classList.toggle('rotate-180')
   
})
let imgmain5 = document.querySelector('.main-img5')
let salom5 = document.querySelector('.salom5')
imgmain5.addEventListener('click', function () {
    salom5.classList.toggle('hidden')
    imgmain5.classList.toggle('rotate-180')
    text.classList.toggle('hidden')
   
})
let imgmain6 = document.querySelector('.main-img6')
let salom6 = document.querySelector('.salom6')
imgmain6.addEventListener('click', function () {
    salom6.classList.toggle('hidden')

   
})
let imgmain7 = document.querySelector('.main-img7')
let salom7 = document.querySelector('.salom7')
imgmain7.addEventListener('click', function () {
    salom7.classList.toggle('hidden')
    imgmain7.classList.toggle('rotate-180')
   
})
let imgmain8 = document.querySelector('.main-img8')
let salom8 = document.querySelector('.salom8')
imgmain8.addEventListener('click', function () {
    salom8.classList.toggle('hidden')
    imgmain8.classList.toggle('rotate-180')
   
})
let imgmain9 = document.querySelector('.main-img9')
let salom9 = document.querySelector('.salom9')
imgmain9.addEventListener('click', function () {
    salom9.classList.toggle('hidden')
    imgmain9.classList.toggle('rotate-180')
   
})




let body = document.querySelector('body')
hamburger.addEventListener('click' , function () {
    body.classList.add('overflow-hidden')
})
let respomsive_menu1 = document.querySelector('#responsive')
let hamburger1 = document.querySelector('#hamburger-menu')
let close_btn1 = document.querySelector('#close_menu')
let body1 = document.querySelector('body')

hamburger1.addEventListener('click' , function () {
    body1.classList.add('overflow-hidden')
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });