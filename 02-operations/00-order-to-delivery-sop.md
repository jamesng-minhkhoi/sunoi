# SUNOI — Operations SOP (drinks)

> **⚠️ Written for the delivery-only home kitchen. SUNOI now runs a physical storefront with walk-in customers, and there is no walk-in flow documented below.** A skeleton walk-in path has been added in section 0; it needs James/Hien to fill in the real steps (till/payment, order marking, queue handling, dine-in vs takeaway). Everything else — platform and direct-order flow — still applies.

## Setup facts
- **Team**: 2 people, no fixed roles — but you'll want to assign at least a "drink maker" and "order/packaging handler" per shift once volume ramps, even informally, to avoid both of you doing the same step. **A first employee is planned** once trading justifies it, which makes the gaps in this document urgent: the walk-in section below is empty and there are no drink recipe specs, and a new hire can't be trained from either. Filling them in is also the "could a 3rd person run this?" test the future-chain plan depends on.
- **Hours**: currently running ~14 hours/day, 7 days/week `[was planned as 8am-9pm]` — a heavy schedule for 2 people with no fixed roles. **Open decision: shorten hours to match real demand once a week of hour-stamped order data exists.** A storefront also can't quietly skip a day the way a home kitchen could. Plan: run it as-is from launch, and have a candidate helper/3rd person identified in advance so you're not scrambling if it becomes unsustainable. Watch for early burnout signals (missed platform orders, slower prep times, quality drops) as the trigger to bring help in, don't wait for a full breakdown.
- **Daily order cap**: 20-30 drinks/day `[stale — this was the home-kitchen ceiling, re-measure at the storefront]`. Current actual volume is nowhere near it (~5 orders/day on weak days), so the cap is not the binding constraint right now — demand is.
- **Order channels**: **walk-in at the counter**; GrabFood + ShopeeFood via each platform's merchant app/tablet; direct orders via Zalo and sunoi.store
- **Direct order payment**: cash, bank transfer, or e-wallet (Momo/ZaloPay) — no minimum order value
- **Delivery**: the public page says delivery is available within the inner city and that self-pickup has no shipping fee. The actual shipper, delivery fee, minimums, and handoff process need confirmation in admin/order operations. For any future platform orders, confirm the assigned shipper before handoff; direct orders still need an explicit self-delivery/on-demand-shipper decision.

## Live storefront QA — 2026-08-23

- Storefront map is centered at **10.840617, 106.72462**, while the footer displays `Cập nhật địa chỉ` rather than a full address.
- The footer displays the contact value **348938820**; verify that it is complete and intended for customers before using it in SOPs or marketing.
- The Zalo link currently resolves to a placeholder-looking `zalo.me/0000000000`; verify or replace it before launch communications.
- `/admin` redirects to `/admin/login`; no authenticated settings, order rules, inventory, or platform connections were available to verify.

## 0. Walk-in orders (storefront) — ⚠️ NEEDS FILLING IN
This path did not exist in the home-kitchen model. Fill in the real steps:
- [ ] Greeting + taking the order at the counter (size / sweetness / ice / toppings)
- [ ] Payment: cash / bank transfer / Momo / ZaloPay / QR at the counter — [confirm which are actually set up in-store]
- [ ] How the order is marked and handed to whoever is making drinks (ticket? name on cup? verbal?)
- [ ] Takeaway vs. drinking in — is there seating, and does that change packaging?
- [ ] **Log the order** with channel = `Walk-in` and the **hour**, same as every other channel
- [ ] Ask for a Google Maps review — walk-in customers are the easiest to ask in person, and review count is currently a real competitive gap
- [ ] Hand over referral cards, if/when that program starts (see `01-marketing/history/2026-09-12-storefront-strategy-brief.md`)

## 1. Order intake
- [ ] **Platform orders**: accept on the merchant app/tablet immediately — most platforms auto-cancel if not accepted within a few minutes, so keep the device on and check it constantly during open hours
- [ ] **Direct Zalo orders**: confirm items, size/sweetness/ice level, toppings, address, phone, payment method
- [ ] Log every order (**walk-in**, platform AND direct) — with the hour it came in — in `03-accounting-tracking/01-order-log.csv` — platforms don't give you a clean historical export by default, so this log is your real source of truth
- [ ] Send confirmation for direct orders (template below)

