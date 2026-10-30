# FOSSEE Open Hardware Make-a-thon 2026 — Winners Reveal

A standalone, offline-friendly HTML/CSS/JavaScript presentation page. No build step, server, or internet connection required.

## Run

1. Extract the ZIP and keep the folder structure intact.
2. Open `index.html` in Chrome or Edge, then press **F11** for full screen.
3. Click **Reveal** (or press **Space**, **Enter**, **→**, or **Page Down**) to show 3rd place, 2nd place, then the Champion.

## Structure

```text
FOSSEE_Makeathon_Winners_Project/
├── index.html            Winners reveal page
├── women.html            Notable women innovators page
├── css/
│   ├── tokens.css        Colours, fonts, easing (edit the theme here)
│   ├── base.css          Reset, page shell, utilities
│   ├── brand-bar.css     Institution logo strip (shared by both pages)
│   ├── masthead.css      Title and intro (winners page)
│   ├── podium.css        Winner cards, medals, plinths
│   ├── controls.css      Reveal button and status text
│   ├── effects.css       Confetti, sparkles, flash
│   ├── women.css         Women innovators page (artwork + cards)
│   ├── animations.css    Keyframes and per-place entrance animations
│   └── responsive.css    Small screens and reduced motion
├── js/
│   ├── config.js         Reveal order, messages, effect intensity
│   ├── effects.js        Confetti, sparkles, flash helpers
│   ├── reveal.js         Reveal controller
│   ├── women.js          Starts women-page animations after the artwork loads
│   └── main.js           Entry point
├── images/
│   ├── iitb.jpg
│   ├── fossee.png
│   ├── openhw.png
│   └── women-innovators.png   Artwork shown on the left of women.html
└── README.md
```

## Winners

| Place | Team | Project |
| --- | --- | --- |
| 1st (Champion) | Ram Rama | Fire Fly |
| 2nd | Raghu Ram, Pratik, N Pratik, Tushar | Water Flow |
| 3rd | Sumanto Rao, Rajesh, Prathamesh Salunke, Thakur Vaital | Land Slide |

## Women innovators page

Open `women.html` (or use the link under the reveal button). The page background (`--paper` in `css/women.css`) is sampled from the artwork, and the artwork's right edge fades into it so there is no visible seam. Heading and project names use a serif display font (`--font-display` in `tokens.css`).

| Project | Innovators |
| --- | --- |
| Forest Fire | Sadhna, Prati |
| Weather Station | Archana, Hema, Meg, Vid |

To add a project, copy one `<li class="card …">` block in `women.html`; chips animate in order using the inline `--i` value.

## Editing

- **Names and projects:** edit each `<article class="winner …">` in `index.html`.
- **Colours and fonts:** `css/tokens.css`.
- **Order, messages, confetti amounts:** `js/config.js`.
- **Animations per place:** `css/animations.css` (one block each for third, second, first).

## Notes

- Class names follow BEM (`.winner`, `.winner__plinth`, `.winner--first`).
- JavaScript is split into small modules under a single `Makeathon` namespace, using plain scripts so the page works when opened directly from disk (`file://`).
- Animations respect the operating system's *reduce motion* setting; all names and projects remain visible without animation.
