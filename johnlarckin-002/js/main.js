"use strict";

{
  // Mobile header
  var name = 'data-mobile-menu';
  var menus = document.querySelectorAll("[".concat(name, "='menu']"));
  var body = document.body;
  var activeTrigger = null;
  document.addEventListener('click', function (e) {
    var target;

    if (target = e.target.closest("[".concat(name, "='close']"))) {
      close(activeTrigger);
    } else if (target = e.target.closest("[".concat(name, "='trigger']"))) {
      if (target.classList.contains('active')) {
        close(target);
      } else {
        open(target);
      }
    }

    function open(target) {
      body.style.overflow = "hidden";
      menus.forEach(function (item) {
        return item.classList.add("active");
      });
      target.classList.add('active');
      activeTrigger = target;
    }

    function close(target) {
      body.style.overflow = "";
      menus.forEach(function (item) {
        return item.classList.remove("active");
      });
      target.classList.remove('active');
      activeTrigger = null;
    }
  });
}