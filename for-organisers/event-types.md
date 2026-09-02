---
title: "Event formats"
parent: "For organisers"
nav_order: 3
audience: [organiser, athlete]
tags: [formats, race, time-trial, sportive, gran-fondo, meet-up, point-to-point]
summary: "The five event formats: race, time trial, sportive / gran fondo, meet-up and point-to-point, and how each times, ranks and finishes."
last_updated: 2026-08-28
---

# Event formats

When you create an event you pick a **format**. The format decides how
athletes start, whether they're timed, whether anyone is ranked, and how the
activity ends. It's the one choice that shapes everything else, so it's worth
getting right, and it can't be changed once athletes have registered.

You pick the format from a set of cards. Here they are, in the order you'll
see them.

{% include screenshot-todo.html slug="organisers-event-format-cards" caption="The five format cards in the create-event flow, in order: sportive / gran fondo, meet-up, race, time trial, point-to-point." %}

## Sportive / gran fondo

Athletes are **timed** from crossing the start line to crossing the finish
line, but **nobody is ranked**. Results are published as **personal times
only**, no positions, no podium, no gap-to-leader anywhere. On the live map
and leaderboard, athletes show as **on course** or **finished with an elapsed
time**, never as "1st" or "2nd".

Athletes set off across a **start window** rather than on a single gun, and
each athlete's clock runs from their own line-crossing.

Best for: sportives, gran fondos, and any timed mass-participation activity
that must not be run as a race. This is the right choice whenever you want to
give people a time without turning the day into a competition.

## Meet-up

**No competition, no timing.** Everyone rides or runs together and the app
tracks the group so friends and family can follow along. There's no clock, no
ranking and no finish detection, athletes simply stop when they're done.

Meet-ups are the only format that don't need a start or finish point set
before you publish. See [Create an event](create-an-event.md).

Best for: social club outings, shakeouts, casual get-togethers.

## Race

**Every athlete's clock runs from the gun.** You (or the scheduled start
time) fire the gun, and every athlete is timed from that same moment: an
athlete who crosses the start line fifteen minutes after the gun is still
timed from the gun. Athletes are ranked, positions show live, and the first
across the finish line wins.

Because "race" means something specific here, the app asks you to
**confirm** it when you pick this card, and it points you to **sportive /
gran fondo** if your athletes actually set off in their own time. Choose race
only when everyone starts together.

Best for: closed circuits, criteriums and mass-start road races, and their
running equivalents.

## Time trial

Athletes start **individually** and each is timed on their **own clock** from
the moment they cross the start line. Standings are ranked **fastest first**.

Best for: individual and team time trials, hill climbs.

## Point-to-point

A start, a finish, and any **checkpoints** you place in between, with the
athlete picking their own line between them. Point-to-point events don't need
a GPX route; instead you drop checkpoints on the map, and the first one
becomes the start. This suits long "grand départ"-style adventures where
there's no single fixed course.

Best for: bikepacking grand départs, adventure routes, self-navigated
challenges. See [Courses and feed stations](courses-and-feed-stations.md) for
placing checkpoints.

## How the formats compare

| Format | Timed? | Ranked? | How athletes start | How the activity ends |
|---|---|---|---|---|
| **Sportive / gran fondo** | Yes | No | Across a start window, own clock | Cross the finish line |
| **Meet-up** | No | No | Together, whenever | Athlete stops |
| **Race** | Yes | Yes | Together, on the gun | Cross the finish line |
| **Time trial** | Yes | Yes | Individually, own clock | Cross the finish line |
| **Point-to-point** | No | No | Own time | Reach the final checkpoint |

In every timed format an athlete can also **finish or abandon manually**, and
a **cut-off** (if you set one) closes out anyone still going past the
deadline. See [Finishing a ride](../for-athletes/finishing-a-ride.md) and
[Event lifecycle and rider statuses](event-lifecycle-and-statuses.md).

## Laps

For circuit events (race, time trial, sportive) you can turn on **laps** and
set a lap count. The app counts a lap each time an athlete passes back
through the start/finish zone. Point-to-point events don't use laps: the
athlete follows the checkpoints once. See
[Routes, start and finish lines](routes-start-and-finish.md).

## What this means for spectators

- On a **race** or **time trial**, spectators see live positions and a
  running order.
- On a **sportive / gran fondo** or **meet-up**, spectators see who's on
  course and personal elapsed times, never a placing.

Everyone spectating a public or unlisted event gets the live map, leaderboard,
trails and route with no login. See
[Public, unlisted and private events](../for-spectators/public-unlisted-private-events.md).
