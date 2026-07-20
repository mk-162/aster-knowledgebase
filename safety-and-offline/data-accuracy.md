---
title: "Why your distance and time are accurate"
parent: "Safety & offline"
nav_order: 3
audience: [athlete, spectator, organiser]
tags: [accuracy, distance, time, results, gps]
summary: "How Aster keeps distance and time honest with phone GPS, and why everyone sees the same numbers."
last_updated: 2026-07-20
---

# Why your distance and time are accurate

A tracking platform is only as good as its numbers. Here's how Aster keeps
distance and time trustworthy — and why the figure on your screen matches
what spectators and the leaderboard see.

## Phone GPS, honestly

Aster tracks with the GPS in your phone, not a dedicated timing chip. That
means the **live** numbers you and your watchers see mid-ride are estimates,
built from the points that have uploaded so far. When queued points sync —
after a dead zone, say — everything is **recomputed from the full track**, so
the numbers correct themselves. Mid-ride figures on two screens can differ
briefly; they converge as the data lands.

## Every ride has a start and a finish moment

Your ride is bounded by two moments: when it **started** and when it
**ended**. Only the GPS points recorded **between** those two moments count.
Points from before your start (warming up near the line) or after your
finish (rolling to the car park) are ignored.

This is why:

- A finished rider's marker **stops at the line** and never drifts.
- Warm-up wandering doesn't inflate your distance or top speed.

## Distance is measured along your actual path

Distance is added up from your recorded points **in time order**, not in the
order they happened to upload. So if you lost signal and a batch of points
arrives late and out of order, they're sorted correctly first — you never get
a phantom "straight line" across a dead zone, and you never double-count.

## One source of truth for every screen

Your ride summary, the spectator's trail, and the leaderboard all read from
the **same** set of bounded, time-ordered points. That's why the distance on
the leaderboard matches the distance on your finish screen — there isn't a
separate calculation that can drift.

## How the clock works

- **Mass-start races** are timed from the **gun** (the official start), so
  everyone shares one race clock.
- **Time trials** are timed from the moment you **cross the start gate**, not
  from when you tapped Start — warm-up loops near the gate don't count.
- **Just Rides** (and events where everyone sets off in their own time) are
  timed from **when you start**.
- Times are stamped at the moment your start and finish actually happen, so a
  wrong clock on your phone can't make your ride look longer or shorter.

## Late data fills in, but never extends

If you were offline, points that arrive late **fill in** the gaps in your
trail — but only within your start–finish window. Nothing can extend your
ride past the moment you finished. Your result is fixed at the finish.

<!-- ## Unverified
- "Moving time subtracts any time you spent paused" was removed from the previous version: paused time is tracked server-side, but exactly which displayed figures subtract it was not re-verified this pass.
-->
