---
title: "Routes, start and finish lines"
parent: "For organisers"
nav_order: 4
audience: [organiser]
tags: [route, gpx, route-builder, my-routes, start, finish, laps]
summary: "Upload a GPX, build a route in the app, or reuse one from your library, then set start and finish lines and add laps."
last_updated: 2026-09-02
---

# Routes, start and finish lines

## Three ways to get a route onto an event

When you add a route to an event, you choose one of three starting points:

- **A saved route from your library** — reuse something you've already built
  or uploaded. See [Your route library](#your-route-library) below.
- **Upload a GPX file** (see below).
- **Build a route in the app** — tap points on a map to draw a line, with no
  file needed at all. See [Building a route in the app](#building-a-route-in-the-app).

None of this is required to create the event: you can add or replace the route
afterwards from the event's **Course** tab.

> **Good to know:** point-to-point events don't use a route line for timing at
> all. You place checkpoints on the map instead, and a route line there is
> purely optional decoration. See
> [Courses and feed stations](courses-and-feed-stations.md).

## Upload a route

Upload your route as a **GPX file**, exported from Strava, Komoot, Garmin or
similar. Aster reads it and works out the distance, elevation profile and the
shape of the course, then shows it on the event map and lets athletes download
it for offline use.

The file needs at least a couple of track points and a route of at least **100
metres** end to end. Files with more than **100,000 track points**, or
malformed files, are rejected with an explanation.

Uploading a new GPX to an event **replaces** whatever route it had before —
built or uploaded. There's one route per event.

## Building a route in the app

Instead of a file, you can draw the route directly on the map:

- **Tap to add points.** Each tap adds a waypoint; by default the app routes
  between points along real roads and paths (**Auto** mode). Switch to
  **Manual** to draw a straight line between points instead — useful off-road,
  or when you're offline, since it needs no routing call.
- **Trace** a line by pressing and dragging across the map in one gesture,
  instead of tapping point by point.
- **Plan a loop**: give a target distance and a rough direction and the app
  generates a round-trip route from your start point, which you can then
  adjust.
- **Edit as you go**: drag a point to move it, long-press the line to insert a
  new point mid-route, tap a point to remove it, tap your start point again to
  close the loop, and **undo** any of these one step at a time.
- **Distance and elevation** update live as you build, calculated the same way
  as an uploaded GPX.

A route built this way, or a GPX-uploaded one, can both be reopened and edited
in the builder later — editing a GPX-based route derives an editable line from
it first (a one-time notice tells you how many points were simplified for
editing).

## Your route library

Every route you build or upload is saved to **My routes**, your personal
library, reachable from your account. From there you can:

- **Reuse** a saved route on a new event or meet-up, without rebuilding it.
- **Duplicate** a route to create an edited variant without touching the
  original.
- **View** a route's detail page: its map, distance, elevation profile and
  description.
- **Edit** or **delete** a saved route (deleting it doesn't affect events that
  already used it — they keep their own copy).
- **Share** a route via a public link that anyone can view and download as
  GPX, no login needed; you can stop sharing it at any time, which breaks the
  link for everyone who has it.
- If you run a club, **save a personal route to the club's library** so other
  club admins can reuse it too.

Attaching a saved library route to an event copies it onto that event; editing
the event's route afterwards (in the builder) doesn't change your library
original, and editing the library original doesn't retroactively change events
that already copied it.

There's no personal GPX-upload path outside an event or a club library — if
you want a personal library copy of a file from Strava or Komoot, upload it to
a club's route library, or build/duplicate it in the app instead.

## Start and finish lines

A **start/finish line** is a point on the map with a **detection radius**: how
close an athlete must get for the app to count them as crossing it.

- When you upload a route, Aster **suggests** a start/finish position from it,
  a single line for a loop, or a separate finish for a point-to-point course.
- You can also **auto-detect** the line from the route, or place it by hand on the
  map. Once you've set it yourself, the automatic suggestion won't overwrite your
  choice.
- Tune the detection radius (**10–500 m**, 50 m by default) to suit the venue.

{% include screenshot-todo.html slug="organisers-start-finish-line-editor" caption="The start/finish line editor on the event's Course tab, the line placed on the route map with its detection radius." %}

When an athlete passes through the line, the app automatically:

- **Single-line events:** marks them **finished** on the first crossing.
- **Multi-lap events:** counts each crossing after the first as a completed lap.
  For a race starting behind the line, the first crossing (leaving the start pen)
  is ignored, so a two-lap race needs three crossings: leave the start, lap
  one, lap two (finished).

> **Important:** timed formats (race, time trial, sportive / gran fondo) need a
> start/finish line set **before the event will go live automatically**.
> Athletes are timed from line to line, so without it no one can be timed.
> Meet-ups are exempt. See [Create an event](create-an-event.md).

## Laps

For circuit events, turn on **laps** and set the lap count when you create the
event. The app counts a lap each time an athlete passes back through the
start/finish zone. If you leave laps off, the first crossing simply finishes
the athlete.

> **Important:** laps can only be set when you create the event — there's no
> way to turn laps on, off, or change the lap count afterwards. Get the count
> right up front, or plan to recreate the event if it needs to change. The
> cutoff, by contrast, can be added or changed at any time from the event's
> **Event Day** tab.

## Reusing a course across several events

If your festival has several events on the same roads, you can build a
**course** once inside that festival (its shape, start/finish and feed stops)
and reuse it across the festival's events, then push edits to all of them at
once. See [Courses and feed stations](courses-and-feed-stations.md).
