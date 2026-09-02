---
title: "Results"
parent: "For organisers"
nav_order: 8
audience: [organiser]
tags: [results, leaderboard, publishing, csv, replay]
summary: "How the live leaderboard relates to official results, how sportives publish neutrally, and how to export and replay a finished event."
last_updated: 2026-09-02
---

# Results

## Live leaderboard vs official results

During the event, the **leaderboard** is worked out live from athletes' GPS
tracking, the real-time picture of who's where. It's an estimate: it moves
as pings arrive, and it settles as athletes' data finishes syncing.

**Official results** are a separate, published record, kept on the event's
results page. They start **provisional** and you mark them **official** by
publishing. Publishing computes final placings from whatever timing data has
been recorded for the event and locks that in as a settled classification,
distinct from the live, in-progress leaderboard.

**Important:** publishing does not pull athletes' GPS times off the live
leaderboard for you. If your event has no timing data recorded yet (see
[Chip timing](#chip-timing) below), publishing has nothing to mark official.
For most organisers today, results come from bringing in chip-timing data;
this is worth planning for before race day if an official, publishable
result matters to you.

## Sportives publish differently: personal times, no rankings

How results are published depends on the event format:

- **Races and time trials** publish a **ranked** classification: an overall
  position and a category position for each finisher, fastest first.
- **Sportives and gran fondos** publish **neutrally**: personal times only,
  with **no positions or rankings** anywhere, not on the page, not in the
  export. Athletes find their name and read their own time. A viewer can
  filter by their own gender or age category and, once a filter is on, sort
  those athletes by time for context, but Aster never awards a place.

This is structural, not a setting. A sportive stays a timed ride, never a
race.

A **meet-up** has no results page at all: it's untimed, with no standings,
no leaderboard and nothing to publish. Its post-event story is the [replay](#reliving-the-event-replay),
not a results list.

## Publishing results

You publish from the event's manage screen, once the event has **finished**.
This stops an in-progress event's placings being marked official mid-race.
Publishing:

- Works out final placings (for ranked formats), from the timing data on
  record for the event.
- Marks the results **official** on the public results page.
- Only includes active registrations; withdrawn, cancelled or no-show
  entries are left out of placings.

You can **re-publish** if data changed. It recomputes from the current data
rather than duplicating. Because published results are what athletes
screenshot and share, re-publishing asks you to confirm first.

## Reading and exporting

The results page is public for public and unlisted events; private events
require access. From the manage screen you can:

- **View** the results page.
- **Export a spreadsheet (CSV)** for your records or to hand to a
  federation. For a sportive the export carries no positions either, the
  same neutral shape as the page.

{% include screenshot-todo.html slug="organisers-results-manage-panel" caption="The Results panel on the manage screen: View results page, Export CSV, and Publish results (enabled once the event has finished)." %}

## Chip timing

If you run chip timing, timed results can be brought into Aster and matched
to athletes by bib number, through Aster's results integration rather than
an upload button in the organiser screens. This is currently the way
official, publishable timing data gets into an event. If chip timing is your
authority for placings, or you want results ready to publish without it, get
in touch via the [contact page](https://aster-track.com/contact) to set it
up.

## Reliving the event: replay

Every finished event has a **replay**: a play-back of the whole field moving
along the route over time, so athletes and spectators can watch how it
unfolded after the fact. It's linked from the event page. Athletes also get
a replay of their own ride.

## Good to know

- **Finished is finished.** Because a finisher's result freezes at the line,
  late GPS data that arrives afterwards can complete their trail up to the
  finish but never changes their time or position. See
  [Running the event on race day](race-day-management.md).
- For an athlete whose phone was offline at the line, you can mark them
  finished yourself so their record is right. See the same guide.
- **A hidden athlete stays hidden in results too.** An athlete who's turned
  on **Hide my location** for the event is left out of the public results
  page and its CSV export entirely, name, gender, age band and time alike,
  the same as they're left off the live map. You still see them, and their
  full result, on your own manage screen. See
  [Who can see your location?](../account-and-privacy/who-can-see-your-location.md).
