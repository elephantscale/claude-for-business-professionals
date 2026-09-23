# Labs — Setup and Ground Rules

Read this once before Session 1. It covers what you need, how the labs fit together, and the
one rule that matters most: what data is safe to put into Claude.

## What you need

- A browser and a **Claude.ai** account (see below).
- The course dataset: `course-materials/sample-data/cascade-sales.csv`. The instructor will
  share it — download it before Session 2.
- Nothing else. No installation, no code, no spreadsheet software required (though having
  Excel or Google Sheets open to eyeball the data helps in Session 2).

## Which Claude — the account question

**Use Claude.ai. Recommended plan: Claude Team ("Claude for Work").**

The whole course runs on four Claude.ai features:

- **Projects** — a workspace that holds your files and instructions so you don't re-explain
  yourself every message.
- **File upload** — drop in a spreadsheet, document, or notes.
- **Artifacts** — Claude produces a document, table, or draft in a side panel you can iterate
  on.
- **The Analysis tool** — Claude writes and runs real code on your uploaded data, so the
  numbers are *calculated*, not estimated. This is what makes Session 2's answers trustworthy.

| Plan | Verdict |
|---|---|
| **Claude Team ("for Work")** | **Recommended.** Projects for everyone, data kept out of training, central admin/seat provisioning — the right fit for a company room. |
| **Claude Pro (individual)** | Fine fallback. Identical lab experience; just not centrally managed. |
| **Claude Free** | Not recommended for the labs — Project and usage limits get in the way. |
| **API key / Console Workbench** | **Not used in this course.** It has no Projects, no Artifacts, and no Analysis tool — it's a developer surface, and it would gut the labs. |

> **Instructor note:** the API-key path was considered and rejected for exactly the reasons
> above. If your organization can *only* provide API keys, raise it before delivery — the
> labs would have to be redesigned and would lose their best features.

## The one rule: what data is safe to put in

You will practice on **fictional** data all course. When you go back to your real work, this
is the rule:

- **On Claude Team/Enterprise ("for Work"):** your conversations are **not** used to train
  models, and data stays within your company's workspace. You can work with normal internal
  business material — but still follow your organization's own data-classification policy.
- **Never paste**, on any plan: secrets and credentials, personal data about customers or
  employees (names, IDs, health, pay), anything under legal hold or NDA, or anything you
  couldn't email to a colleague in another department.
- **When unsure, anonymize:** replace real names and numbers with placeholders, or ask
  Claude about the *shape* of the problem without the sensitive specifics.
- **The test:** *"Would I be comfortable if this appeared in a screenshot?"* If not, don't
  paste it.

Session 1 covers this properly. For now: **everything you paste in the labs comes from the
course pack. Nothing from your own organization until you're back at your desk and following
your own policy.**

## The dataset — Cascade Outdoor Supply

`cascade-sales.csv` is 24 months (2024–2025) of sales for a fictional outdoor-goods
distributor, by **Region** (West, Central, East, South) and **Category** (Apparel, Footwear,
Equipment, Accessories):

| Column | What it is |
|---|---|
| Month | Reporting month, `YYYY-MM` |
| Region | Sales region |
| Category | Product category |
| Units | Units sold |
| Revenue | Revenue in dollars |

It is deliberately **realistic, not clean** — there are a few things wrong with it on
purpose, because catching those is part of the skill. You'll meet them in Lab 2.

## How the labs chain

Each lab feeds the next — keep your work:

1. **Lab 1** — set up your Project and learn to write a working prompt.
2. **Lab 2** — analyze the dataset → **three findings**.
3. **Lab 3** — turn those findings into **a report**.
4. **Lab 4** — turn the report into **a deck**, and save your **prompt library**.

Do everything inside **one Project** so Claude carries your context from session to session.
