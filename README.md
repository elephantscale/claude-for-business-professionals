# Claude for Business Professionals

*Data, reporting, and presentations — hands-on, code-free, in four short sessions.*

A working course that takes non-technical professionals from raw numbers to a clear report to
a draft presentation, entirely inside **Claude.ai**. Built by Elephant Scale.

## Contents

- **`outline.md`** — full course outline (audience, outcomes, per-session breakdown, tooling).
- **`slides/`** — five decks (`00-about` + one per session). Build with `gen.sh`
  (`$ES_HOME/utils/presentations/slides-assembler.sh`); output lands in `slides/assembly.out/`.
- **`labs/`** — `SETUP.md`, a lab per session, and a facilitator index (`README.md`).
- **`course-materials/`** — the shared dataset (`sample-data/angola-sugar-imports.csv`), the
  prompt-library handout, and the student intro form (`cohort-intros.html`).

## Format

Four ~60-minute sessions (or one half-day):

1. Getting productive with Claude
2. Data analysis in plain English
3. From analysis to a clear report
4. Building a presentation — and making it stick

Every session ends in a hands-on lab, and the labs **chain**: the dataset analyzed in
Session 2 becomes the report in Session 3 and the deck in Session 4.

## Tooling

Runs on **Claude.ai** — **Claude Team ("for Work")** recommended, **Pro** a fine individual
fallback. The course uses **Projects, file upload, Artifacts, and the Analysis tool**, so the
API/Console is not used. See `labs/SETUP.md`.

## Building the slides

```
cd slides
./gen.sh        # writes .pptx into slides/assembly.out/
```

`assembly.out/` is generated and gitignored — build it where you present.
