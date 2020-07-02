"use strict";

function range() {
  var targets = document.querySelectorAll('.range-item');
  targets.forEach(function (item) {
    calc(item);
    item.addEventListener('input', function () {
      calc(item);
    });
  });

  function calc(item) {
    var max = 100;
    var val = item.value / 100 * max;
    item.style.background = "-webkit-linear-gradient(left ,#00adee 0%,#00adee ".concat(val, "%,\n      #f8f8f8 ").concat(val, "%, #f8f8f8 100%)");
  }
}

range();

function dropInput() {
  var store = {
    _opened: [],
    add: function add(el) {
      this._opened.push(el);
    },
    remove: function remove(el) {
      var temp = this._opened.filter(function (item) {
        if (item === el) {
          return false;
        }

        return true;
      });

      this._opened = temp;
    },
    get: function get() {
      return this._opened;
    },
    clear: function clear() {
      this._opened = [];
    }
  };
  document.addEventListener("click", function (event) {
    var target = event.target;

    while (target != document) {
      if (target.dataset && target.dataset.widget == "drop-block") {
        if (target.classList.contains("open")) {
          if (checkClick(target, event)) {
            return;
          }

          hide(target);
        } else {
          show(target);
        }

        return;
      } else {
        target = target.parentNode;
      }
    }

    if (store.get().length == 0) return;
    store.get().forEach(function (item) {
      hide(item);
    });
  });

  function checkClick(el, event) {
    var target = event.target;

    while (el != target) {
      if (target == el.children[1]) {
        return true;
      } else {
        target = target.parentNode;
      }
    }

    return false;
  }

  function show(el) {
    store.add(el);
    el.classList.add("open");
    var body = el.children[1];
    body.style.height = body.scrollHeight + "px";
  }

  function hide(el) {
    store.remove(el);
    el.classList.remove("open");
    var body = el.children[1];
    body.style.height = 0;
  }
}

dropInput();

function headerTabs() {
  var cardsMenu = document.querySelector(".header__menu-cards"),
      menuPayments = document.querySelector(".header__menu-payments"),
      navTop = document.querySelector(".header__nav"),
      overlay = document.querySelector(".overlay");
  var activeMenu = null; // Events

  document.getElementById("header-my-cards").addEventListener("click", function () {
    if (!this.classList.contains('active')) {
      removeActiveTab();
      hide(activeMenu);
      setActiveTab(this);
      show(cardsMenu);
    } else {
      removeActiveTab();
      hide(cardsMenu);
    }
  });
  document.getElementById("header-payments").addEventListener("click", function () {
    if (!this.classList.contains('active')) {
      removeActiveTab();
      hide(activeMenu);
      setActiveTab(this);
      show(menuPayments);
    } else {
      removeActiveTab();
      hide(menuPayments);
    }
  });
  overlay.addEventListener("click", function () {
    removeActiveTab();
    hide(activeMenu);
  }); // Control methods

  function setActiveTab(el) {
    el.classList.add("active");
  }

  function removeActiveTab() {
    var siblings = navTop.children;

    for (var i = 0; i < navTop.childElementCount; i++) {
      if (siblings[i].classList.contains("active")) {
        siblings[i].classList.remove("active");
      }
    }
  }

  function show(el) {
    if (el == null) return;
    el.classList.remove("hidden");
    overlay.classList.remove("hidden");
    activeMenu = el;
  }

  function hide(el) {
    if (el == null) return;
    el.classList.add("hidden");
    overlay.classList.add("hidden");
    activeMenu = null;
  }
}

headerTabs();