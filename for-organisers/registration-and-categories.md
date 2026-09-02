---
title: "Registration and categories"
parent: "For organisers"
nav_order: 5
audience: [organiser]
tags: [registration, categories, capacity, ballot, bibs]
summary: "Control how athletes join, cap the field, group athletes into categories, and assign bibs."
last_updated: 2026-08-28
---

# Registration and categories

## How athletes join

You choose how registration works:

- **Open**: one-tap join, no capacity limit and no form. Best for most events.
- **Managed**: set a capacity, a registration deadline, categories and a
  registration form. Best when you need to cap the field or collect details.
- **Ballot**: athletes enter and you run a draw for an oversubscribed event,
  with an optional reserved quota.

> **Good to know:** if athletes have already registered, switching the joining
> mode may be blocked to avoid leaving people in an inconsistent state. Decide
> your mode before opening registration where you can.

## Capacity and the registration window

On **managed** events you can set:

- An overall **capacity**, and a **per-category** capacity.
- A registration **window**: when joining opens and closes.

Creating, previewing and publishing an event are all free. A **free** event is
a share-link preview that takes **up to 3 registrations** (ideal for building,
testing and demoing) and doesn't appear in public discovery. To take more real
registrations, and to show up in discovery, subscribe to an **Event Organiser**
plan sized to your event. The plan tiers are set by registrations-per-event
(100, 500 or 1000, with a larger enterprise / contact-us option), bought in the
app through the App Store or Google Play. Your plan tier is the ceiling on
registrations; any capacity you set can only sit at or below it. See
[pricing](https://aster-track.com/pricing) for the current shape and billing
terms.

## The registration form

On managed events you can ask athletes for the details you need when they join
(free-text, number, yes/no or multiple-choice questions) and attach a
**waiver** they agree to as part of joining. If your event genuinely needs
medical information, you can opt in to collecting it, and athletes give a
separate, explicit consent for that health data.

> **Good to know:** Aster no longer collects an emergency contact at registration.
> The Alert feature notifies the people watching an athlete's ride. It isn't
> wired to a stored contact, so collecting one added personal data with no
> purpose. See
> [Alerts and crash detection](../safety-and-offline/sos-and-crash-detection.md).

## Categories

Categories group athletes (for example "Pro Men", "Open Women", "Under-23").
For each category you can set:

- A **name**.
- An optional **distance** (for events offering multiple distances).
- A **gender** band (open, women, men, mixed or non-binary).
- An **age** band (minimum and maximum age).
- A **capacity**.
- A **start time**, so categories can set off in **waves** (a category with no
  time inherits the event's start).

Athletes pick their category when they register. In ranked formats (race, time
trial), results are ranked within each category. Spectators see the category
list with live registration counts on the event page.

## Bib numbers

Choose how bibs are assigned:

- **Automatic**: Aster assigns sequential numbers, starting from a number you
  choose.
- **Self-entry**: athletes enter their own number when registering.

<!-- ## Unverified
- Roster bib assignment (organiser-uploaded list) exists as a mode in the data model but has no organiser-facing UI in staging today; not documented as available.
- A fourth registration mode, "paid", exists in the schema/enum alongside open/managed/ballot, but no confirmed organiser-facing UI or payment-collection-at-registration flow was found; not documented as available. -->
