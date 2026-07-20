---
title: "SOS and crash detection"
parent: "Safety & offline"
nav_order: 1
audience: [athlete, spectator, organiser]
tags: [sos, crash, safety, emergency]
summary: "How to raise the alarm, exactly who gets alerted, and what SOS can and cannot do."
last_updated: 2026-07-20
---

# SOS and crash detection

Aster has two ways to raise the alarm if something goes wrong on a ride or
run: a manual **SOS** button, and automatic **crash detection** on Just Rides.

Before anything else, the honest bit — and the app tells you the same thing
the first time you open SOS:

> **SOS alerts the people watching your ride. It does not contact the
> emergency services**, and it does not guarantee anyone will respond. It's an
> aid, not a safety device. Always carry your own means to call for help.

## Who gets your SOS

- **In an event**, your SOS goes to the **event organisers** — it appears on
  their race-day dashboard with your exact location, and if nobody
  acknowledges it within a couple of minutes they're alerted again. It's
  handled discreetly: spectators don't see it. See
  [Handling SOS alerts](../for-organisers/handling-sos-alerts.md).
- **On a Just Ride**, your SOS goes to **your watchers** — everyone following
  your ride through your watch link. Before you send, the app shows how many
  people that is. **If nobody is watching, it says so plainly**: an alert
  would reach nobody, and if you need urgent help you should call 999.

There are no other recipients. Aster doesn't hold a separate list of
emergency contacts — see
[Who gets alerted when you need help](emergency-contacts.md).

## Sending an SOS

1. While tracking, tap the red **SOS** button (**SOS — Alert organisers** in
   an event, **SOS — Alert my watchers** on a Just Ride).
2. To rule out pocket-taps, you confirm by typing a 4-digit code shown on
   screen.
3. Your current location is captured and sent.

Once it's sent, the confirmation screen offers a one-tap **Call emergency
services** button — if you need real help and have signal, that call is yours
to make (999 in the UK, 112 across the EU); Aster can't make it for you.

{% include screenshot-todo.html slug="safety-sos-send-modal" caption="The SOS confirmation flow on the tracking screen, ending on the sent state with the Call emergency services button and 'Cancel SOS (False Alarm)'." %}

A few things worth knowing:

- **SOS never ends your ride.** You stay tracked, which is exactly what you
  want if help is coming — the people responding keep seeing your position.
- **SOS works while paused.** A mechanical or a café-stop incident still
  counts.
- **False alarm?** Tap **Cancel SOS (False Alarm)** — the people who were
  alerted are told it's cancelled.
- **If the alert can't reach the server** (no signal), the app tells you
  clearly that your watchers have **not** been alerted, so you're never left
  assuming help is on the way when it isn't.

There's also a green **I'm OK** button to reassure the people watching if
you've been stationary for a while and someone might be worrying.

## Sharing your phone number

By default, an SOS carries your location but not your phone number. If you'd
like the people handling your alert to be able to ring you, open your profile
editor, fill in **Emergency phone**, and tick **Show my phone number to SOS
recipients**. The number is revealed only alongside an SOS — it's never shown
on your public profile.

## Automatic crash detection (Just Rides)

On a Just Ride, Aster watches your GPS speed for the signature of a crash:
moving at roughly 20 km/h or more, then stopping almost instantly. If that
happens:

1. An **alarm sounds** and your phone vibrates.
2. A **60-second countdown** appears.
3. If you don't cancel in time, a crash SOS goes to your watchers
   automatically — same recipients, same rules as a manual SOS, flagged as a
   possible crash.

Kerb hop, dropped phone, emergency stop for a sheep? Tap **I'm OK — Cancel**
during the countdown and nothing is sent. Crash detection never stops your
ride — if you did come off, your live location staying visible is what helps
people find you.

Crash detection runs on Just Rides only; it isn't active in events.

## What a watcher sees

If someone you're watching raises an SOS, a red banner appears at the top of
the watch page — no login needed:

- who triggered it, and whether it was a possible crash
- their **last-known location**, as a link you can open in your maps app
- what to do: **try to contact them first**; if you can't reach them, **call
  the emergency services** (999 in the UK, 112 across the EU) and give the
  operator that location. Aster cannot call the emergency services for anyone.

{% include screenshot-todo.html slug="safety-sos-watcher-banner" caption="The red SOS banner a watcher sees on the live watch page, with the last-known location link and call-emergency-services guidance." %}

## Related

- [Who gets alerted when you need help](emergency-contacts.md)
- [What happens when I lose signal?](offline-and-no-signal.md)
- [Handling SOS alerts](../for-organisers/handling-sos-alerts.md) (organisers)

<!-- ## Unverified
- The exact escalation interval for unacknowledged event SOS alerts is stated as "a couple of minutes" (code default is 2 minutes but it is configurable server-side).
-->
