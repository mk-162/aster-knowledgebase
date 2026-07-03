---
title: "Club rides"
parent: "Teams & clubs"
nav_order: 4
audience: [athlete, organiser]
tags: [teams, clubs, rides, rsvp, recurring, register]
summary: "Create one-off or weekly club rides, take RSVPs, keep an attendance register, and check everyone got home."
last_updated: 2026-07-03
---

# Club rides

A club ride is a members-only group ride (or run) hosted by your club. It
lives on the club page's **Rides** tab, members RSVP with one tap, and the
ride gets a live map only members can see.

The club page also leads with a **next-ride hero**: whenever the club has an
upcoming ride, the soonest one shows above the tabs with one-tap RSVP, so a
member's first screen is the thing that matters most.

## Create a club ride

Club admins can create rides from the **Rides** tab:

1. Open your club's page and the **Rides** tab, then tap **New club ride**.
2. Give it a **name** ("Saturday shop ride") and a **date & time**.
3. Optionally:
   - **Repeat weekly** — see below. Works on every club, free or paid; a free
     club may see a gentle prompt to consider a
     [Club plan](billing-and-your-club-plan.md), but the ride is still created.
   - **Route** — attach a route from your
     [club route library](the-club-route-library.md).
   - **Pace groups** — comma-separated group names, e.g. "Fast, Steady,
     Social". These become groups on the ride, so the rider list and live
     view can be organised by group.
4. Tap **Create ride**. The ride appears on the Rides tab and members can
   RSVP straight away.

Club rides are always **members-only**: they never appear in Discover, and
only signed-in club members can open them. See
[the members-only live map](the-members-only-live-map.md).

{% include screenshot-todo.html slug="teams-club-ride-create-form" caption="The new-club-ride form: name, date and time, the weekly toggle, route picker and pace groups." %}

## Weekly repeating rides

Switch on **Repeat weekly** and pick a day. Aster then schedules the ride for
you: the **next week's ride appears automatically about seven days in
advance**, so there's always exactly one upcoming occurrence for members to
RSVP to. Times follow your club's local clock, so the 6:30pm chain-gang stays
at 6:30pm across daylight-saving changes.

Weekly rides keep producing regardless of the club's plan — a plan lapsing or
a club staying on the free tier never stops the next occurrence appearing, and
nothing is deleted. See [Billing and your club plan](billing-and-your-club-plan.md).

## RSVP — "I'm in"

Members RSVP with one tap — **I'm in** — on the Rides tab or the ride's own
page. The RSVP count shows on the ride card, and RSVPing is the same as
joining any Aster event: when the ride starts, you track it like any other
ride. RSVP'd members who choose not to track still count as attendees.

When a new club ride is added, active members get a notification so it
doesn't slip by. Aster also sends **reminders** to members who've RSVP'd as
the ride approaches — one about a day before ("Ride tomorrow") and one about
an hour before ("Ride starting soon") — so nobody forgets they're in.

## The register

The RSVP list doubles as the ride's **attendance register** — many clubs need
one for their insurance. The ride's creator (and club admins) see, on the
ride page:

- every RSVP'd participant, and
- whether each of them actually tracked the ride,

with an **Export CSV** button that downloads the register as a spreadsheet
file — handy for club records or an insurer.

{% include screenshot-todo.html slug="teams-club-ride-register" caption="The ride page's register: the RSVP list with tracked/not-tracked per rider and the Export CSV button." %}

## "Everyone home?"

Below the register, ride organisers get an **Everyone home?** panel — a
glanceable list of where everyone stands:

- **Home** — finished their ride.
- **On the road** — tracking and recently updated.
- **Quiet Xm** — tracking, but no update for a while (often just a signal
  dead zone).
- **Not started** / **Not riding** — RSVP'd but never set off, or marked as
  not riding.

**Important:** this panel is informational only. It never ends anyone's ride,
and neither can you from here — each rider always ends their own ride
themselves. "Quiet" means "no recent update", not "stopped": riders in dead
zones keep recording on their phone and their trail fills in when signal
returns. See [offline and no signal](../safety-and-offline/offline-and-no-signal.md).

## Rides on free clubs

Free clubs get the full ride toolkit — one-off **and** weekly repeating rides,
RSVP, register, CSV export, everyone-home, pace groups, routes. Nothing here
is paywalled; as the club grows past the free size, admins simply see a gentle
prompt to consider a [Club plan](billing-and-your-club-plan.md).

<!-- ## Unverified
- How a rider selects their pace group: the one-tap "I'm in" RSVP joins without picking a group; whether/where a rider chooses or changes their group afterwards was not verified in code this pass.
-->

