function mobileSlider() {
  let slider = document.querySelectorAll(".slider-mob");
  if(!slider.length) return;
  slider.forEach(item => {
    let flkty = new Flickity(item, {
      contain: true,
      cellAlign: "left",
      prevNextButtons: false,
      watchCSS: true,
      groupCells: true
    });
  });
}
function sliderControls(flkty, previous, next) {
  flkty.on("select", function(idx) {
    if(idx == this.slides.length - 1) {
      next.disabled = true;
    }  else {
      next.disabled = false;
    }
    if (idx == 0) {
      previous.disabled = true;
    } else {
      previous.disabled = false;
    }
  });
  previous.addEventListener("click", function() {flkty.previous()});
  next.addEventListener("click", function() {flkty.next()});
}
function activityToggle() {
  document.addEventListener("click", e => {
    let target = e.target.closest("[data-activity-toggle='toggle']");
    if(target) {
      let main = target.closest("[data-activity-toggle='main']");
      let event;
      if(main.classList.contains("active")) {
        event = new CustomEvent("activity-removed", {
          bubbles: true
        });
        main.classList.remove("active");
      } else {
        event = new CustomEvent("activity-opened", {
          bubbles: true
        });
        main.classList.add('active');
      }
      target.dispatchEvent(event);
    }
  });
}
function header() {
  document.addEventListener("activity-opened", e => {
    if(e.target.classList.contains("header__mobile-menu")) {
      console.log(1);
      document.body.style.overflow = "hidden";
    }
  });
  document.addEventListener("activity-removed", e => {
    if(e.target.classList.contains("header__mobile-menu")) {
      console.log(0);
      document.body.style.overflow='';
    }
  });
}
function previewChange() {
  const preview = document.querySelector(".preview-box__cover");
  document.addEventListener("click", e => {
    let target = e.target.closest("[data-image]");
    if(target) {
      preview.src = target.dataset.image;
      let active = document.querySelector("[data-image].active");
      if(active) {
        active.classList.remove("active");
      }
      target.classList.add("active");
    }
  })
}
function focusToggle() {
  document.addEventListener("focusin", toggle);
  document.addEventListener("focusout", toggle);
  function toggle(e) {
    let target = e.target.closest("[data-focus]");
    if(target) {
      target.classList.toggle("focused");
    }
  }
}
header();
activityToggle();
focusToggle();