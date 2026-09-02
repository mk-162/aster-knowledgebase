/**
 * Vocabulary guard for the help centre.
 *
 * WHY THIS EXISTS. The app repository enforces the founder's naming decrees
 * with a guard test that reads its own retired-word register
 * (frontend/src/design/retired.ts). This repository had no such guard, so it
 * drifted: by the 2026-08-28 review it carried 201 uses of "SOS", 47 of "group
 * ride" and a handful of "Free Ride", years after each was retired. Prose that
 * nobody checks goes stale silently. This script is the check.
 *
 * It is deliberately a copy of the RULES, not of the register file: the two
 * repositories are separate and the help centre cannot import from the app.
 * When a new decree lands in retired.ts, add it here in the same pass.
 *
 * WHAT IT IS NOT. It does not check accuracy, only vocabulary. A sentence can
 * pass this and still be wrong about the product.
 *
 * Run with `node scripts/check-vocabulary.mjs`. Non-zero exit on any violation.
 */

import fs from "node:fs"
import path from "node:path"

/**
 * The retired terms, mirroring the app repo's register.
 *
 * `pattern` matches the retired usage. `unless` is a list of patterns that,
 * when they match the same line, mean this occurrence is legitimate: an
 * exempt code identifier, a filename, or the educational use of a term.
 */
const RULES = [
  {
    term: "dot",
    say: "the athlete's live location / position, or just 'the athlete'",
    pattern: /\bdots?\b/i,
    /*
     * THE EDUCATIONAL EXEMPTION. "Dot watching" is the endurance-cycling
     * subculture's own term and the glossary/FAQ that DEFINE it are exempt by
     * the same decree that bans the word elsewhere: they teach the industry
     * term rather than using it as our own name for an athlete's position.
     * Also exempt: "dot" inside a URL, a filename or a code span.
     */
    unless: [
      /dot[- ]watch/i,
      /watch(ing)? the dot/i,
      /`[^`]*dot[^`]*`/i,
      /\bdot\.(com|app|org)\b/i,
      /\S+\.(md|png|jpg|svg)\b/i,
    ],
  },
  {
    term: "Free Ride",
    say: "Just Ride",
    pattern: /\bfree[- ]rides?\b/i,
    /* The /free-ride route, the free-rides.md filename and any code span are
     * identifiers, not copy. The decree renames the label only. */
    unless: [/`[^`]*free[- ]ride[^`]*`/i, /free-rides?\.md/i, /\/free-ride/i],
  },
  {
    term: "SOS",
    say: "Alert",
    pattern: /\bSOS\b/,
    /*
     * Exempt: code identifiers, routes and filenames (sendSOS, /organizer/sos,
     * sos-and-crash-detection.md), and the genuine industry sense of a
     * satellite messenger's "SOS button", which is a universal distress signal
     * and not our feature.
     */
    unless: [
      /`[^`]*SOS[^`]*`/,
      /sos[-a-z]*\.md/i,
      /\/[a-z-]*sos/i,
      /satellite[^.]*SOS|SOS[^.]*(device|beacon|messenger|button on)/i,
    ],
  },
  {
    term: "group ride",
    say: "meet-up",
    pattern: /\bgroup[- ]rides?\b/i,
    /* The group_ride enum value, the /club-rides route and the club-rides.md
     * filenames are identifiers. */
    unless: [/`[^`]*group[_ -]ride[^`]*`/i, /group_ride/i, /club-rides?\.md/i, /\/club-rides/i],
  },
  {
    /*
     * The decree names "Group ride", but "club ride" is the same retired idea
     * wearing a different first word, and it fails for the same reason: a
     * club's activity can be a run. The teams-and-clubs section was swept to
     * "meet-up" in the 2026-09-02 audit while getting-started, the glossary and
     * the home page kept saying "club ride", so the estate contradicted itself
     * for a fortnight. Enforced here so the two halves cannot drift apart
     * again.
     */
    term: "club ride",
    say: "meet-up",
    pattern: /\bclub[- ]rides?\b/i,
    unless: [/`[^`]*club[_ -]ride[^`]*`/i, /club-rides?\.md/i, /\/club-rides/i],
  },
  {
    term: "Club Line",
    say: "Milestone",
    pattern: /\bclub[- ]lines?\b/i,
    unless: [/`[^`]*club[_ -]line[^`]*`/i, /club_line/i],
  },
  {
    term: "Club Marker",
    say: "Milestone",
    pattern: /\bclub[- ]markers?\b/i,
    unless: [/`[^`]*club[_ -]marker[^`]*`/i],
  },
  {
    term: "Route moments",
    say: "Milestones",
    pattern: /\broute[- ]moments?\b/i,
    unless: [],
  },
  {
    /*
     * Founder ruling, 2026-09-02: the one canonical user-facing label is
     * exactly "Point-to-point". Not "Point to point" (no hyphens), not
     * "Point-to-point adventure" (the format isn't branded "adventure"),
     * and not "Grand depart"/"grand départ" — that's the `grand_depart`
     * code identifier, never a name a reader should see.
     */
    term: "Point-to-point adventure",
    say: "Point-to-point",
    pattern: /\bpoint[- ]to[- ]point adventures?\b/i,
    unless: [],
  },
  {
    term: "Point to point",
    say: "Point-to-point",
    pattern: /\bpoint to point\b/i,
    unless: [],
  },
  {
    term: "Grand depart",
    say: "Point-to-point",
    pattern: /\bgrand[- ]d[ée]parts?\b/i,
    /* grand_depart (the engine/event_type value) is a code identifier. */
    unless: [/`[^`]*grand[_ -]d[ée]part[^`]*`/i, /grand_depart/i],
  },
]

