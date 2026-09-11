# 04-menu-product

**Answers**: what does SUNOI actually sell?

## The menu — live public catalog, checked 2026-08-23

Read from the public ordering page at [sunoi.store/order](https://www.sunoi.store/order). **20 catalog entries: 15 drinks + 5 toppings.**

| Category | Product | Public price |
|---|---|---:|
| Trà Sữa | Trà Sữa Khoai Môn Nghiền | 35.000₫ |
| Trà Sữa | Olong Phong Lan | 25.000₫ |
| Trà Sữa | Trà Sữa Trân Châu Đường Đen | 39.000₫ |
| Trà Sữa | Trà Sữa Lài | 25.000₫ |
| Trà | Nước Chanh Vàng | 22.000₫ |
| Trà | Trà Thơm | 25.000₫ |
| Trà | Trà Đào Mật Ong | 39.000₫ |
| Trà | Trà Nho Xanh | 29.000₫ |
| Trà | Trà Mận Xí Muội | 25.000₫ |
| Matcha | Matcha Latte | 40.000₫ |
| Matcha | Matcha Latte Đậu Đỏ | 45.000₫ |
| Cafe pha máy | Phê Xỉu | từ 29.000₫ |
| Cafe pha máy | Latte Cà Phê | 35.000₫ |
| Cafe pha máy | Đen Đá | từ 25.000₫ |
| Sữa | Phê Sữa | từ 29.000₫ |
| Topping | Trân Châu Matcha Phô Mai | 15.000₫ |
| Topping | Hạt Nổ Củ Năng | 12.000₫ |
| Topping | Thạch Nổ Yến Mạch | 12.000₫ |
| Topping | Trân Châu Bánh Bò Olong | 15.000₫ |
| Topping | Trân Châu Khoai Môn Quế Hoa | 15.000₫ |

## What is still unverified

- “Từ” prices indicate size/variant choices that were not fully extracted from the public page.
- The order page exposes item-level topping/customization controls, but the full recipe, size, sweetness/ice, availability, and upcharge rules need an authenticated admin check.
- This is evidence of the public catalog, not proof that the same items are active on GrabFood, ShopeeFood, or any other platform.
- Use this snapshot to unblock menu naming and initial pricing work, then fill `03-accounting-tracking/02-pricing-margin-check.csv` only after ingredient costs and variants are confirmed.

## ⚠️ What these prices mean for the economics — read this before any promo

Drinks run **22,000₫ to 45,000₫**, and **five of the fifteen sit at 25,000₫ or below**. The break-even model in `03-accounting-tracking/06-breakeven-storefront.md` was built on 35k/39k/45k list prices, which is the *top* of this menu, not the middle.

At the ~15,000đ COGS figure on record, a platform order (30% commission) looks like this:

| List price | Platform contribution | Verdict |
|---|---:|---|
| 45.000₫ | +16.500₫ | healthy |
| 39.000₫ | +12.300₫ | fine |
| 35.000₫ | +9.500₫ | thin |
| 29.000₫ | +5.300₫ | very thin |
| 25.000₫ | +2.500₫ | ~breakeven |
| 22.000₫ | **−600₫** | **loses money** |

Three consequences:
1. **Confirming real COGS is now urgent beyond the promo decision** — if it really is ~15,000đ, the cheaper half of this menu doesn't work on delivery platforms at all. If it's ~9,000đ, everything is viable.
2. **Partner cashback (5–6,000đ/order) must not apply to the cheap end on platform orders.** It's already restricted to walk-in/direct — this is a second reason that rule matters.
3. **Toppings are the basket lever, and they're already built.** At 12–15,000₫ each with presumably low ingredient cost, "thêm topping" is the cheapest way to lift a 25,000₫ order into profitable territory. This is the §2 basket argument, available today without adding food to the menu.

## Still open
- [ ] **Real cost per cup** — ~9,000đ or ~15,000đ? Both on record from 2026-08-29. See the table above for why this now decides which half of the menu is viable on platforms.
- [ ] **Per-item ingredient cost**, so `03-accounting-tracking/02-pricing-margin-check.csv` can be filled properly — cost almost certainly varies a lot between Nước Chanh Vàng and Matcha Latte Đậu Đỏ
- [ ] **"Từ" prices** (Phê Xỉu, Đen Đá, Phê Sữa) — extract the size/variant ladder
- [ ] **Where do Coffee CheeseCream / Egg CheeseCream fit?** They were the hero items of the 2026-08-30 ShopeeFood flash sale at a flat 25,000đ, but neither appears in this catalog under those names. Either they're platform-only, renamed, or since removed — worth reconciling.
- [ ] **A signature drink** — is there one, and is it striking enough to photograph/film? (see §9 and the storefront section of `01-marketing/00-marketing-plan.md`)
- [ ] **Light food / snacks** — a 2–3 item test for basket size and football-night combos. Not decided. Note the toppings above may already do much of this job.
- [ ] **Recipe specs, sizes, sweetness/ice, availability** — needed for the ops SOP and to train any future hire
- [ ] **Drink photography** — flagged missing since July, still missing, directly affects delivery-app conversion
