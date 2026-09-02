---
title: "The club route library"
parent: "Teams & clubs"
nav_order: 6
audience: [athlete, organiser]
tags: [teams, clubs, routes, gpx, route-builder]
summary: "Build a route in the app, upload a GPX, or pull in one of your own — every club has a library of routes it can reuse for meet-ups, edit, and share."
last_updated: 2026-09-02
---

# The club route library

Every club has a **Routes** tab on its page — a library of the club's
regular loops, built once and reused whenever an admin schedules a
[meet-up](club-rides.md). It's grown well beyond "upload a GPX": admins can
now **build a route from scratch in the app**, and every route in the
library carries the same editing, duplicating and sharing tools a personal
route does.

## Add a route to the library

Club admins see an **Add route** button on the Routes tab, with three ways
to get a route in:

- **Build** — opens Aster's in-app route builder on a blank map. Draw or
  trace a line, snap it to roads, generate a round trip, see live distance
  and an elevation profile, then save it straight into the club's library.
  Building is free and has no route-count limit for a club.
- **Upload GPX** — the original way in: upload a `.gpx` file exported from
  wherever you already plan routes (Strava, Komoot, etc.) and Aster reads
  its distance and line.
- **Select from My routes** — pull in one of your own personal routes
  (built or uploaded under your own account) as a copy in the club's
  library. The personal original stays untouched in **My Routes**; the club
  gets its own copy.

Whichever way it arrives, the route appears in the library with its
distance, ready to attach to a meet-up.

The same **Build** option is also offered directly from the New meet-up form
itself, so an admin scheduling a ride and realising the route doesn't exist
yet can build it without leaving the flow — see
[create a meet-up](club-rides.md#create-a-meet-up).

## Attach a route to a meet-up

When [creating a meet-up](club-rides.md#create-a-meet-up), the Route field
offers a **saved-route picker** listing both the club's library and your own
personal **My routes** as a second group, plus the upload and build options
above. Pick one and the meet-up gets the route — members see it on the
meet-up page and on the live map during the ride or run, and athletes who
downloaded the event data have it available offline like any event route.

A route can also be attached from the library side: open its card's menu on
the Routes tab and choose **Use in event or meet-up** to jump straight into
scheduling a meet-up with that route pre-selected, or to attach it to one of
your upcoming club events.

If a route fails to attach when you create the meet-up, the meet-up is still
created and the app tells you — for a freshly-uploaded GPX, add it from the
**Routes** tab; for a library route, try attaching it again.

## Managing a route once it's in the library

Every route card in the library (and in **My Routes**, for admins) opens the
same menu: **View route**, **Duplicate** (opens the builder on a copy — the
original is untouched), **Use in event or meet-up**, **Edit route** (opens
the builder on the route itself — even one that started life as a GPX
upload), **Share route**, **Rename**, and **Remove route** (takes it out of
the club's library only; a personal copy shared in from My Routes is
unaffected).

### Sharing a library route outside the club

**Share route** mints a public link — `astertrack.app/routes/shared/…` —
that anyone can open with **no account and no club membership**: they see
the map, distance, elevation profile, and a **download GPX** button. This
is opt-in per route (nothing is public until an admin taps Share) and can be
turned off again from the same menu. It's the one deliberate exception to
"the library is members-only": a specific route an admin chooses to hand
out — to a guest rider, a local shop, another club — travels outside the
club even though the library itself stays members-only.

## Who can do what

| | Club admins | Members | Non-members |
|---|---|---|---|
| Build, upload or pull in a route | Yes | No | No |
| Browse the library and view routes | Yes | Yes | No |
| Edit, duplicate, rename or remove a library route | Yes | No | No |
| Attach a route to a meet-up | Yes (when creating a meet-up, or via "Use in event or meet-up") | No | No |
| Share a library route publicly | Yes | No | No (but anyone can open a link an admin shared) |

Browsing the library itself is a members-only surface — routes in it aren't
public by default. Routes attached to your club's meet-ups behave like any
event route for the people who can see the meet-up; a route an admin has
explicitly shared (above) is public regardless of club membership.

## Building routes doesn't count against your personal limit

Aster Plus separately caps how many routes an individual can **save to their
own personal My Routes library** outside of any club (free up to three; more
needs [Aster Plus](billing-and-your-club-plan.md)). **That limit does not
apply here** — building or uploading routes into a club's library is free
and unlimited for the club, whatever any individual admin's personal
My Routes count looks like. See
[club membership and Aster Plus](billing-and-your-club-plan.md) for what
Aster Plus does and doesn't gate.

{% include screenshot-todo.html slug="teams-club-routes-tab" caption="The club Routes tab: the Add route sheet (Build / Upload GPX / Select from My routes) and an uploaded route's card with its menu open." %}

<!-- ## Unverified
- "athletes who downloaded the event data have it available offline like any event route" — standard event-route behaviour assumed to apply to members events; not separately re-verified for meet-ups this pass.
- Exact re-attach flow after a failed attach for a library route (as opposed to a fresh GPX upload, which the app explicitly points to the Routes tab for) was not verified.
-->
