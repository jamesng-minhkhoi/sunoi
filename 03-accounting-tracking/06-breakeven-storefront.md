# SUNOI — Storefront break-even (from 2026-09-12)

The first real fixed-cost model SUNOI has. Everything written before this date assumed zero fixed costs — true for a home kitchen, false now.

## The monthly nut

| | Months 1–3 | Month 4 onward |
|---|---|---|
| Rent | 6,000,000đ | 7,000,000đ |
| Utilities `[assumed]` | 2,000,000đ | 2,000,000đ |
| **Total fixed / month** | **8,000,000đ** | **9,000,000đ** |
| **Per day (30-day month)** | **~267,000đ/day** | **~300,000đ/day** |

Lease: **2-year contract**, 165,000,000đ of committed rent (6M × 3 + 7M × 21). Add utilities and **year one alone carries ~105,000,000đ of fixed cost** before a single cup is made.

> ⚠️ The 2,000,000đ utilities figure is an **assumption**, not a bill — electricity, water, wifi and waste for a drinks shop running long hours with fridges, blenders and ice. Replace it the moment the first real bills arrive; a 1M error moves break-even by roughly 1.5 cups/day. Log actuals in `03-daily-expense-log.csv`.

> The 2-year term is the part worth sitting with. This is no longer a smoke test that can be quietly wound down — the downside is contractual. The 3 months at the reduced rate are effectively the runway to prove the site works.

## Cups/day needed to break even

Covers fixed costs only. **No wages for James or Hien.** Assumes one cup per order — see the basket note below, it matters a lot.

### Months 1–3 — the ~267,000đ/day line

| List price | COGS | Walk-in / direct | Platform (after 30%) |
|---|---|---|---|
| 35k | 9k | 10.3 | 17.2 |
| **35k** | **15k** | **13.3** | **28.1** |
| 39k | 9k | 8.9 | 14.6 |
| **39k** | **15k** | **11.1** | **21.7** |
| 45k | 9k | 7.4 | 11.9 |
| 45k | 15k | 8.9 | 16.2 |

### Month 4 onward — the ~300,000đ/day line

| List price | COGS | Walk-in / direct | Platform (after 30%) |
|---|---|---|---|
| 35k | 9k | 11.5 | 19.4 |
| **35k** | **15k** | **15.0** | **31.6** |
| 39k | 9k | 10.0 | 16.4 |
| **39k** | **15k** | **12.5** | **24.4** |
| 45k | 9k | 8.3 | 13.3 |
| 45k | 15k | 10.0 | 18.2 |

Bold rows are the conservative case (15k COGS). **Working target: ~11–13 walk-in/direct orders a day** during the reduced-rent window.

## The four things this says

1. **Break-even is reachable.** ~11–13 walk-in/direct orders a day clears everything in months 1–3. That's roughly **2.5× the ~5/day baseline** — a real gap, but not a fantasy, and it's the second rung of the order ladder.

2. **Channel mix is the decisive variable, not order count.** Same cup, 35k list, 15k COGS: **20,000đ walk-in vs 9,500đ on a platform.** Platform break-even is **2× to 2.5×** the walk-in figure. At 35k/15k from month 4 it's **31.6 cups/day — above the old 20–30/day capacity ceiling entirely.**
   > **A platform-heavy, low-price-point business does not clear this rent at any volume SUNOI can currently produce.**
   Every walk-in or direct order is worth roughly two platform orders. That makes the storefront's street presence and the direct/Zalo channel economically central, not nice-to-have.

3. **Basket size is as powerful as order count — and it's cheaper to move.** All the tables above assume 1 cup/order. A real 2-cup basket halves them:
   - 2 walk-in cups (39k + 45k, 15k COGS) = 54,000đ contribution → **~5 orders/day breaks even**
   - The same basket on a platform = 28,800đ → ~9.3 orders/day
   Going from 5 orders/day to 13 is hard. Going from 5 single-cup orders to 5 two-cup orders is a menu and upsell problem. **This is the strongest argument for the light-food/snack test and for a second-item offer** — and it's the same logic that made the August 50,000đ minimum-order gate work.

4. **Price point matters more than it did.** 35k → 45k at 15k COGS nearly doubles platform contribution (9,500đ → 16,500đ) and cuts platform break-even from 28 cups/day to 16. Cheap drinks sold through a platform barely clear this rent.

## Hiring — what a first employee does to these numbers

**Planned, not yet done**: James and Hien expect to hire once trading justifies it. This section exists so the decision is made on a number rather than on exhaustion. Wages are the biggest cost *not* in the tables above.

### The conversion rule (use this with whatever the real wage turns out to be)
Every **1,000,000đ/month** of wage cost = **33,333đ/day** of extra fixed cost:

| | per 1M/month of wage |
|---|---|
| Walk-in / direct (39k list, 15k COGS) | **+1.4 cups/day** |
| Platform (39k list, 15k COGS) | **+2.7 cups/day** |
| Walk-in at 45k list | +1.1 cups/day |
| Platform at 35k list | +3.5 cups/day |

### What that adds up to
Break-even in cups/day, 39k list, 15k COGS, one cup per order. Wage figures are **illustrative placeholders** `[unverified — get real local rates before planning against these]`:

| Months 1–3 | Daily fixed | Walk-in / direct | Platform |
|---|---|---|---|
| No staff | 267,000đ | **11.1** | 21.7 |
| + part-time (~4M/mo) | 400,000đ | 16.7 | 32.5 |
| + full-time (~6.5M/mo) | 483,000đ | **20.1** | 39.3 |
| + two staff (~9M/mo) | 567,000đ | 23.6 | 46.1 |

