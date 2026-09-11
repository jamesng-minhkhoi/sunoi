# 2026-08-29 — ShopeeFood flash sale designed (backfilled 2026-09-12)

> **Backfill note**: this update was never written at the time. It is reconstructed on 2026-09-12 from the working session's own records, not from the living docs (which were never updated either). Treat the config as what was *decided*; the results were never captured.

## What happened
James worked through the setup and economics of a **ShopeeFood FlashSale** for two menu items — **Coffee CheeseCream** and **Egg CheeseCream** — and confirmed several pricing parameters that had previously been estimates.

## Parameters confirmed
- **Platform commission: 30%** (the repo had been assuming 20–25% — this is a meaningful correction)
- **Cost baseline: ~15,000đ/cup** was used in the margin model; a separate note in the same session records "~9,000đ to be safe". **These two figures were never reconciled and remain an open question.**

## Margin findings
- Hard break-even price at 30% commission and 15,000đ cost: **21,429đ** per cup paid by the customer
- To keep +4,000đ/cup: customer must pay ≥ **27,143đ**
- A **30,000đ list price is unworkable** — it only tolerates a 9.5% discount before margin collapses
- **39,000đ is the most discount-flexible list price** — supports up to ~30% off while holding +4,000đ/cup
- **Direct (Zalo) is more than twice as profitable as platform**: +20,000đ/cup vs +9,500đ/cup on a 35,000đ drink

## The key structural insight — the minimum-order gate
A **50,000đ minimum order** was chosen because it forces a second, full-price item into the basket. At 30% commission the merchant then nets ~35,000đ against ~30,000đ of cost for two cups — **a structural profit floor that holds regardless of how deep the discount goes**. That converts discount depth from a risk into a free conversion lever (deeper discounts cost only ~4,000đ of contribution per order but substantially improve listing appeal).

Edge case handled: two of the same 35,000đ hero item at 30%+ off falls *below* the 50,000đ gate and is naturally blocked. Only the 25% depth qualifies there.

**Capacity, not budget, was the binding constraint.** Against the then-current 20–30 drinks/day ceiling, 8 promo orders/day = 16 drinks, leaving a workable non-promo buffer. 10–12/day risked hitting the ceiling.

## Final configuration
| Setting | Value |
|---|---|
| Name | Đồng giá 25K — Cà phê kem phô mai |
| Run | Sun 2026-08-30 08:00 → Sat 2026-09-05 21:00 (weekend-weighted; all candidate dates were weekends, the peak delivery window) |
| Type | Đồng giá (flat 25,000đ) if single-size; percentage if M/L variants exist |
| Minimum order | 50,000đ |
| Max promo items | 1 per order |
| Per customer | 1 per day |
| Daily cap | 8 promo orders |
| Merchandising | Egg CheeseCream placed directly beside Coffee CheeseCream to drive trade-up |

## What never got done
- [ ] Confirming with ShopeeFood merchant support whether the 50,000đ gate is evaluated **pre- or post-discount** — this materially changes the economics and is still unknown
- [ ] Configuring a **60,000đ free-shipping threshold** as an upsell rung above the gate
- [ ] Writing the config into `01-marketing/00-launch-plan.md` (done 2026-09-12)
- [ ] Confirming actual list prices and whether Coffee CheeseCream has size variants
- [ ] **Capturing the results.** No orders, redemptions or revenue from this campaign were recorded. If the data is still in the ShopeeFood merchant dashboard, it is the only pre-storefront demand signal SUNOI has — worth pulling.

## Living docs touched
None at the time. Retrofitted 2026-09-12 into `01-marketing/00-launch-plan.md`, `05-planning/00-test-phase-roadmap.md`, `03-accounting-tracking/02-pricing-margin-check.csv`, `04-menu-product/README.md`.
