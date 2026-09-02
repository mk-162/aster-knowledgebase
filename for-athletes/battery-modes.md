---
title: "Battery modes"
parent: "For athletes"
nav_order: 3
audience: [athlete]
tags: [battery, tracking, gps]
summary: "Choosing how often the app records your position, and how it drops down gears automatically as your battery falls."
last_updated: 2026-08-28
---

# Battery modes

Tracking runs on your phone's GPS, and GPS uses power. When you start a ride you
pick a **battery mode** — how often the app records and sends your position. More
frequent updates give watchers a smoother live location; less frequent ones make your phone
last far longer. You pick the mode per ride, so you can run **Live** for a short
race and **Ultra** for a multi-day trip.

## The modes

Four modes, from most detailed to most economical:

| Mode | Best for | Watchers see updates | Approx. battery use |
|---|---|---|---|
| **Live** | Short, fast events; recommended up to about 2 hours | About every 1-2 seconds | ~15% per hour |
| **Standard** | Most activities, under about 4 hours | About every 6 seconds | ~8.5% per hour |
| **Endurance** | Long days, 4-12 hours | About every 15 seconds | ~4.5% per hour |
| **Ultra** | Ultra-distance and multi-day efforts, 12 hours+ | About every 5 minutes | ~4% per hour |

Battery figures are approximate: real drain varies with your phone, the
temperature and your signal strength, as below.

The mode only changes the **recording rate**. It never changes how accurate each
recorded point is, or your final distance — a point is a point in any mode.

For real numbers — roughly how many hours each mode lasts from a given starting
charge — use the interactive forecaster at
[aster-track.com/battery-use](https://aster-track.com/battery-use). Those figures
are estimates: real drain varies a lot with your phone, the temperature, and how
strong your signal is (weak signal is the single biggest drain).

## Automatic fall-back

You can let the app **drop down a gear on its own as your battery falls**, so a
long day doesn't die on a full-detail mode. Auto-fall-back only ever steps *down*
the ladder, never back up, and a small banner tells you each time it happens. It
holds off while your phone is charging.

The steps happen at fixed battery levels:

| At this charge | The app drops to |
|---|---|
| **30%** | Standard |
| **15%** | Endurance |
| **8%** | Ultra |

So a ride that starts on **Live** eases back to Standard at 30%, Endurance at
15%, and Ultra at 8% — stretching your remaining charge as far as it can while
keeping your live location alive. If you started lower down the ladder, only the steps
below your starting mode apply.

You can also turn auto-fall-back **off** and stay locked to the mode you chose for
the whole ride — handy if you started on Endurance and don't want any surprises.
Even locked, the app still warns you once your battery hits **10%**, so opting
out of automatic switching doesn't mean opting out of being told. The forecaster
lets you model both.

## Good to know

- Whatever mode you pick, the app keeps recording in the background with the
  **screen off** — you don't need to keep it open.
- A more economical mode means watchers see your live location update a little less often,
  but your saved ride is just as complete.
- Losing signal doesn't cost you data or points — everything is stored on the
  phone and uploads later. See
  [Mobile data, battery and what runs offline](data-usage.md).
