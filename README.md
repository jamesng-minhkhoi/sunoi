# SUNOI

**SUNOI** ("SUN" + "OI" — *oi* being the Vietnamese term of endearment for calling someone dear). Home-run **drinks business** in Ho Chi Minh City, currently represented by a live storefront and ordering page. The public order page offers delivery within the inner city or self-pickup; the original 2–3km nearby-resident radius remains a planning assumption until verified in the authenticated admin/platform setup. Currently in a **1–2 month home-kitchen test phase**, validating operations before deciding on a permanent setup.

## Vision
This home-kitchen phase is a **smoke test**, not the end goal. Once ops, R&D, marketing, and legal are proven out here, the plan is to rent a real space and **build a chain of F&B locations** — the strategic aim is fast scaling toward financial freedom, not staying a single home-run operation. Keep this in mind when designing SOPs, pricing, and systems: favor things that are **repeatable and transferable to a 2nd/3rd location**, not one-off fixes specific to this home kitchen.

## Quick facts
- **Team**: James (jamesnguyen.minhkhoi@gmail.com) & Hien (myhien7602@gmail.com), a couple running this together — 2 people, no fixed roles yet
- **Current public menu pricing**: 12k–45k VND for listed base items, plus 12k–15k VND toppings (observed 2026-08-23); average order value is not yet verified
- **Public hours**: 6:00–22:00 displayed on the storefront (days of operation not stated)
- **Capacity target**: ~20-30 drinks/day at launch
- **Ordering**: live SUNOI order page supports delivery within the inner city or self-pickup; GrabFood, ShopeeFood, Baemin, and direct Zalo operations remain planning items unless separately confirmed
- **Marketing budget**: 2-3 million VND allocated for a 4-week launch voucher campaign (revised 2026-07-25 based on Manus AI research — see `01-marketing/00-launch-plan.md`), organic otherwise
- **Branding**: logo + cups/packaging already sourced ✅
- **Legal**: staying informal during the smoke test (no hộ kinh doanh registration) — platform onboarding via ID only, decision confirmed 2026-07-25, see `05-planning/00-test-phase-roadmap.md`

## Status
- Menu: 🟡 partially verified live — 20 items are visible on `/order`; recipes, sizes, costs, availability, and admin-side source data still need confirmation in `04-menu-product/`
- Storefront: 🟢 public site and order page live; `/admin` redirects to an authenticated login and was not inspected beyond the login screen
- Marketing: 🟡 in progress — see `01-marketing/`
- Operations: 🟡 in progress — see `02-operations/`
- Accounting/tracking: 🟡 in progress — see `03-accounting-tracking/`

## How this project is organized (read this first — especially if you're an AI picking this up cold)

Two layers, don't mix them up:

1. **Living docs (`01-marketing/` through `05-planning/`)** — always reflect the **current, latest** state of the plan. These get edited in place. Never look at these expecting a history — they only show "what's true right now."
2. **`00-updates/`** — an append-only, date-folder log of *what changed and why*, over time. This is the history/changelog layer. Updates happen irregularly (no fixed cadence — could be same-day, could be weeks apart), so folders only exist for dates something actually happened.

**Routing rules:**
- Want to know the **current plan/state**? → Read the living docs directly (`01-` to `05-`).
- Want to know **what changed, when, or why a decision was made**? → Start at `00-updates/INDEX.md` (newest first), then open the specific dated folder for details.
- **Making an update?** Do both:
  1. Edit the relevant living doc(s) in place to reflect the new current state.
  2. Create (or add to, if it already exists) a `00-updates/YYYY-MM-DD/` folder with a short summary of what changed and why, and add a row to `00-updates/INDEX.md`.
  - If updating same-day as an existing dated folder, add to that folder's summary rather than creating a new one.

## Folder guide

| Folder | What lives here |
|---|---|
| `00-updates/` | Dated change log — history of what changed and why, `INDEX.md` is the entry point |
| `01-marketing/` | Launch plan, content calendar, channel strategy, offers/promos, brand voice |
| `02-operations/` | Order flow, kitchen prep SOPs, packaging, delivery/shipper process, daily checklist |
| `03-accounting-tracking/` | Cost tracking, pricing/margin check, simple daily P&L, expense log |
| `04-menu-product/` | The actual menu (source of truth) — drop your existing menu doc/photos here |
| `05-planning/` | Overall test-phase roadmap, timeline, decision log, open questions, and the task tracker |
| `assets/` | Logos, photos, brand assets |

## Task tracking
`05-planning/03-task-tracker.xlsx` is the day-to-day working task list for James & Hien — one flat "All Tasks" tab (marketing, ops, menu, legal, accounting, launch all in one place with a Category column, not split into separate tabs) plus an auto-counting Dashboard tab. Upload it to Google Sheets (File → Import) to work from it live. Seeded with the current real backlog — see its own README tab for the philosophy on keeping it lean. The markdown docs in this repo remain the source of truth for *why* decisions were made; the tracker is for day-to-day *doing*.

## Test-phase goal (1–2 months)
Validate: (1) can we fulfill orders reliably out of a home kitchen, (2) is there real demand at our price point, (3) do unit economics work once delivery/platform fees are in, before committing to a permanent space or bigger investment. This test doubles as R&D for a future F&B chain — see `05-planning/00-test-phase-roadmap.md` for the bigger-picture framing.

Start here → `05-planning/00-test-phase-roadmap.md`
History → `00-updates/INDEX.md`

## Live verification snapshot

Checked 2026-08-23 from the public site:

- Storefront: [sunoi.store](https://www.sunoi.store/)
- Ordering catalog: [sunoi.store/order](https://www.sunoi.store/order)
- Admin entry point: [sunoi.store/admin](https://www.sunoi.store/admin) → `/admin/login`; authentication is still required
- The storefront currently shows a 6:00–22:00 schedule, a map centered at 10.840617, 106.72462, the contact value `348938820`, and placeholder-looking Zalo/"Cập nhật địa chỉ" content that should be verified before publishing as official contact information.
