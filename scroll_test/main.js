"use strict";

const SLIDES = document.querySelectorAll('.slide');
const WRAP = document.querySelector('.slide-wrap');
const PER_SLIDE_OFFSET = 100;
let vHeight = document.documentElement.clientHeight;
let idx = 0;  // Current slide
let offset = 0;
let breakpoints = [0];

SLIDES.forEach((item, idx) => item.style.zIndex = SLIDES.length - idx);
setWrapHeight();

handle(true);
window.addEventListener("scroll", () => {handle()});

calculate_breakpoints();

function calculate_breakpoints() {
  let count = 0;
  for(let slide of SLIDES) {
    count += slide.offsetHeight + PER_SLIDE_OFFSET;
    breakpoints.push(count);
  }
}

function setWrapHeight() {
  const SLIDES_HEIGHT = Array.from(SLIDES).reduce((acc, slide) => acc + slide.offsetHeight + PER_SLIDE_OFFSET, 0);
  WRAP.style.height = SLIDES_HEIGHT - PER_SLIDE_OFFSET + 'px';
}
function handle(notScroll = false) {
  if(notScroll) {
    gsap.to(SLIDES[idx], {y: -pageYOffset + breakpoints[idx], duration: 0});
  } else {
    gsap.to(SLIDES[idx], {y: -pageYOffset + breakpoints[idx]});
  }

  if(pageYOffset >= breakpoints[idx + 1]) {
    gsap.to(SLIDES[idx], {y: -SLIDES[idx].offsetHeight});
    idx++;
    if(idx > breakpoints.length - 1) {
      idx = breakpoints.length - 1;
    }
  } else if(pageYOffset < breakpoints[idx]) {
    gsap.to(SLIDES[idx], {y: 0});
    idx--;
    if(idx < 0) {
      idx = 0;
    }
  }
}
function handle1(notScroll = false) {
  if(notScroll) {
    gsap.to(SLIDES[idx], {y: -pageYOffset + offset, duration: 0});
  } else {
    gsap.to(SLIDES[idx], {y: -pageYOffset + offset});
  }

  if(pageYOffset >= SLIDES[idx].offsetHeight + offset + 100) {
    gsap.to(SLIDES[idx], {y: -SLIDES[idx].offsetHeight});
    offset += SLIDES[idx].offsetHeight;
    idx++;
  } else if(pageYOffset < offset) {
      idx--;
      offset -= SLIDES[idx].offsetHeight;
  }
}
