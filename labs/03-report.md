# Lab 3 — Produce a Polished Report

**Session 3** · Individual, in Claude · ~30 minutes

---

## Purpose

Turn the three findings from Session 2 into writing someone senior would actually read — a
one-page executive summary and a fuller report — then **retarget the same content for a
different reader in a single prompt**. Along the way, learn to edit *with* Claude instead of
starting over, and save a template so the next report takes five minutes, not an hour.

The discipline being trained: **the words can be Claude's; the claims have to be yours.**

## Before you start

- Same Project, same chat thread as Lab 2 (so Claude still has your findings and the cleaned
  data). If you're in a fresh chat, first ask Claude to restate the three findings from the
  analysis.

## Step 1 — The executive summary (7 min)

> ```
> Write a one-page executive summary of the Cascade sales analysis for our VP of Sales.
> Structure:
> - A one-sentence headline (the single most important thing)
> - "What's working" and "What needs attention" as short sections
> - One clear recommendation with its main risk
> Keep it under 300 words. Use the corrected numbers. Where a finding depends on the
> data cleanup, say so in one honest line.
> ```

Read it as if you were the VP. Is the headline the *right* thing to lead with? If not, tell
Claude which finding should lead and re-run — that's you doing the judgment, which is your
job, not the tool's.

## Step 2 — Edit with it, don't restart (6 min)

Never regenerate a whole draft to fix one thing. Practice surgical edits:

> - *"Tighten the 'what needs attention' section to three sentences and make the tone more
>   direct — less hedging."*
> - *"The recommendation is too soft. Rewrite it as a specific action with an owner and a
>   deadline."*
> - *"Cut every sentence that a skeptic could dismiss as vague."*

Notice you're **steering**, not rewriting. Each instruction changes one thing.

## Step 3 — The honesty pass (4 min)

This is the pass most people skip and shouldn't:

> ```
> Go through the summary line by line and flag every sentence that states something not
> directly supported by the data I gave you — any number, claim, or cause that was
> inferred rather than found. List them so I can decide whether to keep each one.
> ```

Read the flagged lines. Some inferences are fine to keep (you'll stand behind them); some are
the AI reaching. **You** decide. That decision is the difference between a report you can
defend and one that blows up in the meeting.

## Step 4 — Retarget in one prompt (5 min)

Same facts, different reader — this is where the leverage is:

> ```
> Now rewrite this same summary for the four regional sales managers instead of the VP.
> They care about their own region, not the company total, and they'll be defensive
> about East. Keep it factual, make it useful to them rather than a scorecard, and keep
> it under 250 words.
> ```

Put the two versions side by side. Same analysis, two completely different documents — and
the second one cost you one sentence of instruction.

## Step 5 — Save the recipe (3 min)

So you never start cold again:

> ```
> Turn the prompt I used for the executive summary into a reusable template with
> [BRACKETED] placeholders for the parts that change — the audience, the length, the
> subject. Give it to me as something I can paste and fill in next time.
> ```

Save that template — into your Project instructions, a notes doc, or the prompt library
you'll build in Session 4.

## Deliverable

- A one-page executive summary you'd send.
- A retargeted version for a different audience.
- One reusable report template saved.

## Facilitator watch-fors

- People who accept the first draft's headline. Ask them: "is that really what the VP needs
  to see first?" Usually it isn't, and fixing it is the lesson.
- The honesty pass (Step 3) gets skipped under time pressure. Protect it — it's the most
  important five minutes for anyone who'll put their name on AI-assisted writing.
- Someone regenerating the whole draft to change one line. Stop them; show the surgical edit.

## If you finish early

Ask Claude to produce a **two-sentence version** for a text message to your boss, and a
**subject line** for the email you'd attach the report to. Same content, three lengths — a
useful reminder that "length" is just another thing you specify.
