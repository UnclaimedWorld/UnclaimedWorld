"use strict";

function input() {
  document.addEventListener('focus', function (event) {
    var target = event.target;

    if (target.classList.contains('form-textfield__input')) {
      set(target);
    }
  }, true);
  document.addEventListener('blur', function (event) {
    var target = event.target;

    if (target.classList.contains('form-textfield__input') && target.value.length == 0) {
      remove(target);
    }
  }, true);

  function set(input) {
    input.parentNode.classList.add("form-textfield--active");
  }

  function remove(input) {
    input.parentNode.classList.remove("form-textfield--active");
  }
}

input();

function modal() {
  var open = 0;
  document.addEventListener('click', function (event) {
    var target = event.target.closest("[data-modal]");

    if (target) {
      open++;
      document.body.style.overflow = 'hidden';
      document.getElementById(target.dataset.modal).classList.remove("modal--hidden");
      return;
    }

    target = event.target.closest(".modal__close");

    if (target) {
      target.closest(".modal").classList.add("modal--hidden");
      open--;
      if (open == 0) document.body.style.overflow = '';
      return;
    }

    if (event.target.classList.contains("modal")) {
      event.target.classList.add("modal--hidden");
      open--;
      if (open == 0) document.body.style.overflow = '';
    }
  });

  function clear() {
    open = 0;
    document.body.style.overflow = '';
  }

  return {
    clear: clear
  };
}

var modals = modal();

function fin(step) {
  if (step == 0) {
    document.querySelectorAll(".modal").forEach(function (item) {
      if (!item.classList.contains("modal--hidden")) {
        item.classList.add("modal--hidden");
      }
    });
    document.querySelector("#deliver-fin").classList.remove("modal--hidden");
  } else if (step == 1) {
    document.querySelector("#deliver-fin").classList.add("modal--hidden");
    modals.clear();
  }
}

function login() {
  var form = document.querySelectorAll('.signin__form');
  var modal = document.querySelector(".signin");
  form.forEach(function (item) {
    item.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!modal.classList.contains('signin--code')) {
        modal.classList.add('signin--code');
      } else {
        modal.classList.remove('signin--code');
      }
    });
  });
}

login();

function bucket(event) {
  var content = document.querySelectorAll(".bucket__content");
  content.forEach(function (item) {
    if (item.classList.contains("bucket__content--hidden")) {
      item.classList.remove("bucket__content--hidden");
    } else {
      item.classList.add("bucket__content--hidden");
    }
  });
  event.target.closest('.modal').classList.add('modal--hidden');
}