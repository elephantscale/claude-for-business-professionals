# Facilitator Answer Key — Kwanza Sugar Imports

**Instructor-only.** Don't hand this out. These are the verified figures for
`course-materials/sample-data/angola-sugar-imports.csv`, computed directly from the file, so you
can validate what students (and Claude) produce in Lab 2 — and spot when a number is off because
a student skipped the cleanup or the outlier fix.

> All values are USD. A student who **cleaned the Namibe labels and corrected the outlier**
> should land within rounding of the "corrected" figures. A student who did neither will see the
> "raw" figures — that gap *is* the lesson.

## Shape

- 384 rows · 24 months (2024-01 → 2025-12) · 4 ports × 4 grades.
- Ports: Luanda, Lobito, Namibe, Cabinda. Grades: Raw, Refined, Brown, Specialty.
- Company total value: **$15.41M raw** / **$14.82M outlier-corrected**. Total: **23,417 tonnes**.

## The three planted data-quality problems

1. **Port label mess (Lab 2 Step 2).** "Namibe" appears as `Namibe` (41) · `namibe` (23) ·
   `NAMIBE` (17) · `NMB` (15) = 96 rows. Until merged, Namibe looks like four tiny ports and its
   decline is hidden.
2. **5 blank Value cells (Step 2).** Exactly these rows — Claude should *list* them, not fill them:
   - 2024-03 · Lobito · Brown
   - 2024-05 · Cabinda · Specialty
   - 2024-09 · Lobito · Specialty
   - 2024-11 · Cabinda · Refined
   - 2025-04 · Luanda · Raw
3. **The outlier (Step 4).** **2025-06 · Luanda · Brown = $654,904.20**, ~**10.0×** the normal
   Luanda/Brown level (median ≈ **$65,470**). Tonnes for that row are normal — it's a value typo
   (an extra digit). A plausible correction is ~$65K.

## Port trend — 2024 → 2025 total value

| Port | 2024 | 2025 (raw) | Growth (raw) | 2025 (outlier corrected) | Growth (corrected) |
|---|---|---|---|---|---|
| **Luanda** | $3.33M | $4.03M | **+21.0%** | $3.37M | **+1.3%** (≈ flat) |
| **Lobito** | $2.02M | $2.26M | +11.7% | — | +11.7% |
| **Namibe** | $1.02M | $0.89M | **−12.5%** | — | **−12.5%** |
| **Cabinda** | $0.86M | $1.00M | +16.7% | — | +16.7% |

**Teaching point:** Luanda is the only port whose story *changes* when the outlier is fixed —
from "+21% star" to "flat." Namibe is the only port that declines, either way. The corrected
picture: Lobito and Cabinda are the real growers; Luanda is holding; Namibe is slipping.

## Grade trend — 2024 → 2025 (outlier excluded)

| Grade | Growth | Note |
|---|---|---|
| **Specialty** | **+22.0%** | fastest grower, smallest base — the "surprising line" |
| Refined | +4.9% | plus a strong autumn spike (see below) |
| Brown | −0.5% | ~flat (holds the outlier) |
| Raw | −4.8% | largest volume, softening |

## Seasonality — Refined autumn spike

Refined value jumps **Sep–Nov** both years: ~**$210K–$243K** vs a ~**$170K** baseline. Read it
as pre-holiday / dry-season stockpiling. No other grade shows meaningful seasonality.

## Model "three findings" (Lab 2 Step 5)

1. **Namibe is the only declining port** (−12.5% YoY) while every other port grows — needs an
   owner before the board deck.
2. **Specialty is the fastest-growing grade** (+22%) off a small base — a warehouse-space /
   inventory decision.
3. **Data-quality catch:** one bad cell (2025-06 Luanda Brown, ~10× too high) was inflating
   Luanda and the company total; corrected, Luanda's growth is essentially flat. *This is the
   finding that separates people who use AI well from people who get burned by it.*
