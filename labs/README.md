# Labs — Facilitator Index

Four labs, one per session. Every participant works on the **same fictional dataset**
(Kwanza Sugar Imports — a cane-sugar importer/distributor in Angola) inside **one Claude
Project**, so the labs chain: analysis → report → deck. Read `SETUP.md` first — it covers
accounts and the data-safety rule.

## At a glance

| # | Lab | Session | Time | Output |
|---|---|---|---|---|
| 1 | Your First Working Prompts | S1 | ~20 min | Project set up + a rewritten "working" prompt |
| 2 | Analyze a Business Dataset | S2 | ~30 min | Three defensible findings (one error caught) |
| 3 | Produce a Polished Report | S3 | ~30 min | One-page summary + a retargeted version |
| 4 | Draft a Short Deck | S4 | ~30 min | Slide outline + speaker notes + prompt library |

## Materials

All in `course-materials/`:

- `sample-data/angola-sugar-imports.csv` — the shared dataset (24 months, seeded with a real
  story and a few deliberate data-quality problems).
- `prompt-library-template.md` — the handout participants fill in during Lab 4.

## The dataset's built-in lessons (instructor cheat sheet)

> For the **exact verified numbers** (port/grade growth, the outlier value, the blank rows, model
> findings), see **`ANSWER-KEY.md`** — instructor-only; use it to validate students' analysis live.

The data is realistic on purpose — the "wrong" bits are teaching devices:

- **Namibe is the only declining port** (~−13% year over year) while the others grow — the
  headline finding.
- **Specialty is the fastest-growing grade** (~+22%); **Refined spikes in autumn** (Sep–Nov,
  pre-holiday stockpiling).
- **Inconsistent Port labels** — "Namibe" appears as `Namibe`, `namibe`, `NAMIBE`, `NMB` — the
  cleaning exercise (Lab 2, Step 2). It's the *declining* port, so sloppy merging hides the decline.
- **Five blank Value cells** — the "don't silently invent values" exercise.
- **One planted outlier: 2025-06, Luanda, Brown** is ~10× too large (~$655K vs a ~$66K norm) —
  the sanity-check catch (Lab 2, Step 4). Uncorrected it makes Luanda look like a ~20% grower;
  corrected, Luanda's growth is basically flat. The whole Luanda headline is one typo.

## Facilitator notes that apply throughout

- **Everything is fictional.** Participants use only the course pack until they're back at
  their desks — reinforce this every session.
- **Ask for the Analysis tool when numbers matter.** "Calculated, not estimated" is the
  refrain. Show an estimated vs. calculated total once and it sticks.
- **Protect the last five minutes of each lab** — the honesty pass (Lab 3) and the prompt
  library (Lab 4) are where the durable skill lives. Cut earlier steps, not those.
- **One Project, kept across sessions.** If someone loses their thread, they can ask Claude
  to restate prior findings — the Project remembers the files and instructions.
