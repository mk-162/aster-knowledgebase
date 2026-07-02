---
title: "Why your distance and time are accurate"
parent: "Safety & offline"
nav_order: 3
audience: [athlete, spectator, organiser]
tags: [accuracy, distance, time, results]
summary: "How Aster keeps distance and time honest, and why everyone sees the same numbers."
last_updated: 2026-06-18
---

# Why your distance and time are accurate

A tracking platform is only as good as its numbers. Here's how Aster
keeps distance and time trustworthy — and why the figure on your screen matches
what spectators and the leaderboard see.

## Every ride has a start and a finish moment

Your ride is bounded by two moments: when it **started** and when it **ended**.
Only the GPS points recorded **between** those two moments count. Points from
before your start (warming up near the line) or after your finish (rolling to the
car park) are ignored.

This is why:

- A finished rider's dot **stops at the line** and never drifts.
- Warm-up wandering doesn't inflate your distance or top speed.

## Distance is measured along your actual path

Distance is added up from your recorded points **in time order**, not in the
order they happened to upload. So if you lost signal and a batch of points
arrives late and out of order, they're sorted correctly first — you never get a
phantom "straight line" across a dead zone, and you never double-count.

## One source of truth for every screen

Your ride summary, the spectator's trail, and the leaderboard all read from the
**same** set of bounded, time-ordered points. That's why the distance on the
leaderboard matches the distance on your finish screen — there isn't a separate
calculation that can drift.

## How the clock works

- **Mass-start races** are timed from the **gun** (the official start), so
  everyone shares one race clock.
- **Time trials and free rides** are timed from **when you start**.
- **Moving time** subtracts any time you spent **paused**.
- Times are stamped at the moment your start and finish actually happen, so a
  wrong clock on your phone can't make your ride look longer or shorter.

## Late data fills in, but never extends

If you were offline, points that arrive late **fill in** the gaps in your trail —
but only within your start–finish window. Nothing can extend your ride past the
moment you finished. Your result is fixed at the finish.
