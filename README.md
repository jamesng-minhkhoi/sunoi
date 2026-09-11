# SUNOI

**SUNOI** ("SUN" + "OI" — *oi* being the Vietnamese term of endearment for calling someone dear). Vietnamese **drinks business** (mixed menu: milk tea, coffee, fresh juice/smoothies, speciality/trendy drinks) in Hiệp Bình, Thủ Đức, Ho Chi Minh City. Now operating from a **physical storefront with walk-in + delivery**, serving a ~2–3km catchment.

> **⚠️ RELAUNCH: 2026-09-14 — read this before trusting anything else.**
> SUNOI moved from the delivery-only home kitchen to a **physical storefront** (the former **ZEN CAFE** location, Hiệp Bình) and **relaunches at the new site on Sunday 14 September 2026**. That date is **Day 0** — every order target and every experiment counts from there.
> The quiet stretch around the move ran ~14 hours/day for **~5 orders** — treat that as the **pre-relaunch baseline**, not a verdict.
> Much of this repo was written for the delivery-only home-kitchen phase. Docs still reflecting the old model are marked. See `00-updates/2026-09-12/00-summary.md` and the **Relaunch** section of `05-planning/00-test-phase-roadmap.md`.

## Vision
The original home-kitchen phase was a **smoke test**; SUNOI has now taken the next step into a real space. The longer-term aim is unchanged: prove ops, R&D, marketing and unit economics, then **build a chain of F&B locations** — fast scaling toward financial freedom, not staying a single shop. Keep this in mind when designing SOPs, pricing, and systems: favor things that are **repeatable and transferable to a 2nd/3rd location**.

## Quick facts
- **Team**: James (jamesnguyen.minhkhoi@gmail.com) & Hien (myhien7602@gmail.com), a couple running this together — 2 people, no fixed roles yet. **A first employee is planned once trading justifies it** — note that one full-time hire roughly doubles break-even (~11 → ~20 walk-in cups/day), so it needs a trigger, not a breaking point. See the hiring section of `03-accounting-tracking/06-breakeven-storefront.md`
- **Storefront**: `RPPH+687, Hiệp Bình, Thủ Đức, Ho Chi Minh City` — Maps: https://maps.app.goo.gl/Ku8Xo88MRpvjrCAE7. Previously **ZEN CAFE** (SUNOI took over an existing café location — the prior tenant's history at this address is worth understanding; see open questions in the roadmap)
- **Previous address (superseded)**: home kitchen at 28 Đường 10, KDC Sông Đà, Hiệp Bình — kept for history, no longer the operating base
- **Channels**: walk-in at the storefront + delivery (GrabFood, ShopeeFood) + direct orders (Zalo, sunoi.store)
- **Catchment**: ~2–3km around the store
- **Fixed costs**: rent 6,000,000đ/month for 3 months then 7,000,000đ/month (**2-year contract**, 165M committed) + utilities assumed 2,000,000đ/month = **8,000,000đ/month, ~267,000đ/day** to clear. See `03-accounting-tracking/06-breakeven-storefront.md`
- **Break-even**: roughly **11–13 walk-in/direct orders a day** — but **22–28 if they're mostly platform orders**, since a platform cup is worth about half a walk-in cup. A 2-cup basket halves both figures
- **Menu & prices** (live public catalog, checked 2026-08-23 at sunoi.store/order): **15 drinks 22,000–45,000₫ + 5 toppings 12,000–15,000₫** — see `04-menu-product/README.md`. Note the cheaper half of the menu is thin-to-negative on platform orders at the ~15k COGS figure
- **Ordering page**: sunoi.store/order offers delivery within the inner city or **self-pickup with no shipping fee**
- **Price point**: ~30k–100k VND/order was the planning assumption; real AOV has never been measured
- **Capacity**: ~20–30 drinks/day was the home-kitchen ceiling — **needs re-measuring for the storefront**, it is almost certainly higher now
- **Relaunch date**: **2026-09-14** at the new storefront = Day 0
- **Pre-relaunch baseline**: ~5 orders/day during the quiet stretch around the move. The goal from Day 0 is 5 → 10 → 20 → 30 orders/day, not a revenue moonshot
- **Hours**: the public storefront displays **6:00–22:00** (16 hours; days not stated) and ~14 hours/day is what's actually being run. Flagged as a problem — see the hours decision in `05-planning/00-test-phase-roadmap.md`
- **Branding**: logo + cups/packaging already sourced ✅
- **Legal**: stayed informal during the home-kitchen smoke test. **A physical storefront materially changes this risk** — a visible, fixed premises is far more likely to be inspected than a home kitchen. Re-open this decision; see roadmap.

