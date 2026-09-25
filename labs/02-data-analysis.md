# Lab 2 — Analyze a Business Dataset End to End

**Session 2** · Individual, in Claude · ~30 minutes

---

## Purpose

Take a real-feeling sales dataset from raw file to **three findings you'd put in front of
your boss** — without writing a single formula. Along the way you'll meet the two things that
separate someone who uses AI well from someone who gets burned by it: **cleaning messy data
by describing it**, and **catching the number that's wrong**.

The dataset has problems in it on purpose. Finding them is the point.

## Before you start

- Work in your **"Kwanza — My Workspace"** Project. The CSV is already uploaded from Lab 1.
  (If not: upload `course-materials/sample-data/angola-sugar-imports.csv` now.)
- Have the file open in Excel or Google Sheets too, so you can eyeball it — 384 rows, five
  columns (Month, Port, Grade, Tonnes, Value). Value is in US dollars; Tonnes is metric tons.

## Step 1 — Ask it what's there (5 min)

Don't start with a question you already know the answer to. Start by making Claude orient
you. In a new chat in your Project:

> ```
> Using the uploaded angola-sugar-imports.csv, give me a quick orientation:
> what date range, which ports and grades, total value and total tonnes, and
> anything that looks off or inconsistent in the data. Use the analysis tool so
> the numbers are calculated, not estimated.
> ```

**Watch for the phrase "analysis tool" or a code step.** When Claude *runs code* on the file,
the totals are real. When it just reads and describes, they're estimates. Ask for the tool
when numbers matter — which is now.

## Step 2 — Clean it by describing the mess (6 min)

Claude's orientation probably flagged some of this; if not, you will. Ask:

> ```
> Two things look wrong to me. First, the Port column isn't consistent — some rows
> say "Namibe", others "namibe", "NAMIBE", or "NMB". Standardize them to one label.
> Second, a few Value cells are blank. List exactly which Month/Port/Grade rows are
> blank, and tell me how you'd handle them for a trend analysis (don't silently
> invent values).
> ```

This is the whole "cleaning and reshaping" skill: you **describe the fix in plain English**
and Claude does the spreadsheet work. Notice it *lists* the blanks rather than quietly
filling them — because you told it not to guess in your project instructions.

## Step 3 — Find the trends (6 min)

Now the analysis. Ask for the story, not just tables:

> ```
> Using the cleaned data and the analysis tool:
> 1. Overall value trend across the 24 months — up, down, flat, seasonal?
> 2. Which port is growing and which is declining? Show each port's trend.
> 3. Which grade is growing fastest?
> 4. Any seasonality — months that spike?
> Give me a short written takeaway for each, plus one chart of monthly value by port.
> ```

You should see the real story emerge: **Namibe declining while the others grow, Specialty
growing fastest, and Refined spiking in the autumn (Sep–Nov, ahead of the holidays).** If your
takeaways don't say something like that, push back — ask Claude to show its working.

## Step 4 — Catch the wrong number (5 min)

This is the most important five minutes of the course. Ask:

> ```
> Are there any outliers or values that look like data-entry errors — for example a
> number that's an order of magnitude off? Point to the exact row and explain why it
> looks wrong.
> ```

There is a planted error: **June 2025, Luanda, Brown** has a value roughly **ten times**
what that cell should be. Confirm it yourself in the spreadsheet — the surrounding Brown
values are tens of thousands of dollars; this one is over half a million.

> Then ask: *"Re-run the totals and the Luanda trend with that row corrected to a plausible
> value, and tell me how much it changed the answer."*

**The lesson:** that one bad cell was quietly inflating Luanda and the company total —
dramatically. Uncorrected, Luanda looks like the star, growing ~20% year over year; corrected,
its growth is basically flat, and Lobito and Cabinda are the real movers. The *whole* headline
about Luanda came from one typo. Nobody downstream would have known. You caught it because you
asked — and because you didn't trust the first tidy number you were handed.

## Step 5 — Lock in three findings (3 min)

Ask Claude to consolidate:

> ```
> Based on everything above, give me the three findings I should take to my boss,
> in one sentence each, most important first. Flag any that depend on the data
> cleanup we just did.
> ```

## Deliverable

**Three findings**, in your own words, that you'd defend — one of which is the data-quality
catch. Keep them in the Project; Session 3 turns them into a report.

## Facilitator watch-fors

- People who accept Step 1's totals without asking for the analysis tool. Put an estimated
  total and a calculated total on screen — they can differ, and that's the teaching moment.
- The person who doesn't find the outlier because Claude "seemed confident." That's exactly
  the trap. Confidence is not accuracy.
- Someone whose chart looks wrong because the blanks/outlier weren't handled. Good — that's
  why cleaning came first. Have them redo it.
- **Fast finishers / stronger participants** — point them to "Going deeper" so the room stays
  engaged while others complete the core five steps. Challenge B (red-teaming the outlier fix)
  stretches confident students the most.

## Going deeper — for advanced participants (if you finish early)

The five steps above are the whole lab — **everyone does those.** If you finish with time to
spare, here are three that separate a competent analyst from a sharp one. Same dataset, same
Project.

**A. Drill into the decline — is Namibe broad or concentrated?**

> ```
> Namibe is our one declining port. Break its decline down: which grades are falling and
> which (if any) are holding? Is the drop steady across the 24 months, or does it start at
> a particular point? Give me the one chart that best shows where Namibe is actually losing
> ground, and tell me what you'd check next.
> ```

"Namibe is down 13%" is where amateurs stop. The decision depends on *what's* down — one
grade collapsing is a different problem from broad erosion.

**B. Red-team your own correction.**

> ```
> I assumed the June-2025 Luanda Brown figure was a data-entry error and corrected it.
> Argue the other side: what would have to be true for that number to be real, and exactly
> what would I check before I change it? What's the risk if I'm wrong?
> ```

Advanced users don't just *catch* outliers — they resist "cleaning" a number that might be a
real signal (a bulk shipment, a price spike). Verify before you overwrite.

**C. Separate the data from the inference.**

> ```
> If I could give Namibe one intervention next quarter, what does the data suggest and what's
> the risk in that recommendation?
> ```

Claude will now reason **beyond** the data — a good moment to practice separating what the
numbers say from what the AI is inferring.
