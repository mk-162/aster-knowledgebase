---
title: "Courses, checkpoints and feed stations"
parent: "For organisers"
nav_order: 4.5
audience: [organiser]
tags: [courses, feed-stations, checkpoints, point-to-point, reuse, my-routes]
summary: "Reuse one course across several events, place point-to-point checkpoints, and mark feed stations along the route."
last_updated: 2026-09-02
---

# Courses, checkpoints and feed stations

Three related tools for shaping where athletes go and where support sits on
the map.

> **Good to know:** this is a different tool from **My routes**, your personal
> route library (see [Routes, start and finish lines](routes-start-and-finish.md#your-route-library)).
> My routes holds a route's *line* for reuse anywhere; a **course** (below)
> belongs to one festival and also carries that festival's start/finish and
> feed stations as a bundle. Checkpoints and feed stations are always placed
> here, on the event's **Course** tab — the in-app route builder only draws
> the route line, it has no controls for either.

## Reusable courses (for a festival)

A **course** belongs to a [festival](festivals.md): if your festival has
several events on the same roads (common when a weekend offers multiple
distances), you can define a course once inside that festival and reuse it
across its events, instead of uploading a GPX for every one. Courses aren't a
general-purpose library across all your events, they live inside the festival
that shares the roads.

A course is a reusable template that holds:

- The **route shape**.
- The **start and finish** line and lap settings.
- **Feed stations** along the route.

Build it once against your festival, then **link** it to as many of that
festival's events as you like. When you link a course to an event, its route
and lines are applied to that event. **Edit the course once and apply the
change to every linked event**, so a last-minute reroute updates all your
distances at once, rather than editing each event by hand. You can also
**pin** an individual component (say, one event's own finish) so a course
update doesn't overwrite it.

## Checkpoints (point-to-point events)

A **point-to-point** event doesn't use a GPX route. Instead you place named
**checkpoints** on the map: a start, a finish, and any waypoints between. Each
checkpoint has a location and a **detection radius** (10 to 500 m, 50 m by
default).

- The **first checkpoint becomes the start line** for the event.
- As athletes pass through each checkpoint's radius, the app records the
  crossing; reaching the final checkpoint finishes them.
- Spectators see the checkpoints on the map.

See [Event formats](event-types.md) for when point-to-point is the right choice.

## Feed stations

Feed stations are named points along the route (aid stations, water stops,
feed zones), each with a **name**, an optional description, a **location**,
and an alert radius (200 m by default). They appear as markers on the event
map so athletes and spectators can see where support is.

Add feed stations to a **course** (so every linked event gets them) or to an
**individual event**.

## Good to know

- Editing a course and applying it updates **all** linked events, so double-check
  before pushing a change during an event weekend.
- For a one-off event you don't need a course at all — just upload a GPX,
  build a route in the app, or reuse one from your library (or place
  checkpoints, for point-to-point) directly on the event itself. See
  [Routes, start and finish lines](routes-start-and-finish.md).
