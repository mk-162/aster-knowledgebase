---
title: "Event lifecycle and rider statuses"
parent: "For organisers"
nav_order: 6.5
audience: [organiser]
tags: [lifecycle, statuses, reference]
summary: "The states an event moves through, the statuses a rider can have, and what changes each."
last_updated: 2026-09-02
---

# Event lifecycle and rider statuses

A quick reference to the states you'll see on your dashboard and what moves
something from one to the next.

## Event states

| State | Meaning | What you can do | Moves on when… |
|---|---|---|---|
| **Upcoming** | Published, not yet started | Edit most settings, set the timing line, open registration, start it | You start it (or it auto-starts at the scheduled time) |
| **Live** | The event is running | Watch the field, handle Alerts, finish/reset athletes | You finish it, or it's closed out after the cut-off |
| **Finished** | Ended | Publish and export results, view the final leaderboard | None (terminal) |
| **Cancelled** | Called off | View registrants; it won't start | None |
| **Archived** | Historical | Read-only | None |

Some settings lock once the event is live or once athletes have registered, so
set those early. See [Create an event](create-an-event.md).

**Going live.** There's no manual "Go Live" button: an upcoming event goes
live on its own, either at its scheduled start time or on the first athlete's
ping after that time, whichever comes first. The one manual override is
**Start Race Now**, on the manage screen's **Event Day** tab, for firing the
gun yourself on a race instead of waiting for the scheduled time. The
destructive **End Event** control lives on the same tab once the event is
live. If a timing point or checkpoint is still missing, a warning shows on
Event Day explaining the event "won't go live automatically" until you fix
it, with a link to the **Course** tab. Meet-ups don't need this: they don't
carry a timed status the same way, so there's nothing to gate.

The manage screen's tabs are **Summary**, **Event Day** (called **Meet-up
Day** for a meet-up), **Course**, **Registration**, **Sponsors** and
**Danger**. An older "Setup" tab name still works as a link (it redirects to
Event Day) but isn't shown any more.

## Rider statuses

| Status | Meaning |
|---|---|
| **Registered** | Joined the event but hasn't started tracking |
| **Started** | Tracking live |
| **Finished** | Crossed the line, ended their activity manually, or finished at the cut-off |
| **DNF** | Did not finish (only reachable in a ranked format — race or time trial — by abandoning, or by the cut-off, if you set it to DNF) |
| **DNS** | Did not start (registered but never began) |
| **Withdrawn** | The athlete cancelled their own registration before the event; no longer counts against capacity |

## What changes an athlete's status

- **Started:** the athlete taps **Start** and begins tracking.
- **Finished:** in a ranked format (race, time trial) they cross the finish
  line, or you finish them from the dashboard, or the cut-off closes them out
  as finished. In an **unranked** format (sportive / gran fondo,
  point-to-point, meet-up) there's no DNF path for a self-ended activity: an
  athlete who reaches the line/final checkpoint *or* ends early always lands
  as **Finished** (founder decision, 2026-08-05, after a social meet-up
  incorrectly recorded a rider as DNF). See
  [Event formats](event-types.md).
- **DNF:** only possible in a ranked format — the athlete taps **Abandon**
  (behind a confirm/challenge code), you mark them DNF from the dashboard, or
  the cut-off closes them out as DNF. When you set a cut-off, you choose
  whether it marks people **DNF** or **finished** (configurable from the
  Event Day tab after creation); the default is DNF.
- **Withdrawn:** the athlete withdraws their own registration; you can also
  set this manually from the dashboard.
- **Reset:** you can send an athlete back to **Registered** from the
  dashboard, for example so they can start again, which clears their previous
  live state.

## Important

Once an athlete is **Finished**, their result freezes everywhere: marker at
the line, time and position locked. Late GPS data draining off their phone can
complete the trail up to the finish moment but can never change a finisher's
time or position. This is what keeps your published results trustworthy. See
[Why your distance and time are accurate](../safety-and-offline/data-accuracy.md).

<!-- ## Unverified
- A "paused" tracking state exists at the data level (an athlete can pause their own tracking mid-ride), and it's excluded from cut-off processing while active. Confirmed in staging that it does NOT surface as a selectable or filterable status on the organiser dashboard's participant list (Registered / Started / Finished / DNF / DNS / Withdrawn only) — not documented as a distinct status above. -->

