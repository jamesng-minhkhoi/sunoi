---
description: Generate one ready-to-shoot SUNOI TikTok post spec (shot list + Vietnamese caption + hashtags)
---

Generate **one** TikTok post spec for SUNOI. Arguments (optional): `$ARGUMENTS`
- a format code `F1`–`F6` forces that format; no code means pick the one that fits today
- anything after the code is context (e.g. `F6 Việt Nam vs Thái Lan 19h30`)

## Read these first — never invent facts

| Source | What you must take from it |
|---|---|
| `01-marketing/01-tiktok-content-system.md` | The six formats (§4), the SEO rules (§3), the do-not-post list (§4) |
| `01-marketing/00-marketing-plan.md` §3 | **The keyword list — use these verbatim, do not invent new ones** |
| `04-menu-product/README.md` | Real drink names and real prices. Never make up an item or a price |
| `03-accounting-tracking/01-order-log.csv` | Real numbers for F3. Count rows for the relevant day |
| `01-marketing/tiktok/posts/` | What was already posted — don't repeat the same format or keyword twice in a row |

## Rules

1. **Keyword-first.** Pick one keyword from §3 that hasn't been used in the last 3 posts. It must appear (a) spoken in the first 3 seconds, (b) as on-screen text in the first frame, (c) **verbatim at the start of the caption text** — that's what TikTok indexes for search.
2. **Hashtags are short, unaccented, and ones people actually type.** `#hiepbinh #thuduc #trasua #sunoi`. Never turn a multi-word keyword into a hashtag — `#quánnướcmớiởHiệpBình` is a tag nobody searches and nobody else uses, so it indexes nothing. The keyword does its work in the caption sentence, not in a tag.
3. **Shootable by two busy people with a phone.** 3–5 shots, vertical, handheld, no lighting setup, no props that aren't already in the shop. If a shot needs anything bought or built, it's the wrong shot.
4. **No sound/music direction, no edit direction.** Those happen in the TikTok app. Your job stops at shots, text and caption.
5. **Vietnamese, spoken the way a neighbour talks.** Warm, small, local — not brand copy, not premium. §3 positioning.
6. **Never name a promo price or a BOGO item** — blocked on COGS (`01-marketing/00-marketing-plan.md` §6). Menu prices are fine; discounts are not.
7. **F3 requires real data.** If `03-accounting-tracking/01-order-log.csv` has no rows for the day, say so and pick a different format — do not invent a cup count.
8. **3–5 hashtags. Not more.**

## Output

Write the spec to `01-marketing/tiktok/posts/YYYY-MM-DD-<format>.md` using today's date, and print it in the terminal too. Exactly this shape:

```markdown
# YYYY-MM-DD · <F#> <format name>

**Keyword**: <keyword from §3>
**Post between**: <10:00–11:00 | 15:00–16:00 | 2h before kickoff>

## Say in the first 3 seconds
> "<one Vietnamese sentence containing the keyword>"

## On-screen text (first frame)
> <short, contains the keyword>

## Shots
1. (0–4s) <what to point the phone at>
2. (4–10s) <...>
3. (10–18s) <...>

## Caption — paste this
<keyword-first Vietnamese caption, 1–2 lines, then the hashtags>

#<local> #<local2> #<category> #<brand>   ← short, unaccented

## Note
<one line: what this post is for, and anything blocking it — e.g. "needs customer consent", "Zalo link still broken">
```

Then stop. One post, not a week's worth — unless the user explicitly asks for a batch.
