---
title: "Courses, checkpoints and feed stations"
parent: "For organisers"
nav_order: 4.5
audience: [organiser]
tags: [courses, feed-stations, checkpoints, point-to-point, reuse]
summary: "Reuse one course across several events, place point-to-point checkpoints, and mark feed stations along the route."
last_updated: 2026-07-02
---

# Courses, checkpoints and feed stations

Three related tools for shaping where riders go and where support sits on the map.

## Reusable courses (for a series)

If you run several events on the same roads — common when a series has multiple
distances on one weekend — you can define a **course** once and reuse it, instead
of uploading a GPX for every event.

A course is a reusable template that holds:

- The **route shape**.
- The **start and finish** line and lap settings.
- **Feed stations** along the route.

Build it once against your series, then **link** it to as many events as you like.
When you link a course to an event, its route and lines are applied to that event.
**Edit the course once and apply the change to every linked event** — so a
last-minute reroute updates all your distances at once, rather than editing each
event by hand. You can also **pin** an individual component (say, one event's own
finish) so a course update doesn't overwrite it.

This pairs naturally with [festivals](festivals.md), where several distances share
the same roads.

## Checkpoints (point-to-point events)

A **point-to-point** event doesn't use a GPX route. Instead you place named
**checkpoints** on the map — a start, a finish, and any waypoints between. Each
checkpoint has a location and a **detection radius** (10–500 m, 50 m by default).

- The **first checkpoint becomes the start line** for the event.
- As riders pass through each checkpoint's radius, the app records the crossing;
  reaching the final checkpoint finishes them.
- Spectators see the checkpoints on the map.

See [Event formats](event-types.md) for when point-to-point is the right choice.

## Feed stations

Feed stations are named points along the route — aid stations, water stops, feed
zones — each with a **name**, an optional description, a **location**, and an alert
radius. They appear as markers on the event map so riders and spectators can see
where support is.

Add feed stations to a **course** (so every linked event gets them) or to an
**individual event**.

## Good to know

- Editing a course and applying it updates **all** linked events, so double-check
  before pushing a change during an event weekend.
- For a one-off event you don't need a course at all — just upload the GPX (or
  place checkpoints) on the event itself. See
  [Routes, start and finish lines](routes-start-and-finish.md).
