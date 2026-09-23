# Labs — Facilitator Index

Four labs, one per session. Every participant works on the **same fictional dataset**
(Cascade Outdoor Supply) inside **one Claude Project**, so the labs chain: analysis →
report → deck. Read `SETUP.md` first — it covers accounts and the data-safety rule.

## At a glance

| # | Lab | Session | Time | Output |
|---|---|---|---|---|
| 1 | Your First Working Prompts | S1 | ~20 min | Project set up + a rewritten "working" prompt |
| 2 | Analyze a Business Dataset | S2 | ~30 min | Three defensible findings (one error caught) |
| 3 | Produce a Polished Report | S3 | ~30 min | One-page summary + a retargeted version |
| 4 | Draft a Short Deck | S4 | ~30 min | Slide outline + speaker notes + prompt library |

## Materials

All in `course-materials/`:

- `sample-data/cascade-sales.csv` — the shared dataset (24 months, seeded with a real story
  and a few deliberate data-quality problems).
- `prompt-library-template.md` — the handout participants fill in during Lab 4.

## The dataset's built-in lessons (instructor cheat sheet)

The data is realistic on purpose — the "wrong" bits are teaching devices:

- **East region is declining** while the others grow — the headline finding.
- **Accessories is the fastest-growing category**; **Footwear spikes in autumn** (Sep–Nov).
- **Inconsistent Region labels** — "East" appears as `East`, `east`, `EAST`, `E` — the
  cleaning exercise (Lab 2, Step 2).
- **Five blank Revenue cells** — the "don't silently invent values" exercise.
- **One planted outlier: June 2025, West, Equipment** is ~10× too large — the sanity-check
  catch (Lab 2, Step 4). It inflates West and the company total until corrected.

## Facilitator notes that apply throughout

- **Everything is fictional.** Participants use only the course pack until they're back at
  their desks — reinforce this every session.
- **Ask for the Analysis tool when numbers matter.** "Calculated, not estimated" is the
  refrain. Show an estimated vs. calculated total once and it sticks.
- **Protect the last five minutes of each lab** — the honesty pass (Lab 3) and the prompt
  library (Lab 4) are where the durable skill lives. Cut earlier steps, not those.
- **One Project, kept across sessions.** If someone loses their thread, they can ask Claude
  to restate prior findings — the Project remembers the files and instructions.
