---
title: "What happens when I lose signal?"
parent: "Safety & offline"
nav_order: 2
audience: [athlete]
tags: [offline, signal, battery, reliability]
summary: "Exactly how the app behaves with no signal — and why nothing inside your ride is lost."
last_updated: 2026-06-18
---

# What happens when I lose signal?

Bike events happen in places with no phone signal. Watch the Dot is built for
that. Here's exactly what happens when you go off-grid.

## Your ride keeps going

- **You can start with no signal.** As long as you registered (or it's a free
  ride), the app uses your phone's GPS and your saved copy of the event. No
  network needed to begin.
- **Your position keeps recording.** Every GPS point is saved on your phone.
- **The app never stops your ride on its own.** It won't end because you lost
  signal, your screen is off, the phone killed the app in the background, or a
  network request failed. Your ride ends only when **you** finish or abandon it,
  you cross the finish line, or the organiser's cut-off passes.
- **The app never signs you out.** A login problem shows a small banner; it never
  drops your session mid-ride.

## What watchers see while you're offline

Your dot **pauses** at your last known position, because your new points can't
upload yet. The moment your phone gets signal again, all the saved points upload
and your dot and trail **catch up** — your route fills in and the leaderboard
updates.

## Finishing offline

If you finish with no signal, the app records the **exact moment** you finished
on the phone. When signal returns, your ride uploads with that original finish
time — so your result is honest about when you actually finished, not when you
reconnected. Points recorded after you finished are discarded, so your trail ends
cleanly at the line.

## If your battery dies

Everything you've recorded is saved to the phone's storage. Charge up, re-open
the app, and it picks up where it left off, uploading whatever is queued.

## The persistent notification

While tracking, the app shows a notification like "Tracking — 42 km". It's
**information only** — it tells you tracking is alive. It has no buttons to pause
or stop (those live only on the ride screen), so it can't be triggered by
accident from your lock screen.

## The rare edge cases

Two situations can still cost you the very tail of a ride's trail (your finish
time and result are always safe):

- You stop in a dead zone and **never re-open the app with signal** for a long
  time — very old queued points can eventually expire.
- You stop offline and immediately **start your next ride still offline** — the
  app clears the old queue to keep the two rides separate.

Both are uncommon, and even then your finish time keeps your result correct.

## Tips

- Pick a battery mode that matches your ride length — see
  [Battery modes](../for-athletes/battery-modes.md).
- Let the app finish its GPS warm-up at the start for the most accurate first fix.
- If a save fails offline, you'll see a retry prompt — tap it once you have
  signal.
