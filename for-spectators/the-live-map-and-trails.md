---
title: "Reading the live map and trails"
parent: "For spectators"
nav_order: 2
audience: [spectator]
tags: [map, trail, live, markers]
summary: "What the markers, trails and gaps on the map mean, and how live updates behave."
last_updated: 2026-07-20
---

# Reading the live map and trails

## Live positions

Each athlete is a coloured **marker** at their latest known position. Markers
move in near real time as athletes send their location. Tap a marker (or a name
in the list) to focus on that athlete — the map follows them and their stats
appear.

A paused athlete's marker stays on the map — they're still out on course, just
stopped. On races and time trials, markers appear once athletes are under way;
on sportives, they appear from the moment an athlete arms their tracking, so you
can watch someone roll to the start.

{% include screenshot-todo.html slug="spectators-map-dots-and-trails" caption="The Map tab with several rider markers on the route, one selected rider showing their trail and stats." %}

## Taming a busy map

On big events the map can be a wall of markers. Two tools help:

- **Star your favourites.** Tap the star next to any athlete to add them to
  your favourites for this event. Tapping a rider's row anywhere in the list
  also adds them — a quick tap to keep an eye on one rider. (To remove one, tap
  its star again.) Stars work **without an account** — they're remembered on
  your device — and they drive the ★ favourites filter on the list and the map.
- **All riders / Top 10 toggle.** Switch the map from everyone to just the
  leaders plus your starred favourites.
- **Category chips.** Hide or show whole categories at once. The chips are
  shared with the [Riders list](the-leaderboard.md), so the markers and the
  list always match.

You can also filter the list by team or name search.

## Trails

A **trail** is the line showing where an athlete has been. It's drawn from the
GPS points their phone has recorded, and it grows as they go.

### Why trails sometimes have gaps

If an athlete loses phone signal, their points can't upload until they
reconnect, so the trail shows a **break** and then resumes. A gap simply means
"no live data through here" — usually a dead zone. When their phone catches
up, the missing section fills in.

A break also appears wherever an athlete **paused and moved** before resuming —
that's an accurate picture, not an error. Aster never draws a straight line
between two places an athlete didn't actually travel between.

## Live updates

- Positions stream live while you have the page open. If your own connection
  drops, the map reconnects and catches up — the marker snaps to the current
  position rather than replaying the gap.
- On very long events the trail you see on the map is the most recent stretch
  of riding; the athlete's full track is always preserved in their saved ride.

## Catch up: rewind a live race

Want to see how a move played out, or catch a start you missed? On any live
event, tap **Catch up** to rewind and watch the race from earlier, with playback
controls — play/pause, scrub the timeline, and a speed like **2×**. When you're
done, tap **View live** to jump straight back to now. It's the same event, just
wound back — the markers, trails and standings all replay together.

## Finished athletes freeze

The moment an athlete finishes — crossing the line, hitting a cutoff, a DNF or
an abandon — their result **freezes everywhere**. Their time, distance and trail
lock in at that moment, and even if their phone keeps sending points afterwards
(driving home, for example), those are ignored.

On the **live map specifically**, a finished rider's marker holds at the line,
then **fades out over about 2.5 seconds and is removed**. The live map is for
who's still on course, so it clears riders as they finish. Their frozen result
doesn't disappear — it stays on the [leaderboard](the-leaderboard.md), the
Riders tab, [compare](comparing-riders.md), the results and the replay. See
[Why your distance and time are accurate](../safety-and-offline/data-accuracy.md).
