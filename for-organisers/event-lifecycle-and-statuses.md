---
title: "Event lifecycle and rider statuses"
parent: "For organisers"
nav_order: 6.5
audience: [organiser]
tags: [lifecycle, statuses, reference]
summary: "The states an event moves through, the statuses a rider can have, and what changes each."
last_updated: 2026-06-18
---

# Event lifecycle and rider statuses

A quick reference to the states you'll see on your dashboard and what moves
something from one to the next.

## Event states

| State | Meaning | What you can do | Moves on when… |
|---|---|---|---|
| **Upcoming** | Created, not started | Edit most settings, set the finish line, open registration, start the race | You start it (or it auto-starts at the scheduled time) |
| **Live** | The race is running | Watch the field, handle SOS, finish/reset riders, broadcast | You finish it, or it's closed out after the cut-off |
| **Finished** | Ended | Publish and export results, view the final leaderboard | — (terminal) |
| **Cancelled** | Called off | View registrants; it won't start | — |
| **Archived** | Historical | Read-only | — |

Some settings lock once the event is live or once riders have registered, so set
those early. See [Create an event](create-an-event.md).

## Rider statuses

| Status | Meaning |
|---|---|
| **Registered** | Joined the event but hasn't started tracking |
| **Started** | Tracking live |
| **Finished** | Crossed the line, finished manually, or finished at the cut-off |
| **DNF** | Did not finish — abandoned, or closed out at the cut-off |
| **DNS** | Did not start — registered but never began |

## What changes a rider's status

- **Started:** the rider taps Start and begins tracking.
- **Finished:** they cross the finish line (automatic), tap Finish, you finish
  them from the dashboard, or the cut-off closes them out as finished.
- **DNF:** they abandon, you mark them DNF, or the cut-off closes them out as DNF.
- **Reset:** you can send a rider back to **Registered** from the dashboard — for
  example so they can start again — which clears their previous live state. See
  [Running the event on race day](race-day-management.md).

## Important

Once a rider is **Finished**, their result freezes everywhere — dot at the line,
time and position locked. Late GPS data from their phone can't change a finisher's
result. This is what keeps your published results trustworthy. See
[Why your distance and time are accurate](../safety-and-offline/data-accuracy.md).
