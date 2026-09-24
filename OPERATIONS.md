# Project Operations

**Last updated:** 2026-09-24
**Owner:** Mark Kerzner (instructor)
**Status:** Green — **Session 1 delivered 2026-09-24.** Room confirmed on Claude Pro (labs run
at full power). Sessions 2–4 remaining. One process fix in flight: student intake is moving from
the copy-paste HTML card to a Google Form.

## Purpose and business value

Short, hands-on ElephantScale course, *Claude for Business Professionals: Data, Reporting &
Presentations*. Four ~60-minute sessions that take non-technical professionals from a raw
spreadsheet to a report to a draft deck, entirely in Claude.ai. Code-free. A fast, repeatable
offering that positions ElephantScale on the Claude/Anthropic side (complements the
ChatGPT/Azure-oriented AI-for-Business-Leaders course).

## Current status

**Session 1 delivered 2026-09-24.** Course is built, verified, and re-skinned to the client's
domain (cane-sugar imports into Angola; dataset = **Kwanza Sugar Imports**, Port × Grade × Month,
Tonnes + Value USD). Decks built and in `slides/release/`. Students are on **Claude Pro** (and
also use Gemini/ChatGPT) — accounts are a non-issue and the labs run at full power. Sessions 2–4
remain. The one issue surfaced in Session 1: the intro form's copy-paste-into-chat card is
unreliable for actually collecting student info, so intake is switching to a **Google Form**
(responses to a Sheet Mark owns).

## Recent accomplishments (2026-09-23 session)

- **Dry-run of the dataset** — verified every planted lesson and the analytical narrative by
  direct calculation (see "Dataset's built-in lessons" below). All present and crisp.
- **Domain re-skin** — regenerated the dataset as fictional Angola cane-sugar imports and
  edited labs 1–4, `SETUP.md`, `labs/README.md`, top-level `README.md`, `outline.md`, and all
  slide sources to the new domain, holding to the verified numbers.
- **Student intro form added** — adapted the AI-for-Business-Leaders "fill → copy → paste"
  HTML form as `course-materials/cohort-intros.html`; Claude-first, and it now asks each
  student which Claude account they have, so the returned cards double as an account census.
- **Free-survival path added** to `SETUP.md` (single long chat instead of Projects; usage-cap
  guidance; instructor-demo fallback), for the likely case that students arrive on Free.
- **Facilitator answer key** (`labs/ANSWER-KEY.md`) with the exact verified figures, to
  validate students' analysis live.
- **Decks rebuilt on the Mac** from the re-skinned sources and committed to `slides/release/`;
  verified to contain the new sugar domain and no old-domain references.

### 2026-09-24

- **Session 1 delivered.** Room on Claude Pro (+ Gemini/ChatGPT). Lab 1 (naive vs. engineered
  prompt) run live.
- **GitHub Pages published** — landing at `elephantscale.github.io/claude-for-business-professionals/`
  and the intro form at `/course-materials/cohort-intros.html` (public, opens from any device).
  Note: the root `index.html` landing page is written locally but not yet committed/pushed
  (blocked from the assistant as a public-surface action; Mark to push if wanted). The form URL
  works regardless.
- **Intake fix decided** — switching from the copy-paste card to a **Google Form** (responses →
  Google Sheet). Field spec matches `cohort-intros.html`, including the Claude-account question.

## Current priorities

1. **Deliver Sessions 2–4.** Session 2 (data analysis + the Luanda/Brown outlier catch) is the
   most-verified lab — dataset confirmed, Analysis-tool behavior proven in rehearsal, answer key
   in hand (`labs/ANSWER-KEY.md`).
2. **Stand up the Google Form** for student intake (replaces the copy-paste card) and reuse it
   for the next cohort.
3. **Optional:** commit/push the root `index.html` landing page for a tidier Pages URL.

## Customers and revenue connections

Client is a **cane-sugar import business in Angola** (specifics kept out of repo). Delivery
**2026-09-24**. Course content is now tailored to their domain.

## Account plan for participants (resolved)

Students are on **Claude Pro** (and also use Gemini/ChatGPT). Pro runs every lab at full power
(Projects + Analysis tool), so the Free-survival path in `SETUP.md` stays as a documented
fallback but wasn't needed. No provisioning dependency on the client.

## Dataset's built-in lessons (verified 2026-09-23)

`course-materials/sample-data/angola-sugar-imports.csv` — 384 rows, 24 months (2024–2025),
Port × Grade. Confirmed by calculation:

- **Namibe** — only declining port (~−13% YoY); also carries the label mess, so sloppy merging
  hides the decline.
- **Specialty** — fastest-growing grade (~+22%). **Refined** — autumn spike (Sep–Nov).
- **Port label mess** — Namibe appears as `Namibe`/`namibe`/`NAMIBE`/`NMB` (Lab 2 Step 2).
- **5 blank Value cells** (Lab 2 Step 2).
- **Planted outlier** — 2025-06, Luanda, Brown ≈ $655K vs a ~$66K norm (~10×). Uncorrected it
  makes Luanda look like a ~20% grower; corrected, Luanda is ~flat. Strong Step-4 payoff.

## Upcoming deadlines

- **2026-09-24** — Session 1 delivered. ✅
- Sessions 2–4 — dates per the client's schedule (`Unknown` in repo).

## Important TODOs

- Build the Google Form for intake (field spec in chat / matches `cohort-intros.html`); link it
  to a Google Sheet and turn on new-response email notifications.
- Confirm PowerPoint/Google Slides paste path in Lab 4 on the Mac (still to exercise live).
- Optional: commit/push `index.html` for the Pages landing page.

## Blockers and dependencies

- None open. Accounts resolved (Pro); decks built; content verified.

## Risks

- **Lab 4 export path** — the PowerPoint/Google Slides paste step hasn't been exercised live yet.
- **Intake reliability** — copy-paste card proved unreliable; the Google Form removes this risk
  once stood up.

## Decisions needed from Mark

- None outstanding.

## Next three highest-value actions

1. Deliver Session 2 using the answer key to validate the room's outlier catch.
2. Stand up the Google Form for intake.
3. Exercise the Lab 4 export path once before Session 4.