From month 4 (9M/month base), a full-time hire puts break-even at **21.5 walk-in cups/day or 42 platform cups/day**.

> **The headline: one full-time hire roughly doubles break-even** — from ~11 walk-in cups/day to ~20. On platform orders it goes past 39 cups/day, which is beyond any capacity SUNOI has demonstrated. **A first employee has to be paid for by walk-in and direct volume; platform volume cannot fund one.**
>
> With **2-cup baskets** the same hire moves break-even from ~4.9 to ~9.0 orders/day — still a doubling, but a far more reachable target. Another reason basket size is the cheapest lever available.

### Hire for capacity, not for exhaustion — they need different answers
Two genuinely different triggers get confused with each other:

- **Capacity trigger**: demand exceeds what two people can make at quality. Orders get missed, prep times slip, drinks get worse at peak. **This hire pays for itself** — it exists because there is revenue on the table that two people can't reach.
- **Relief trigger**: nobody is coping with ~14 hours a day, 7 days a week. This is real and the July roadmap already flagged it as an unresolved risk. But it is **not** funded by extra revenue — it's funded out of margin, and at ~11 cups/day it would consume all of it and more.

If the pressure is relief rather than capacity, the cheaper fixes to try first: **shorten the hours to match real demand** (the hour-by-hour order data will show where the dead hours are), close one day a week, or hire a few peak-hour shifts rather than a full-time role. A part-time person covering only the busy window costs a fraction of a full-time hire and solves most of the actual problem.

### Suggested trigger to write down before it's needed
Hire when **both** hold for a full week:
1. Orders are consistently at or above the no-staff break-even (**~11–13 walk-in/direct per day**, or ~5 with 2-cup baskets), **and**
2. There is evidence of demand being *lost* — missed platform orders, queues walking away, capped hours, or quality slipping at peak.

Condition 1 without condition 2 means there's no extra revenue to capture yet. Condition 2 without condition 1 means the shop can't afford the fix and should change its hours instead.

### Before hiring anyone — check these
- [ ] **Real local wage rates** for F&B service/barista staff in Thủ Đức — full-time monthly and part-time hourly. Nothing in this repo has a verified figure.
- [ ] **Total employment cost, not just the wage** — in Vietnam that can include compulsory insurance contributions (BHXH/BHYT/BHTN) on a formal contract, plus any allowances or meals. Budget above the headline wage.
- [ ] ⚠️ **The informal-operation decision collides with this.** SUNOI has no hộ kinh doanh registration. Taking on an employee means a labour relationship, and depending on contract type that brings registration, insurance and personal-income-tax withholding obligations. **Hiring is arguably a stronger trigger to formalise than anything in the original July decision** — that decision was made for a 2-person home kitchen with no staff and no premises. Decide deliberately; see the roadmap's open questions.
- [ ] **Who trains them, and from what?** `02-operations/00-order-to-delivery-sop.md` is still written for delivery-only and has an empty walk-in section and no drink recipe specs. A new hire needs both. This is also exactly the "could a 3rd person follow these SOPs?" test the chain ambition depends on — see the roadmap's bigger-picture section.

## ⚠️ The real menu is cheaper than these tables assume

The tables above use 35k / 39k / 45k list prices. The **actual live catalog** (checked 2026-08-23, `04-menu-product/README.md`) is 15 drinks from **22,000₫ to 45,000₫**, with **five at 25,000₫ or below**.

Platform contribution at ~15,000đ COGS and 30% commission:

| List price | Platform contribution |
|---|---:|
| 45.000₫ | +16.500₫ |
| 39.000₫ | +12.300₫ |
| 35.000₫ | +9.500₫ |
| 29.000₫ | +5.300₫ |
| 25.000₫ | +2.500₫ |
| **22.000₫** | **−600₫** |

**If COGS really is ~15,000đ, the cheaper half of the menu does not work on delivery platforms** — it either breaks even or loses money before any discount. If COGS is ~9,000đ, all of it is viable. This is a second, larger reason the COGS question is urgent: it decides not just the opening promo but which half of the menu should be on platforms at all.

Two mitigations already available:
- **Toppings at 12–15,000₫** are the cheapest basket lever SUNOI has, and they're already built into the ordering page. "Thêm topping" lifts a 25,000₫ order into comfortable territory without adding anything to the menu.
- **Partner cashback is already restricted to walk-in/direct.** At the cheap end of this menu, that restriction is the difference between profitable acquisition and paying for losses.

## Load-bearing unknowns
- [ ] **COGS: ~9,000đ or ~15,000đ?** Both on record from the same 2026-08-29 session. The gap moves break-even by ~30%. **Urgent — the relaunch promo decision depends on it.**
- [ ] **Real utilities** — 2,000,000đ/month is a placeholder until the first bills land
- [ ] **Real AOV and cups-per-order** — comes straight out of the order log, and per point 3 it may be the cheapest lever available
- [ ] **Capital position** after deposit and fit-out — the original 15–30M figure predates both, and is less than half of year one's fixed cost
- [ ] **No wages are counted in the main tables.** James and Hien are working ~14 hour days for free. Clearing rent is not the same as the business being worth doing — at some point their own time needs a number against it too. See the hiring section above for what paid staff would cost.
- [ ] **Real wage rates** for a first hire — no verified local figure exists in this repo

## How to use this
Put the daily fixed cost in `04-weekly-pnl.csv` and compare it to actual daily contribution, weekly. The question at close of business is one number:

> **Did today's contribution clear ~267,000đ?**

Contribution = revenue − platform commission − COGS − packaging − delivery.
