function navToggle() {
  document.addEventListener("click", e => {
    let toggle = e.target.closest("[data-nav-toggle]");
    if(toggle) {
      e.preventDefault();
      let parent = toggle.parentNode;
      let active = parent.querySelectorAll(".active[data-nav-toggle]");
      if(active.length) {
        active.forEach(item => {
          item.classList.remove('active');
          document.querySelector(item.dataset.navToggle)
            .classList.remove("active");
        });
      }
      toggle.classList.add("active");
      let block = document.querySelector(toggle.dataset.navToggle);
      block.classList.add("active");
      let event = new CustomEvent("nav-toggled", {
        bubbles: true
      });
      toggle.dispatchEvent(event);
    }
  })
}
function faqItem() {
  let opened = null;
  let timer = null;
  if(document.readyState == 'complete') {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
  document.addEventListener("click", e => {
    let main = e.target.closest("[data-faq='main']");

    if(main && checkTarget(e.target, main.firstElementChild)) {
      if(!main.classList.contains('opened')) {
        open(main);
        opened = main;
      } else {
        close(main);
        opened = null;
      }
    }
  });

  function init() {
    let toInit = document.querySelectorAll("[data-faq='main'].opened");
    for(let item of toInit) {
      open(item);
    }
  }
  function checkTarget(elem, find) {
    while(elem) {
      if(elem == find) {
        return true;
      } else {
        elem = elem.parentElement;
      }
    }
    return false;
  }
  function open(elem) {
    if(timer) { return; }
    elem.classList.add('opened');
    let body = elem.children[1];
    body.style.display = 'block';
    timer = setTimeout(() => {
      body.style.height = body.firstElementChild.scrollHeight + 'px';
      setTimeout(() => {
        if(timer) {
          clearTimeout(timer);
          timer = null;
        }
        body.style.overflow = 'unset';
      }, 200);
    }, 40);
    window.addEventListener("resize", function resize() {
      if(elem.classList.contains('opened')) {
        body.style.height = body.firstElementChild.scrollHeight + 'px';
      } else {
        window.removeEventListener("resize", resize);
      }
    });
  }
  function close(elem) {
    if(timer) { return; }
    elem.classList.remove("opened");
    let body = elem.children[1];
    body.style.height = '0px';
    body.style.overflow = '';
    timer = setTimeout(() => {
      if(timer) {
        clearTimeout(timer);
        timer = null;
      }
      body.style.display = '';
    }, 200);
  }
}
function focus(selector) {
  document.addEventListener("focusin", e => {
    let main = e.target.closest(selector);
    if(main) {
      main.classList.add("focused");
    }
  });
  document.addEventListener("focusout", e => {
    let main = e.target.closest(selector);
    if(main) {
      main.classList.remove("focused");
    }
  });
}
function dropdown() {
  var opened = [];
  document.addEventListener("click", function(e) {
    var trigger = e.target.closest("[data-dropdown='trigger']");
    if(trigger) {
      var main = trigger.closest("[data-dropdown='main']");
      toggle(main);
      opened.push(main);
    }
  });
  document.addEventListener("click", function(e) {
    var target = e.target.closest("[data-dropdown='main']");
    if(target) {
      return;
    }

    closeAll();
  })
  document.addEventListener("input", function(e) {
    var main = e.target.closest("[data-dropdown='main']");
    if(main) {
      var selected = main.querySelector(".selected");
      if(selected) {
        selected.classList.remove("selected");
      }

      var item = e.target.parentElement;
      item.classList.add("selected");

      var title = main.querySelector("[data-dropdown='title']");
      if(title) {
        title.textContent = e.target.dataset.dropdownTitle;
      }
      closeAll();
    }
  })
  function toggle(dropdown) { dropdown.classList.toggle("opened"); }
  function open(dropdown) { dropdown.classList.add("opened"); }
  function close(dropdown) { dropdown.classList.remove("opened"); }
  function closeAll() {
    opened.forEach(function(elem) {
      close(elem);
    });
    opened.length = 0;
  }
}
function asideMenu() {
  document.addEventListener("click", (e) => {
    let target = e.target.closest("[data-menu-toggle]");
    if(target) {
      let id = target.dataset.menuToggle;
      let menu = document.getElementById(id);
      menu.classList.toggle("hidden");
      document.body.style.overflow = menu.classList.contains("hidden") ?
        '' : 'hidden';
    }
  });
}
function activeToggle() {
  document.addEventListener("click", e => {
    let toggle = e.target.closest("[data-active-toggle]");
    if(toggle) {
      e.preventDefault();
      let parent = toggle.closest("[data-active-main]");
      if(parent) {
        let active = Array.from(parent.children).forEach(item => item.classList.remove('active'));
        let block = document.querySelector(toggle.dataset.activeToggle);
        block.classList.add('active');
      }
      
    }
  })
}
function numberInput() {
  document.addEventListener("click", e=> {
    let target = e.target.closest("[data-counter]");
    if(target) {
      let main = target.closest("[data-counter='main']");
      let input = main.querySelector("input");
      if(target.dataset.counter == 'up') {
        input.value++;
      } else if(target.dataset.counter == 'down') {
        input.value--;
      }
      if(input.value <= 1) {
        main.querySelector("[data-counter='down']").disabled = true;
      } else {
        main.querySelector("[data-counter='down']").disabled = false;
      }
    }
  });
}
function productCover() {
  let slides = document.querySelector(".product-cover");
  if(!slides) return;
  window.addEventListener('scroll', e => {
    if(pageYOffset > 120) {
      slides.classList.add("disappear");
    } else {
      slides.classList.remove("disappear");
    }
  })
}
function lazyLoad() {
  let images = document.querySelectorAll("[data-lazyload]");
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        let target = entry.target;
        if(target.dataset.lazyCompleted == 1) {
          return;
        };

        let coords = target.getBoundingClientRect();

        let elem = document.createElement('div');
        elem.classList.add("lazy-card");

        elem.style.position = 'absolute';
        elem.style.top = coords.top + pageYOffset + "px";
        elem.style.left = coords.left + pageXOffset + "px";
        elem.style.height = target.offsetHeight + 'px';
        elem.style.width = target.offsetWidth + 'px';
        document.body.append(elem);

        target.onload = () => {
          target.dataset.lazyCompleted = 1;
          elem.classList.add("disappear");
          setTimeout(() => elem.remove(), 300);
        }
        target.src = target.dataset.lazyload;
      }
    });
  })
  images.forEach(img => {
    observer.observe(img);
  });
}
lazyLoad();
numberInput();
activeToggle();
asideMenu();
dropdown();
focus('.inputfield-wrap');
focus('.inputfield');
faqItem();
navToggle();