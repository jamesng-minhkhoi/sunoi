# SUNOI — Accounting & Tracking Guide

Keep this dead simple for the test phase — three sheets, updated daily. Once volume/complexity grows past the test phase, move to proper accounting software; for now, spreadsheets are enough.

## Why this matters more than usual for SUNOI
You're listing on GrabFood/ShopeeFood (+Baemin) from day 1, with an average order value of only 30k-100k VND. Platform commission (typically ~20-25%, sometimes higher with ad/promo add-ons) eats a much bigger share of a small order than a big one — a 30k drink loses ~7k+ to commission alone, before ingredient cost. **At this price point, tracking platform vs. direct-channel margin separately is not optional — it's the difference between profitable and losing money on every platform order.**

## The trackers

1. **`01-order-log.csv`** — every order, logged same-day, tagged by channel (Platform vs. Direct). This is your sales + revenue source of truth.
2. **`02-pricing-margin-check.csv`** — per-drink cost breakdown vs. sell price, calculated separately for platform orders (minus commission) and direct orders (no commission).
3. **`03-daily-expense-log.csv`** — every cash outflow (ingredients, cups/packaging, delivery/shipper fees for direct orders, marketing spend — budgeted at 2-3 million VND total across the 4-week launch window, ~500k-750k VND/week, per `01-marketing/00-launch-plan.md`; log actual voucher/promo spend here as it happens and watch for overrun against that budget).
4. **`04-weekly-pnl.csv`** — rolled-up weekly P&L, split by channel.
5. **`05-inventory-cost-tracker.xlsx`** — a full Excel workbook (multiple tabs) for everything the CSVs above don't cover: current stock levels per ingredient, cost-per-drink breakdown, supplier/reorder info, equipment & fixed assets, and an informal staff-hours log. See its own README tab for how to use it. This is the one to open regularly during setup week — it's where "how much stock do we have" and "who do we call to restock" actually live.

Open the CSVs in Google Sheets/Excel — they're just the starting template. The `.xlsx` opens directly in Excel or Google Sheets (upload/import).

## Weekly P&L (do this every Sunday during the test)

```
Revenue — Platform orders                             = A1
Revenue — Direct orders                                = A2
- Platform commission (~20-25% of A1 — check each platform's actual rate) = B
- COGS (ingredient cost, from pricing sheet × qty, all orders)            = C
- Packaging cost (all orders)                                             = D
- Delivery/shipper cost (direct orders only — platform delivery is included in commission) = E
- Marketing spend (budgeted ~500k-750k VND/week during the 4-week launch window)  = F
--------------------------------------------------------------------------
= Net for the week   = (A1 + A2) - B - C - D - E - F
```

Track this in `04-weekly-pnl.csv`, split by channel — **watch whether platform orders are actually profitable per-unit once commission is subtracted, not just whether total revenue looks good.** It's easy for platform order *volume* to look like success while each one loses money.

## Margin sanity check (do before launch — critical given the price point)
For each drink, calculate **two** margins:
- **Direct-order margin**: `sell price - (ingredient cost + cup/packaging cost)`
- **Platform-order margin**: `sell price - platform commission - (ingredient cost + cup/packaging cost)`

Rule of thumb: at 30k-100k VND price points with ~20-25% platform commission, you need ingredient+packaging cost under ~35-40% of sell price just to stay profitable on platform orders. If a drink's ingredient cost alone is already 40%+ of its sell price, that specific drink may be a loss-leader on platform orders — fine if it drives listing traffic, but know it going in rather than discovering it in week 3.

## What "good" looks like by end of test phase
- Direct-channel order % growing week over week (each direct order saves ~20-25% vs. platform)
- Net weekly margin trending positive by week 4, split by channel
- Platform rating staying high enough to keep discovery ranking (cancellations/late orders hurt this)
- No single ingredient/supplier risk (always have a backup source)
