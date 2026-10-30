/**
 * reveal.js — step-by-step reveal controller.
 * Reads the sequence from Makeathon.config and drives DOM state + effects.
 */
(function (global) {
  "use strict";

  var Makeathon = (global.Makeathon = global.Makeathon || {});

  /**
   * @param {Object}   ui        { button, step, announce } DOM elements
   * @param {Object}   config    Makeathon.config
   * @param {Object}   effects   Makeathon.effects
   */
  function createReveal(ui, config, effects) {
    var index = 0;
    var total = config.sequence.length;

    function burst(fx) {
      effects.confetti(fx.confetti, fx.originX, fx.spread);
      effects.sparkles(fx.sparkles, fx.originX, fx.spread);
    }

    function playEffects(item) {
      var fx = item.effects;

      if (fx.flash) { effects.flash(); }

      if (fx.burstDelayMs) {
        global.setTimeout(function () { burst(fx); }, fx.burstDelayMs);
      } else {
        burst(fx);
      }

      if (item.celebrate) {
        var c = item.celebrate;
        effects.startLoop(function () {
          effects.confetti(c.confetti, 50, 100);
          effects.sparkles(c.sparkles, 50, 100);
        }, c.intervalMs);
      }
    }

    function next() {
      if (index >= total) { return false; }

      var item = config.sequence[index];
      document.getElementById(item.id).classList.add("is-visible");
      ui.announce.textContent = item.announce;
      playEffects(item);
      index += 1;

      if (index < total) {
        ui.step.textContent = config.labels.step(index + 1, total);
        ui.button.textContent = item.nextLabel;
      } else {
        ui.step.textContent = config.labels.complete;
        ui.button.textContent = item.nextLabel;
        ui.button.disabled = true;
      }
      return true;
    }

    return {
      next: next,
      isComplete: function () { return index >= total; }
    };
  }

  Makeathon.createReveal = createReveal;
})(globalThis);
