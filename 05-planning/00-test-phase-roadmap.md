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
- Drinks menu (milk tea, coffee, juice/smoothie), 30k-100k VND price point
- Delivery via GrabFood + ShopeeFood (+Baemin) from day 1, plus direct Zalo orders
- Marketing budget: revised 2026-07-25 from 0 VND to **2-3 million VND for a 4-week launch voucher campaign** (~500k-750k VND/week), based on Manus AI research into Vietnam-specific grassroots F&B marketing — see `01-marketing/00-launch-plan.md` and `01-marketing/02-manus-research-findings-2026-07-25.md`. Everything beyond the launch vouchers stays organic.
- Logo + packaging already sourced
- **Registration decision (confirmed 2026-07-25, reverting an earlier AI suggestion James pushed back on)**: staying informal during the smoke test. Attempt GrabFood/ShopeeFood onboarding with personal ID (CCCD/CMND) + bank account proof only — **no hộ kinh doanh filing right now**, even though ward-level registration is fast (~2 working days). James is deliberately accepting the risk (potential fine if inspected, or a platform suspending the account if it later asks for docs that don't exist) for the test period. **Trigger to actually register**: only if a platform explicitly demands the documents mid-operation — not proactively, and not tied to a revenue/order milestone. If that happens, registration itself is still fast (UBND phường Hiệp Bình, ~2 working days) — that fact is worth keeping in back pocket, just not acted on now.
- Operating hours: 8am-9pm, 7 days/week — flagged as heavy for a 2-person team with no fixed roles (~13hrs/day coverage each, every day). Decision: run full hours from day 1, bring in a 3rd person/helper if it becomes overwhelming rather than pre-emptively shortening hours.
- Direct-order payment: cash + bank transfer + e-wallet (Momo/ZaloPay), no minimum order value
- Starting capital: 15-30 million VND for the test phase (ingredients stock, equipment, misc./contingency) — comfortable buffer, but still track burn weekly against this so a slow start doesn't quietly eat the whole runway before month 2
- Target launch: within 1-2 weeks of 2026-07-25 (i.e. by ~2026-08-08)

## Success criteria (proposed — not yet decided, confirm or adjust)
No target was set yet, so here's a reasonable bar given the numbers you've provided (15-30M VND capital, 20-30 drinks/day cap, 30-100k VND price point, ~20-25% platform commission):

- **Minimum bar to continue past the test phase**: net weekly P&L ≥ 0 by week 4, AND averaging at least ~15-20 drinks/day by week 3-4 (roughly 60-70% of the 20-30/day cap) — volume alone without margin, or margin on very low volume, both mean the model isn't proven yet.
- **Strong result (clear go)**: consistently hitting the 20-30/day cap by week 4 with positive net margin, and direct-channel (Zalo) orders making up a growing share of total orders (since those avoid platform commission).
- **Pivot/pause signal**: if by week 4 you're neither near break-even nor near the volume cap, worth diagnosing whether it's a demand problem (marketing/awareness) or a margin problem (pricing/commission/cost) before deciding to continue, adjust, or stop — the weekly P&L split by channel (`03-accounting-tracking/04-weekly-pnl.csv`) should make this diagnosis possible.

Adjust these numbers once you've thought it through — the point is to have *some* explicit bar going in, rather than deciding retroactively.

## Objective
Prove out delivery-only drink ops from a home kitchen in HCMC before investing further — and treat this as R&D for the future chain, not just a standalone test. By end of test, answer:
1. Can 2 people consistently hit 20-30 drinks/day without quality dropping? (and what does that imply about staffing needs per future location?)
2. Is platform + direct demand real, and does direct-channel share grow (it should — it's more profitable)?
3. Do unit economics work once ~20-25% platform commission is factored in at a 30-100k price point? (this becomes the baseline P&L model for each future location)
4. What breaks first if volume goes past 30/day — and is that a "hire a 3rd person" problem or a "the space physically can't scale" problem? (a leading indicator of what a real storefront/location needs)
5. Which menu items, offers, and channels actually convert — building the reusable playbook for location #2 and beyond

## Timeline

### Week 0 — Setup (target: complete within the next 1-2 weeks, before public launch)
- [ ] **Menu finalization** — currently the #1 blocker: pricing sheet, ops recipe specs, and platform listings all need the real drink list + prices before they can be finished. Everything else in this roadmap assumes this lands soon.
- [ ] **Platform onboarding — informal path**: submit GrabFood/ShopeeFood applications with personal ID (CCCD/CMND) + bank account proof, per the decision to try without formal registration first. Have a fallback plan ready: know roughly how long hộ kinh doanh + food safety registration would take in your ward, in case a platform rejects the ID-only application or requests documents later.
- [ ] Finalize per-drink pricing using `03-accounting-tracking/02-pricing-margin-check.csv` — confirm no drink loses money on platform orders after commission
- [ ] Set up Zalo OA/group for direct orders — confirm cash + bank transfer + Momo/ZaloPay all work as payment options
- [ ] Create GrabFood/ShopeeFood merchant listings — drink photos, names, prep time
- [ ] Assign at least informal shift roles between the 2 of you for the first week (who makes drinks vs. who manages orders/packaging), and identify a candidate 3rd person/helper in advance in case the 8am-9pm/7-day schedule becomes overwhelming — don't wait until you're already burned out to start that search
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
- [ ] Final menu list (10+ drinks, names/sizes/prices) — in progress, needed to unblock pricing, ops recipe specs, and platform listings
- [ ] Which platforms exactly (Grab + Shopee confirmed — is Baemin also in scope, or added later?)
- [ ] Informal role split for week 1 (who's on drinks vs. orders during peak hours)
- [ ] Ingredient supplier backups (tea base, coffee, milk, fruit) — supplier/distributor confirmed as primary source, backup not yet documented
- [ ] If a platform ever rejects the ID-only application or requests documents mid-operation, registering is fast (UBND phường Hiệp Bình, ~2 working days) — not a task to do now, just noted so it's not a scramble if it happens
- [ ] **Rest/backup plan — currently no plan at all.** With 7-day/8am-9pm hours and only 2 people, there is no built-in slack for illness, errands, or burnout. This is a real operational risk, not a minor detail — recommend deciding before launch, not after the first missed day. Options worth considering: (a) a pre-identified backup person (family/friend) briefed on the SOP who can cover a shift, (b) an accepted "close for the day" fallback if both are out — knowing platforms may penalize sudden closures/cancellations for ranking, or (c) building in one planned low-hours day per week from the start rather than promising 7/7 and breaking that promise later.
- [ ] **Competitive positioning vs. known local competitors** — confirmed a few established drink-delivery competitors already operate in the 2-3km radius. Worth a quick pass on what they charge, what platforms they're on, and their rating/review count before finalizing SUNOI pricing and the "why order from us" angle in `01-marketing/00-launch-plan.md`. Currently the marketing plan doesn't have a differentiation angle beyond the brand-warmth positioning.
