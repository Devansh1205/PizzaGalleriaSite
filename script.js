let mybutton = document.getElementById("myBtn");

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     }
//     else {
//         mybutton.style.display = "none";
//     }
// }

function topFunction() {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // other browsers 
}

function topFuncMenu() {
  document.body.scrollTop = 540;
  document.documentElement.scrollTop = 540;
}

function topFuncDeals() {
  document.body.scrollTop = 1950;
  document.documentElement.scrollTop = 1950;
}

function topFuncContact() {
  document.body.scrollTop = 7780;
  document.documentElement.scrollTop = 7780;
}

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Define the scroll event listener
window.addEventListener('scroll', () => {
  // Check if the page is scrolled beyond a certain threshold
  if (window.scrollY > 539) {
    // Add the "navbar-scroll" class to change the navbar color
    navbar.classList.add('navbar-scroll-menu');
  }
  else {
    // Remove the "navbar-scroll" class to revert back to the default color
    navbar.classList.remove('navbar-scroll');
    navbar.classList.remove('navbar-scroll-menu');
  }
  if (window.scrollY > 7779) {
    document.getElementById("ucontact").style.textDecoration = "underline";
  }
  else {
    document.getElementById("ucontact").style.textDecoration = "none";
  }
  if (7779 > window.scrollY && window.scrollY > 1949) {
    document.getElementById("udeal").style.textDecoration = "underline";
  }
  else {
    document.getElementById("udeal").style.textDecoration = "none";
  }
  if (1949 > window.scrollY && window.scrollY > 539) {
    document.getElementById("umenu").style.textDecoration = "underline";
  }
  else {
    document.getElementById("umenu").style.textDecoration = "none";
  }
  if (539 > window.scrollY && window.scrollY >= 0) {
    document.getElementById("uhome").style.textDecoration = "underline";
  }
  else {
    document.getElementById("uhome").style.textDecoration = "none";
  }
});

window.onscroll = function () {
  var theta = document.documentElement.scrollTop / 150 % Math.PI;

  document.getElementById('pizzawheel').style.transform = 'rotate(' + theta + 'rad)';
}


function validate() {
  var number = document.myform.number.value

  if (isNaN(number) && length(number) != 10) {
    document.getElementById("number").innerHTML = "Enter numeric value only";
    return false;
  }
  else {
    alert("Your form has been submittes, we will contact you shortly.")
    return true;
  }
}
