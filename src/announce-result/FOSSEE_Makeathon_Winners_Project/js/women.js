/**
 * women.js — starts the page animations once the artwork has loaded,
 * so the entrance never plays against a half-decoded image.
 */
(function (global, document) {
  "use strict";

  var root = document.body;
  var art = document.querySelector(".art__img");
  var started = false;

  function start() {
    if (started) { return; }
    started = true;
    root.classList.add("is-loaded");
  }

  if (!art || art.complete) {
    start();
  } else {
    art.addEventListener("load", start);
    art.addEventListener("error", start);
    global.setTimeout(start, 1500); /* safety net */
  }
})(globalThis, document);
