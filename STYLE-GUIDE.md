# Help-centre style guide

Read this before adding or editing articles. Consistency is what makes a
knowledge base feel trustworthy and easy to scan.

## Front matter

Every article starts with YAML front matter:

```yaml
---
title: "Starting and tracking a ride"      # Sentence case, no trailing period
parent: "For athletes"                      # The category landing page's title
nav_order: 2                                # Order within the category
audience: [athlete]                         # athlete | spectator | organiser (one or more)
tags: [tracking, gps, offline]              # Lowercase keywords for search/grouping
summary: "How to start, follow and finish a ride, and what each screen shows."
last_updated: 2026-06-18
---
```

Category landing pages (`index.md`) use:

```yaml
---
title: "For athletes"
nav_order: 2
has_children: true
---
```

## Voice & audience

- Write to **the user**, in plain language. "You", "your activity", "tap Start".
- Lead with the **task or answer**, then the detail. People arrive mid-problem.
- One article = one feature or task. Link between articles rather than repeating.
- Three audiences — make it obvious who an article is for (the category +
  `audience` field). When something differs by audience, say so explicitly.

The house voice, matching the FAQ on aster-track.com:

- **Plain and declarative.** Short sentences. The answer first.
- **British English** (organiser, recognise, behaviour, licence).
- **No em dashes.** A comma, a full stop or brackets instead.
- **No hype and no unearned social proof.** Never "most organisers do X" or
  "trusted by" — there is no such body of users yet. Say what the product does.
- **Specificity over adjectives.** "Holds 7 days of positions on the device"
  beats "robust offline support".
- **Honest about limits.** Battery, dead zones, phone-GPS accuracy. A help
  centre earns its trust at the edges.
- No exclamation marks, no emoji.

## Vocabulary — the founder's naming decrees

These are not preferences. They are decreed names, enforced in the app
repository by a guard test, and mirrored here by `scripts/check-vocabulary.mjs`.
Run it before you push:

```bash
node scripts/check-vocabulary.mjs
```

| Never write | Write instead | Why |
|---|---|---|
| "dot" (an athlete's position) | their **live location** / **position**, or "the athlete" | "Dots are old money" |
| "Free Ride" | **Just Ride** | The branded feature name changed |
| "SOS" | **Alert** | "SOS implies a guaranteed response; Alert means you are raising an alert" |
| "Group ride" (the event type) | **Meet-up** | "Group *ride* excludes running, and we do run" |
| "Club Line" / "Club Marker" / "Route moments" | **Milestone** | One name, not four |
| "Point to point" / "Point-to-point adventure" / "Grand depart" | **Point-to-point** | One canonical label; `grand_depart` is a code identifier, not a user-facing name |

**The umbrella nouns.** Aster covers running as a first-class activity, so
"ride" is not the umbrella term:

- **activity** — the umbrella. Use it when the type could be either.
- **ride** / **run** — only when the type is genuinely known.
- **event** — an organised event (a race, sportive, time trial or meet-up).
- **meet-up** — the club activity type. Untimed: no standings, no leaderboard,
  no results. Never give a meet-up race features.
- **race** — a competitive, timed, ranked format. A sportive is not a race.
- **athlete** — the persona noun where a sentence covers both sports. "Rider"
  is fine in genuinely cycling-only context.
- **Event Organiser** — capitalised, as the seat name, where it fits.

**Two deliberate exemptions.**

1. **Code identifiers are exempt.** URLs (`/free-ride`), enum values
   (`group_ride`), filenames (`club-rides.md`) and anything in a code span keep
   their names. These are copy rules, not renames.
2. **Educational use of "dot watching" is exempt.** The glossary and FAQ
   entries that *define* dot watching teach the endurance-cycling subculture's
   own term, and stay. The ban is on using "dot" as Aster's word for an
   athlete's position on our map.

## Formatting conventions

- **H1** = the article title (the front-matter `title`); use `##`/`###` below it.
- Start with a one- or two-sentence summary of what the reader will learn.
- Use **numbered steps** for procedures, **bullet lists** for options/facts,
  and **tables** for comparisons.
- Use callouts for the important bits:
  - **Good to know** — helpful context.
  - **Important** — safety or data-integrity points the reader must not miss.
  - **Troubleshooting** — "if X isn't working, check Y".
- Bold UI labels exactly as they appear in the app: tap **Start**, the **Riders** tab.

## What to document — and what not to

- Document **only what the product does today**. Do not describe planned or
  half-built features as if they exist.
- **No internal references** in published articles: no source-file paths, no
  internal rule/ticket numbers, no database details, no "phase 2" roadmap notes.
  Translate the mechanism into what the user experiences and why it matters.
- Be accurate about **limits and edge cases** — that's where a help centre earns
  its keep (offline behaviour, what freezes at the finish, what needs a login).

## Cross-linking

Link with relative Markdown links, e.g. from an article in `for-spectators/` to
`[Just Ride](../for-athletes/free-rides.md)`. Note the link TEXT carries the
current name while the FILENAME keeps its original spelling: several files
predate a rename and renaming them would break every inbound link.
Prefer linking to a single source-of-truth article over duplicating an explanation.
