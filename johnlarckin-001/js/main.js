"use strict";

function pageNavigation() {
  var _this = this;

  var opened = [];
  var pages = ["strategy", "design", "development", "consulting", "contact"];
  var viewport = document.querySelector('.viewport');
  var hash = document.location.hash;
  var body = document.body;
  var header = document.querySelector('.header');
  header.style.paddingRight = getScrollWidth() + 'px';
  body.style.paddingRight = getScrollWidth() + 'px';
  setPageOffset();
  pages.forEach(function (item) {
    if (hash && hash.indexOf(item) > -1) {
      change(item);
      return;
    }

    document.querySelector("#".concat(item)).style.display = "none";
  });
  document.addEventListener('click', function (event) {
    var target = event.target;

    while (target != _this) {
      if (target.dataset && target.dataset.link) {
        change(target.dataset.link);
        return;
      } else {
        target = target.parentNode;
      }
    }
  });
  window.addEventListener('popstate', function (event) {
    if (event.state) {
      change(event.state.link, true);
    } else {
      change("main", true);
    }
  });

  function change(target) {
    var fromHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (target == 'main') {
      clear();

      if (!fromHistory) {
        history.pushState({
          link: target
        }, targetID, '/');
      }

      setPageOffset();
      return;
    }

    var targetID = "#" + target;
    clear();
    header.classList.add('header--form');
    opened.push({
      link: target
    });

    if (!fromHistory) {
      history.pushState({
        link: target
      }, targetID, targetID);
    }

    var page = document.querySelector(targetID);
    page.style.display = "block";
    setTimeout(function () {
      return page.classList.remove('hidden');
    }, 100);
    body.style.overflow = "hidden";
    setPageOffset();
  }

  function setPageOffset() {
    body.style.width = "calc(100% + ".concat(getScrollWidth(), "px)");
    header.style.width = "calc(100% + ".concat(getScrollWidth(), "px)");
  }

  function removePageOffset() {
    body.style.width = '';
    header.style.width = '';
  }

  function clear() {
    var header = document.querySelector(".header");

    if (header.classList.contains('header--form')) {
      header.classList.remove('header--form');
    }

    opened.forEach(function (item) {
      var page = document.querySelector("#".concat(item.link));
      page.classList.add('hidden');
      page.addEventListener("transitionend", hide);

      function hide() {
        page.removeEventListener("transitionend", hide);
        page.style.display = "none";
      }
    });
    opened = [];
    body.style.overflow = "";
    removePageOffset();
  }

  return {
    getOpened: function getOpened() {
      return JSON.parse(JSON.stringify(opened));
    },
    clearOpened: function clearOpened() {
      history.pushState({
        link: "main"
      }, "#main", "/");
      clear();
    }
  };
}

var navigate = pageNavigation();

function mainNavigation() {
  document.addEventListener("click", function (event) {
    var target = event.target;

    while (target != this) {
      if (target.dataset && target.dataset.block) {
        var y = getCoords(document.getElementById(target.dataset.block)).top;
        var behavior = "smooth";

        if (navigate.getOpened().length > 0) {
          console.log(navigate.getOpened());
          navigate.clearOpened();
          behavior = "auto";
        }

        window.scroll({
          top: y,
          behavior: behavior
        });
        return;
      } else {
        target = target.parentNode;
      }
    }
  });
}

mainNavigation();

function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement; // (2)

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft; // (3)

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0; // (4)

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: top,
    left: left
  };
}

var otherProjects = function otherProjects() {
  var slider = new Flickity(document.querySelector(".other-projects__track"), {
    cellAlign: "left",
    prevNextButtons: false
  });
  document.querySelector(".other-projects__button--prev").addEventListener("click", function () {
    slider.previous();
  });
  document.querySelector(".other-projects__button--next").addEventListener("click", function () {
    slider.next();
  });
  slider.resize();
  window.addEventListener("resize", function () {
    slider.resize();
  });
};

window.addEventListener("load", function () {
  otherProjects();
});

function getScrollWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function headerMobile() {
  var headerMobile = document.querySelector(".header-mobile");
  var header = document.querySelector(".header");
  var overlay = document.querySelector(".header-overlay");
  document.querySelector(".header-burger").addEventListener('click', function () {
    headerMobile.classList.toggle('header-mobile--opened');
    header.classList.toggle('header--opened');
    overlay.classList.toggle('header-overlay--hidden');
  });
}

headerMobile();
var scroll;

