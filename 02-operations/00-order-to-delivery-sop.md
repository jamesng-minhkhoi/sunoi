# SUNOI — Operations SOP (drinks, home-kitchen test phase)

## Setup facts
- **Team**: 2 people, no fixed roles — but you'll want to assign at least a "drink maker" and "order/packaging handler" per shift once volume ramps, even informally, to avoid both of you doing the same step
- **Hours**: 8am-9pm, 7 days/week — a heavy schedule for 2 people with no fixed roles. Plan: run it as-is from launch, and have a candidate helper/3rd person identified in advance so you're not scrambling if it becomes unsustainable. Watch for early burnout signals (missed platform orders, slower prep times, quality drops) as the trigger to bring help in, don't wait for a full breakdown.
- **Daily order cap**: 20-30 drinks/day at launch — don't accept beyond this until ops proves it can hold quality at that volume for at least a week
- **Order channels**: GrabFood + ShopeeFood (+Baemin) orders come in via each platform's merchant app/tablet; direct orders come in via Zalo
- **Direct order payment**: cash, bank transfer, or e-wallet (Momo/ZaloPay) — no minimum order value
- **Delivery**: platform orders are picked up and delivered by the platform's own shipper — you do NOT deliver those yourself; direct Zalo orders need you to arrange delivery (self-deliver or call an on-demand shipper like Ahamove/Grab)

## 1. Order intake
- [ ] **Platform orders**: accept on the merchant app/tablet immediately — most platforms auto-cancel if not accepted within a few minutes, so keep the device on and check it constantly during open hours
- [ ] **Direct Zalo orders**: confirm items, size/sweetness/ice level, toppings, address, phone, payment method
- [ ] Log every order (platform AND direct) in `03-accounting-tracking/01-order-log.csv` — platforms don't give you a clean historical export by default, so this log is your real source of truth
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
- [x] **Decision confirmed (2026-07-25)**: staying informal for the smoke test — attempt GrabFood/ShopeeFood onboarding with personal ID (CCCD/CMND) + bank account proof only, no hộ kinh doanh/food safety registration right now. James is knowingly accepting the risk (possible fine if inspected, or platform account suspension if docs are later requested) for the test period.
- [x] **Trigger to register, if it ever comes up**: only if a platform explicitly demands the documents mid-operation — not proactive, not tied to a revenue milestone. If triggered, registration is fast (UBND phường Hiệp Bình, ~2 working days) — noted for reference, not scheduled as a task.
- [ ] Basic food safety practices documented (ingredient storage, expiry tracking, prep surface cleanliness) — good practice regardless of formal registration status
- [ ] Ingredient sourcing: primary source is a supplier/distributor who delivers — confirm backup supplier per key ingredient (tea base, coffee, fruit, milk/creamer) in case of a delivery miss during peak days
