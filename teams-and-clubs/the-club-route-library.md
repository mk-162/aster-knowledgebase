---
title: "The club route library"
parent: "Teams & clubs"
nav_order: 6
audience: [athlete, organiser]
tags: [teams, clubs, routes, gpx]
summary: "Upload your club's routes once, and attach them to meet-ups whenever you schedule one."
last_updated: 2026-08-28
---

# The club route library

Every club has a **Routes** tab on its page — a library of the club's
regular loops, uploaded once as GPX files and reused whenever an admin
schedules a meet-up.

## Add a route to the library

1. Open your club's page and the **Routes** tab (club admins see the upload
   option).
2. Upload a **GPX file** of the route.
3. It appears in the library with its distance, ready to attach to meet-ups.

## Attach a route to a meet-up

When [creating a meet-up](club-rides.md), the form includes a **Route**
picker listing the library. Pick one and the meet-up gets the route —
members see it on the meet-up page and on the live map during the ride or
run, and athletes who downloaded the event data have it available offline
like any event route.

If a route fails to attach when you create the meet-up, the meet-up is still
created and the app tells you — for a freshly-uploaded GPX, add it from the
**Routes** tab; for a library route, try attaching it again.

## Who can do what

| | Club admins | Members | Non-members |
|---|---|---|---|
| Upload routes | Yes | No | No |
| Browse the library and view routes | Yes | Yes | No |
| Attach a route to a meet-up | Yes (when creating a meet-up) | No | No |

The library is a members-only surface — routes uploaded to it aren't public.
Routes attached to your club's meet-ups behave like any event route for the
people who can see the meet-up.

{% include screenshot-todo.html slug="teams-club-routes-tab" caption="The club Routes tab with uploaded routes listed and the admin upload control." %}

<!-- ## Unverified
- "athletes who downloaded the event data have it available offline like any event route" — standard event-route behaviour assumed to apply to members events; not separately re-verified for meet-ups this pass.
- Exact re-attach flow after a failed attach for a library route (as opposed to a fresh GPX upload, which the app explicitly points to the Routes tab for) was not verified.
-->
