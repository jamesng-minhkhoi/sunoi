# 2026-09-12 — Storefront reality folded into the repo

## What changed in the business
SUNOI **moved from a delivery-only home kitchen to a physical storefront** at `RPPH+687, Hiệp Bình, Thủ Đức, HCMC` (https://maps.app.goo.gl/Ku8Xo88MRpvjrCAE7), taking over the location previously occupied by **ZEN CAFE**.

The shop has been open roughly **one week**. Early trading is weak: some days ~**14 hours open for ~5 orders**.

This repo had been sitting ~7 weeks out of date, still describing a delivery-only home kitchen "launching within 1-2 weeks". That's now fixed.

## Where the input came from
James handed over a brief from a ChatGPT working session, flagging that it may contain incorrect details. It was split three ways rather than merged wholesale:

1. **State facts** (storefront, hours, order volume, catchment, positioning) → into the living docs
2. **Unverified external research** (a second competitor list, local customer-behaviour observations) → into `01-marketing/00-launch-plan.md` marked `[unverified]`, **as an addition alongside the existing July list, not a replacement** — the two lists have zero overlap, which is expected since they describe different catchments around different addresses
3. **Strategy proposals** (TikTok system, KOC outreach, referral/partner program, snacks, storefront lighting, 30-day playbook) → a new file, `01-marketing/03-storefront-strategy-brief-2026-09-12.md`, explicitly labelled `[proposal]`. **Nothing there has been decided.**

## What was deliberately NOT copied in
- **The hour-by-hour order table** from the brief. It was labelled "example" and summed to 31 orders/day, directly contradicting the observed ~5/day. Writing it in as data would have been worse than writing nothing. The actionable part — recording the hour of each order — was implemented as a schema change instead.
- **The referral tier amounts** (10k off + 10k credit, escalating). Against the ~15,000đ cost baseline, that's roughly a full cup of contribution given away per referral, and likely underwater on a platform order. The *structure* and *anti-abuse rules* were kept; the *numbers* are flagged as needing recomputation.
- **The revenue ladder** (30 orders × 50k AOV = 1.5M/day etc.). SUNOI has never measured its AOV. Note the 50,000đ figure from August was a *minimum-order gate*, not an average — the two shouldn't be conflated.

## Things the move invalidated that nobody had flagged yet
- **There is now rent.** Every break-even calculation in `03-accounting-tracking/` assumed zero fixed costs. No rent figure exists anywhere in this repo, so "is SUNOI profitable" currently cannot be answered.
- **The legal decision needs re-deciding.** "Stay informal, no hộ kinh doanh" was decided for a home kitchen. A fixed, signed, publicly visible premises is a different inspection risk, and a lease may itself require registration. Flagged in both the roadmap and the ops SOP — not decided either way.
- **There is no walk-in flow in the ops SOP.** The entire document assumes orders arrive via an app. A skeleton section 0 was added for James/Hien to fill in.
- **The 20–30 drinks/day cap is a stale home-kitchen number** and is not the binding constraint anyway — demand is.
- **Success criteria are void.** The July criteria (net weekly P&L ≥ 0, 15–20 drinks/day) don't apply to a business with rent. Marked do-not-use rather than silently deleted.

## Also backfilled
`00-updates/2026-08-29/` was created from scratch — the **ShopeeFood "Đồng giá 25K" flash sale** (ran 2026-08-30 → 09-05, right up to the storefront opening) had been designed in detail but never written into the repo at all. Its economics logic is reusable, and its results were never captured.

## Files touched
| File | Change |
|---|---|
| `README.md` | Rewritten: storefront + walk-in, new address, current volume, status refresh, confidence-marker convention added |
| `05-planning/00-test-phase-roadmap.md` | Retitled and restructured around a Storefront phase; old Week 0–8 timeline and success criteria collapsed into marked-superseded sections; 2 decision-log rows added; open questions rewritten |
| `01-marketing/00-launch-plan.md` | Superseded banner; address/catchment updated; storefront added as a channel; second `[unverified]` competitor table; new "Campaigns actually run" section recording the ShopeeFood flash sale |
| `01-marketing/03-storefront-strategy-brief-2026-09-12.md` | **New** — all strategy proposals from the ChatGPT brief, labelled as proposals, with the brief's own weaknesses recorded and a suggested sequencing added |
| `02-operations/00-order-to-delivery-sop.md` | Superseded banner; new section 0 walk-in skeleton; hours/cap/channels updated; legal checklist re-opened |
| `03-accounting-tracking/01-order-log.csv` | Added `Hour`, `New/Repeat`, `Customer Type`, `Acquisition Source`; `Walk-in` now a valid channel |
| `03-accounting-tracking/02-pricing-margin-check.csv` | Commission corrected 25% → 30%; real rows added for Coffee CheeseCream and Egg CheeseCream |
| `03-accounting-tracking/04-weekly-pnl.csv` | Added `Rent & Utilities (storefront)` column; storefront week row added |
| `03-accounting-tracking/00-tracking-guide.md` | Banner on rent, 30% commission, and the new order-log columns |
| `04-menu-product/README.md` | Populated with the two known real items and the open product questions; COGS conflict flagged |
| `00-updates/2026-08-29/00-summary.md` | **New** — backfilled ShopeeFood campaign record |

## The single most important next action
**Start logging every order with its hour and channel.** The repo contains two seed rows from 1 August and nothing since. Every strategic question currently open — what hours to run, which channel works, who the customer is, whether the referral economics survive — is unanswerable without a week of real data, and answerable with it.

## Needs confirmation from James
1. **Exact storefront opening date** and **monthly rent / lease terms** — blocks all break-even math
2. **Real cost per cup** — ~9,000đ or ~15,000đ? Both are on record from the same August session
3. Why ZEN CAFE left this location — site problem or operator problem
4. Whether the storefront address is live on Google Maps, GrabFood and ShopeeFood yet
5. Whether the ShopeeFood flash-sale results are still retrievable

---

# Addendum (same day) — relaunch date and lease terms

Two facts arrived after the main update above was written. Both are significant enough to change the plan rather than just the docs.

## 1. Relaunch is **Sunday 2026-09-14**
SUNOI has *relocated*, and the 14th is the proper opening at the new site. **That date is Day 0** — every order target, experiment and success criterion now counts from there.

This reframes the ~5 orders/day figure: it is the **pre-relaunch baseline** from the quiet stretch around the move, not a verdict on a failing shop. `[Assumption: the quiet weeks were around the relocation. If that ~5/day week was actually at the old setup, the new site has no trading history at all — tell me and I'll adjust, though the prep list doesn't change either way.]`

A scoped **48-hour prep list** is now the live plan, in the **RELAUNCH** section of `05-planning/00-test-phase-roadmap.md`. It deliberately **defers Proposals B, C, D and E** (TikTok volume system, KOC outreach, referral program, snacks). Two people cannot open a shop and execute fifteen ideas in the same two days — the proposals are sequenced, not cancelled.

**The item flagged as most likely to not fit in 48 hours**: changing the registered merchant address on GrabFood/ShopeeFood can trigger **re-verification**, which takes days and may request premises documents. That's a double risk — the delivery channel could be dark on Day 0, *and* a document request is exactly the trigger condition named in the 2026-07-25 decision to stay informal. Check today, not on the 14th.

## 2. Lease terms: **6,000,000đ/month for 3 months, then 7,000,000đ/month, 2-year contract**
Total committed: **165,000,000 VND** over 24 months. Daily fixed cost: **~200,000đ/day** rising to ~233,000đ/day.

This is the first real fixed cost in the repo, and it makes break-even computable for the first time. Full model: **`03-accounting-tracking/06-breakeven-storefront.md`**.

Headline findings:
- **Break-even is reachable**: ~**10–13 walk-in/direct orders a day** covers rent plus assumed utilities during the first 3 months. That's roughly double the baseline, not 10×.
- **Channel mix is now the decisive variable.** At a 35k list price and 15k COGS, a cup is worth ~20,000đ walk-in but only ~9,500đ on a platform after 30% commission. Platform-only break-even is **2–3× higher** — 20–30 cups/day, at or beyond the old capacity ceiling. **A platform-heavy, low-price-point business does not clear this rent.**
- **Price point matters more than before**: the same drink at a 45k list price nearly doubles platform contribution versus 35k.
- The **2-year term** means this is no longer a smoke test that can be quietly wound down. The 3-month reduced-rent window is effectively the runway to prove the site works.

Success criteria have been **rewritten** against these numbers (they were previously marked do-not-use). The close-of-business question is now a single number: **did today's contribution clear ~200,000đ?**

## What this makes urgent
The **COGS question (~9,000đ vs ~15,000đ) is now a 2-day deadline, not housekeeping.** The proposed opening offer is BOGO on a signature drink; at 15k/cup that gives away a full cup of contribution, and on a platform order at a 35k list price it is underwater. The promo cannot be responsibly committed to without the real number.

## Files touched in this addendum
`README.md`, `05-planning/00-test-phase-roadmap.md` (RELAUNCH section, rewritten success criteria, 2 decision-log rows), `01-marketing/00-launch-plan.md`, `01-marketing/03-storefront-strategy-brief-2026-09-12.md` (sequencing anchored to Day 0), `03-accounting-tracking/06-breakeven-storefront.md` (**new**), `03-accounting-tracking/00-tracking-guide.md`, `03-accounting-tracking/04-weekly-pnl.csv` (relaunch week row).

## Addendum 2 — utilities assumption set at 2,000,000đ/month

No utility bills exist yet, so James set a working assumption of **2,000,000đ/month** (up from the 1,500,000đ placeholder used in the first pass). The break-even model is now built on it rather than treating it as a variant.

**Full fixed cost: 8,000,000đ/month (6M rent + 2M utilities) = ~267,000đ/day**, rising to 9,000,000đ/month (~300,000đ/day) from month 4. **Year one carries ~105,000,000đ of fixed cost** before a single cup is made — more than three times the original 15–30M test-phase capital.

Revised break-even, months 1–3 (conservative 15k COGS, 1 cup/order):

| | 35k list | 39k list | 45k list |
|---|---|---|---|
| Walk-in / direct | 13.3 cups/day | **11.1** | 8.9 |
| Platform (after 30%) | **28.1** | 21.7 | 16.2 |

**Working target: ~11–13 walk-in/direct orders/day.** From month 4 at 35k/15k, platform-only break-even is **31.6 cups/day — above the old 20–30/day capacity ceiling entirely.**

### The finding that came out of redoing the math
Every table assumes **one cup per order**. A two-cup basket halves all of it: two walk-in cups at 39k + 45k contribute 54,000đ, so **~5 orders/day breaks even**.

Going from 5 orders/day to 13 is hard. Going from 5 single-cup orders to 5 two-cup orders is a menu and upsell problem — and it's the same logic that made the August 50,000đ minimum-order gate work. **This promotes Proposal E's light-food/snack test from "nice idea" to the highest-leverage item after launch**, not because snacks are a good business alone, but because "cho em thêm cái này" is cheaper than finding twice as many customers. Noted in the strategy brief's sequencing.

Utilities remains an assumption, not a bill — flagged as such in the break-even doc, the roadmap open questions and `03-daily-expense-log.csv`. A 1,000,000đ error moves break-even by ~1.5 cups/day.

Files touched: `03-accounting-tracking/06-breakeven-storefront.md` (rewritten), `00-tracking-guide.md`, `03-daily-expense-log.csv`, `04-weekly-pnl.csv`, `README.md`, `05-planning/00-test-phase-roadmap.md`, `01-marketing/00-launch-plan.md`, `01-marketing/03-storefront-strategy-brief-2026-09-12.md`.

## Addendum 3 — hiring is a planned step

James expects to **hire a first employee once trading justifies it**. Recorded now, with the economics attached, so the decision gets made on a number rather than at a breaking point. Wages were the biggest cost missing from the break-even model.

### What a hire costs, in cups
Conversion rule, usable with whatever the real wage turns out to be: every **1,000,000đ/month of wage = 33,333đ/day**, which is **+1.4 walk-in cups/day** or **+2.7 platform cups/day** (39k list, 15k COGS).

Break-even at 39k/15k, one cup per order, months 1–3 (wage figures are **placeholders — no verified local rate is on file**):

| | Daily fixed | Walk-in / direct | Platform |
|---|---|---|---|
| No staff | 267,000đ | **11.1** | 21.7 |
| + part-time (~4M/mo) | 400,000đ | 16.7 | 32.5 |
| + full-time (~6.5M/mo) | 483,000đ | **20.1** | 39.3 |

**One full-time hire roughly doubles break-even.** On platform orders it pushes past 39 cups/day — beyond any capacity SUNOI has demonstrated. **A first employee has to be funded by walk-in and direct volume; platform volume can't pay for one.** With 2-cup baskets the same hire moves break-even from ~4.9 to ~9.0 orders/day — still a doubling, but far more reachable.

### The distinction that matters
- **Capacity hire** — demand exceeds what two people can make at quality. Pays for itself; there's revenue on the table being lost.
- **Relief hire** — nobody can sustain ~14 hours a day, 7 days. Real, and flagged unresolved since July, but **not funded by extra revenue**. At ~11 cups/day it would consume all margin and more.

If the pressure is relief, cheaper things to try first: **shorten hours to match real demand** (the hour-by-hour data will show the dead hours), close one day a week, or buy a few peak-hour part-time shifts instead of a full-time role.

**Suggested trigger, written down before it's needed** — hire when *both* hold for a full week: (1) orders consistently at or above the no-staff break-even, **and** (2) evidence of demand actually being lost — missed platform orders, queues walking away, capped hours, quality slipping at peak. Condition 1 alone means there's nothing extra to capture yet; condition 2 alone means the shop can't afford the fix and should change its hours instead.

### Three things hiring makes urgent that weren't before
1. **Real wage rates** for F&B staff in Thủ Đức, and **total employment cost** including any compulsory insurance contributions — no verified figure exists anywhere in this repo.
2. **The registration question, again.** Taking on an employee creates a labour relationship, which depending on contract type brings registration, insurance and PIT-withholding obligations. This is arguably a stronger trigger to formalise than anything in the July "stay informal" decision, which was made for a 2-person home kitchen with no staff and no premises.
3. **The SOP can't train anyone yet.** `02-operations/00-order-to-delivery-sop.md` has an empty walk-in section and no drink recipe specs. That's also precisely the "could a 3rd person run this?" test the whole future-chain ambition rests on.

Files touched: `03-accounting-tracking/06-breakeven-storefront.md` (new hiring section), `README.md`, `05-planning/00-test-phase-roadmap.md` (setup facts, decision log, 4 open questions), `02-operations/00-order-to-delivery-sop.md`.

## Addendum 4 — marketing plan consolidated

Marketing had fragmented across four files with overlapping and partly contradictory content. Consolidated into **one entry point: `01-marketing/00-marketing-plan.md`**.

**Nothing was moved or deleted.** The other four files stay where they are — the update log and INDEX rows point at those paths as history, and rewriting them would break the repo's append-only convention two days before a relaunch. Each now carries a one-line pointer to the new plan and a note on why it's kept.

### What the consolidated plan does differently
The old launch plan listed channels and tactics without a way to rank them. The new plan puts **the economics first (§2)** and derives everything from it:

> A walk-in cup is worth ~2× a platform cup. A second item in the basket is worth about as much as a whole extra order.

So tactics rank: (1) drives walk-in/direct → (2) raises basket size → (3) raises price point → (4) drives platform volume. Every channel and every proposal inherits its priority from that rather than from how appealing it sounds. That reordering is the substance of the consolidation — it's what promotes the snack/basket test and demotes platform-volume work.

### One number recomputed rather than carried over
The **2–3M VND / 4-week voucher budget** was set when SUNOI had zero fixed costs. At ~750k/week that's ~107,000đ/day of promo spend **on top of** 267,000đ/day fixed = **~374,000đ/day during the launch window**, or **~15.6 walk-in cups/day to break even while the promo runs, versus ~11.1 without it.**

Not a reason to skip it — trial has to be bought somehow and 5 orders/day is nowhere. It is a reason to be strict about what it must prove: **the promo works if week-2 repeat customers appear.** Trial volume alone is what everyone mistakes for success right before the spike evaporates.

### Also carried forward deliberately
- **Vietnam promotion law** (Nghị định 81/2018 + 239/2026): 50% discount cap; Sở Công Thương notification exempted both because total value is under 100M VND and because platform-run promotions are exempt; no promotions physically at schools. This was the most valuable thing in the old launch plan and it survives intact.
- **Both competitor tables**, with dates and caveats — July (home-kitchen catchment, real review counts) and September (storefront catchment, unverified). Same actionable line either way: competitors at 380–436 reviews, SUNOI at ~zero, and review count is the cheapest gap to close.

Files touched: `01-marketing/00-marketing-plan.md` (**new**), pointers added to the four existing marketing files, cross-references updated in `README.md` and `05-planning/00-test-phase-roadmap.md`.

## Addendum 5 — partner program and football nights decided

Two acquisition mechanics moved from "proposal" to "decided" and were costed against the ~267,000đ/day line. Both are now sections in `01-marketing/00-marketing-plan.md` (§8 and §9) rather than ideas in the proposal brief.

### Partner program: milestone cashback
James's instinct — **cash back per 10–20 orders** rather than a trickle per referral — is the right mechanic for a shop this size: far fewer payouts to administer, self-selecting (only people genuinely bringing customers reach 10), and no payout for a single fluke referral.

| Milestone | Payout | Per order | % of contribution |
|---|---|---|---|
| 10 qualifying orders | 50,000đ | 5,000đ | ~14% (at 1.5 cups/order) |
| 20 qualifying orders | 120,000đ | 6,000đ | ~17% |

Affordable: a walk-in order at 1.5 cups generates ~36,000đ of contribution, so 5–6,000đ of it buys a customer SUNOI didn't have — much cheaper than the 30% a platform takes on every order forever. The 20-order tier pays slightly better per order on purpose, to reward continuing rather than stopping at 10.

**The rule that fell out of the economics:** *partner codes work on walk-in and direct orders only, never platform.* A platform cup contributes 12,300đ against a walk-in cup's 24,000đ — paying cashback on top of a 30% commission eats roughly half of it. That constraint also pushes partner-driven orders exactly where SUNOI wants them.

On cash vs. credit: cash is right for motivation (many good partners aren't daily drinkers, so credit is worth little to them), but **offer both, priced to steer** — 120,000đ cash *or* 180,000đ credit at the 20-order milestone. Credit costs COGS rather than cash and brings the partner back into the shop.

Anti-abuse kept simple: minimum order value, max 1 per customer per day, no self-referral, completed orders only. Tracked on paper, reconstructable from the order log.

### Football streaming nights
The strongest single idea for SUNOI's specific economics, because it hits **both** priorities from §2 at once — it drives **walk-in** (worth 2× a platform order) and it drives **long dwell and big baskets** (the lever that halves break-even). It also uses the storefront at night when the lighting is already working, and gives people a reason to come that isn't "I want a drink."

| People | Items each | Contribution | = days of fixed cost |
|---|---|---|---|
| 8 | 2 | 384,000đ | 1.4 |
| 15 | 2 | **720,000đ** | **2.7** |
| 25 | 2 | 1,200,000đ | 4.5 |

**One decent match night pays for two to four ordinary days.** Priority order for fixtures: Vietnam national team (by far the biggest), Premier League, Champions League, V-League. Don't promise football every night — scarcity is part of the draw and it protects the hours.

Run it with a **match-night combo** rather than single drinks (same basket logic, and the natural pairing for the week-3 snack test), announce the day before, film it, and ask for Maps reviews on the way out — a crowd in a good mood after a win is the best moment SUNOI will get to close the review gap.

**Open before the first night**: screen + a connection stable enough for live video; **broadcast rights** (public commercial screening in Vietnam is licensed — rights sit with holders such as K+/VTVcab; small quán commonly screen informally, but it's real exposure that compounds with SUNOI's unregistered status, and worth choosing deliberately rather than discovering); seating capacity, which caps everything above; and staffing — **late matches are an argument for shifting hours later, not extending them.**

### Schema change
`03-accounting-tracking/01-order-log.csv` gained an **Event** column (tags match nights) and `Acquisition Source` became **Acquisition Source / Partner Code**. Milestone payouts are reconstructable from the log, and match-night value becomes measurable — including the question that actually matters: **did any match-night customer come back on a non-match day?** A crowd that never returns is an expensive audience, not a customer base.

Files touched: `01-marketing/00-marketing-plan.md` (§8, §9, channel table, week 3–4 sequence, metrics), `03-accounting-tracking/01-order-log.csv`, `00-tracking-guide.md`, `05-planning/00-test-phase-roadmap.md` (2 decision-log rows, 2 open items).

## Addendum 6 — repo restructured for navigation

Reorganised **domain first, then date**, so an agent (or a person) landing cold can route to the right file without reading everything.

### What changed

**1. Every domain now has a `README.md` routing card** naming its one current entry-point file, what's in `history/` and why, and where the live questions are. This is the part that actually improves routing — more than any folder name.

**2. Superseded documents moved to `<domain>/history/YYYY-MM-DD-slug.md`:**

| Was | Now |
|---|---|
| `01-marketing/00-launch-plan.md` | `01-marketing/history/2026-07-25-launch-plan-home-kitchen.md` |
| `01-marketing/01-manus-research-prompt.md` | `01-marketing/history/2026-07-25-manus-research-prompt.md` |
| `01-marketing/02-manus-research-findings-2026-07-25.md` | `01-marketing/history/2026-07-25-manus-research-findings.md` |
| `01-marketing/03-storefront-strategy-brief-2026-09-12.md` | `01-marketing/history/2026-09-12-storefront-strategy-brief.md` |
| `05-planning/01-week-2026-07-27-action-plan.md` | `05-planning/history/2026-07-27-week-action-plan.md` |
| `05-planning/02-full-backlog-to-launch.md` | `05-planning/history/2026-07-25-full-backlog-to-launch.md` |
| `05-planning/03-task-tracker.xlsx` | `05-planning/02-task-tracker.xlsx` |

Moved with `git mv` where tracked, so file history is preserved.

**3. Root `README.md` is now a routing table** — question → file. Plus the two-layer convention, the rules for making a change or superseding a document, the confidence markers, and one standing instruction: *read the economics before deciding anything.*

**4. New: `05-planning/01-open-items.md`** — the live carry-forward to-do list across all domains, with Day-0 blockers marked 🔴.

### Two deliberate non-changes

**Living docs were not date-partitioned.** "By domain then by date" reads as one shape, but this repo holds two kinds of file and only one is dated. `00-marketing-plan.md`, `06-breakeven-storefront.md` and `01-order-log.csv` have no date — they're current state, edited in place. Filing them under a date folder would make an agent guess which date holds the live version, which is worse routing, not better. The date layer holds only what is genuinely historical.

**`00-updates/` was not dissolved into the domains.** It's the cross-domain changelog and its INDEX is the "what changed when" entry point. The distinction now stated in `00-updates/README.md`:

| | |
|---|---|
| `00-updates/` | **Dated records of change** — what happened, when, why |
| `<domain>/history/` | **Superseded documents** — things that were the plan and no longer are |

Also: **paths inside dated summaries were deliberately left unrewritten.** An update record describes what was touched on that date at the paths that existed then; rewriting them would violate the append-only rule the log exists to uphold. A note at the top of `INDEX.md` says so and points at the root routing table.

### One thing rescued before it was buried
`02-full-backlog-to-launch.md` held genuinely live items (full menu list, drink photography, supplier backups, rest/backup plan, packaging stress-test) inside an obsolete delivery-only frame. Moving it to `history/` unchanged would have buried live work — those items were pulled into `05-planning/01-open-items.md` first.

### Verification
All markdown cross-references re-checked against the new layout (bare filenames that became ambiguous after the move were made explicit) — **all links resolve**. All four CSVs re-checked for column alignment — clean.

## Addendum 7 — merged the 2026-08-23 live-storefront refresh from the remote

Pushing revealed a commit on `origin/main` that wasn't in the local clone: **`docs: refresh SUNOI context from live storefront` (2026-08-23)**. Merged rather than overwritten. It carried real evidence that changes the analysis.

### What it brought
- **The actual menu.** 20 catalog entries read from sunoi.store/order: **15 drinks 22,000–45,000₫ + 5 toppings 12,000–15,000₫** across Trà Sữa, Trà, Matcha, Cafe pha máy, Sữa. This closes the repo's longest-standing blocker, open since 2026-07-25.
- **Public hours 6:00–22:00** displayed on the storefront (days not stated) — corroborates the ~14h/day figure and sharpens it.
- **Ordering**: delivery within the inner city, or self-pickup with no shipping fee.
- **Placeholder contact data**: the footer showed `Cập nhật địa chỉ`, coordinates 10.840617/106.72462, contact `348938820`, and a **placeholder Zalo link `zalo.me/0000000000`**.
- **Platform onboarding was unconfirmed** from public evidence as of 2026-08-23.

### The finding that matters most
The break-even model was built on **35k / 39k / 45k** list prices. The real menu is **22k–45k, with five of fifteen drinks at 25,000₫ or below.** At the ~15,000đ COGS figure and 30% commission:

| List price | Platform contribution |
|---|---:|
| 45.000₫ | +16.500₫ |
| 39.000₫ | +12.300₫ |
| 35.000₫ | +9.500₫ |
| 29.000₫ | +5.300₫ |
| 25.000₫ | +2.500₫ |
| **22.000₫** | **−600₫** |

> **If COGS really is ~15,000đ, the cheaper half of the menu does not work on delivery platforms at all** — it breaks even or loses money before any discount is applied. If it's ~9,000đ, everything is viable.

That makes the COGS question bigger than the opening promo: it decides **which half of the menu should be on platforms at all.** Two mitigations are already available — toppings at 12–15,000₫ are a built-in basket lever that lifts a 25,000₫ order into safe territory, and partner cashback is already restricted to walk-in/direct, which at the cheap end is the difference between profitable acquisition and paying for losses.

It also changes the opening offer: **pick the BOGO drink from the top of the range, not the bottom.** Giving away a 25,000₫ drink costs proportionally far more than a 39–45,000₫ one. Sane candidates: Trà Sữa Trân Châu Đường Đen (39k), Trà Đào Mật Ong (39k), Matcha Latte / Matcha Latte Đậu Đỏ (40–45k).

### Two new Day-0 blockers
1. 🔴 **The Zalo link on sunoi.store is a placeholder** (`zalo.me/0000000000`), and the address field says `Cập nhật địa chỉ`. Zalo is the direct channel this entire marketing plan drives traffic toward — the one worth 2× a platform order. A dead link wastes all of it.
2. 🔴 **Platform onboarding is contradictory.** The 2026-08-23 public check couldn't confirm GrabFood/ShopeeFood/Baemin onboarding, yet the 2026-08-29 session configured a live ShopeeFood flash sale. Both can't be right, and it changes what "update the platform address" even means.

### How the merge was resolved
Conflicts were in 8 files. The local 2026-09-12 versions are three weeks newer and reflect the storefront pivot, so they were kept as the base — but every fact the 2026-08-23 commit carried was absorbed into them rather than discarded. `04-menu-product/README.md` was rebuilt around the remote's catalog table. The 2026-08-23 row was slotted into `INDEX.md` chronologically. Nothing was force-pushed and no remote work was lost.

### Files also updated to carry the new evidence
`README.md`, `04-menu-product/README.md`, `05-planning/00-test-phase-roadmap.md`, `05-planning/01-open-items.md`, `01-marketing/00-marketing-plan.md`, `03-accounting-tracking/06-breakeven-storefront.md`.
