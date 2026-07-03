---
title: "The club route library"
parent: "Teams & clubs"
nav_order: 6
audience: [athlete, organiser]
tags: [teams, clubs, routes, gpx]
summary: "Upload your club's routes once, and attach them to club rides whenever you schedule one."
last_updated: 2026-07-02
---

# The club route library

Every club has a **Routes** tab on its page — a library of the club's
regular loops, uploaded once as GPX files and reused whenever an admin
schedules a ride.

## Add a route to the library

1. Open your club's page and the **Routes** tab (club admins see the upload
   option).
2. Upload a **GPX file** of the route.
3. It appears in the library with its distance, ready to attach to rides.

## Attach a route to a club ride

When [creating a club ride](club-rides.md), the form includes a **Route**
picker listing the library. Pick one and the ride gets the route — members
see it on the ride page and on the live map during the ride, and riders who
downloaded the event data have it available offline like any event route.

If a route fails to attach when you create the ride, the ride is still
created — attach the route again from the ride, or recreate the ride with
the route selected.

## Who can do what

| | Club admins | Members | Non-members |
|---|---|---|---|
| Upload routes | Yes | No | No |
| Browse the library and view routes | Yes | Yes | No |
| Attach a route to a ride | Yes (when creating a ride) | No | No |

The library is a members-only surface — routes uploaded to it aren't public.
Routes attached to your club's rides behave like any event route for the
people who can see the ride (members).

{% include screenshot-todo.html slug="teams-club-routes-tab" caption="The club Routes tab with uploaded routes listed and the admin upload control." %}

<!-- ## Unverified
- "riders who downloaded the event data have it available offline like any event route" — standard event-route behaviour assumed to apply to members events; not separately re-verified for club rides this pass.
- Exact re-attach flow after a failed attach ("attach the route again from the ride") — the create form warns "Ride created, but route could not be attached"; the retry surface was not verified.
-->
