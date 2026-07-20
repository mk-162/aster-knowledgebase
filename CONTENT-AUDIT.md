# Content audit — 2026-07-20 product refresh

This audit records the help-centre sweep that reconciled every public article with
the Aster app on `main` (app repo read at commit `df089809`). It is an internal
working document (excluded from the built site).

**What changed at product level, in brief:**

- **Monetisation pivot.** The old "Group / Club plan priced by member size", per-event
  "pricing band at publish" and any **annual** billing are retired. Current model:
  taking part, watching, following and recording your own activities are free; **Aster
  Plus** is an individual membership (unlocks full club membership; needed to join a
  club as its 4th-or-later member — first 3 members free); the **Event Organiser** plan
  is a monthly subscription sized by per-event registration cap (free 3-registration
  preview, then ~100 / 500 / 1000 tiers, plus enterprise). Clubs never pay. Both paid
  products are in-app purchases (App Store / Google Play). No prices are printed; the KB
  links to `astertrack.app/pricing`.
- **Following is free and unlimited** — the 5-favourite cap was removed in the product.
- **"Free Ride" → "Just Ride"** (branded name); **no "dot"** in user-facing copy (say
  live location / position / marker); **"activity"** as the umbrella term; **"Event
  Organiser"** where it reads as a product/plan.
- **Go / Just Ride action screen** redesigned: a **Go Live** tab with a big **GO ·
  Ride/Run** button and three compact chips (activity type, who-can-watch [default **Just
  me**], battery mode [default **Standard**]); a Just Ride ends via a **slide-to-end**
  control.
- **Sharing simplified** to the who-can-watch audience control (**Just me / Followers &
  club / Anyone with link**); one auto-managed live link; no separate "Generate link /
  Deactivate" and no user-facing share code.
- **Spectator demo / replay / catch-up** documented as actually implemented: a permanent
  **simulated** live demo, post-finish **Watch replay**, and live-event **Catch up**.
- **Rule 6 finish behaviour**: on the live map a finished rider's marker fades and clears
  (~2.5 s); the frozen result stays on the leaderboard/results and in the replay.

## Added

| Article | Why added | Source paths consulted (app repo) |
|---|---|---|
| `for-spectators/the-live-demo.md` | The permanent, always-on **simulated** live demo ("Aster Live Demo · Yorkshire Gravel", badged "Live demo · Simulated riders") is a real spectator capability that had no support coverage. Clearly labelled as a simulation. | `frontend/src/lib/demoShowcase.ts`, `frontend/src/components/DemoShowcaseBadge.tsx`, `frontend/src/components/LiveDemoShowcaseCard.tsx`, `backend/src/services/permanentDemoTimeline.ts`, `backend/src/routes/catchupTimeline.ts` |

## Removed

| Article | Why removed | Source |
|---|---|---|
| `teams-and-clubs/the-five-favourite-limit.md` | The 5-favourite / follow cap no longer exists — follows are free and unlimited for everyone. All inbound links removed. | `backend/src/routes/follows.ts` (follows free & unlimited, founder 2026-07-14) |

## Updated — substantive rewrites