var fakeParallax = function fakeParallax(targets) {
  var height = document.body.clientHeight;
  var items = document.querySelectorAll(targets);
  items.forEach(function (item) {
    // item.minSize = 540;
    item.minSize = document.documentElement.clientHeight / 10 * 8;
    var pos = item.getBoundingClientRect();

    if (pos.top > height) {
      item.style.backgroundAttachment = "fixed";
      item.size = item.minSize;
    } else {
      item.style.backgroundAttachment = "";
      item.size = document.documentElement.clientHeight;
    }

    item.style.backgroundSize = "auto ".concat(item.size, "px");
  });
  var oldScroll = window.pageYOffset;
  document.addEventListener('scroll', function () {
    var newScroll = window.pageYOffset;
    items.forEach(function (item) {
      var pos = item.getBoundingClientRect();
      var isOut = pos.bottom < document.body.clientHeight;

      if (isOut) {
        item.style.backgroundAttachment = "";
      } else {
        item.style.backgroundAttachment = "fixed";
      } // if(oldScroll < newScroll) {
      //     // Increment background size
      //     if(pos.top < document.body.clientHeight && !isOut) {
      //         item.size += 3;
      //     }
      // } else {
      //     if(pos.bottom > document.body.clientHeight) {
      //        item.size -= 3;
      //     }
      // }


      if (item.size > document.documentElement.clientHeight) {
        item.size = document.documentElement.clientHeight;
      }

      if (item.size < item.minSize) {
        item.size = item.minSize;
      }

      item.style.backgroundSize = "auto ".concat(item.size, "px");
    });
    oldScroll = newScroll;
  });
};

fakeParallax = function fakeParallax(targets) {
  document.querySelectorAll(targets).forEach(function (item) {
    var cover = item.querySelector(".portfolio-item__cover");
    var img = cover.querySelector("img");
    handle();
    window.addEventListener("scroll", function () {
      requestAnimationFrame(handle);
    });

    function handle() {
      var displayHeight = document.documentElement.clientHeight;
      var coords = item.getBoundingClientRect();
      var isVisible = coords.top < displayHeight && coords.bottom > displayHeight ? true : false;
      var offset = displayHeight - coords.top;

      if (isVisible) {
        img.style.transform = "translate3d(0px, ".concat(-cover.clientHeight + offset, "px, 0px)");
      } else {
        img.style.transform = "translate3d(0px, 0px, 0px)";
      }
    }
  });
}; // fakeParallax(".portfolio-item");


function smoothScroll() {
  Scrollbar.init(document.querySelector('.viewport'), {
    damping: 0.04
  });
}

function headerScroll() {
  var header = document.querySelector(".header");
  var word = document.querySelector('.scroll-pointer');
  var scrolled = 0;
  var timer = null;
  window.addEventListener("scroll", scroll);

  function scroll() {
    if (timer !== null) {
      clearTimeout(timer);
    }

    header.style.top = -header.offsetHeight + 'px';
    word.classList.add('scroll-pointer--hidden');
    timer = setTimeout(function () {
      header.style.top = "";
      word.classList.remove('scroll-pointer--hidden');
    }, 400);
  }
}

headerScroll();

function inputLabel() {
  document.addEventListener('input', input);

  function input(event) {
    var target = event.target;
    if (!target.classList.contains('inputfield__item')) return;

    if (target.value.length > 0) {
      target.parentNode.classList.add("inputfield--selected");
    } else {
      target.parentNode.classList.remove("inputfield--selected");
    }
  }
}

inputLabel();

(function () {
  var test = vhCheck({
    updateOnTouch: true,
    cssVarName: "vh-offset"
  });
})();

(function () {
  document.querySelectorAll(".section").forEach(function (item) {
    handle(item);
    window.addEventListener('scroll', function () {
      handle(item);
    });
  });

  function handle(item) {
    drawAnimation(function () {
      if (isVisible(item, 200)) {
        if (item.classList.contains('animated')) {
          item.classList.remove('animated');
        }
      } else {// if(!item.classList.contains('animated')) {
        // item.classList.add('animated');
        // }
      }
    });
  }

  function drawAnimation(func) {
    requestAnimationFrame(function () {
      func();
    });
  }

  function isVisible(section) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var pos = section.getBoundingClientRect();
    var vh = document.documentElement.offsetHeight;

    if (pos.top < vh - offset && pos.bottom >= 0) {
      return true;
    } else {
      return false;
    }
  }
})();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#bbbbbb"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 12
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#2d2d2d",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});