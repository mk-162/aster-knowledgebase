---
title: "Troubleshooting meet-ups"
parent: "Teams & clubs"
nav_order: 11
audience: [athlete, organiser]
tags: [teams, clubs, troubleshooting, rides]
summary: "A member can't see the meet-up, the weekly meet-up didn't appear, RSVP or route problems — checks in order."
last_updated: 2026-09-02
---

# Troubleshooting meet-ups

Work down the list for your symptom — these are ordered by how often each
one turns out to be the cause.

## A member can't see the meet-up

A members-only meet-up is only visible to the club, so "can't see it" is
almost always an access question:

1. **Are they signed in?** A signed-out person opening a members-only
   meet-up's link sees a members-only notice, not the ride. Sign in first.
2. **Are they signed in with the right account?** Two accounts (say, an old
   email and a new one) is a classic — the club membership is on the other
   one.
3. **Is their membership active?** If they applied to a by-application club
   and haven't been approved yet, they're not a member yet. An admin can
   check the pending applications on the club page. Someone who joined via
   invite link past the free three but hasn't taken out Aster Plus is also
   not a full member yet — see "Someone can't join" below.
4. **Were they removed from the club?** Removed members lose access to
   members-only meet-ups immediately.

## Someone can't join

Most of the time this is an access or account issue (see the section above),
not a limit. But two real things can be in play:

1. **Do they need Aster Plus?** A club's first three members join free. From
   the **fourth member onward**, each new member takes out
   [Aster Plus](billing-and-your-club-plan.md) to join in full (a free
   demo lets them try it first — once per person, even via an invite link).
   Until they do, they can still follow and watch the club, just not take a
   full member's seat.
2. **Is the club at 500 members?** A club can hold up to **500 members** — a
   scale limit. If it's full to 500, someone would need to leave before a new
   full member can join. Below 500, nobody already in is ever removed.
3. **Has the invite link run out or expired?** An ordinary club's invite link
   is good for 1,000 joins and never expires on its own; a
   [verified/pro team's](verified-pro-teams.md) link is tighter — 25 joins,
   30-day expiry. If a link that used to work suddenly doesn't, an admin
   should generate a fresh one from the club page.

## The weekly meet-up didn't appear

Each week's occurrence is created automatically **about seven days ahead** of
the meet-up time. If it's missing:

1. **Is it more than seven days away?** Then it isn't due to appear yet.
2. Weekly meet-ups are free and keep producing on every club, so billing is
   never the cause — nothing already scheduled is removed either.
3. Still missing? Create a one-off meet-up for this week and
   [contact support](../reference/getting-support.md) about the repeat.

## RSVP problems

- **No RSVP button** — RSVP is for members only; sign in and check
  membership (see the first section).
- **RSVP fails with an error** — try again with signal; RSVP needs a
  connection (it's a registration, like joining any event). Riding and
  tracking never need signal — see
  [offline and no signal](../safety-and-offline/offline-and-no-signal.md).

## A route isn't showing on the meet-up

1. Is the route in the [club route library](the-club-route-library.md), or
   one of the admin's own **My routes**? Only those two sources (plus a fresh
   GPX upload or a route built on the spot) can be attached, and only admins
   can add or attach one.
2. Was the meet-up created without a route? If a route fails to attach at
   creation, the app says so — the meet-up exists but has no route. Attach it
   afterwards from [Manage meet-up](club-rides.md#manage-a-meetup), or from
   the route's own card menu via **Use in event or meet-up**.
3. Route on the meet-up page but not on your phone mid-ride? Open the meet-up
   once with signal before you set off so the route and map data download.

## The register looks wrong

- **Someone's missing** — they never RSVP'd. The register lists RSVP'd
  participants; it also marks who actually tracked.
- **Someone shows as "Not started"** — they RSVP'd but never started
  tracking, or their first update hasn't uploaded yet (dead-zone starts
  upload when signal returns).
- **"Quiet Xm" on the everyone-home panel** — no update for a while, which
  usually means a signal dead zone, not a stopped athlete. The panel is
  informational and never ends anyone's ride or run.
- **Someone shows as DNF, not Finished** — on a plain meet-up, ending
  normally always marks an athlete **Finished**, never DNF. A DNF is only
  possible when the meet-up was given a competitive format (race, TT,
  sportive, point-to-point via "Add a format") and the athlete formally
  abandoned it.

## The meet-up still says "Live" (or already says "Finished")

A meet-up has no automatic start or finish — Aster shows **Live** once its
start time has passed and for about 12 hours afterwards (or as soon as an
admin taps **We're rolling**), then switches to **Finished** once that window
closes. It's a display convention, not a claim that anyone's still out —
check the [everyone-home panel](club-rides.md#everyone-home) or the
[Club Recap](club-rides.md#the-club-recap) for the real picture. It never
affects anyone's own tracking, which only ever starts or stops when they tap
Start or Stop.

## Something else?

For tracking problems on the ride itself (GPS, battery, uploads), see
[tips for a reliable track](../for-athletes/tips-for-a-reliable-track.md)
and the general [troubleshooting guide](../reference/troubleshooting.md).