| Article | Product change addressed | Sources |
|---|---|---|
| `getting-started/what-is-aster.md` | "What does it cost?" rewritten to Aster Plus + Event Organiser model; clubs free; unlimited following; sharing via who-can-watch. | M, F |
| `getting-started/key-concepts.md` | "Your dot and trail" → live location; events/Just Ride table; removed 5-follow limit; share-links → audience model. | T, S, F |
| `for-athletes/free-rides.md` (→ "Just Ride") | Retitled; Go Live tab + GO button + chips; audience-based sharing; slide-to-end. | G, S |
| `for-athletes/starting-and-tracking-a-ride.md` | Event start now immediate on Standard battery (no "How long will you be riding?"); battery adjustable mid-ride. | G |
| `for-athletes/your-first-event.md` | Removed the start-line battery question; terminology. | G |
| `for-athletes/finishing-a-ride.md` | Live-map finish: marker fades/clears; result frozen elsewhere; Just Ride slide-to-end. | R6, G |
| `for-spectators/share-links.md` | Just Ride sharing = who-can-watch control; one live link; no Deactivate/share code; finished-ride summary. | S |
| `for-spectators/watch-an-event-live.md` | Added **Catch up**; **Watch replay** after finish; live-map finish fade. | SP, R6 |
| `for-spectators/the-live-map-and-trails.md` | "Dots" → live positions; added Catch up; finish fade-and-clear. | SP, R6 |
| `for-spectators/following-and-notifications.md` | Removed the favourites cap; notification list aligned. | F, N |
| `teams-and-clubs/billing-and-your-club-plan.md` (→ "Club membership and Aster Plus") | Full rewrite: clubs free; first 3 members free; 4th+ = individual Aster Plus (in-app); free demo; lapse-safe; 500-member ceiling. | C, M |
| `teams-and-clubs/what-clubs-and-teams-are.md` | Free/paid model rewritten (no member-size Club plan); sponsors available to any club; 500 cap. | C, M |
| `teams-and-clubs/index.md` | Intro re-framed; removed 5-favourite item; billing item retitled. | C, M |
| `teams-and-clubs/create-or-join-a-club.md` | Removed free-tier/Club-plan language; follow-vs-join without cap. | C |
| `teams-and-clubs/roles-and-managing-members.md` | Member-limit section → first-3-free / 4th+ Plus / 500 cap; owner role reworded. | C |
| `teams-and-clubs/troubleshooting-club-rides.md` | "Club full" reframed to the 500-member cap + 4th-member Plus. | C |
| `teams-and-clubs/verified-pro-teams.md` | Reframed off the (non-existent) Club plan; PRO badge is free/reviewed, separate from Plus. | C |
| `teams-and-clubs/club-visibility-and-sharing.md` | Sponsor strip available to clubs (not gated on a paid plan). | C |
| `teams-and-clubs/the-club-board.md` | "No chat" softened — ride threads exist; still no 1:1 DMs. | C, N |
| `for-organisers/create-an-event.md` | Removed expected-field-size / pricing-band / fee-at-publish; free preview (3 registrations) + Event Organiser plan. | E, M |
| `for-organisers/registration-and-categories.md` | Pricing-band paragraph → registration-cap subscription model. | E, M |
| `for-organisers/quick-start-checklist.md`, `for-organisers/index.md` | Same pricing/publish model correction. | E, M |
| `reference/faq.md` | Pricing answer rewritten; removed "why can't I follow more" Q/A; Just Ride slide-to-end. | M, F |
| `reference/glossary.md` | Added Aster / Aster Plus / Event Organiser; Follow (no cap); Just Ride (formerly Free Ride); kept educational "dot watching". | M, F, T |
| `reference/troubleshooting.md` | Removed follow-limit entry; weekly-ride fix reworded off "club plan"; terminology. | F, C, T |
| `account-and-privacy/who-can-see-your-location.md` | "Hide my dot" → "Hide my location"; terminology; Just Ride. | AP, T |
| `safety-and-offline/sos-and-crash-detection.md` | "Call 999" button → "Call emergency services"; crash countdown corrected to 60 s; Just Ride. | SA |
| `notifications/notification-types.md` | Added Just Ride watcher "Gone quiet"; removed the (unwired) gap-change notification. | N |

## Updated — terminology & light-touch (accurate content preserved)

`index.md`, `getting-started/index.md`, `getting-started/create-an-account.md`,
`for-athletes/index.md`, `for-athletes/battery-modes.md`, `for-athletes/data-usage.md`,
`for-athletes/pausing-and-resuming.md`, `for-athletes/register-for-an-event.md`
(Hide-my-location), `for-athletes/results-history-and-profile.md`,
`for-athletes/tips-for-a-reliable-track.md`, `for-spectators/index.md`,
`for-spectators/spectator-quick-start.md`, `for-spectators/the-leaderboard.md`,
`for-spectators/public-unlisted-private-events.md`, `for-organisers/handling-sos-alerts.md`,
`for-organisers/brief-your-riders.md`, `for-organisers/race-day-management.md`,
`for-organisers/event-lifecycle-and-statuses.md`,
`for-organisers/walkthrough-group-ride-adventure.md`, `social-and-following/index.md`,
`social-and-following/following-and-your-feed.md`, `social-and-following/posts-and-stories.md`,
`notifications/preferences-and-quiet-hours.md`, `notifications/push-and-devices.md`,
`reference/getting-support.md`, `reference/screenshot-shotlist.md`,
`safety-and-offline/*` and `account-and-privacy/*` (Just Ride, live-location wording,
emergency-services wording, cap removal).
Change: "free ride"→"Just Ride", "dot"→live location/marker/position, removed any favourites-cap
references; no factual claims altered where already accurate.

## Verified accurate — kept as-is (spot-checked against source)

Event formats (`for-organisers/event-types.md`), festivals/series (`festivals.md`),
results (`results.md`), checkpoints/feed-stations/cutoffs (`courses-and-feed-stations.md`,
`routes-start-and-finish.md`), reactions/comments/mentions
(`social-and-following/comments-reactions-mentions.md`), GDPR export/delete
(`account-and-privacy/export-or-delete-your-data.md`), emergency-contacts framing,
offline behaviour and Rules 1–6 safety promises.

## Source paths consulted (app repo `df089809`, read-only)

