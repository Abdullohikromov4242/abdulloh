
let imgmain = document.querySelector('.main-img')
let salom = document.querySelector('.salom')


imgmain.addEventListener('click', function () {
    salom.classList.toggle('hidden')
    imgmain.classList.toggle('rotate-180')
   
})
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });