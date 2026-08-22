# 2026-08-23 — Live storefront and admin refresh

## What was checked

- Public storefront: [sunoi.store](https://www.sunoi.store/)
- Public order catalog: [sunoi.store/order](https://www.sunoi.store/order)
- Admin entry point: [sunoi.store/admin](https://www.sunoi.store/admin), which redirected to `/admin/login`

The public pages were read in the live browser session available for the site. No admin credentials were entered and no attempt was made to bypass the login gate.

## Current public evidence

- Storefront hours display **6:00–22:00**; operating days are not stated.
- The order page says delivery is available within the inner city and self-pickup has no shipping fee.
- The order page exposes 20 entries across Trà Sữa, Trà, Matcha, Cafe pha máy, Sữa, and Topping.
- Listed base prices range from **12.000₫ to 45.000₫**; topping prices range from **12.000₫ to 15.000₫**. “Từ” prices indicate variants that still need extraction.
- The storefront footer currently displays `Cập nhật địa chỉ`, map coordinates **10.840617, 106.72462**, contact value `348938820`, and a placeholder-looking Zalo destination `zalo.me/0000000000`. These should be verified before being treated as final customer-facing contact data.

## Context changes

- Replaced the stale “menu not provided” status with a live public catalog baseline in `04-menu-product/README.md`.
- Updated the README, marketing, operations, accounting, roadmap, research prompt, and backlog to distinguish live public evidence from still-unverified platform/admin state.
- Kept recipe specs, sizes/variants, ingredient costs, availability, platform onboarding, delivery rules/fees, and admin configuration open.
- Preserved the original 2026-07-25 setup notes as historical records; they are not rewritten to make history look current.

## Remaining verification gate

An authenticated admin session is still required to confirm the source-of-truth menu, hours, address/contact links, order settings, inventory, and connected delivery/platform accounts. The local `06-content-ops/` prototype was not modified because it is an untracked user-owned work area and is not evidence of production admin state.
