# Lab 1 — Your First Working Prompts

**Session 1** · Individual, in Claude · ~20 minutes

---

## Purpose

Two things. First, set up the **Project** you'll use for the whole course, so Claude carries
your context from session to session. Second — and this is the real lesson — feel the
difference between the prompt you'd normally type and an **engineered** one, on a piece of
business writing you recognize.

The skill being trained isn't typing. It's the habit of **never sending the first prompt you
think of** — adding context, the task, the format, and an example turns a mediocre answer
into a usable one, at no extra cost.

## Before you start

- You're logged in to Claude.ai (Team or Pro — see `SETUP.md`).
- You have `angola-sugar-imports.csv` downloaded (you'll upload it here and reuse it in Session 2).

## Step 1 — Make your Project (3 min)

> 1. In Claude.ai, go to **Projects → Create Project**. Name it **"Kwanza — My Workspace."**
> 2. Add **project instructions** (there's a box for this). Paste:
>
> ```
> You are helping a business professional analyze data and write reports and
> presentations for Kwanza Sugar Imports, a fictional cane-sugar importer and
> distributor in Angola. Be concise and practical. When you give numbers, say
> whether you calculated them or estimated them. When something isn't in the data
> I gave you, say so rather than guessing.
> ```
>
> 3. **Upload `angola-sugar-imports.csv`** to the Project (the paperclip / add-content control).

That last instruction — *say so rather than guessing* — is the single most valuable line
you can give an AI. You just made every future answer more honest.

## Step 2 — The naive prompt (4 min)

Here is a real-feeling piece of business text. Paste it into a new chat **in your Project**
with the laziest prompt you'd normally use: `Summarize this.`

> **Paste this text:**
>
> *"Following up from the imports review. Overall the quarter was okay but not
> everywhere — Luanda is doing the heavy lifting as always, Lobito is steady, Cabinda
> is coming up nicely off a small base, and Namibe continues to be a worry, volumes
> have been soft for a while now and nobody's totally sure why. Specialty sugar keeps
> surprising people, that line just grows. Refined did its usual pre-holiday jump. We
> had a weird spike in one of the brown-sugar numbers that finance is still chasing.
> Action items: someone needs to own the Namibe question before the board deck, and we
> should decide whether Specialty gets more warehouse space. Also the data cleanup from
> the new customs system is still not done."*

Read what comes back. Keep it — you'll compare against it in a second.

## Step 3 — The engineered prompt (6 min)

Now run it again with **context, task, format, and an example** — the four parts of every
working prompt. Paste the same text, but ask:

> ```
> You're helping me prep for a board meeting. Below is a rambling note from our
> imports review.
>
> Turn it into a crisp status summary for executives:
> - A one-line headline
> - "Working / Watching / Action needed" as three short bulleted lists
> - Under 120 words total, no filler
>
> Example of the tone I want for a bullet: "Namibe: import volumes soft for several
> quarters, cause unknown — needs an owner before the board deck."
>
> Note:
> """
> <paste the same text>
> """
> ```

**Compare the two outputs side by side.** Same model, same text, thirty seconds apart. The
second one you could forward; the first one you'd rewrite. The entire difference is what you
asked for.

## Step 4 — The data-safety reflex (4 min)

Quick judgment drill. For each, decide **paste** or **don't paste** (answers below — no
peeking):

1. The Kwanza sugar-imports CSV. →
2. A spreadsheet of your real employees' names, salaries, and performance ratings. →
3. A draft press release your company hasn't published yet, under embargo. →
4. A vendor's product manual that's public on their website. →
5. Your customer list with names and contact details. →

> **Answers:** 1 paste · 2 don't (personal data) · 3 don't (embargoed/confidential) ·
> 4 paste (public) · 5 don't (personal data). The test: *would I be comfortable if this
> appeared in a screenshot?*

## Deliverable

- Your **"Kwanza — My Workspace"** Project exists, has the instructions, and has the CSV.
- You have the two summaries from Steps 2 and 3 to compare.

## Facilitator watch-fors

- People who skip the project instructions. Circle back — the "say so rather than guessing"
  line pays off in Session 2 when the data has errors in it.
- The naive summary is usually a competent, shapeless paragraph. Put one on screen next to an
  engineered one during the debrief; the contrast sells the whole course.
- If someone's on Free and can't make a Project, have them work in a single long chat and
  paste the instructions as their first message — everything still works, just less tidy.

## If you finish early

Re-run Step 3 asking for the summary **for a different reader** — the port managers
instead of the board. Watch what changes. That's a preview of Session 3.