**Confirmation message template (VN, direct order):**
> Dạ SUNOI xin xác nhận đơn: [tên món], [size/độ ngọt/đá], giao tới [địa chỉ]. Tổng: [giá]. Bên em sẽ giao trong khoảng [x] phút. Cảm ơn oi nhiều ạ! 💛

## 2. Make & prep
- [ ] Keep a running tally of open orders (platform tablet + Zalo) so nothing gets missed — with 2 people juggling multiple channels, this is the most likely failure point
- [ ] Batch similar drinks when multiple orders overlap (e.g. same base tea brewed together) to keep up with the 20-30/day cap without burning out
- [ ] [Drink recipe/spec sheet — fill in per drink once menu is loaded: base, sweetness levels offered, ice levels offered, toppings]
- [ ] Quality check every cup before sealing: correct drink, correct customization, no leaks, sealed properly

## 3. Packaging
- [ ] Correct cup size/seal per drink type (hot vs. cold, with/without topping)
- [ ] Label each cup with the order # / customer name if multiple orders are prepped at once — prevents platform-shipper mix-ups
- [ ] Straw/napkin included per platform or customer preference
- [ ] Branded sticker on every cup (marketing touchpoint — this is what shows up in customer photos)
- [ ] Match cup against the order log before handing to shipper

## 4. Delivery
- [ ] **Platform orders**: hand off to the platform's assigned shipper when they arrive — confirm order # matches before handing over
- [ ] **Direct Zalo orders**: [self-deliver by bike / call Ahamove or Grab shipper] — decide per order based on who's free and distance
- [ ] For direct orders, send "đang giao" (on the way) message with ETA

## 5. Post-delivery
- [ ] Mark order complete in the log
- [ ] **Platform orders**: ask nothing extra (platform will prompt for review) — just make sure quality was there
- [ ] **Direct orders**: send thank-you + ask for a review/photo 1-2 hrs later (not immediately)
- [ ] Log any issue (late, wrong drink, complaint, platform cancellation) below

## Issue log
| Date | Order # | Channel | Issue | Root cause | Fix applied |
|---|---|---|---|---|---|
| | | | | | |

## Capacity notes — track weekly, this tells you when to raise/lower the 20-30/day cap
- Drinks made in a single peak hour without quality drop: [ ]
- Time from order-accepted to ready-for-shipper: [ ]
- Bottleneck observed (accepting orders fast enough? making drinks? packaging? both people doing the same task?): [ ]
- Platform order acceptance rate (missed/auto-cancelled orders = lost revenue + hurts platform ranking): [ ]

## Legal / compliance checklist
- [ ] ⚠️ **RE-OPEN THIS (2026-09-12)**: the decision below was made for a home kitchen. A fixed, signed, publicly visible storefront is a materially different inspection risk, and a lease may itself require registration. Decide deliberately — don't let the old decision carry over by default. See `05-planning/00-test-phase-roadmap.md` open questions.
- [x] **Decision (2026-07-25, home-kitchen era)**: staying informal for the smoke test — attempt GrabFood/ShopeeFood onboarding with personal ID (CCCD/CMND) + bank account proof only, no hộ kinh doanh/food safety registration right now. James is knowingly accepting the risk (possible fine if inspected, or platform account suspension if docs are later requested) for the test period.
- [x] **Trigger to register, if it ever comes up**: only if a platform explicitly demands the documents mid-operation — not proactive, not tied to a revenue milestone. If triggered, registration is fast (UBND phường Hiệp Bình, ~2 working days) — noted for reference, not scheduled as a task.
- [ ] Basic food safety practices documented (ingredient storage, expiry tracking, prep surface cleanliness) — good practice regardless of formal registration status
- [ ] Ingredient sourcing: primary source is a supplier/distributor who delivers — confirm backup supplier per key ingredient (tea base, coffee, fruit, milk/creamer) in case of a delivery miss during peak days
