---
title: "Walkthrough: a sportive or gran fondo"
parent: "For organisers"
nav_order: 3.15
audience: [organiser]
tags: [walkthrough, sportive, gran-fondo, timed, neutral]
summary: "Set up a mass-participation timed activity that records personal times but never a ranking."
last_updated: 2026-09-02
---

# Walkthrough: a sportive or gran fondo

A sportive (or gran fondo) is a **timed mass-participation activity**, not a
race. Every athlete gets their own time from crossing the start line to
crossing the finish line, using the same start-to-finish timing as a time
trial, but Aster **never publishes a ranking or a position** for these
events. That's built in, not a setting you have to remember, so a sportive
stays a sportive. This walkthrough sets one up end to end.

## 1. Create the event as a "Sportive / Gran fondo"

When you [create the event](create-an-event.md), pick the **Sportive / Gran
fondo** card. It's near the top of the list on purpose: many organisers
reach for "Race" out of habit when they actually mean this. On Aster this
format:

- Times each athlete from their start-line crossing to their finish-line
  crossing.
- Publishes **personal times only**, no overall or category positions
  anywhere.
- Shows neutral live status: athletes appear as **on course** or
  **finished**, with elapsed time, never as ranked positions.
- Never sends "you're 3rd" or gap-to-leader style notifications.

If you genuinely want a competitive event with placings, choose Race or Time
trial instead.

## 2. Route, start and finish

[Build or upload your route](routes-start-and-finish.md) and set the
**start** and **finish** lines. Because timing runs from each athlete's own start
crossing, place the start line where athletes are up to speed and the line
is unambiguous. Timed formats need this timing geometry in place before the
event can go live.

## 3. Categories and waves

Add your [categories](registration-and-categories.md) if you're running
distances or start groups. Categories still let athletes filter to their own
group; they just don't produce a ranking. If athletes set off in waves, set
**wave start times**.

## 4. Cut-off (optional)

If there's a course-closing time, set a **cut-off** and choose whether
athletes still out are marked **DNF** or **finished**. Because a sportive is
neutral by design, most organisers choose finished here too, in line with
how an early end is handled below. Paused athletes aren't caught by the
cut-off.

## 5. Registration

Set [registration](registration-and-categories.md) to **Open** for one-tap
sign-up, or **Managed** for capacity, a deadline and a form. **Ballot** is
there if you're oversubscribed and want to run a draw.

## 6. On the day

- Athletes **start when they cross the line** and are timed individually.
- They're **finished automatically** at the finish line.
- The live view shows everyone as **on course** or **finished** with their
  elapsed time, no leaderboard positions.
- An athlete who pulls out early is recorded as **Finished**, never
  **DNF**: a sportive has no DNF concept, since there's no ranking to fall
  out of.
- Handle any **alerts** from your dashboard: see
  [Handling alerts](handling-sos-alerts.md).
- If an athlete's start crossing was missed, you can **set their start time
  by hand** from the roster. See
  [Running the event on race day](race-day-management.md).

## 7. After: results

[Publish results](results.md). For a sportive the published page is
**neutral**: athletes find their name and read their own time; there are no
positions, and the CSV export carries none either. Athletes can filter to
their own gender or age group and optionally sort those by time for
context, but Aster never awards a place.

## Things to get right

- **It's a timed activity, not a race.** No positions, no podium, no gaps.
  That's the whole point of the format, and it's why UK sportives can use
  it.
- **Start-line placement is the timing point**, just as in a time trial.
- **Set the timing lines before going live.** A timed format needs them.
