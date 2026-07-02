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

- Write to **the user**, in plain language. "You", "your ride", "tap Start".
- Lead with the **task or answer**, then the detail. People arrive mid-problem.
- One article = one feature or task. Link between articles rather than repeating.
- Three audiences — make it obvious who an article is for (the category +
  `audience` field). When something differs by audience, say so explicitly.

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
`[free rides](../for-athletes/free-rides.md)`.
Prefer linking to a single source-of-truth article over duplicating an explanation.