## Status
- Menu: 🟢 **live catalog captured** — 20 items in `04-menu-product/README.md`. Recipes, sizes, variants and per-item costs still open
- Marketing: 🔴 **relaunch is 2026-09-14** — the consolidated plan is `01-marketing/00-marketing-plan.md` (single entry point). Ops-side launch prep is in `05-planning/00-test-phase-roadmap.md`
- Operations: 🟡 SOP still describes delivery-only flow, **no walk-in path documented** — see `02-operations/`
- Accounting/tracking: 🟡 break-even model now exists (`03-accounting-tracking/06-breakeven-storefront.md`), but real order data still isn't being logged — see `03-accounting-tracking/`

## How this repo is organized — read this first, especially if you're an AI picking this up cold

**Domain first, then date.** Every domain folder has a `README.md` routing card naming its one current entry-point file. Superseded documents move to that domain's `history/` as `YYYY-MM-DD-slug.md`. Cross-domain change history lives in `00-updates/`.

```
00-updates/          ← changelog: what changed, when, why (append-only)
  INDEX.md              ← entry point, newest first
  YYYY-MM-DD/00-summary.md
01-marketing/
  README.md             ← routing card
  00-marketing-plan.md  ← THE plan
  01-tiktok-content-system.md  ← [proposal] TikTok formats, SEO rules, what /tiktok-post automates
  tiktok/posts/         ← generated post specs, one per post
  history/YYYY-MM-DD-*.md
02-operations/       README.md + 00-order-to-delivery-sop.md
03-accounting-tracking/ README.md + 06-breakeven-storefront.md + the trackers
04-menu-product/     README.md  ← still empty, longest-standing blocker
05-planning/         README.md + 00-test-phase-roadmap.md + 01-open-items.md + history/
tools/tiktok/        scripts behind the TikTok system (clip prep, optional API upload)
.claude/commands/    slash commands — `/tiktok-post` generates a post spec
```

### Routing table — go straight to the file that answers your question

| Question | Go to |
|---|---|
| What phase are we in? What was decided and why? | `05-planning/00-test-phase-roadmap.md` — esp. the **decision log** |
| What's still to do? What's blocking Day 0? | `05-planning/01-open-items.md` |
| How do we get customers? Which tactic is worth it? | `01-marketing/00-marketing-plan.md` |
| How do we make TikTok content, and what does Claude Code do automatically? | `01-marketing/01-tiktok-content-system.md` — `[proposal]`, not decided |
| Are we making money? What has to be true? | `03-accounting-tracking/06-breakeven-storefront.md` |
| What do actual sales look like? | `03-accounting-tracking/01-order-log.csv` |
| How does an order get made and handed over? | `02-operations/00-order-to-delivery-sop.md` |
| What do we sell? | `04-menu-product/README.md` (⚠️ still empty) |
| What changed recently, and why? | `00-updates/INDEX.md` |
| Where did the old version of X go? | `<domain>/history/` |

### Two layers, don't mix them up
1. **Living docs** (the numbered files in `01-` to `05-`) — always the **current** state, edited in place. Never read these as history.
2. **`00-updates/`** — append-only dated log of *what changed and why*. Updates land irregularly; a folder only exists if something happened that day.

**Making a change?** Do both: (a) edit the living doc in place, (b) add/append `00-updates/YYYY-MM-DD/00-summary.md` and a row in `00-updates/INDEX.md`. Same-day changes append to the existing folder.

**Superseding a whole document?** `git mv` it to `<domain>/history/YYYY-MM-DD-slug.md`, add a line to that domain's README saying why it's kept, and point the replacement at it.

### Confidence markers
Not everything here is equally solid:
- unmarked = confirmed by James/Hien
- `[unverified]` = from research or a third-party AI session, not checked against reality
- `[proposal]` = not decided or actioned
- `[superseded YYYY-MM-DD]` = was true, now isn't — kept for history

### The one rule that keeps this repo honest
**Read the economics before deciding anything.** `03-accounting-tracking/06-breakeven-storefront.md` says a walk-in cup is worth ~2× a platform cup and a second item in the basket is worth about as much as a whole extra order. Those two facts rank every tactic in this repo. Don't reason about marketing, pricing or hiring without them.

## Task tracking
`05-planning/02-task-tracker.xlsx` is the day-to-day working task list for James & Hien — one flat "All Tasks" tab (marketing, ops, menu, legal, accounting, launch all in one place with a Category column) plus an auto-counting Dashboard tab. Upload it to Google Sheets (File → Import) to work from it live. **Note: seeded with the pre-storefront backlog — needs a pass against the new storefront reality.** The markdown docs in this repo remain the source of truth for *why* decisions were made; the tracker is for day-to-day *doing*.

## The current question
Not "how do we get to 10M VND/day." It is:

> **From the 2026-09-14 relaunch, how does a new drinks shop in Hiệp Bình go from ~5 orders/day to 10, then 20, then 30 — and is the storefront's demand real enough to build on?**

Everything in `01-marketing/` should be judged against that.

Start here → `05-planning/00-test-phase-roadmap.md` · Blockers → `05-planning/01-open-items.md` · History → `00-updates/INDEX.md`
