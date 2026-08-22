# SUNOI — 1–2 Month Home-Kitchen Test Phase Roadmap

## The bigger picture
This home-kitchen phase is a **smoke test** for a much larger goal: James and Hien plan to rent a real space and build **a chain of F&B locations** once ops, R&D, marketing, and legal are proven out here. The strategic driver is scaling fast toward financial freedom, not staying a single home operation. That reframes what "success" and "good enough" mean at every stage of this roadmap:
- Ops SOPs should be written so a 3rd person (not James/Hien) could follow them at a future location, not just tuned to this specific kitchen
- Pricing/margin data from this test should be treated as the baseline economics model for future locations, not a one-off number
- Marketing learnings (which channel, which offer, what converts) should be documented as a repeatable playbook, not just "what worked once"
- Legal/registration process learned here (ward-level hộ kinh doanh, ~2 day processing) is a template to reuse per future location

## Setup facts
- **Team**: James (jamesnguyen.minhkhoi@gmail.com) & Hien (myhien7602@gmail.com) — a couple, running this together, no fixed roles yet
- **Home kitchen location**: 28 Đường 10, KDC Sông Đà, Hiệp Bình ward, Thủ Đức, Ho Chi Minh City
- Public menu snapshot (checked 2026-08-23): 20 entries across Trà Sữa, Trà, Matcha, Cafe pha máy, Sữa, and Topping; listed base prices are 12k-45k VND plus 12k-15k toppings. Recipes, variants, availability, and costs remain open.
- The public order page offers delivery within the inner city or self-pickup. GrabFood, ShopeeFood, Baemin, and direct Zalo operations are still unverified in this refresh.
- Marketing budget: revised 2026-07-25 from 0 VND to **2-3 million VND for a 4-week launch voucher campaign** (~500k-750k VND/week), based on Manus AI research into Vietnam-specific grassroots F&B marketing — see `01-marketing/00-launch-plan.md` and `01-marketing/02-manus-research-findings-2026-07-25.md`. Everything beyond the launch vouchers stays organic.
- Logo + packaging already sourced
- **Registration decision (confirmed 2026-07-25, reverting an earlier AI suggestion James pushed back on)**: staying informal during the smoke test. Attempt GrabFood/ShopeeFood onboarding with personal ID (CCCD/CMND) + bank account proof only — **no hộ kinh doanh filing right now**, even though ward-level registration is fast (~2 working days). James is deliberately accepting the risk (potential fine if inspected, or a platform suspending the account if it later asks for docs that don't exist) for the test period. **Trigger to actually register**: only if a platform explicitly demands the documents mid-operation — not proactively, and not tied to a revenue/order milestone. If that happens, registration itself is still fast (UBND phường Hiệp Bình, ~2 working days) — that fact is worth keeping in back pocket, just not acted on now.
- Operating hours: the public storefront displays 6:00-22:00; days of operation are not stated. This is a heavy schedule for a 2-person team with no fixed roles. Confirm the admin schedule before committing to it operationally, and identify a 3rd person/helper if the displayed hours are intended.
- Direct-order payment: cash + bank transfer + e-wallet (Momo/ZaloPay), no minimum order value
- Starting capital: 15-30 million VND for the test phase (ingredients stock, equipment, misc./contingency) — comfortable buffer, but still track burn weekly against this so a slow start doesn't quietly eat the whole runway before month 2
- Launch status: the public storefront/order page was live when checked on 2026-08-23; the original ~2026-08-08 target is historical, and the actual operational/platform launch date is not verified.

## Success criteria (proposed — not yet decided, confirm or adjust)
No target was set yet, so here's a reasonable bar given the numbers you've provided (15-30M VND capital, 20-30 drinks/day cap, public base prices of 12-45k VND plus toppings, and an as-yet-unverified platform commission):

- **Minimum bar to continue past the test phase**: net weekly P&L ≥ 0 by week 4, AND averaging at least ~15-20 drinks/day by week 3-4 (roughly 60-70% of the 20-30/day cap) — volume alone without margin, or margin on very low volume, both mean the model isn't proven yet.
- **Strong result (clear go)**: consistently hitting the 20-30/day cap by week 4 with positive net margin, and direct-channel (Zalo) orders making up a growing share of total orders (since those avoid platform commission).
- **Pivot/pause signal**: if by week 4 you're neither near break-even nor near the volume cap, worth diagnosing whether it's a demand problem (marketing/awareness) or a margin problem (pricing/commission/cost) before deciding to continue, adjust, or stop — the weekly P&L split by channel (`03-accounting-tracking/04-weekly-pnl.csv`) should make this diagnosis possible.

Adjust these numbers once you've thought it through — the point is to have *some* explicit bar going in, rather than deciding retroactively.

## Objective
Prove out home-kitchen drink ops with delivery and/or self-pickup in HCMC before investing further — and treat this as R&D for the future chain, not just a standalone test. By end of test, answer:
1. Can 2 people consistently hit 20-30 drinks/day without quality dropping? (and what does that imply about staffing needs per future location?)
2. Is platform + direct demand real, and does direct-channel share grow (it should — it's more profitable)?
3. Do unit economics work at the live item prices once actual platform fees/promotions are factored in? (this becomes the baseline P&L model for each future location)
4. What breaks first if volume goes past 30/day — and is that a "hire a 3rd person" problem or a "the space physically can't scale" problem? (a leading indicator of what a real storefront/location needs)
5. Which menu items, offers, and channels actually convert — building the reusable playbook for location #2 and beyond

## Timeline

### Week 0 — Setup and reconciliation (original launch target was ~2026-08-08; current live status needs verification)
- 🟡 **Menu reconciliation** — the public site now provides a 20-item name/price baseline, but recipe specs, variants, ingredient costs, availability, and the authenticated admin source of truth still need to be reconciled before pricing and platform work can be considered complete.
- [ ] **Platform onboarding — informal path**: submit GrabFood/ShopeeFood applications with personal ID (CCCD/CMND) + bank account proof, per the decision to try without formal registration first. Have a fallback plan ready: know roughly how long hộ kinh doanh + food safety registration would take in your ward, in case a platform rejects the ID-only application or requests documents later.
- [ ] Finalize per-drink pricing using `03-accounting-tracking/02-pricing-margin-check.csv` — confirm no drink loses money on platform orders after commission
- [ ] Set up Zalo OA/group for direct orders — confirm cash + bank transfer + Momo/ZaloPay all work as payment options
- [ ] Create GrabFood/ShopeeFood merchant listings — drink photos, names, prep time
- [ ] Assign at least informal shift roles between the 2 of you and identify a candidate 3rd person/helper in advance if the public 6:00-22:00 schedule is intended — don't wait until you're already burned out to start that search
- [ ] Dry-run the SOP (`02-operations/00-order-to-delivery-sop.md`) end-to-end with test orders before going live
- [ ] Set the 20-30 drinks/day cap on both platforms (most let you set a pause/capacity limit) so day-1 doesn't overwhelm a 2-person team

### Week 1-2 — Soft launch
- [ ] Friends & family first via direct Zalo channel — validate recipes/process before platform traffic hits
- [ ] Go live on platforms once Week 0 items are done
- [ ] Log every order (`03-accounting-tracking/01-order-log.csv`), tagged by channel
- [ ] Daily 5-min retro between the 2 of you: what broke, what was slow, what customers asked for
- [ ] Watch platform order acceptance rate closely — missed orders hurt both revenue and platform ranking

### Week 3-4 — Public push
- [ ] Push local FB groups + Zalo broadcast (organic, per `01-marketing/00-launch-plan.md`)
- [ ] Encourage platform reviews on every platform order
- [ ] Start nudging repeat platform customers toward direct Zalo ordering (saves commission)
- [ ] Re-check the 20-30/day cap — raise only if a full week holds quality and delivery times

### Week 5-8 (if running the full 2 months) — Scale test & decide
- [ ] Push toward max sustainable 2-person daily volume
- [ ] Full channel-split unit economics review (platform vs. direct, real data)
- [ ] Decide: continue as-is, add a 3rd person, move to a licensed setup, or pivot menu/pricing

## Decision log
| Date | Decision | Why |
|---|---|---|
| 2026-07-25 | Stay informal (no hộ kinh doanh registration) during the smoke test; onboard to platforms with personal ID only | James wants to avoid formal commitment before the business is proven; consciously accepting the risk of a fine or platform suspension; will only register if a platform explicitly demands it |

## Open questions
- [🟡] Confirm the live 20-item catalog against admin: sizes/variants, recipes, costs, availability, and platform listings remain open even though names/prices are visible on `/order`
- [ ] Which external channels are actually active (GrabFood, ShopeeFood, Baemin, direct Zalo, and/or the SUNOI order page)?
- [ ] Informal role split for week 1 (who's on drinks vs. orders during peak hours)
- [ ] Ingredient supplier backups (tea base, coffee, milk, fruit) — supplier/distributor confirmed as primary source, backup not yet documented
- [ ] If a platform ever rejects the ID-only application or requests documents mid-operation, registering is fast (UBND phường Hiệp Bình, ~2 working days) — not a task to do now, just noted so it's not a scramble if it happens
- [ ] **Rest/backup plan — currently no plan at all.** If the public 6:00-22:00 schedule is intended, there is no built-in slack for illness, errands, or burnout with only 2 people. Decide before committing to those hours: (a) brief a backup person, (b) define a close-for-the-day fallback, or (c) publish a narrower schedule until staffing is proven.
- [ ] **Competitive positioning vs. known local competitors** — confirmed a few established drink-delivery competitors already operate in the 2-3km radius. Worth a quick pass on what they charge, what platforms they're on, and their rating/review count before finalizing SUNOI pricing and the "why order from us" angle in `01-marketing/00-launch-plan.md`. Currently the marketing plan doesn't have a differentiation angle beyond the brand-warmth positioning.
