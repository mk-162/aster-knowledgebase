---
title: "Finishing a ride"
parent: "For athletes"
nav_order: 5
audience: [athlete]
tags: [finish, dnf, cutoff, results]
summary: "The ways a ride ends — crossing the line, abandoning, a cut-off, or sliding to end — and what freezes afterwards."
last_updated: 2026-09-02
---

# Finishing a ride

How a ride ends depends on whether you're in an **event** or on a **Just Ride**.

## Ending an event ride

How an event ride ends depends on the event's **format**. Race and time
trial are ranked; sportive and point-to-point are timed but unranked; a
meet-up is untimed. Unranked doesn't mean DNF-free, though — a sportive or
point-to-point is still a challenge you can fail to complete. See
[event types](../for-organisers/event-types.md).

**Race and time trial** (both ranked) have a real finish line, so ending is
either decided for you or deliberately protected against a pocket-tap:

- **You cross the finish line.** The app detects the crossing from your
  position and finishes you automatically — no button to tap. You'll see a
  **finish banner** on the tracking screen, then a results screen with your
  time, distance, average speed and, on a multi-lap event, your lap splits.
- **The cut-off passes.** If the organiser set a cut-off time, anyone still out
  past it is closed out automatically — recorded as DNF or as finished, whichever
  the organiser chose. Athletes who are **paused** aren't caught by the cut-off.
- **You abandon.** If you need to pull out early, tap **Abandon** and confirm
  by typing a 4-digit code shown on screen. You're recorded as **DNF** (did
  not finish). This is deliberate friction so a pocket-tap can't end your
  ride, and nothing in the notification tray can end it either. On a time
  trial there's no pre-start grace period the way a race has before its gun
  — Abandon is the only early exit from the moment you tap Start, and it's
  always a DNF.

**Sportive.** A sportive is timed like a time trial — your time runs from
crossing the start line to crossing the finish, and crossing the finish
line ends your tracking automatically, the same finish-line detection as a
race or TT. It's **unranked** — no positions, no podium, personal times
only — but unranked doesn't mean DNF-free: a sportive is a challenge, and if
you stop early instead of reaching the line, that's recorded as a **DNF**,
the same as abandoning a race. If you'd rather not wait on the app to catch
your line-crossing, or you're stopping early, use the **slide-to-end**
control.

**Point-to-point.** Timed the same way as a sportive — your elapsed time
runs from your first checkpoint to your last — but with checkpoints instead
of a route line. Reaching the final checkpoint ends your tracking
automatically, the same as crossing a finish line. Stopping before that is
also a **DNF**, for the same reason as a sportive: it's a challenge to
complete, not a race to rank.

**Meet-up** has no finish line and no DNF — no gun, no gate, no course end
to detect. You end it the same way as a Just Ride: with the **slide-to-end**
control on the tracking screen — *slide to end ride* (or *run*) — whenever
you decide you're done, and it's always recorded as **Finished**. (An
organiser can still mark you DNF by hand from their dashboard, or by a
cut-off if they've set one — but nothing about ending your own meet-up ever
does.)

Depending on the event, you may be able to rejoin after abandoning — start again
from the event page. See [Register for an event](register-for-an-event.md).

{% include screenshot-todo.html slug="for-athletes-finish-results-screen" caption="The auto-finish results screen: Finished! header, total time, distance and average speed, lap splits, and Share result / Results / Leaderboard buttons." %}

## Ending a Just Ride

A Just Ride ends when **you** use the **slide-to-end** control — *slide to end
ride* (or *run*) — that's the only thing that ends it. There's no finish line
and no cut-off. Your ride saves to your history with its distance, time and
average speed. See [Just Ride](free-rides.md).

## What "finished" means

The instant a ride ends — line crossing, cut-off, DNF, or sliding to end — it's
**frozen everywhere at the same moment**. Your distance, time and position lock
in. That's true on your own screen, on the leaderboard, and in the replay. No
timer keeps ticking, and no later GPS points extend your trail past the finish.

On the **live spectator map**, a finished rider's marker **fades out over about
2.5 seconds and then clears** — the live map is there to show who's still on
course. Your result itself doesn't disappear: it stays frozen on the leaderboard
and results, and in the replay. See
[Why your distance and time are accurate](../safety-and-offline/data-accuracy.md).

## Finishing offline

If you finish or stop with no signal, the app records the **exact moment you
finished** on your phone. Hours later, when signal returns, your ride uploads
carrying that original finish time — so your result reflects when you actually
finished, not when your phone reconnected. Any points your phone recorded after
you finished are discarded, so your trail ends cleanly at the line, and any
points from *before* the finish that were still queued fill your trail back in.

## Troubleshooting

- **I crossed the line but it still says I'm racing.** Automatic finish needs a
  moment, and if you're offline it can't confirm until you reconnect — reopen the
  app with signal. If it still hasn't fired, the organiser can finish you from
  their dashboard.
- **My save failed with no signal.** You'll see a retry prompt. Your finish time
  is already safe on the phone; tap retry when you have signal and it syncs with
  the correct time. Nothing is lost in the meantime.
