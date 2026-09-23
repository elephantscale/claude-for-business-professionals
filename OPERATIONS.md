# Project Operations

**Last updated:** 2026-09-23
**Owner:** Mark Kerzner (instructor)
**Status:** Yellow — course fully built and re-skinned to the client domain; first delivery
Thursday 2026-09-24. Yellow (not Green) only because participant Claude account provisioning is
unconfirmed the day before.

## Purpose and business value

Short, hands-on ElephantScale course, *Claude for Business Professionals: Data, Reporting &
Presentations*. Four ~60-minute sessions that take non-technical professionals from a raw
spreadsheet to a report to a draft deck, entirely in Claude.ai. Code-free. A fast, repeatable
offering that positions ElephantScale on the Claude/Anthropic side (complements the
ChatGPT/Azure-oriented AI-for-Business-Leaders course).

## Current status

Course is written, verified, and **re-skinned to the client's domain: cane-sugar imports into
Angola**. The fictional dataset is now **Kwanza Sugar Imports** (Port × Grade × Month, Tonnes +
Value USD) in place of the generic Cascade Outdoor Supply. Dataset regenerated and dry-run
verified; all four labs, the facilitator index, and the slide *sources* re-skinned to match.
Slide decks (.pptx) still need to be rebuilt on the Mac from the updated sources (`gen.sh`).

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

## Current priorities

1. **Send the intro form to students today** so account/skill info comes back before class.
2. **Live behavioral dry-run on Claude.ai** — the one thing still untested: does Claude invoke
   the Analysis tool and catch the 2025-06 Luanda/Brown outlier? Data is verified; live tool
   behavior is not.
3. **Confirm client's account answer** (Team seats vs. Free/demo fallback).

*(Decks are built and committed to `slides/release/` — verified to use the new sugar domain.)*

## Customers and revenue connections

Client is a **cane-sugar import business in Angola** (specifics kept out of repo). Delivery
**2026-09-24**. Course content is now tailored to their domain.

## Account plan for participants (decision — partially resolved)

15 students, otherwise unknown. Mark is **emailing the client now** to request accounts,
hoping for a reply before class but assuming he may not get one. **Fallback plan (set):** rely
on the client's environment if provided → instructor demos on Mark's own account → students on
Free follow along using the Free-survival path. Recommended remains **Claude Team ("for Work")**
if the client can provision. **Open:** client's answer on who provisions.

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

- **2026-09-24** — first delivery (Thursday).

## Important TODOs

- Distribute `cohort-intros.html` to students today.
- Live dry-run of Lab 2's Analysis-tool + outlier-catch flow on a real Claude.ai account.
- Confirm PowerPoint/Google Slides paste path in Lab 4 on the Mac.

## Blockers and dependencies

- Participant Claude accounts unconfirmed. Mitigated (not removed) by the Free-survival path
  and instructor-demo fallback; awaiting client reply.

## Risks

- **Account readiness** — mitigated by the Free path + demo mode, but a Free-only room is a
  degraded experience.
- **Analysis-tool behavior** — labs assume Claude uses the Analysis tool when asked; verified
  in the data but not yet in a live session.

## Decisions needed from Mark

- Whether to wait on the client's account answer or commit to the Free/demo plan for tomorrow.

## Next three highest-value actions

1. Rebuild decks on the Mac and commit them.
2. Send the intro form to students now.
3. Live dry-run of Lab 2 (Analysis tool + Luanda/Brown outlier catch) and the Lab 4 export path.
