---
title: "The app vs the website"
parent: "Getting started"
nav_order: 3
audience: [athlete, spectator, organiser]
tags: [app, web, platforms, install]
summary: "When you need the mobile app, when a browser is enough, and how to install the app during the beta."
last_updated: 2026-07-03
---

# The app vs the website

Aster is available as a **mobile app** (iPhone and Android) and as a
**website** at [astertrack.app](https://astertrack.app) that works in any
browser. They share the same account and the same data, but they're suited to
different jobs.

Our marketing pages — what Aster is, pricing, and the like — live on
[www.astertrack.app](https://www.astertrack.app); the app itself sits on
[astertrack.app](https://astertrack.app). Open astertrack.app while signed out
and you'll land on the marketing site; a shared watch link takes you straight
into the app.

## Use the mobile app to be tracked

If you're going to **ride or run and be tracked**, use the app. Only the
native app can keep recording your GPS position reliably in the background —
while your phone is in your pocket, the screen is off, or you've switched to
another app. The app also powers:

- Offline starting and finishing (no signal needed).
- Background GPS recording for hours, with battery modes to match the length
  of your day.
- The persistent "tracking" notification so you know it's still running.
- Crash detection, which can start an SOS countdown if you hit the ground.

If you open the tracking screen in a browser, you'll see install options for
the app instead — GPS tracking simply isn't possible from a browser tab.

### Installing the app (early-access beta)

Aster is currently in early-access beta, so it isn't yet installed from the
public app stores:

- **iPhone** — via Apple's **TestFlight**. Install TestFlight from the App
  Store first, then open Aster's invite link, tap **Accept**, then
  **Install**.
- **Android** — via a **direct download** (an `.apk` file). Download it, tap
  the file, and allow installs from your browser if your phone asks — you
  only need to do that once.

The current install links are shown on the website whenever you try to start
tracking in a browser (open **Track** on
[astertrack.app](https://astertrack.app)). Links change as new beta builds
ship, so we don't reproduce them here.

{% include screenshot-todo.html slug="getting-started-app-vs-website-install-cards" caption="The install options shown on the website's Track page: iPhone via TestFlight and Android via direct download, each with a QR code." %}

## Use the website for everything else

The website covers everything that isn't live GPS recording:

- **Watching** events and shared rides live — the map, trails and live
  standings all work in a browser, no app and (for public events and share
  links) no account required.
- Checking **results**, watching **replays**, and comparing athletes.
- Reading and posting to event **feeds**, and following athletes and teams.
- Managing your **profile**, **settings**, privacy and account.
- The full **organiser dashboard** — creating events, uploading routes,
  managing registrations, monitoring race day and handling SOS alerts.
- **Club and team** pages and management.

> **Good to know:** browsers can't record your location once you switch away
> or lock the screen, so the website is never used to track your own ride. If
> you try, you'll be shown the app install options instead.

## Which should a spectator use?

Either. The website is the quickest way to open a shared link and watch —
nothing to install. Notifications (for example, when an athlete you follow
starts or finishes) are available in the app and in most desktop and Android
browsers; see [Push notifications and devices](../notifications/push-and-devices.md).

<!-- ## Unverified
- Public App Store / Google Play availability: not current — during the beta the install paths are TestFlight (iPhone) and direct APK download (Android). Revisit when the app ships to the public stores.
- The exact TestFlight and APK link URLs are beta links that rotate with builds; deliberately not reproduced.
- An installable "add to home screen" web app (PWA): the website works in any browser, but no user-facing PWA install path was found in the product this pass, so none is documented.
- Domain split confirmed 2026-07-03: the app stays on astertrack.app and marketing moved to www.astertrack.app; in-app paths are still described by screen name rather than URL.
-->
