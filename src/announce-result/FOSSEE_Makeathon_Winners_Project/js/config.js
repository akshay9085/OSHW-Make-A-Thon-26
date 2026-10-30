/**
 * config.js — reveal order, messages, and effect intensity.
 * Edit this file to change what happens at each step.
 */
(function (global) {
  "use strict";

  var Makeathon = (global.Makeathon = global.Makeathon || {});

  Makeathon.config = Object.freeze({
    totalSteps: 3,

    /* Reveal order: 3rd -> 2nd -> 1st. originX / spread are % of screen width. */
    sequence: Object.freeze([
      {
        id: "third",
        announce: "Third place revealed",
        nextLabel: "Reveal second place",
        effects: { confetti: 45, sparkles: 12, originX: 17, spread: 36, flash: false }
      },
      {
        id: "second",
        announce: "Second place revealed",
        nextLabel: "Reveal the champion",
        effects: { confetti: 70, sparkles: 18, originX: 83, spread: 36, flash: false }
      },
      {
        id: "first",
        announce: "The champion is revealed",
        nextLabel: "All winners revealed",
        effects: { confetti: 150, sparkles: 36, originX: 50, spread: 100, flash: true, flashDelayMs: 0, burstDelayMs: 350 },
        celebrate: { intervalMs: 1200, confetti: 14, sparkles: 4 }
      }
    ]),

    labels: Object.freeze({
      step: function (n, total) { return "WINNER REVEAL \u00B7 " + n + " OF " + total; },
      complete: "CONGRATULATIONS TO ALL WINNERS"
    }),

    championNameId: "champion-name"
  });
})(globalThis);
