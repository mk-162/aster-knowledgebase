---
title: "Walkthrough: a mass-start race"
parent: "For organisers"
nav_order: 3.1
audience: [organiser]
tags: [walkthrough, race, mass-start]
summary: "Set up and run a mass-start race from scratch, with the gun, the line and the leaderboard."
last_updated: 2026-09-02
---

# Walkthrough: a mass-start race

A race is the classic competitive format: everyone's clock runs from the
gun, and the first across the finish line wins. This walkthrough takes you
through one end to end. For the at-a-glance version see the
[Quick-start checklist](quick-start-checklist.md).

## 1. Create the event as a "Race"

When you [create the event](create-an-event.md), pick the **Race** card.
Aster will ask you to confirm, because a race means every athlete's clock
runs from a single gun. If your athletes actually set off in their own time,
it nudges you towards **Sportive / Gran fondo** instead. Choose Race for a
true mass start.

## 2. Route and finish line

[Build or upload your route](routes-start-and-finish.md). For a loop course, a single
start/finish point is enough; for a point-to-point route, set separate start
and finish lines. Check the **finish-line detection radius** is generous
enough that every athlete's GPS registers the crossing, but not so large it
triggers early.

> A finish line is **required** before you can start a race.

## 3. Start time, time zone and categories

Set the **start time** in the event's local **time zone**. Add your
[categories](registration-and-categories.md) (Pro, Open, age groups). If
different categories set off in waves, give each its own **wave start
time**.

## 4. Cut-off (optional)

If there's a course-closing time, set a **cut-off** and choose whether
athletes still out are marked **DNF** or **finished**. Paused athletes
aren't caught by the cut-off.

## 5. On the day: start the gun

From your [race-day dashboard](race-day-management.md), press **Start** to
fire the gun. That single moment becomes every athlete's start time, so the
leaderboard reflects the race, not when each person tapped Start in the pen.

- If you forget to press it, the event **auto-starts at the scheduled start
  time** so the clock is still honest, but press it yourself if you want the
  gun on your own signal.
- You can't start before a finish line is set, and you can't restart a
  finished race.

## 6. During the race

- Athletes are **finished automatically** as they cross the line; their time
  and position lock in at the crossing.
- Watch the live map and leaderboard. Standings show progress along the
  course with **time gaps** to the leader.
- Handle any **alerts** from your dashboard: see
  [Handling alerts](handling-sos-alerts.md).
- For an athlete whose phone was offline at the line, set their status to
  **Finished** by hand from the roster. See
  [Running the event on race day](race-day-management.md).

## 7. After: results

[Publish results](results.md) to rank finishers within each category, and
export a CSV for your records. Publishing works from whatever timing data
you've recorded for the event; if you're running chip timing, those times
can be brought in through Aster's results integration.

## Things to get right

- **The gun is the clock.** Everyone shares the start time you set by
  pressing Start (or the scheduled auto-start). Don't expect each athlete's
  clock to begin at their own tap.
- **Finish radius.** Too small and someone skirting the edge won't register;
  too large and they could be finished early. Tune it to the venue.
- **Laps.** For a circuit, set the lap count and lap zone so laps are
  counted as athletes pass.
