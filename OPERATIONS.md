# Project Operations

**Last updated:** 2026-09-23
**Owner:** Mark Kerzner (instructor)
**Status:** Green — course written and building; first delivery Thursday 2026-09-24

## Purpose and business value

Short, hands-on ElephantScale course, *Claude for Business Professionals: Data, Reporting &
Presentations*. Four ~60-minute sessions that take non-technical professionals from a raw
spreadsheet to a report to a draft deck, entirely in Claude.ai. Code-free. A fast, repeatable
offering that positions ElephantScale on the Claude/Anthropic side (complements the
ChatGPT/Azure-oriented AI-for-Business-Leaders course).

## Current status

Built this session from the client's `.docx` outline and structured like AI-for-business-
leaders: `outline.md`, five slide decks (`slides/00-about` + one per session, build via
`gen.sh`), four chained labs + `SETUP.md`, and a shared seeded dataset. All five decks build
cleanly. Teaching from the Mac.

## Recent accomplishments

- Full course authored: outline, 5 decks, 4 labs, lab setup, facilitator index, prompt-
  library handout, seeded sample dataset.
- Tooling decision made and documented (see below).
- Decks verified to assemble via `gen.sh`.

## Current priorities

1. Instructor dry-run of the four labs on a real Claude.ai account before Thursday.
2. Confirm participant accounts (Team seats ideal — see decision).
3. Share `cascade-sales.csv` and the prompt-library handout with participants.

## Customers and revenue connections

Client TBD/kept out of repo. Delivery **2026-09-24**. Content can be tailored to a client
domain (finance/ops/sales) on request.

## Tooling decision

**Claude.ai, plan = Claude Team ("Claude for Work"); Pro is an individual fallback.** Not the
API/keys. Rationale: the course is built on Projects, file upload, Artifacts, and the Analysis
tool — all Claude.ai features the API/Console lacks. Instructor originally considered API keys;
recommendation is to use Claude for Work instead. Documented in `outline.md` and `labs/SETUP.md`.

## Upcoming deadlines

- **2026-09-24** — first delivery (Thursday).

## Important TODOs

- Dry-run Lab 2's analysis-tool + outlier-catch flow on the live dataset (confirm Claude finds
  the June-2025 West/Equipment 10x error when asked).
- Confirm PowerPoint/Google Slides paste path in Lab 4 on the Mac.

## Blockers and dependencies

- Participant Claude accounts (Team seats) provisioned before Thursday.

## Risks

- **Account readiness** — if only Free accounts are available, Projects/limits degrade the
  labs; if only API keys, the labs don't work as written (flagged in SETUP).
- **Analysis-tool behavior** — labs assume Claude uses the analysis tool when asked; verify in
  the dry run.

## Decisions needed from Mark

- Final account plan for participants (Team vs. Pro) and who provisions.

## Next three highest-value actions

1. Dry-run all four labs end to end on Claude.ai (esp. Lab 2 outlier catch, Lab 4 export).
2. Confirm and provision participant accounts.
3. Distribute the dataset + prompt-library handout and the SETUP data-safety rules.