/**
 * Contexts that are never copy, whatever the rule.
 *
 * A retired word inside an HTML attribute (a CSS class, a screenshot slug) is
 * an identifier the reader never sees, and a glossary's "(formerly X)"
 * annotation is precisely how a rename is taught rather than a use of the old
 * name. Checking these once for every rule beats repeating them per rule and
 * forgetting one.
 */
const NEVER_COPY = [
  /\b(?:class|id|slug|href|src)="[^"]*"/i,
  /\(formerly [^)]*\)/i,
  /*
   * A markdown link's TARGET is a filename, not copy. Several articles keep
   * filenames carrying retired words (walkthrough-group-ride-adventure.md,
   * sos-and-crash-detection.md) because renaming them would break every
   * inbound link; what matters is the link TEXT, which this leaves exposed.
   */
  /\]\([^)]+\)/,
  /*
   * Naming a retired term in order to retire it. "We call it Alert rather
   * than SOS" is the sentence that teaches the decree, and an article that
   * explains a rename has to be able to say the old name once.
   */
  /(?:rather than|instead of|not|formerly|used to be|no longer|no separate)\s+["'“”]?[A-Za-z][\w '-]*["'“”]?/i,
]

/** Files that are working documents rather than published articles. */
const SKIP = new Set([
  "UPDATE-PROMPT.md",
  "CONTENT-AUDIT.md",
  "STYLE-GUIDE.md",
  "README.md",
  /* Review briefs quote the retired words in order to ban them. */
  ".review-brief.md",
  ".staging-brief.md",
])

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (entry.name.endsWith(".md") && !SKIP.has(entry.name)) out.push(full)
  }
  return out
}

const root = process.cwd()
const violations = []

for (const file of walk(root)) {
  const rel = path.relative(root, file)
  const lines = fs.readFileSync(file, "utf8").split("\n")

  lines.forEach((line, i) => {
    /* Strip the never-copy contexts before matching, rather than skipping the
     * whole line: a line can carry a screenshot slug AND a real violation. */
    const prose = NEVER_COPY.reduce((s, ex) => s.replace(new RegExp(ex, "gi"), ""), line)

    for (const rule of RULES) {
      if (!rule.pattern.test(prose)) continue
      if (rule.unless.some((ex) => ex.test(prose))) continue
      violations.push({ file: rel, line: i + 1, term: rule.term, say: rule.say, text: line.trim() })
    }
  })
}

if (violations.length === 0) {
  console.log("Vocabulary guard: clean.")
  process.exit(0)
}

const byTerm = {}
for (const v of violations) (byTerm[v.term] ??= []).push(v)

console.log(`Vocabulary guard: ${violations.length} violation(s).\n`)
for (const [term, list] of Object.entries(byTerm)) {
  console.log(`  "${term}" -> ${list[0].say}  (${list.length})`)
  for (const v of list.slice(0, 8)) {
    console.log(`     ${v.file}:${v.line}  ${v.text.slice(0, 96)}`)
  }
  if (list.length > 8) console.log(`     ... and ${list.length - 8} more`)
  console.log("")
}
process.exit(1)
