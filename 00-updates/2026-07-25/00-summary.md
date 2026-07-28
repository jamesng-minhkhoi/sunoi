# 2026-07-25 — Initial setup

## What happened
First planning session for SUNOI. Folder structure created, and all living docs drafted from scratch based on Q&A with James.

## Key facts established
- **Business**: SUNOI, drinks (milk tea/coffee/juice mixed menu), delivery-only, home kitchen
- **Team**: James (jamesnguyen.minhkhoi@gmail.com) & wife Hien (myhien7602@gmail.com), 2 people, no fixed roles
- **Location**: 28 Đường 10, KDC Sông Đà, Hiệp Bình ward, Thủ Đức, HCMC
- **Price point**: 30k-100k VND/order, target = nearby residents within 2-3km
- **Delivery**: GrabFood + ShopeeFood (+Baemin) from day 1, plus direct Zalo orders
- **Hours**: 8am-9pm, 7 days/week
- **Capacity target**: 20-30 drinks/day at launch
- **Budget**: 0 VND marketing (organic only); 15-30M VND starting capital
- **Payment (direct orders)**: cash, bank transfer, Momo/ZaloPay, no minimum
- **Branding**: logo + cups/packaging already sourced
- **Launch target**: within 1-2 weeks of 2026-07-25

## Strategic reframe (important, landed late in the session)
This is explicitly a **smoke test** for a future **chain of F&B locations** — James & Hien want to scale fast toward financial freedom once ops/R&D/marketing/legal are proven here. All docs should be built as reusable/transferable playbooks, not one-off fixes for this single kitchen.

## Research done this session
- **Platform onboarding** (GrabFood/ShopeeFood): individual sellers can often onboard with ID + bank proof only; food safety cert formally required but enforcement varies
- **Hộ kinh doanh registration**: since July 2025, filed at ward level (UBND phường Hiệp Bình for this address), ~2 working day processing — much faster than assumed, changed the recommendation from "ID-only, register later" to "just register upfront"
- **Local competitors**: Trà Sữa TopHe & Crane Tea (30 Hiệp Bình), Coffee 24h (748 Phạm Văn Đồng, from 25k), Coffee Trúc Việt, Cheese Coffee (Gigamall), Dhi Trà Sữa & Cà Phê, Trà Sữa Nọng

## Docs created/touched
- `README.md`, `01-marketing/00-launch-plan.md`, `02-operations/00-order-to-delivery-sop.md`, `03-accounting-tracking/*` (4 CSVs + guide), `04-menu-product/README.md`, `05-planning/00-test-phase-roadmap.md`

## Later same day: Week-of-2026-07-27 action plan added
Built a day-by-day task split between James and Hien for the critical setup week (Hien full-time, James part-time alongside other work), covering registration, menu finalization, pricing, photography, supplier backups, platform sign-ups, Zalo setup, SOP dry-run, and a Sat-Sun soft launch to friends & family. See `05-planning/01-week-2026-07-27-action-plan.md`. Google Calendar events not yet created — James wants to review the task list first before it goes live on the calendar.

## Later same day: registration decision corrected
James pushed back on the AI's earlier suggestion to register hộ kinh doanh upfront — clarified he wants to **stay informal during the smoke test**, onboard to platforms with ID only, and only register reactively if a platform explicitly demands documents. Confirmed he's consciously accepting the associated risk (fine if inspected, platform suspension if docs are demanded later) and it's not tied to a revenue milestone. Reverted the registration task from `05-planning/01-week-2026-07-27-action-plan.md` and updated the decision in `05-planning/00-test-phase-roadmap.md` and `02-operations/00-order-to-delivery-sop.md`.

## Later same day: full backlog added, week plan rebalanced
James flagged that marketing research/planning and menu finalization were under-weighted in the week-1 plan — menu was blocked on recipe/taste testing (not just "write it down"), and marketing had no real research/strategy work scheduled, just execution tasks. Added `05-planning/02-full-backlog-to-launch.md` (complete backlog across Menu R&D, Marketing, Ops, Legal/Platform, Accounting, Launch, Post-Launch, spanning through end of test phase ~end of Sept 2026). Rebuilt `01-week-2026-07-27-action-plan.md` around two parallel tracks: Hien-led menu/product R&D (recipe testing is the real pacing bottleneck) and James-led marketing research & planning (target customer research, positioning/differentiation, content calendar, launch offer). Soft-launch date is now explicitly flexible, tied to menu lock rather than a fixed calendar date.

## Later same day: inventory/cost tracker built, week plan simplified
James asked for weekly tasks to stay high-level (not prescriptive step-by-step) — simplified `01-week-2026-07-27-action-plan.md` accordingly and dropped the "rest/backup plan" item from this week's list (moved to backlog only, since he didn't recall discussing it and it wasn't urgent to force in). Also built a new Excel workbook, `03-accounting-tracking/05-inventory-cost-tracker.xlsx`, covering Inventory, Cost Per Item, Suppliers & Reorder, Equipment & Fixed Assets, and Staff Hours tabs (built with Python/openpyxl since no native xlsx tool exists — used `/Library/Frameworks/Python.framework/Versions/3.12/bin/python3` specifically, as the default `python3` on PATH points elsewhere and lacks openpyxl). Added as a task for James this week (Tue: suppliers/equipment, Thu: opening stock + Hien fills Cost Per Item after menu locks).

