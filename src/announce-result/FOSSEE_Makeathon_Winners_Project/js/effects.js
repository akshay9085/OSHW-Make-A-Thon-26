/**
 * effects.js — confetti, sparkles and screen flash.
 * Pure presentation helpers: no knowledge of winners or reveal order.
 */
(function (global) {
  "use strict";

  var Makeathon = (global.Makeathon = global.Makeathon || {});

  var COLORS = ["#ffc83d", "#fff2b4", "#ffffff", "#ef7c27", "#68e4cf", "#d8e0e4"];
  var layer = null;
  var flashEl = null;
  var loopId = null;

  var reduceMotion = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)");

  function motionAllowed() {
    return !(reduceMotion && reduceMotion.matches);
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function spawn(el, lifetimeMs) {
    layer.appendChild(el);
    global.setTimeout(function () { el.remove(); }, lifetimeMs);
  }

  function init(layerEl, flashElement) {
    layer = layerEl;
    flashEl = flashElement;
  }

  function confetti(count, originX, spread) {
    if (!layer || !motionAllowed()) { return; }
    layer.style.setProperty("--fall", layer.offsetHeight + 40 + "px");

    for (var i = 0; i < count; i++) {
      var piece = document.createElement("i");
      piece.className = "confetti";
      piece.style.left = clamp(originX + (Math.random() - 0.5) * spread, 0, 100) + "%";
      piece.style.width = rand(6, 12) + "px";
      piece.style.height = rand(9, 18) + "px";
      piece.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      piece.style.animationDelay = rand(0, 0.5) + "s";
      piece.style.setProperty("--fall-time", rand(2, 3.8) + "s");
      if (Math.random() > 0.5) { piece.style.borderRadius = "50%"; }
      spawn(piece, 4800);
    }
  }

  function sparkles(count, originX, spread) {
    if (!layer || !motionAllowed()) { return; }

    for (var i = 0; i < count; i++) {
      var spark = document.createElement("span");
      var size = rand(10, 22);
      spark.className = "spark";
      spark.style.width = spark.style.height = size + "px";
      spark.style.left = clamp(originX + (Math.random() - 0.5) * spread, 0, 96) + "%";
      spark.style.top = rand(25, 90) + "%";
      spark.style.animationDelay = rand(0, 0.6) + "s";
      spawn(spark, 2400);
    }
  }

  function flash() {
    if (!flashEl || !motionAllowed()) { return; }
    flashEl.classList.remove("is-active");
    void flashEl.offsetWidth; /* restart animation */
    flashEl.classList.add("is-active");
  }

  function startLoop(callback, intervalMs) {
    stopLoop();
    loopId = global.setInterval(callback, intervalMs);
  }

  function stopLoop() {
    if (loopId !== null) {
      global.clearInterval(loopId);
      loopId = null;
    }
  }

  Makeathon.effects = {
    init: init,
    confetti: confetti,
    sparkles: sparkles,
    flash: flash,
    startLoop: startLoop,
    stopLoop: stopLoop
  };
})(globalThis);
