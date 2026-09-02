---
title: "Home"
layout: home
nav_order: 0
description: "The Aster help centre, guides for athletes, spectators and event organisers."
last_updated: 2026-09-02
---

{%- comment -%}
  The home page is the FAQ page's shape: a band with the display line, then
  sections on paper with the content in a 760px measure, then a centred
  closing band. It is written as HTML rather than Markdown so kramdown cannot
  turn an indented closing tag into a code block or drop a wrapper, which is
  how earlier versions leaked "</div></section>" onto the page.

  Article links are written as built paths (.html), because raw HTML hrefs
  are not rewritten by jekyll-relative-links the way Markdown links are.
{%- endcomment -%}

<section class="kb-band">
  <div class="kb-col">
    <p class="kb-kicker kb-kicker--onband">Help centre</p>
    <h1 class="kb-display">How can<br>we <span class="kb-display-accent">help?</span></h1>
    <p class="kb-lede">Guides for tracking a ride or run, watching someone live, and running an event end to end. Search at the top, or start with your section below.</p>
  </div>
</section>

<section class="kb-sheet">
  <div class="kb-col">
    <div class="kb-narrow">
      <p class="kb-kicker">Where to start</p>
      <h2 class="kb-heading">Pick your side of the tape</h2>
      <div class="kb-cards">
        <a class="kb-card" href="{{ '/for-athletes/' | relative_url }}">
          <span class="kb-card-body">
            <span class="kb-card-title">For athletes</span>
            <span class="kb-card-sub">Enter events, track a ride or run, share it live, and get your results. Built to keep working when the signal doesn't.</span>
          </span>
          <span class="kb-card-glyph" aria-hidden="true">&rarr;</span>
        </a>
        <a class="kb-card" href="{{ '/for-spectators/' | relative_url }}">
          <span class="kb-card-body">
            <span class="kb-card-title">For watchers</span>
            <span class="kb-card-sub">Follow a race or a single athlete live, with no account and no app. The map, the trail, the standings.</span>
          </span>
          <span class="kb-card-glyph" aria-hidden="true">&rarr;</span>
        </a>
        <a class="kb-card" href="{{ '/for-organisers/' | relative_url }}">
          <span class="kb-card-body">
            <span class="kb-card-title">For Event Organisers</span>
            <span class="kb-card-sub">Create and run an event end to end: routes, registration, the race-day dashboard, safety and results.</span>
          </span>
          <span class="kb-card-glyph" aria-hidden="true">&rarr;</span>
        </a>
        <a class="kb-card" href="{{ '/teams-and-clubs/' | relative_url }}">
          <span class="kb-card-body">
            <span class="kb-card-title">For clubs and teams</span>
            <span class="kb-card-sub">Meet-ups, the club board, a shared route library, and a members-only live map.</span>
          </span>
          <span class="kb-card-glyph" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="kb-sheet">
  <div class="kb-col">
    <div class="kb-narrow">
      <p class="kb-kicker">Most read</p>
      <h2 class="kb-heading">The guides people open first</h2>
      <div class="kb-cards kb-cards--grid">
        <a class="kb-card kb-card--row" href="{{ '/getting-started/what-is-aster.html' | relative_url }}"><span class="kb-card-title">What is Aster?</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/getting-started/create-an-account.html' | relative_url }}"><span class="kb-card-title">Create an account</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/for-athletes/your-first-event.html' | relative_url }}"><span class="kb-card-title">Your first event</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/for-athletes/starting-and-tracking-a-ride.html' | relative_url }}"><span class="kb-card-title">Start and track an activity</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/for-spectators/watch-an-event-live.html' | relative_url }}"><span class="kb-card-title">Watch an event live</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/safety-and-offline/sos-and-crash-detection.html' | relative_url }}"><span class="kb-card-title">Alerts and crash detection</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/safety-and-offline/offline-and-no-signal.html' | relative_url }}"><span class="kb-card-title">Losing signal</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/account-and-privacy/who-can-see-your-location.html' | relative_url }}"><span class="kb-card-title">Who can see my location?</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/for-organisers/quick-start-checklist.html' | relative_url }}"><span class="kb-card-title">Organiser quick-start checklist</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
        <a class="kb-card kb-card--row" href="{{ '/notifications/preferences-and-quiet-hours.html' | relative_url }}"><span class="kb-card-title">Notification settings</span><span class="kb-card-glyph" aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</section>

<section class="kb-sheet">
  <div class="kb-col">
    <div class="kb-narrow">
      <p class="kb-kicker">Everything else</p>
      <h2 class="kb-heading">Browse by section</h2>
      <nav class="kb-chips" aria-label="Help centre sections">
        <a href="{{ '/getting-started/' | relative_url }}">Getting started</a>
        <a href="{{ '/for-athletes/' | relative_url }}">Athletes</a>
        <a href="{{ '/for-spectators/' | relative_url }}">Watchers</a>
        <a href="{{ '/for-organisers/' | relative_url }}">Event Organisers</a>
        <a href="{{ '/teams-and-clubs/' | relative_url }}">Teams and clubs</a>
        <a href="{{ '/social-and-following/' | relative_url }}">Social and following</a>
        <a href="{{ '/safety-and-offline/' | relative_url }}">Safety and offline</a>
        <a href="{{ '/notifications/' | relative_url }}">Notifications</a>
        <a href="{{ '/account-and-privacy/' | relative_url }}">Account and privacy</a>
        <a href="{{ '/reference/' | relative_url }}">Glossary, FAQ and troubleshooting</a>
      </nav>
    </div>
  </div>
</section>

<section class="kb-band">
  <div class="kb-col kb-col--centred">
    <h2 class="kb-cta-title">Still stuck?</h2>
    <p class="kb-lede kb-lede--centred">Search first, most answers are a search away. For a specific event, its category, start time or results, ask that event's organiser. For anything else, a human will reply.</p>
    <a class="kb-cta-btn" href="mailto:help@astertrack.app">Email us</a>
    <div class="kb-cta-links">
      <a href="{{ '/reference/troubleshooting.html' | relative_url }}">Troubleshooting</a>
      <a href="{{ '/reference/getting-support.html' | relative_url }}">How to report a bug</a>
      <a href="{{ '/reference/glossary.html' | relative_url }}">Glossary</a>
      <a href="{{ '/reference/faq.html' | relative_url }}">FAQ</a>
    </div>
  </div>
</section>
