/**
 * main.js — entry point. Wires DOM, effects and the reveal controller.
 * Scripts are loaded at the end of <body>, so the DOM is ready.
 */
(function (global, document) {
  "use strict";

  var Makeathon = global.Makeathon;
  var config = Makeathon.config;

  /** Wrap each character in a span (grouped by word so names never break mid-word). */
  function splitLetters(el) {
    var text = el.textContent;
    var counter = 0;
    el.setAttribute("aria-label", text);
    el.textContent = "";

    text.split(" ").forEach(function (word, w, words) {
      var wordEl = document.createElement("span");
      wordEl.className = "word";
      wordEl.setAttribute("aria-hidden", "true");

      word.split("").forEach(function (character) {
        var span = document.createElement("span");
        span.className = "char";
        span.style.setProperty("--i", counter++);
        span.textContent = character;
        wordEl.appendChild(span);
      });

      el.appendChild(wordEl);
      if (w < words.length - 1) {
        el.appendChild(document.createTextNode(" "));
        counter++;
      }
    });
  }

  var championName = document.getElementById(config.championNameId);
  if (championName) { splitLetters(championName); }

  Makeathon.effects.init(
    document.getElementById("fx-layer"),
    document.getElementById("flash")
  );

  var ui = {
    button: document.getElementById("reveal"),
    step: document.getElementById("step"),
    announce: document.getElementById("announce")
  };

  var reveal = Makeathon.createReveal(ui, config, Makeathon.effects);

  ui.button.addEventListener("click", reveal.next);

  /* Presenter-clicker support: Right Arrow / Page Down advance the reveal. */
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      reveal.next();
    }
  });
})(globalThis, document);
