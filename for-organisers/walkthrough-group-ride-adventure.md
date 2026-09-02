---
title: "Walkthrough: a meet-up or point-to-point"
parent: "For organisers"
nav_order: 3.3
audience: [organiser]
tags: [walkthrough, meetup, point-to-point, checkpoints]
summary: "Set up a social meet-up or a point-to-point event with checkpoints."
last_updated: 2026-09-02
---

# Walkthrough: a meet-up or point-to-point

This covers two non-race formats: a **meet-up** (social, untimed, everyone
rides or runs together) and a **point-to-point** event (start, finish and
optional waypoints in between, with the athlete picking their own line). In
both, athletes set off individually and it's about taking part, not placing.

## 1. Create the event

When you [create the event](create-an-event.md):

- Pick **Meet-up** for a social, untimed activity together.
- Pick **Point-to-point** for a long-distance adventure with a start, a
  finish and optional waypoints along the way.

Either way, athletes start when they're ready; there's no shared gun.

## 2. Route and landmarks (meet-up)

[Add your route](routes-start-and-finish.md) so athletes and spectators can
see the way. You can then add **Milestones**: named landmarks on the route
(a regroup point, a café stop, a notable climb). Milestones show up on the
map in advance, but who reached one first is never a live leaderboard.
That's part of a meet-up being untimed: results and order only surface
afterwards, in the recap, not during the ride.

## 3. Checkpoints define the course (point-to-point)

A point-to-point event doesn't need a GPX file; your **checkpoints**
define the course:

- Your **first checkpoint** is the start gate.
- Your **last checkpoint** is the finish gate.
- Any **checkpoints in between** are waypoints the athlete has to cross, in
  order.

Athletes register a crossing when their GPS comes within the trigger radius
of a checkpoint (50 m by default, adjustable per checkpoint). You can still
add a GPX route alongside your checkpoints if you want a line on the map,
but the checkpoints, not the route, are what the event actually times
against.

## 4. Timing and cut-offs

A meet-up is **untimed**: athletes end their own activity when they're
done, and nothing about it is ranked or timed. A point-to-point event **is**
timed: an athlete's elapsed time is tracked from their first checkpoint to
their last, and reaching the last checkpoint ends their tracking
automatically. In either format you can set a **cut-off** if there's a hard
course-closing time.

## 5. Registration

Set [registration](registration-and-categories.md) to **Open** for a
one-tap, relaxed sign-up, or **Managed** if you want a capacity, a deadline,
categories or a registration form. Categories are optional: run a single
group, or split by distance.

## 6. On the day

- Athletes **start when they're ready** and are tracked the whole way.
- Spectators follow everyone's live position along the route, and through
  the checkpoints on a point-to-point.
- Athletes can raise an **Alert** if they need help, and you see it on your
  dashboard as usual: see [Handling alerts](handling-sos-alerts.md). Remind
  them an Alert reaches you, the organisers, not the emergency services;
  brief them on that beforehand (see
  [What to tell your riders before the event](brief-your-riders.md)). An
  Alert here can also start automatically: Aster's crash detection watches
  for a hard, sudden stop during this activity too, not just on a Just Ride,
  and raises the same cancellable alert if the athlete doesn't dismiss it.
- For remote adventures, reassure athletes the app keeps recording even
  with no signal and catches up when they reconnect: see
  [What happens when I lose signal?](../safety-and-offline/offline-and-no-signal.md).

## 7. After

Athletes' activities are saved with full routes, stats and a replay. A
point-to-point event that finishes at the last checkpoint can
[publish results](results.md) if you've brought in timing data for it; a
meet-up never has a results page; its value is the live following, the
Milestone recap, and the saved activities.

On a **meet-up**, an athlete who ends early — a mechanical, weather, running
out of daylight — is recorded as **Finished**, never **DNF**: it's untimed,
so there's no standing to fall out of. A **point-to-point** is different: it's
unranked, but still a challenge to complete, so an athlete who ends early
there is recorded as **DNF**, the same as a race or sportive.

## Things to get right

- **On a point-to-point, checkpoint order is the whole mechanism.** The
  first checkpoint starts the clock, the last one stops it, and anything in
  between must be crossed in sequence.
- **Milestones are for a meet-up's story, not its scoring.** Place them at
  meaningful points on the route; they never produce a ranking.
- **Brief athletes on offline behaviour.** On remote routes, reassure them
  the app keeps recording with no signal; their live location just catches
  up when they reconnect.
- **Brief the safety limits.** For self-supported adventures, make sure
  athletes know an Alert reaches *you*, not the emergency services, and
  that they must carry their own means to call for help.
