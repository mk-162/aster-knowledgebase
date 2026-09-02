---
title: "Alert and crash detection"
parent: "Safety & offline"
nav_order: 1
audience: [athlete, spectator, organiser]
tags: [alert, crash, safety, emergency]
summary: "How to raise the alarm, exactly who gets alerted, and what an Alert can and cannot do."
last_updated: 2026-08-28
---

# Alert and crash detection

Aster has two ways to raise the alarm if something goes wrong on a ride or
run: a manual **Alert** button, and automatic **crash detection** on Just
Rides.

Before anything else, the honest bit, and the app tells you the same thing
the first time you open Alert:

> **An alert notifies the people watching your ride. It does not contact
> the emergency services**, and it does not guarantee anyone will respond.
> It's an aid, not a safety device. Always carry your own means to call
> for help.

We call it "Alert" rather than "SOS" on purpose: the older word sounds
like a guaranteed rescue is coming. Raising an Alert means exactly what it says,
you're alerting real people. It never pauses, stops or otherwise changes
your activity: your ride or run keeps recording and tracking exactly as
before.

## Who gets your Alert

- **In an event**, your Alert goes to the **event organisers**: it appears
  on their race-day dashboard with your exact location, and if nobody
  acknowledges it within a couple of minutes they're alerted again. It's
  handled discreetly: spectators don't see it. See
  [Handling Alerts](../for-organisers/handling-sos-alerts.md).
- **On a Just Ride**, your Alert goes to **your watchers**: everyone
  following your ride through your watch link. Before you send, the app
  shows how many people that is. **If nobody is watching, it says so
  plainly**: an alert would reach nobody, and if you need urgent help you
  should call your local emergency number.

There are no other recipients. Aster doesn't hold a separate list of
emergency contacts, see
[Who gets alerted when you need help](emergency-contacts.md).

## Sending an Alert

1. While tracking, tap the amber **Alert** button.
2. Read the one-off "this isn't a rescue service" notice the first time,
   then confirm **Send alert?** on the next screen.
3. A **60-second countdown** starts, with a large **Cancel (I'm OK)**
   button. Nothing is sent yet, this window exists so a pocket-tap or a
   change of mind never fires an alert. If you're sure, you can also tap
   **Send now** to skip the wait.
4. If the countdown runs out uncancelled, your current location is
   captured and the alert is sent.

Once it's sent, the confirmation screen offers a one-tap **Call emergency
services** button. If you need real help and have signal, that call is
yours to make (999 in the UK, 112 across the EU); Aster can't make it for
you.

{% include screenshot-todo.html slug="safety-sos-send-modal" caption="The Alert flow on the tracking screen: the send confirmation, the 60-second cancellable countdown, and the sent state with the Call emergency services button and 'Cancel alert (False Alarm)'." %}

A few things worth knowing:

- **An Alert never ends or pauses your ride.** You stay tracked, which is
  exactly what you want if help is coming, the people responding keep
  seeing your position.
- **You can raise an Alert while paused.** A mechanical or a cafe-stop
  incident still counts.
- **False alarm?** After it's sent, tap **Cancel alert (False Alarm)**: the
  people who were alerted are told it's cancelled.
- **If the alert can't reach the server** (no signal), the app tells you
  clearly that your watchers have **not** been alerted, so you're never left
  assuming help is on the way when it isn't.

There's also a separate green **I'm OK** button to reassure the people
watching if you've been stationary for a while and someone might be
worrying. It's a proactive check-in, not part of the Alert flow.

## Sharing your phone number

By default, an Alert carries your location but not your phone number. If
you'd like the people handling your alert to be able to ring you, open
your profile editor, fill in **Emergency phone**, and tick **Show my phone
number to safety-alert recipients**. The number is revealed only alongside
an Alert, it's never shown on your public profile.

## Automatic crash detection (Just Rides)

On a Just Ride, Aster watches your GPS speed for the signature of a crash:
moving at speed, then stopping almost instantly. The speed floor is tuned
to the activity, roughly 20 km/h for cycling and 9 km/h for running,
followed by a sudden deceleration. If that happens:

1. An **alarm sounds** and your phone vibrates.
2. The same **60-second cancellable countdown** used for a manual Alert
   appears.
3. If you don't cancel in time, a crash alert goes to your watchers
   automatically, same recipients, same rules as a manual Alert, flagged as
   a possible crash.

Kerb hop, dropped phone, emergency stop for a sheep? Tap **Cancel (I'm OK)**
during the countdown and nothing is sent. Crash detection never stops your
ride, if you did come off, your live location staying visible is what
helps people find you.

Crash detection runs on Just Rides only; it isn't active in events.

## What a watcher sees

If someone you're watching raises an Alert, a red banner appears at the top
of the watch page, no login needed:

- who triggered it, and whether it was a possible crash
- their **last-known location**, as a link you can open in your maps app
- what to do: **try to contact them first**; if you can't reach them, **call
  the emergency services** (999 in the UK, 112 across the EU) and give the
  operator that location. Aster cannot call the emergency services for anyone.

{% include screenshot-todo.html slug="safety-sos-watcher-banner" caption="The red Alert banner a watcher sees on the live watch page, with the last-known location link and call-emergency-services guidance." %}

## Related

- [Who gets alerted when you need help](emergency-contacts.md)
- [What happens when I lose signal?](offline-and-no-signal.md)
- [Handling Alerts](../for-organisers/handling-sos-alerts.md) (organisers)

<!-- ## Unverified
- The exact escalation interval for unacknowledged event alerts is stated as "a couple of minutes" (code default is 2 minutes, configurable server-side via an environment variable).
-->