## Later same day: Google Calendar events created
Created 16 Google Calendar events for the week of 2026-07-27 to 2026-08-02, one per task in `01-week-2026-07-27-action-plan.md`, both James (jamesnguyen.minhkhoi@gmail.com) and Hien (myhien7602@gmail.com) added as attendees on every event per their confirmed preference. Events run 09:00-based blocks in Asia/Ho_Chi_Minh timezone, Mon-Fri individual tasks, Sat dry-run and Sun soft-launch as shared "Both" events.

## Later same day: calendar event titles corrected
James asked for Google Tasks instead of Calendar events with no per-person names in titles. Found no Google Tasks connector is available in this session, and Google Tasks lists aren't shareable between accounts anyway — Calendar events (with both James and Hien as attendees) are the only mechanism here that gives shared visibility. James confirmed sticking with Calendar events. Updated all 16 existing events to drop `(Hien)`/`(James)`/`(Both)` from titles — both remain attendees on every event.

## Later same day: Manus AI research prompt drafted
James wants to research Vietnam-market-fit grassroots marketing tactics (vouchers/opening discounts, school outreach, and similar ideas) using Manus AI. Wrote a detailed, copy-paste-ready research prompt at `01-marketing/01-manus-research-prompt.md` covering business context, voucher/discount mechanics (with a flag on Vietnam's promotion-discount legal limits under Nghị định 81/2018/NĐ-CP), school/nearby-institution outreach, and other VN-specific grassroots tactics (sampling, check-in mechanics, nano-KOLs, TikTok livestream, mua chung, Zalo Mini App). Next step once James runs it: fold findings back into `01-marketing/00-launch-plan.md` and the backlog.

## Later same day: stale competitor list removed, Manus prompt expanded
James flagged the earlier competitor list (TopHe, Crane Tea, Coffee 24h, etc. — from a 2026-07-25 WebSearch) as outdated. Removed it entirely from `01-marketing/00-launch-plan.md` and from project memory rather than patching it — replaced with a note to re-verify competitor data live before using it for pricing/positioning decisions. Rewrote `01-marketing/01-manus-research-prompt.md` to have Manus research current competitors live instead of using a hardcoded (and now-removed) list, and expanded the prompt overall with more specific numbers, sub-questions, and an explicit "flag uncertainty rather than presenting stale/unsourced claims as fact" instruction. Saved a feedback memory about not treating local-business web-search results as durable fact.

## Later same day: Manus AI research results folded in
James ran the Manus AI research prompt and brought back results (Vietnamese-language report). Saved the raw findings to `01-marketing/02-manus-research-findings-2026-07-25.md` as the source archive, then distilled the actionable parts into `01-marketing/00-launch-plan.md`: a new (Google Maps-sourced, still needs live platform price verification) competitor list of 7 shops; a summary of Vietnam's promotion law (Nghị định 81/2018 + amendment 239/2026 — 50% max discount, platform-only promos exempt from advance notification); nearby schools/institutions list with a verdict that on-site school promotion is illegal but the launch timing (before school year restart) is still an advantage via online channels; 4 concrete voucher mechanics with real numbers; a 4-week, 2-3M VND launch budget plan; other researched tactics (nano-influencers, sampling day, check-in mechanics, hot/rainy-season notes); and a first-time-VN-operator tips list. Updated marketing budget from 0 VND to 2-3M VND across `README.md`, `05-planning/00-test-phase-roadmap.md`, `03-accounting-tracking/00-tracking-guide.md`, and `03-daily-expense-log.csv`. Marked the corresponding backlog items done/updated in `05-planning/02-full-backlog-to-launch.md` and added new concrete follow-up tasks (platform promo program applications, sampling day, influencer outreach, packaging waterproofing check).

## Later same day: task tracker spreadsheet built
James wants everything (marketing, todo, ops) managed via spreadsheet but was unsure how to keep it lean. No Google Sheets connector is available in this session, so built an Excel workbook instead (`05-planning/03-task-tracker.xlsx`, upload-to-Google-Sheets compatible): one flat "All Tasks" tab with a Category column (Menu R&D/Marketing/Operations/Legal-Platform/Accounting/Launch) instead of separate tabs per area — explicitly chosen to avoid the "forget to check tab #3" failure mode for a 2-person team. Includes dropdown data validation (Category/Owner/Priority/Status), conditional formatting by status/priority, a Dashboard tab with auto-counting formulas (by status/category/owner/high-priority-open), and an Archive tab for periodically moving Done items out of the main view. Seeded with 39 real tasks pulled from the current backlog docs, not left empty. Updated `README.md` to point to it and fixed a stale "not registered yet — flagged as open item" legal status line that hadn't been updated after the 2026-07-25 decision to stay informal.

## Open items carried forward (see living docs for current status)
- Menu (10+ drinks, names/sizes/prices) — not yet provided, blocks pricing sheet + ops recipe specs + platform listings
- Success criteria for end of test — proposed by AI, not yet confirmed by James
- Rest/backup plan for the 7-day schedule — no plan yet
- Registration decision (register upfront now vs. ID-only path) — pending James's confirmation given the faster-than-expected timeline
- Whether SUNOI needs a free-shipping threshold to compete with TopHe
