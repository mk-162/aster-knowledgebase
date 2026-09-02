---
title: "Running the event on race day"
parent: "For organisers"
nav_order: 6
audience: [organiser]
tags: [dashboard, live, participants, start, broadcast]
summary: "Use the organiser dashboard to start the event, watch athletes, fix problems on individual entries, and message participants."
last_updated: 2026-09-02
---

# Running the event on race day

Your **organiser dashboard** is mission control for the day. It lists your
events, highlights any live safety alerts, and shows a live-monitor card for
each running event with participant and alert counts, all refreshing on
their own. From there you drop into the event's live map, its roster and its
manage screen.

## Start the race

For a **race**, press **Start** to fire the gun. That single moment becomes
the official start time every athlete's clock runs from, so the leaderboard
reflects the race, not when each person tapped Start in the pen.

If you forget to press it, Aster **auto-starts** the event at its **scheduled
start time** (for races and time trials, which covers sportives too, since a
sportive uses the same timing engine) so the clock is still honest and the
leaderboard works. Press Start yourself if you want the gun on your own
signal.

You can't start until a finish line is set, and you can't restart an event
that's already finished or cancelled. A **time trial** or **sportive**
doesn't use a gun at all: each athlete's own clock starts when they cross the
start line. A **meet-up** is untimed, and a **point-to-point** times each
athlete from the moment they cross their first checkpoint.

## Watch the field

- See every athlete's **status** (registered, started, finished, DNF, DNS),
  bib, category, team, current lap and last update time.
- Filter the roster by status.
- Watch the same live map and leaderboard your spectators see.

## Fix problems on individual entries

From the roster on the event's manage screen you can act on individual
entries:

- **Change an athlete's status** with the per-athlete dropdown: Registered,
  Started, **Finished**, **DNF** or **DNS**. Use **Finished** for someone who
  crossed the line (or completed their activity) while their phone was
  offline. On a **meet-up**, an athlete who pulls out mid-activity in the app
  is recorded as **Finished**, never DNF: it's untimed, so there's no
  ranking to fall out of, and it's worth using Finished here by hand too for
  consistency. A **sportive** or **point-to-point** is unranked as well, but
  it's still a challenge someone can fail — pulling out early on either is
  recorded as **DNF**, the same as a race or time trial. The dropdown still
  lets you pick DNF (or Finished) on any format, meet-ups included, if you
  have a specific reason to. Because a status change edits their race record
  immediately, Aster asks you to confirm the consequential ones.
- **Set an athlete to Registered** to let them start again. This clears their
  previous attempt's live state.
- **Set a start time by hand** for an athlete on a **time trial or sportive**
  whose automatic start crossing was missed or wrong. This is a single
  field, your recourse when the gate didn't catch someone cleanly.
- **Remove an athlete** from the event. You can't remove someone who's
  mid-ride (set them to Finished or DNF first), so a roster tidy-up can never
  pull someone off the course.

{% include screenshot-todo.html slug="organisers-raceday-roster-row" caption="A roster row on the manage screen: the per-athlete status dropdown (Registered / Started / Finished / DNF / DNS), the Set-start-time control for timed formats, and the remove button." %}

## Invite riders and share the spectator link

From the manage screen, **Invite riders** opens the invite sheet for people
who'll take part. Separately, the **spectator link** ("Copy spectator link")
is a public follow link. Share it so anyone can follow the event live on the
map and leaderboard, no account needed.

## Safety alerts

Alerts from athletes appear on your dashboard with their last known
location, so you can respond. This has its own guide: see
[Handling alerts](handling-sos-alerts.md).

## Message participants

- **Message riders**: send a push notification (with an optional link) to
  everyone in the event, straight from the dashboard's event card.
- **Post to the event feed**: an update that registered athletes and event
  followers see on the event page, and can be notified about.

See [Messaging your riders](messaging-your-riders.md) for when to use each.

## Important: once an athlete finishes, they're done

When an athlete crosses the line, is cut off, or you finish them by hand,
their result **freezes**. Their marker stops at the finish, and their time
and position lock in. Late GPS points that arrive from their phone
afterwards can complete the trail up to the finish, but they never move a
finished athlete on the map or change their result. That's what keeps your
results clean.
