/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

const partsOfThePage = document.querySelectorAll("section");
const myUl = document.querySelector("#navbar__list");
const myLi = document.querySelectorAll("li");
document
  .getElementById("section1")
  .appendChild(document.createElement("button"));
const myButton = document.querySelector("button");

for (section of partsOfThePage) {
  let myNewLi = document.createElement("li");
  let myNewLink = document.createElement("a");
  myNewLink.textContent = section.dataset.nav;
  myNewLi.appendChild(myNewLink);
  myUl.appendChild(myNewLi);
}
// a href links
let aLink = document.querySelectorAll("a");
let x = 1;
for(let i = 0; i < aLink.length; ++i && ++x){
	aLink[i].setAttribute("data-link", "section" + x);
};

let a = document.querySelectorAll("a");
a.forEach((link) => {
  link.addEventListener("click", function () {
    const element = document.getElementById(link.getAttribute("data-link"));
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

// scrollY
window.onscroll = function () {
  this.scrollY >= 400   && this.scrollY <= 900 ? a[0].classList.add("done") : a[0].classList.remove("done");
  this.scrollY >= 900 && this.scrollY <= 1400 ? a[1].classList.add("done") : a[1].classList.remove("done");
  this.scrollY >= 1400 && this.scrollY <= 1900 ? a[2].classList.add("done") : a[2].classList.remove("done");
  this.scrollY >= 1900 && this.scrollY <= 2400 ? a[3].classList.add("done") : a[3].classList.remove("done");
};

// button to up
let upButton = document.createElement("button");
let attrButton = document.createTextNode("to top");

upButton.appendChild(attrButton);
upButton.classList.add("upbutton");


document.body.appendChild(upButton);

window.onscroll = function(){
	this.scrollY >= 100 ? upButton.classList.add("show") : upButton.classList.remove("show");
}
upButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
