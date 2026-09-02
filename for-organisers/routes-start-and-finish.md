---
title: "Routes, start and finish lines"
parent: "For organisers"
nav_order: 4
audience: [organiser]
tags: [route, gpx, start, finish, laps]
summary: "Upload a route, set start and finish lines, tune detection, and add laps."
last_updated: 2026-08-28
---

# Routes, start and finish lines

## Upload a route

Upload your route as a **GPX file**. Aster reads it and works out the distance,
elevation profile and the shape of the course, then shows it on the event map and
lets athletes download it for offline use.

The file needs at least a couple of track points and a route of at least **100
metres** end to end. Files with more than **100,000 track points**, or
malformed files, are rejected with an explanation.

> **Good to know:** point-to-point events don't use a GPX at all. You place
> checkpoints on the map instead. See
> [Courses and feed stations](courses-and-feed-stations.md).

## Start and finish lines

A **start/finish line** is a point on the map with a **detection radius**: how
close an athlete must get for the app to count them as crossing it.

- When you upload a route, Aster **suggests** a start/finish position from it,
  a single line for a loop, or a separate finish for a point-to-point course.
- You can also **auto-detect** the line from the route, or place it by hand on the
  map. Once you've set it yourself, the automatic suggestion won't overwrite your
  choice.
- Tune the detection radius (**10–500 m**, 50 m by default) to suit the venue.

{% include screenshot-todo.html slug="organisers-start-finish-line-editor" caption="The start/finish line editor on the event setup page, the line placed on the route map with its detection radius." %}

When an athlete passes through the line, the app automatically:

- **Single-line events:** marks them **finished** on the first crossing.
- **Multi-lap events:** counts each crossing after the first as a completed lap.
  For a race starting behind the line, the first crossing (leaving the start pen)
  is ignored, so a two-lap race needs three crossings: leave the start, lap
  one, lap two (finished).

> **Important:** timed formats (race, time trial, sportive / gran fondo) need a
> start/finish line set **before you can publish**. Athletes are timed from
> line to line, so without it no one can be timed. Meet-ups are exempt. See
> [Create an event](create-an-event.md).

## Laps

For circuit events, turn on **laps** and set the lap count. The app counts a lap
each time an athlete passes back through the start/finish zone. If you leave
laps off, the first crossing simply finishes the athlete.

## Reusing a course across several events

If your festival has several events on the same roads, you can build a
**course** once inside that festival (its shape, start/finish and feed stops)
and reuse it across the festival's events, then push edits to all of them at
once. See [Courses and feed stations](courses-and-feed-stations.md).