- **M — Monetisation:** `docs/2026-07-13-monetization-pivot-plan.md`, `docs/2026-07-14-wp0-monetization-store-setup.md`, `backend/src/services/subscriptions.ts` (`ORGANISER_TIER_CAPS`, `DEFAULT_FREE_CAP`, `isMonetizationEnabled`), `backend/src/services/registration.ts` (`organiserCap`), `frontend/src/components/monetization/PlusUpsellSheet.tsx`, `.../OrganiserPlanSheet.tsx`, `frontend/src/pages/ForClubs.tsx`
- **C — Clubs:** `backend/src/routes/teams.ts`, `backend/src/services/clubMembership.ts`, `backend/src/routes/teamInvitations.ts`, `backend/src/routes/sponsors.ts`, `backend/src/routes/routes.ts`, `frontend/src/pages/{Teams,CreateTeam,EditTeam,TeamProfile,JoinClub,ClubRide}.tsx`, `docs/2026-07-13-monetization-pivot-plan.md`
- **E — Events/organiser:** `backend/src/routes/events.ts`, `backend/src/services/{registration,raceState,eventPresentation}.ts`, `backend/src/routes/{checkpoints,results,eventComms,eventGroups}.ts`, `frontend/src/pages/{CreateEvent,ManageEvent,OrganizerDashboard}.tsx`
- **G — Go / Just Ride:** `frontend/src/components/go/{GoScreen,AudiencePicker,BatterySheet,WhoCanWatch,SelectorChip,batteryTiers}.tsx`, `frontend/src/pages/{Track,FreeRide}.tsx`, `frontend/src/services/{trackingService,batteryFallback}.ts`, `frontend/src/design/retired.ts`
- **S — Sharing:** `backend/src/routes/freeRide.ts` (share-link/watch), `frontend/src/pages/{FreeRide,Track,WatchRide}.tsx`, `frontend/src/components/go/{WhoCanWatch,AudiencePicker}.tsx`, `frontend/src/components/ShareSheet.tsx`
- **SP — Spectator demo/replay/catch-up:** `frontend/src/pages/{EventPage,WatchRide,EventReplay,RideReplay}.tsx`, `frontend/src/lib/demoShowcase.ts`, `frontend/src/lib/spectator/LivePositionSource.ts`, `backend/src/routes/catchupTimeline.ts`
- **N — Notifications/social:** `backend/src/services/notificationService.ts`, `backend/src/jobs/notificationWorker.ts`, `backend/src/routes/{feed,stories,follows,notifications}.ts`, `backend/src/services/anonWatcherPush.ts`
- **SA — Safety:** `backend/src/routes/{tracking,freeRide}.ts` (SOS), `frontend/src/services/crashDetection.ts`, `frontend/src/lib/emergency.ts`, `frontend/src/components/go/AlertSendModal.tsx`
- **AP — Account/privacy:** `backend/src/routes/privacy.ts`, `backend/src/routes/handles.ts`, migration `121_rider_privacy_optout.sql`, `backend/src/routes/events.ts` (privacy enum)
- **R6 — Finish behaviour:** `CLAUDE.md` Rule 6, `frontend/src/lib/spectator/{LivePositionSource,riderLayerController,riderLayers}.ts`
- **T / F — Terminology & follows:** `CLAUDE.md` Vocabulary decrees (no "dot"; Just Ride; activity; Event Organiser), `frontend/src/design/retired.ts`, `backend/src/routes/follows.ts`

## Points that need founder confirmation

1. **Aster Plus annual option.** The store setup doc and the in-app Plus sheet
   (`PlusUpsellSheet.tsx`) offer Aster Plus **monthly and annual** (an `aster_plus_annual`
   SKU exists). The refresh brief states annual billing is retired / not to be published,
   so the KB presents Aster Plus as a **monthly** membership only. Confirm whether Plus
   annual should be surfaced. (The Event Organiser plan **is** monthly-only in source —
   consistent with the brief.)
2. **Monetisation is flag-gated OFF by default in this build** (`isMonetizationEnabled()`
   is false unless `MONETIZATION_ENABLED`/`REVENUECAT_WEBHOOK_AUTH` is set). While off,
   club joins are free with no cap and every public event appears in discovery. The KB
   documents the model as designed and as already advertised on the marketing site
   (`ForClubs.tsx`, `astertrack.app/pricing`). Confirm it is correct to describe the
   Aster Plus / Event Organiser caps as the live customer model now.
3. **"Hide my location" label.** The privacy toggle is written in code as `hide_dot`; the
   no-"dot" copy rule means the user-facing label should not say "dot". The KB now calls
   it **"Hide my location"** — confirm the exact on-screen wording.
4. **Prices & tiers** are intentionally not printed; the KB links to
   `astertrack.app/pricing`. Confirm that page reflects the current model (Aster Plus;
   Event Organiser tiers ~100/500/1000; free 3-registration preview).
5. **SOS vs "Alert".** The KB keeps **"SOS"** (per the app's product rules the SOS→"Alert"
   rename is pending/not yet enforced), while some in-app buttons already read "Alert my
   watchers". Confirm whether to migrate the help centre to "Alert".
6. **Live-event Catch up** ("applies to all live events") is a very recent change
   (app dated 2026-07-20). Confirm it is live in the build spectators will use.
7. **Screenshots** remain deferred (existing `screenshot-todo` placeholders kept; captions
   updated for retired UI). The new live-demo article has no placeholder yet — add one to
   the shot-list if a screenshot is wanted.

## Validation

- `git diff --check` — clean (no whitespace errors).
- Internal Markdown link check — 424 relative `.md` links, **all resolve** (after the
  five-favourite deletion and the live-demo addition).
- `bundle exec jekyll build` — **blocked**: no Ruby toolchain in this environment
  (`ruby`, `gem`, `bundle` not installed). Not installed, per scope. Run
  `bundle install && bundle exec jekyll build` where Ruby 3.x is available.
