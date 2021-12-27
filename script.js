const secLeadImg = document.querySelector(".sec-lead__img");
const secLeadContent = document.querySelector(".sec-lead__con");
const secLead = document.querySelector(".sec-lead");
const secCreate = document.querySelector(".sec-create");
const imgContainer = document.querySelector(".sec-create__container");
const btn = document.querySelector(".head-btn");
const btnImg = document.querySelector(".head-btn__img");
const nav = document.querySelector(".head-nav__list");

/*/////////////////////////////////
 Event listener for opening and closing nav
 //////////////////////////////////*/

btn.addEventListener("click", function () {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
    btnImg.src = "images/icon-hamburger.svg";
    document.body.style.overflow = "visible";
  } else {
    nav.classList.add("visible");
    btnImg.src = "images/icon-close.svg";
    document.body.style.overflow = "hidden";
  }
});

/*/////////////////////////////////
Intersection observer for transform animation of section--1
 //////////////////////////////////*/
const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  secLeadImg.classList.add("imgAnim");
  secLeadContent.classList.add("conAnim");

  observer.unobserve(secLead);
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(secLead);

/*/////////////////////////////////
Intersection observer for transform animation of section--2
 //////////////////////////////////*/

const imgCallback = function (entries, imgObserver) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  imgContainer.classList.add("imgConAnim");

  imgObserver.unobserve(secCreate);
};

const imgOptions = {
  root: null,
  threshold: 0.05,
};

const imgObserver = new IntersectionObserver(imgCallback, imgOptions);

imgObserver.observe(secCreate);

/*/////////////////////////////////
Event listener to stop triggering transition when page resizing
 //////////////////////////////////*/

let resizeTimer;

window.addEventListener("resize", function () {
  document.body.classList.add("preload");
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.remove("preload");
  }, 300);
});

/*/////////////////////////////////
Event listener to close nav when page size changes
 //////////////////////////////////*/
window.matchMedia("(min-width:800px)").addEventListener("change", function (e) {
  if (e.target.matches) {
    nav.classList.remove("visible");
    btnImg.src = "images/icon-hamburger.svg";
    document.body.style.overflow = "visible";
  }
});
