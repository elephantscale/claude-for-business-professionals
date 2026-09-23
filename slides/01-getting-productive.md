# Getting Productive with Claude

Session 1

Elephant Scale

---

## What Claude Actually Is

A very capable **writing and reasoning assistant** you talk to in plain language. It reads
what you give it, and it produces text: summaries, analysis, drafts, explanations.

It is not a search engine, not a calculator by default, and not a source of truth about your
company. It's a fast, tireless colleague who is brilliant, widely read — and occasionally,
confidently wrong.

Notes:

The "confidently wrong" framing does a lot of work all course. It's not broken when it errs;
that's a known property, and the whole skill is designing around it.

---

## What It's Genuinely Good At

* **Summarizing** long things into short things, for a specific reader
* **Drafting** — reports, emails, slides, from rough inputs
* **Transforming** — reformat, restructure, change the tone or audience
* **Explaining** — turning jargon or data into plain language
* **Analyzing** data you give it — *when you ask it to calculate, not guess*

Notes:

These map directly to the next three sessions. Every one is something the room does weekly by
hand.

---

## Where It Needs a Human Check

* **Numbers** — it can estimate when it should calculate. Ask for the analysis tool.
* **Facts about the world** — it can be out of date or simply wrong. Verify anything load-bearing.
* **Your specifics** — it doesn't know your company unless you tell it (or upload it).
* **Judgment** — what to lead with, what to promise, what's true enough to sign. Yours.

Notes:

This is the counterweight to the previous slide. The pairing — good at / needs a check — is
the honest picture. Neither hype nor dismissal.

---

## The Anatomy of a Working Prompt

Four parts. Miss them and you get a shrug; include them and you get real work:

> **Context** — who you are, who it's for, what it's for
> **Task** — the one thing you want done
> **Format** — length, structure, tone
> **Example** — one line showing the style you want

Notes:

Write these four words on the board. Every good prompt in the course is these four. Have them
say them back.

---

## Naive vs. Engineered — The Whole Game

**Naive:** *"Summarize this."*

**Engineered:** *"You're helping me prep for the board. Turn this note into a status summary:
a one-line headline, then Working / Watching / Action needed as three short lists, under 120
words. Example tone: 'East: soft for several quarters, cause unknown — needs an owner.'"*

Same model. Same text. Completely different result. **The difference is free.**

Notes:

This is the live demo. Run both prompts in front of the room on the Session-1 lab text. The
gap arriving on screen is more persuasive than any slide. Then they do it themselves in Lab 1.

---

## Projects — A Workspace That Remembers

A **Project** holds your files, your instructions, and your history in one place, so you stop
re-explaining yourself.

* Upload documents, spreadsheets, notes — once
* Set standing instructions (*"be concise; say when you're unsure"*)
* Every chat in the Project starts already knowing your context

Notes:

For this audience, Projects is the killer feature — it's the difference between a novelty and
a workspace. This is why the course is on Claude.ai, not an API playground. They set one up in
Lab 1 and use it all four sessions.

---

## The One Instruction That Makes It Honest

Put this in your project instructions:

> *"When something isn't in the data I gave you, say so rather than guessing. When you give
> numbers, tell me whether you calculated or estimated them."*

That single line turns off most confident-but-wrong answers before they start.

Notes:

Call back to "confidently wrong." You can't eliminate it, but you can instruct against it.
This line reappears in Session 2 when the data has errors and blanks.

---

## Responsible Use — What's Safe to Share

On **Claude for Work** (Team/Enterprise), your data isn't used to train models and stays in
your company workspace. Even so:

* **Never paste:** passwords/keys, personal data (names, IDs, pay, health), embargoed or
  NDA material, anything under legal hold.
* **When unsure, anonymize** — placeholders instead of real names and numbers.
* **The test:** *"Would I be comfortable if this appeared in a screenshot?"*

Notes:

This is a real concern for a corporate room and it's often the question that decides whether
they'll actually use the tool. Give it proper time; it builds trust in the whole course.

---

## Which Claude — the Honest Guidance

* **Claude Team ("for Work")** — recommended: Projects for all, data kept out of training,
  central admin.
* **Pro** — fine for one person; same features in the labs.
* **Free** — too limited for the labs.
* **API keys** — not this course. No Projects, no Artifacts, no analysis tool.

Notes:

If asked "why not just use the API / a key?" — because the whole value for this audience is
Projects, Artifacts, and the analysis tool, and the API surface has none of them. It's a
developer tool; this is a business tool.

---

## Lab 1 — Your First Working Prompts

* Set up your **"Cascade — My Workspace"** Project and upload the dataset
* Take a rambling business note from naive prompt → engineered prompt
* Run the data-safety judgment drill

**You'll feel the difference the four-part prompt makes. That's the whole session.**

Notes:

Hand to `labs/01-first-prompts.md`. ~20 minutes. Debrief by putting one naive and one
engineered summary side by side.
