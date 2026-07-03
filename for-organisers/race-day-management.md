---
title: "Running the event on race day"
parent: "For organisers"
nav_order: 6
audience: [organiser]
tags: [dashboard, live, participants, start, broadcast]
summary: "Use the organiser dashboard to start the race, watch riders, fix problems on individual entries, and message participants."
last_updated: 2026-07-02
---

# Running the event on race day

Your **organiser dashboard** is mission control for the day. It lists your
events, highlights any live safety alerts, and shows a live-monitor card for each
running event with participant and alert counts — all refreshing on their own.
From there you drop into the event's live map, its roster, and its manage screen.

## Start the race

For a **race**, press **Start** to fire the gun. That single moment becomes the
official start time every rider's clock runs from — so the leaderboard reflects
the race, not when each person tapped Start in the pen.

If you forget to press it, Aster **auto-starts** the event at its **scheduled
start time** (for races and time trials) so the clock is still honest and the
leaderboard works. Press Start yourself if you want the gun on your own signal.

You can't start until a finish line is set, and you can't restart an event that's
already finished or cancelled. Group rides, point-to-point adventures and
sportives don't use a gun — each rider is timed from their own start.

## Watch the field

- See every rider's **status** (registered, started, finished, DNF, DNS), bib,
  category, team, current lap and last update time.
- Filter the roster by status.
- Watch the same live map and leaderboard your spectators see.

## Fix problems on individual riders

From the roster on the event's manage screen you can act on individual entries:

- **Change a rider's status** with the per-rider dropdown — Registered, Started,
  **Finished**, **DNF** or **DNS**. Use **Finished** for a rider who crossed the
  line while their phone was offline; **DNF** for someone who pulled out. Because
  a status change edits their race record immediately, Aster asks you to confirm
  the consequential ones.
- **Set a rider to Registered** to let them start again — this clears their
  previous attempt's live state.
- **Set a start time by hand** for a rider on a **time trial or sportive** whose
  automatic start crossing was missed or wrong. This is a single field, your
  recourse when the gate didn't catch a rider cleanly.
- **Remove a rider** from the event. You can't remove a rider who's mid-ride — set
  them to Finished or DNF first, so a roster tidy-up can never yank someone off
  the course.

{% include screenshot-todo.html slug="organisers-raceday-roster-row" caption="A roster row on the manage screen — the per-rider status dropdown (Registered / Started / Finished / DNF / DNS), the Set-start-time control for timed formats, and the remove button." %}

## Safety alerts

SOS alerts from riders appear on your dashboard with the rider's last known
location, so you can respond. This has its own guide — see
[Handling SOS alerts](handling-sos-alerts.md).

## Message participants

- **Message riders** — send a push notification (with an optional link) to
  everyone in the event, straight from the dashboard's event card.
- **Post to the event feed** — an update that registered riders and event
  followers see on the event page, and can be notified about.

See [Messaging your riders](messaging-your-riders.md) for when to use each.

## Important: once a rider finishes, they're done

When a rider crosses the line, is cut off, or you finish them by hand, their
result **freezes** — their dot stops at the finish, and their time and position
lock in. Late GPS points that arrive from their phone afterwards can complete the
trail up to the finish but never move a finished rider on the map or change their
result. That's what keeps your results clean.
