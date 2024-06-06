import { preLoader } from "./loader.js";
import { swiper } from "./swiper.js";
import { startCounter } from "./counter.js";

preLoader();

// Header animation

document.addEventListener("DOMContentLoaded", function () {
  function animateHeader(delay) {
    gsap.to(".header", {
      top: "0",
      ease: "power3.inOut",
      duration: 2,
      delay: delay,
    });
  }

  // Check localStorage to see if the animation has run before
  const hasRunBefore = localStorage.getItem("headerAnimationRun");
  // Define time stamp
  const now = new Date();
  // Define the time interval for one hour
  const oneHour = 60 * 60 * 1000;

  if (!hasRunBefore || (now - new Date(hasRunBefore)) > oneHour) {
    // Set a flag in localStorage to indicate the animation has run
    localStorage.setItem("headerAnimationRun", now);
    // If it hasn't run before, set the delay to 7 seconds
    animateHeader(7);
  } else {
    // If it has run before, set the delay to 0
    animateHeader(0);
  }
});

// Burger menu

// Toggle active class on burger and open class on navbar
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("open");
});

// Active class to navlink and remove active class from burger
const navLinkEls = document.querySelectorAll('.nav-link');

navLinkEls.forEach(navLinkEl => {
  navLinkEl.addEventListener('click', () => {
    // Remove highlight from previously highlighted nav link
    document.querySelector('.highlight')?.classList.remove('highlight');

    // Highlight the clicked nav link
    navLinkEl.classList.add('highlight');

    // Remove active class from burger button
    document.querySelector('.burger').classList.remove('active');

    // Close the navbar
    document.querySelector('.navbar').classList.remove('open');
  });
});

// Progress bar

//run a function that compares the total height to the current position on the page
function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100 + '%';
  //update the progress var to that total height
  document.querySelector('#progress-bar').style.setProperty('width', scrollPercent);
}
//event listen for the scroll
document.addEventListener('scroll', updateProgressBar);

// Scroll to top

const toTop = document.querySelector("#button");
// listen to the scroll event and add active class
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
//scroll to top on the click
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

// lightgallery

lightGallery(document.querySelector('.gallery'));

document.addEventListener("DOMContentLoaded", function () {
  // Select the gallery container and the button
  const gallery = document.getElementById("gallery");
  const showMoreBtn = document.getElementById("showMoreBtn");

  // Select the first half of the images
  const images = gallery.querySelectorAll("a");
  const half = Math.ceil(images.length / 2.7); // Calculate the index of the halfway point

  // Initially show only the first half of the images
  for (let i = 0; i < half; i++) {
    images[i].style.display = "block";
  }

  // Event listener for the button to show the other half of the images
  showMoreBtn.addEventListener("click", function () {
    // Loop through the second half of the images and show them
    for (let i = half; i < images.length; i++) {
      images[i].style.display = "block";
    }
    // Hide the button after all images are shown
    showMoreBtn.style.display = "none";
  });
});

// Intersection observer 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));

// Cookies

const cookieBox = document.querySelector(".cookies"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains Alpha-construction it will be returned and below of this code will not run
  if (document.cookie.includes("alpha-construction")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button was accepted
      if (button.id == "acceptBtn") {
        //set cookies for 1 month.
        document.cookie = "cookieBy= alpha-construction; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes after the setTimeout
window.addEventListener("load", () => {
  setTimeout(executeCodes, 14000);
});