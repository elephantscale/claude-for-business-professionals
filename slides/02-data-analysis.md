# Data Analysis in Plain English

Session 2

Elephant Scale

---

## The Promise of This Session

You have a spreadsheet. You have questions about it. You do **not** want to write formulas or
pivot tables.

So don't. Upload it and ask — in the same plain English you'd use with a sharp analyst
sitting next to you.

Notes:

This is the session that surprises people most. Most of the room associates "data analysis"
with Excel pain. Watching a question in plain English return a chart reframes what the tool is
for.

---

## Calculated vs. Estimated — The Thing to Understand

Ask a numbers question casually, and Claude may **estimate** from what it read — fast, and
sometimes wrong.

Ask it to use the **analysis tool**, and it writes and runs real code on your file — the
number is **calculated**.

> When the number matters, say: *"use the analysis tool."*

Notes:

This is the single most important idea in the session. Demo it: ask for a total both ways and
show they can differ. "Calculated, not estimated" becomes the refrain.

---

## What You Can Ask, With No Formulas

* *"What's the overall value trend over these 24 months?"*
* *"Which port is growing and which is declining?"*
* *"Which grade grows fastest? Any seasonality?"*
* *"Compare this year to last year by port."*
* *"Make a chart of monthly value by port."*

Notes:

These are the Session-2 lab questions. Point out that each is a plain sentence — no syntax,
no functions. The skill is knowing *what* to ask, not *how* to write it.

---

## Cleaning Messy Data by Describing It

Real data is messy. You fix it by **describing the mess**, not editing cells:

* *"The Port column is inconsistent — 'Namibe', 'namibe', 'NAMIBE', 'NMB'. Standardize it."*
* *"Some Value cells are blank. List which rows, and don't invent values."*
* *"Split this full-name column into first and last."*

Notes:

Tie back to the project instruction from Session 1 — "don't invent values." When Claude
*lists* the blanks instead of filling them, that's the instruction working. That's the whole
point of the honesty line.

---

## Sanity-Checking — Catch the Wrong Number

The numbers *feel* like data. They will end up on a slide. **Check the ones that matter.**

* Ask: *"Any outliers or values that look like data-entry errors?"*
* Then verify the flagged one **yourself** in the spreadsheet.
* One bad cell can quietly inflate a total nobody re-checks.

Notes:

The Session-2 dataset has a planted 10x error (2025-06, Luanda, Brown — ~$655K vs a ~$66K
norm). Do not tell them where — let them find it in the lab. The person who misses it because Claude "seemed
confident" is the teaching moment: confidence is not accuracy.

---

## Charts, and Their Limits

Claude will draw you a chart to *see* the trend — great for exploring and for a first draft.

* Good for: spotting the shape, sharing a quick visual, sanity-checking a claim
* Watch: a chart built on un-cleaned data inherits every error
* For the final deck, you'll often rebuild the chart in your own tool — the value here is the
  **insight**, fast

Notes:

Manage expectations: the chart is for understanding, not always the final artifact. Clean
first, then chart — a chart on dirty data is a confident lie.

---

## From Numbers to Findings

A total is not a finding. A **finding** is the sentence you'd say to your boss:

> Not: *"Namibe imported about $0.9M."*
> But: *"Namibe's import value has declined year over year while every other port grew —
> we need an owner on it before the board deck."*

Notes:

This is the bridge to Session 3. The lab ends by asking Claude to consolidate three findings
in one sentence each — that list is the input to the report.

---

## Lab 2 — Analyze End to End

* Orient → clean → find trends → **catch the planted error** → three findings
* Use the analysis tool so the numbers are real
* Leave with three findings you'd defend — one of them the error you caught

**The most important five minutes: finding the number that's wrong.**

Notes:

Hand to `labs/02-data-analysis.md`. ~30 minutes. In the debrief, ask who found the outlier and
who didn't — and why. That contrast is the session's lesson.
