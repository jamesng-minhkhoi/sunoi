# 03-accounting-tracking

**Answers**: is SUNOI making money, and what has to be true for it to?

## Start here
| File | What it is |
|---|---|
| **`06-breakeven-storefront.md`** | **The economics the whole business is judged against.** Fixed costs, break-even by channel and price point, basket-size effect, and what hiring would cost. Read this before any pricing, promo or marketing decision |
| `00-tracking-guide.md` | How to use the trackers; the weekly P&L method |
| `01-order-log.csv` | **Every order — the source of truth.** Hour, channel, new/repeat, customer type, partner code, event |
| `02-pricing-margin-check.csv` | Per-drink cost vs. price, direct and platform margins |
| `03-daily-expense-log.csv` | Every cash outflow incl. rent and utilities |
| `04-weekly-pnl.csv` | Weekly P&L split by channel, incl. fixed costs |
| `05-inventory-cost-tracker.xlsx` | Stock levels, cost-per-drink, suppliers, equipment |

## The numbers that matter
- **Fixed cost: ~267,000đ/day** (8M/month = 6M rent + 2M assumed utilities), rising to ~300,000đ/day from month 4
- **Break-even: ~11–13 walk-in/direct orders/day**, or 22–28 if mostly platform
- **A 2-cup basket roughly halves both**
- Platform commission is **30%** (older docs may say 20–25% — they're wrong)

**The one number to check at close of business: did today's contribution clear ~267,000đ?**

## ⚠️ The blocker
`01-order-log.csv` holds two seed rows from August and nothing since. **Every strategic question in this repo is unanswerable until it's being filled in daily**, and answerable with a week of real data.

Also unresolved: **COGS is recorded as both ~9,000đ and ~15,000đ per cup.** Confirm it — the gap moves break-even ~30%.
