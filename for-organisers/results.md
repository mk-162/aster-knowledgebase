---
title: "Results"
parent: "For organisers"
nav_order: 8
audience: [organiser]
tags: [results, leaderboard, publishing, csv, replay]
summary: "How the live leaderboard becomes official results, how sportives publish neutrally, and how to export and replay a finished event."
last_updated: 2026-07-02
---

# Results

## Live leaderboard vs official results

During the event, the **leaderboard** is worked out live from riders' GPS
tracking — the real-time picture of who's where. It's an estimate: it moves as
pings arrive, and it settles as riders' data finishes syncing.

**Official results** are what you publish at the end. Publishing takes the
provisional standings, works out final placings and marks the results
**official** on the event's results page — a settled classification rather than
the live, in-progress board. Until you publish, the results page shows
**provisional** results.

## Sportives publish differently — personal times, no rankings

How results are published depends on the event format:

- **Races and time trials** publish a **ranked** classification: an overall
  position and a category position for each finisher, fastest first.
- **Sportives and gran fondos** publish **neutrally**: personal times only, with
  **no positions or rankings** anywhere — not on the page, not in the export.
  Riders find their name and read their own time. A viewer can filter by their
  own gender or age category and, once a filter is on, sort those riders by time
  for context — but Aster never awards a place.

This is structural, not a setting. A sportive stays a timed ride, never a race.

## Publishing results

You publish from the event's manage screen, once the event has **finished** —
this stops an in-progress event's placings being marked official mid-race.
Publishing:

- Works out final placings (for ranked formats).
- Marks the results **official** on the public results page.
- Only includes active registrations — withdrawn, cancelled or no-show entries
  are left out of placings.

You can **re-publish** if data changed — it recomputes from the current data
rather than duplicating. Because published results are what riders screenshot and
share, re-publishing asks you to confirm first.

## Reading and exporting

The results page is public for public and unlisted events; private events require
access. From the manage screen you can:

- **View** the results page.
- **Export a spreadsheet (CSV)** for your records or to hand to a federation. For
  a sportive the export carries no positions either — same neutral shape as the
  page.

{% include screenshot-todo.html slug="organisers-results-manage-panel" caption="The Results panel on the manage screen — View results page, Export CSV, and Publish results (enabled once the event has finished)." %}

## Chip timing

If you run chip timing, timed results can be brought into Aster and matched to
riders by bib number — a job handled through Aster's results integration rather
than an upload button in the organiser screens. If chip timing is your authority
for placings, get in touch via the [contact page](https://astertrack.app/contact)
to set it up.

## Reliving the event: replay

Every finished event has a **replay** — a play-back of the whole field moving
along the route over time, so riders and spectators can watch how it unfolded
after the fact. It's linked from the event page. Riders also get a replay of their
own ride.

## Good to know

- **Finished is finished.** Because a finisher's result freezes at the line, late
  GPS data that arrives afterwards can complete their trail up to the finish but
  never changes their time or position. See
  [Running the event on race day](race-day-management.md).
- For a rider whose phone was offline at the line, you can mark them finished
  yourself so their result still lands — see the same guide.

<!-- ## Unverified
- The exact self-serve path for bringing chip-timed results into an event is an integration rather than an in-app upload button in the current organiser screens; the article keeps this generic and points to contact.
-->
