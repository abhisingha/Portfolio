let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
     Navbar.classList.remove('active');

}

let boxImg= document.querySelector('.box-1 img');

document.querySelector('.box-1 img').onclick = () =>{
    boxImg.classList.toggle('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn ').onclick = () =>{
    loginForm.classList.toggle('active');
     navbar.classList.remove('active');
     searchForm.classList.remove('active');
      Navbar.classList.remove('active');

}

let Home = document.querySelector('.home');

document.querySelector('.home').onclick = () =>{
     loginForm.classList.remove('active');
     searchForm.classList.remove('active');
      Navbar.classList.remove('active');

}


let Navbar = document.querySelector('#navbar ul');

document.querySelector('#menu-btn').onclick = () =>{
    Navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

/*********************************Slideshow*********************************/
/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

*/

/*******Automatic-slideshow**********/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}