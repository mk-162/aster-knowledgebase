---
title: "Event lifecycle and rider statuses"
parent: "For organisers"
nav_order: 6.5
audience: [organiser]
tags: [lifecycle, statuses, reference]
summary: "The states an event moves through, the statuses a rider can have, and what changes each."
last_updated: 2026-07-03
---

# Event lifecycle and rider statuses

A quick reference to the states you'll see on your dashboard and what moves
something from one to the next.

## Event states

| State | Meaning | What you can do | Moves on when… |
|---|---|---|---|
| **Upcoming** | Published, not yet started | Edit most settings, set the timing line, open registration, start it | You start it (or it auto-starts at the scheduled time) |
| **Live** | The event is running | Watch the field, handle SOS, finish/reset riders | You finish it, or it's closed out after the cut-off |
| **Finished** | Ended | Publish and export results, view the final leaderboard | — (terminal) |
| **Cancelled** | Called off | View registrants; it won't start | — |
| **Archived** | Historical | Read-only | — |

Some settings lock once the event is live or once riders have registered, so set
those early. See [Create an event](create-an-event.md).

**Going live.** On the manage screen, **Go Live** is the primary button that takes
an upcoming event live; the destructive **End Event** control sits separately
below it so the two can't be confused. If a timing point or checkpoint is still
missing, the blocking reason shows inline beneath Go Live, with a link to the
Course tab. The manage screen also opens on the right tab for where the event is:
**Setup** while it's still being configured, and **Race Day** once it's set up or
already live.

## Rider statuses

| Status | Meaning |
|---|---|
| **Registered** | Joined the event but hasn't started tracking |
| **Started** | Tracking live |
| **Finished** | Crossed the line, finished manually, or finished at the cut-off |
| **DNF** | Did not finish — abandoned, or closed out at the cut-off |
| **DNS** | Did not start — registered but never began |

## What changes a rider's status

- **Started:** the rider taps **Start** and begins tracking.
- **Finished:** they cross the finish line (automatic in timed formats), tap
  **Finish**, you finish them from the dashboard, or the cut-off closes them out
  as finished.
- **DNF:** they tap **Abandon**, you mark them DNF, or the cut-off closes them out
  as DNF. (When you set a cut-off, you choose whether it marks people **DNF** or
  **finished** — the default is DNF.)
- **Reset:** you can send a rider back to **Registered** from the dashboard — for
  example so they can start again — which clears their previous live state.

## Important

Once a rider is **Finished**, their result freezes everywhere — dot at the line,
time and position locked. Late GPS data draining off their phone can complete the
trail up to the finish moment but can never change a finisher's time or position.
This is what keeps your published results trustworthy. See
[Why your distance and time are accurate](../safety-and-offline/data-accuracy.md).
