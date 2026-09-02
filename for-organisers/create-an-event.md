---
title: "Create an event"
parent: "For organisers"
nav_order: 2
audience: [organiser]
tags: [events, setup, privacy, timezone, publish]
summary: "Step through creating an event: host, activity, format, privacy, timing, then add the route and go live."
last_updated: 2026-09-02
---

# Create an event

Creating an event is **free**, and you can build and preview it fully before
anyone joins. This is the big-picture walkthrough; each part links to a
detailed guide.

## Before the form: you need a host

If you don't already own or admin an organiser account or a club, you land on
a **"You need a host"** screen with two doors: **Event organiser** (see
[Become an organiser](become-an-organiser.md)) or **host as a club** (create
one first). Pick whichever fits, then come back to create the event.

## What you fill in

The create form is a single page, organised into four numbered sections. It
leads with the format, because that choice shapes everything else.

1. **What are you scheduling?** Pick **Ride** or **Run**, then the **format**:
   every format is shown as a card and none is preselected, you must pick one
   before you can save. The order you'll see them in: meet-up, sportive / gran
   fondo, race, time trial, point-to-point. See [Event formats](event-types.md).
   Picking **Race** opens a confirmation step first (with an open-roads
   disclaimer) because "race" means something specific here; it offers an
   escape hatch to **sportive / gran fondo** if your athletes actually set off
   in their own time. **Choose privacy** here too: public, unlisted or
   private, defaulting to **unlisted** so a route-less, just-created event
   isn't pushed into discovery before it's ready. See
   [Public, unlisted and private events](../for-spectators/public-unlisted-private-events.md).
   The format is set now and **can't be changed later** — it decides whether
   there's a clock at all, so pick carefully.
2. **What's it called?** Give the event a name and an optional one-line
   description (shown on event cards), pick which organiser account or team
   **hosts** it (this is fixed once created, so pick the right one, see
   [Become an organiser](become-an-organiser.md)), and optionally mark it as
   **part of a festival** (a day or weekend with several events) or leave it
   as a **one-off**. Attach it to an existing festival or name a new one
   inline. See [Festivals and series](festivals.md). A longer "About"
   description goes here too.
3. **When is it?** Set the date, start time and the event's **local time
   zone** — the app auto-detects your zone and shows it as a one-line summary
   ("detected"); tap **Change** to pick a different one. If detection fails,
   it assumes a default zone and flags it as "(assumed)" rather than guessing
   silently — check it.
4. **Route and distance.** For **point-to-point**, checkpoints define the
   course (added on the next screen); a GPX route line here is optional
   decoration, collapsed behind an "Add a route line anyway" toggle. For every
   other format, add a route now or skip it: **a saved route from your
   library** (if you have one), **upload a GPX**, or **build one in the app**
   — see [Routes, start and finish lines](routes-start-and-finish.md). None of
   this blocks saving; you can add or change the route from the next screen.
   Also here: an optional **advertised distance** (the headline number you
   promote; the real measured distance comes from your route or checkpoints),
   a **laps** toggle for circuit events (hidden for point-to-point and
   meet-up), and a **tracking cutoff** toggle (hidden for meet-up only — a
   wall-clock deadline; anyone still tracking after it closes them out
   automatically, marked DNF or finished depending on how you set it later
   from the manage screen).

If you navigate away with unsaved changes, a **"Discard this event?"** prompt
protects you from losing them.

Save, and — for most formats — you land straight on the event's management
screen to fill in the rest (route, categories, images). If the format needs a
start/finish line and you haven't set one yet, a warning appears first:
*"This event needs a start/finish line… it will NOT start without one"* —
accepting takes you straight to the **Course** tab to set it. If you chose
"build a route", you go to the in-app route builder instead, and land on the
management screen once you save there.

## Then: finish the setup

The event's management screen is where the rest lives, split across tabs:

- **Course** — the route (upload, build, or reuse a saved one), the start and
  finish line, laps, and (for point-to-point) checkpoints and feed stations.
- **Registration** — categories, capacity, the registration form, and bib
  assignment.
- **Event Day** (**Meet-up Day** for a meet-up) — schedule, cut-off, and the
  manual **Start Race Now** override.
- **Summary** — name, description and images.

See [Routes, start and finish lines](routes-start-and-finish.md) and
[Registration and categories](registration-and-categories.md).

## Going live

There's no manual "publish" or "Go Live" button any more. An event goes live
on its own — a race or time trial at its scheduled start, any format on the
first athlete's ping after that, and a meet-up from its own schedule — so
there's nothing to remember to switch on.

- **Timed formats need their timing point first.** Race, time trial and
  sportive / gran fondo won't go live automatically until you've set the
  start/finish line — athletes are timed from line to line, so without it no
  one can be timed. **Meet-ups are exempt** (they're untimed). Point-to-point
  events need at least one checkpoint. If something's missing, the event's
  **Event Day** tab shows it won't go live automatically until you fix it,
  with a link straight to the **Course** tab.
- **The one manual override is the race gun.** On a race, you can tap **Start
  Race Now** on the Event Day tab to fire the gun yourself instead of waiting
  for the scheduled time.
- **There's no fee to take an event live.** What decides how many athletes
  can register, and whether the event shows in public discovery, is your
  subscription. Without an active **Event Organiser** subscription an event
  can't take any registrations at all; subscribing lifts that to the tier you
  choose (100, 500 or 1,000 registrations, or a larger enterprise cap). See
  [Registration and categories](registration-and-categories.md).

## Important

- **Always set the correct time zone.** Leaving it wrong makes the start clock and
  reminders fire at the wrong moment.
- **The format locks the moment you create the event**, and the host locks too
  — decide both before you save.
- **Laps can only be set at creation.** Unlike the cutoff (editable later from
  Event Day), there's no way to turn laps on, off, or change the count once
  the event exists — get the lap count right up front.

## After creating

You can edit most settings up to the start. Some lock at creation (format,
host); others lock once athletes have registered (for example how people
join). The event then moves through its lifecycle, see
[Event lifecycle and rider statuses](event-lifecycle-and-statuses.md).
