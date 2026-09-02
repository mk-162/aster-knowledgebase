---
title: "Starting and tracking a ride"
parent: "For athletes"
nav_order: 2
audience: [athlete]
tags: [tracking, gps, start, race, time-trial, sportive]
summary: "How to start tracking an event, what the live screen shows, and how your clock works in each event format."
last_updated: 2026-09-02
---

# Starting and tracking a ride

This covers tracking an **event** you've registered for. For personal
tracking, see [Just Ride](free-rides.md).

## Start tracking

1. On the **Go Live** tab, your registered event shows as a card — **Your
   event**. Tap **Start [event name]**. (If the button shows "Opens in…", the
   start window hasn't opened yet — see below. In the last hour before a
   mass-start race's gun, the card also shows a "Starts in M:SS" countdown.)
2. The app does a short **GPS warm-up** (about 15 seconds, a little longer if
   it's still waiting for an accurate fix) so your first position is right —
   you're away once the fix looks good.
3. You're now tracking. What happens next depends on the event format —
   see "How the clock works" below.

An event **starts on the Standard [battery mode](battery-modes.md)** with
automatic fall-back switched on — there's no battery-mode question at the start
line. You can change battery mode mid-ride if you need to.

> **You can start with no signal.** Starting works fully offline — the app
> uses your phone's GPS and your saved copy of the event. Your positions are
> stored on the phone and sync when signal returns.

## How the clock works

- **Mass-start race** — you're **armed**, not racing, until the gun. The
  screen shows **ARMED**, waiting for the start; in the last hour before the
  gun you'll also see a "starts in…" countdown, and in the final five seconds
  you get tick beeps and a big count, then **GO!** with a beep and a buzz.
  Your race clock is anchored to the **gun**, the same official start moment
  for every athlete — not to the instant you tapped Start. Points recorded
  before the gun don't count.
- **Time trial and sportive** — your official time runs from when you
  physically **cross the start line** to when you cross the finish, not from
  when you tapped Start. You'll see "Start line crossed — clock is running!"
  as you set off. Warm-up wandering before the line doesn't count. Crossing
  the finish line ends your tracking automatically, the same as a race. (In a
  sportive there are no published positions and no DNF — see
  [event types](../for-organisers/event-types.md) and
  [Finishing a ride](finishing-a-ride.md).)
- **Meet-up and adventure (grand départ)** — your time runs from the
  moment you start. No gun, no gate.
- **Distance** is measured from the GPS points recorded between your start
  and now. **Average speed** is distance ÷ time.

## The live screen

While you're out you'll see:

- **The map** with your live location and the trail behind you, the route line,
  and — in an event — other athletes' markers.
- **Live stats:** battery, distance, current speed, time and average speed.
- A **health pill** summarising GPS, connectivity and battery state at a
  glance.
- Buttons for **I'm OK**, **Alert**, **Pause**/**Resume**, and an end control
  that depends on the format:
  - **Race** — before the gun, **Cancel start** backs you out cleanly and
    keeps you registered, no DNF. Once the gun's gone, the only early exit is
    **Abandon**, which is a DNF.
  - **Time trial** — **Abandon** is the only early exit, from the moment you
    tap Start. There's no pre-gun grace period like a race has, since a TT
    has no gun — abandoning before you've even crossed the start line still
    records a DNF.
  - **Sportive, meet-up or grand départ** — **slide-to-end**, whenever you're
    done. These formats never record a DNF, so there's no challenge-code
    friction to guard against a stray tap.

{% include screenshot-todo.html slug="for-athletes-tracking-live-screen" caption="The tracking screen mid-event: map with your live location and trail, stat cards, and the I'm OK / Alert / Pause / Abandon buttons." %}

## During the ride

- **Pause** when you stop for a mechanical, a café or a nature break — it
  freezes your distance and moving time. See
  [Pausing and resuming](pausing-and-resuming.md).
- Tap **I'm OK** to reassure your watchers if you've been stationary a while.
  (Sending it needs signal; the app tells you if it couldn't go.)
- Tap **Alert** in an emergency. You'll confirm, then have a short cancellable
  countdown before it actually sends, so a pocket-tap can't fire it by mistake.
  It alerts the event organisers with your location; it does **not** contact
  emergency services, and it never ends your ride. See
  [Alert and crash detection](../safety-and-offline/sos-and-crash-detection.md).
- **Automatic crash detection** runs during events too, the same as on a Just
  Ride: if your speed drops from fast to a dead stop, the app starts the same
  cancellable countdown and, if you don't cancel, raises a crash Alert to the
  event organisers.
- **Open the app on another device** (say the web app) while your phone is
  tracking and you'll see a **"You're live on your other device"** strip with
  a link to watch your own tracking. It's read-only reassurance: your ride
  keeps running on the phone, and a second device can't stop or end it. You
  can still sign out on that second device without affecting the ride.

## Important

- **The app never ends your ride on its own.** It won't stop because you
  paused, lost signal, your phone got killed in the background, or a network
  request failed. Your ride continues until **you** stop or abandon it, you
  cross the finish line, or the organiser's cut-off time passes. See
  [Finishing a ride](finishing-a-ride.md) and
  [What happens when I lose signal?](../safety-and-offline/offline-and-no-signal.md)
- **The app never signs you out mid-ride.** If your login needs refreshing
  you'll see a gentle banner, but your ride keeps recording.
- **The tracking notification can't end your ride.** It shows a single
  "Finish…" action that just opens the app on your end screen — tapping it
  doesn't stop tracking by itself. Nothing in your pocket or on your lock
  screen can end the ride on its own.

## Troubleshooting

- **The Start button shows "Opens in…".** The start window opens shortly
  before the event: about 1 hour before mass-start races, 15 minutes before
  time trials and sportives, 2 hours before grand départs, and a full 24
  hours before meet-ups (going early is a real recorded start — see
  [Register for an event](register-for-an-event.md)).
- **GPS warm-up is slow.** Step into the open, away from buildings or tree
  cover; you're away once accuracy looks good.
- **I armed for the wrong race.** Before the gun, tap **Cancel start** — you
  stay registered and can start again any time before the gun.
