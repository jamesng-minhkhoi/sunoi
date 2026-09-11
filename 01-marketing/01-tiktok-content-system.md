# SUNOI — TikTok Content System `[proposal]`

> **⚠️ `[proposal]` — nothing here is decided.** Written and built 2026-09-12, two days before relaunch. James likes the shape of it but has **not committed to running it**; the decision is deferred until after Day 0 when there's real trading to judge against. Treat every "decided" below as *proposed*.
>
> **Do not start executing this doc.** The one item worth doing regardless of the decision is §1's Day-0 filming — launch-week footage is unrepeatable and costs 10 minutes. Everything else waits.
>
> **The open decision**: run this as §7's week-2 channel, or put that 10 min/day into the partner program (§8) or match nights (§9) instead — both produce walk-ins directly rather than via attention.

**What this is**: a proposed repeatable way for SUNOI to produce TikTok posts, and the part of it Claude Code would do automatically. Sits under `00-marketing-plan.md` §4 (TikTok = discovery, priority 2) and §7 (one channel, hard, from week 2).

---

## 0. Read this before building anything

**Claude Code cannot film a drink.** The scarce input on TikTok is footage, not words. Any plan that pretends otherwise produces a folder of scripts nobody shoots.

What is actually automatable, and what isn't:

| Step | Who | Cost |
|---|---|---|
| Decide today's post: format, hook, shot list, on-screen text | **Claude Code** (`/tiktok-post`) | seconds |
| Write the keyword-first Vietnamese caption + hashtags | **Claude Code** | seconds |
| Pull real numbers into the post ("hôm nay bán được 17 ly") | **Claude Code** — reads `03-accounting-tracking/01-order-log.csv` | seconds |
| **Point a phone at the thing and press record** | **James / Hien** | **~10 min/day** |
| Crop/trim raw clips to 9:16 | Claude Code (`tools/tiktok/prep-clips.sh`) | seconds |
| Add trending sound, auto-captions, publish | **James / Hien, in the TikTok app** | ~3 min/post |

The 10 minutes of filming is the whole job. Everything around it is removed. Don't buy a camera, don't script to the second, don't render in an editor — **the in-app editor is where reach comes from** (native sounds, auto-captions), so finished offline renders actively hurt.

---

## 1. Sequencing — this matters more than the content

The marketing plan's §7 says week 1 is trial and proof and **"nothing else. No TikTok system."** §13 lists *running five channels at once* as the most likely way the plan fails. This doc does not overrule that. It splits filming from publishing:

> **Day 0 → Day 7: shoot, don't build.** Launch week footage is unrepeatable — a full shop on opening day cannot be re-filmed in October. The Day-0 ask is **"film these six things, 10 minutes total"**, not "run a content system."
>
> **Week 2 → Week 4: publish.** TikTok becomes the ONE channel of §7's week 2, run properly for two weeks, with a KEEP / CHANGE / KILL call at the end on a number.

The six Day-0 shots, in priority order — all handheld, vertical, no setup:
1. The storefront lit at night, walking up to it from the street
2. One full drink being made, close, from empty cup to lid
3. The first customer of the day paying / receiving (ask first)
4. A wide shot of the shop with people actually in it
5. Hien or James saying one sentence to camera: *"Tụi mình mới mở lại ở Hiệp Bình."*
6. The finished drink sitting on the counter, slow pan — the stills double as Google Maps photos and delivery-app images (**§15 drink photography, open since July**)

Shoot everything twice, vertical, 15–30s. Storage is free; a re-shoot on Day 1 is not.

---

## 2. Account setup — the choice that's easy to get wrong `[proposal]`

| | |
|---|---|
| **Account type** | **Personal / Creator, NOT Business.** Business accounts can only use TikTok's Commercial Music Library — trending sounds and general chart music are unavailable, and TikTok can mute or remove a business post that uses them. For a local shop chasing organic reach, trending sound access is the point. The trade is analytics and Business Center tools, which SUNOI does not need at ~5 orders/day. Revisit only if paid ads ever start |
| **Handle** | `@sunoi.hiepbinh` or similar — **put the neighbourhood in the handle or display name.** It's a free keyword in every search result and every comment reply |
| **Display name** | `Sunoi — quán nước ở Hiệp Bình` |
| **Bio** | One line of what + where, address, hours. Use §3's language: *"Một quán nước nhỏ ở Hiệp Bình 🧋 Trà sữa · cà phê · matcha · Mở 10h–22h"* |
| **Link** | `sunoi.store` — ⚠️ **blocked**: the site footer still carries the placeholder `zalo.me/0000000000` and `Cập nhật địa chỉ` (§5). Sending TikTok traffic to a dead Zalo link wastes the one channel worth 2× a platform order. Fix the link before publishing anything |
| **Location** | Tag the shop's location on **every** post once the Google Maps listing is live at the new address (§5) |
| **Second account?** | No. One account, posted to consistently, beats two half-fed ones. Cross-post the same file to Facebook Reels and a Zalo post — that's free distribution, not a second channel to run |

---

## 3. The SEO rules — apply to every single post

TikTok is a search engine for "quán nước gần đây". A keyword-optimised post with modest views outranks a viral one with no keywords, for the search that actually matters. Four mechanical rules:

1. **Say the keyword out loud in the first 3 seconds.** TikTok transcribes audio and indexes it.
2. **Put the same keyword on screen as text** in the first frame.
3. **Start the caption with the keyword**, before anything clever.
4. **3–5 hashtags, short and unaccented** — `#hiepbinh #thuduc #trasua #sunoi`. Not 30, and **never the keyword as a hashtag**: `#quánnướcmớiởHiệpBình` is a five-word accented tag nobody searches and nobody else posts under, so it indexes nothing. The keyword earns its reach in the spoken line, the on-screen text and the caption sentence — the hashtags just tell TikTok the category and the neighbourhood.

**The keyword list is already decided** — §3 of the marketing plan. Do not invent a second vocabulary:

> `quán nước mới ở Hiệp Bình` · `trà đào Hiệp Bình` · `cafe Hiệp Bình` · `trà sữa Hiệp Bình` · `ăn gì uống gì ở Hiệp Bình` · `quán nước gần nhà` · `30k uống gì ở Hiệp Bình` · `quán nước Thủ Đức`

Rotate through them so SUNOI + HIỆP BÌNH keeps co-occurring. That repetition is the entire local SEO play, and it costs nothing.

**Posting windows** (Vietnam F&B convention, worth testing against SUNOI's own order-log hours): **10:00–11:00** before lunch, and **15:00–16:00** office break. Then **reply to every comment inside 30 minutes** — early interaction velocity is what the algorithm reads.

---

## 4. The six formats

Six repeatable shapes. Each is filmable in under 3 minutes with a phone, and each maps to a priority from §2 of the marketing plan.

### F1 · Pha chế — making one drink
15–25s, close, no talking. Pour, stir, pearls dropping, lid on. Keyword spoken over the top or as on-screen text.
→ **Drives**: recognition, appetite. Works with any trending sound. The single most reliable F&B format there is.

### F2 · "30k uống gì ở Hiệp Bình?"
Price-anchored menu tour. Name 3 drinks at that price, show each for 3 seconds, say the price out loud.
→ **Drives**: search traffic — this is literally a query people type. **Answers priority 3 (price point) without discounting.** Use real prices from `04-menu-product/README.md`.

### F3 · Số thật — the open diary
*"Hôm nay Sunoi bán được 17 ly."* Plain, no polish. Vietnamese audiences reward a small shop being honest about being small.
→ **Drives**: repeat viewers, a reason to follow rather than watch once. **Needs the order log filled in** — `/tiktok-post` pulls the real number; if the log is empty, this format is unavailable and that's a tracking failure, not a content one.

### F4 · Phản ứng khách — first sip
A real customer tasting, real reaction. **Ask permission on camera or before.** Never film a face that hasn't agreed.
→ **Drives**: proof. Beats any claim SUNOI makes about itself.

### F5 · Quán về đêm — storefront at night
POV walking up from the street, lights on, drinks visible, then the sign. End with where it is.
→ **Drives**: *findability* — half of local discovery is "where exactly is that?". Doubles as the storefront-legibility check in §5, and the footage doubles as Maps photos.

### F6 · Tối nay có bóng đá
Match-night announce (day before + ~2h before kickoff) and crowd footage during. Name the fixture and the time out loud.
→ **Drives**: §9 — walk-in traffic with big baskets, the highest-value order type SUNOI can get. **A full shop watching a match is the best free content the business will ever have.**

**Weekly mix** (roughly 1 post/day, 5–7/week): 2× F1, 1× F2, 1× F3, 1× F5, plus F4 whenever a customer agrees and F6 on every match night. Don't post three of the same format in a row — the account reads as a menu board, not a place.

### Do not post
- Anything naming a **promo price or a BOGO item** until COGS is resolved (§6, §15) — a wrong price in a video that keeps circulating is worse than no video
- Faces without consent
- Competitor comparisons by name
- Anything at school gates — prohibited for promotions under Nghị định 81/2018/NĐ-CP (§6)

---

## 5. What Claude Code does — `/tiktok-post`

A slash command in `.claude/commands/tiktok-post.md`. Run it, get one post spec.

```
/tiktok-post                  → picks the format that fits today
/tiktok-post F2               → forces a format
/tiktok-post F6 Việt Nam vs Thái Lan 19h30   → match night
```

It reads the repo before writing anything — `04-menu-product/README.md` for real item names and prices, `03-accounting-tracking/01-order-log.csv` for real numbers, §3 for the keyword list, §9 for fixtures — and emits:

- the keyword for the day, and the hook to **say** in the first 3 seconds
- 3–5 shots, each one phone-shootable, with rough seconds
- on-screen text for the first frame
- a caption in Vietnamese, keyword-first, ready to paste
- 3–5 hashtags, one containing the keyword verbatim
- the posting window

Output goes to `01-marketing/tiktok/posts/YYYY-MM-DD-<format>.md` — a running record of what was posted, so the week-4 KEEP/CHANGE/KILL call has something to look at.

**Batch a week at a time**: `/tiktok-post` seven times on Sunday, film the lot in two sittings, publish one a day. That is the version of this that survives a 14-hour shop day.

---

## 6. Setup — do these once

```bash
# 0. optional, only for auto-cropping clips to 9:16
brew install ffmpeg

# 1. where raw phone footage lands (git-ignored — video must never enter this repo)
mkdir -p assets/tiktok-raw

# 2. generate a post spec
/tiktok-post

# 3. after AirDropping clips into assets/tiktok-raw/
tools/tiktok/prep-clips.sh assets/tiktok-raw
#    → writes 1080x1920 versions to assets/tiktok-raw/prepped/, AirDrop those back to the phone

# 4. in the TikTok app: add trending sound, turn on auto-captions, paste the caption, post
```

That's the whole system. Steps 2 and 3 are automatic; step 4 is three minutes on a phone.

---

## 7. Automatic uploading — the optional part, and its real cost

TikTok has a Content Posting API, and Claude Code can drive it (`tools/tiktok/upload-draft.mjs`). **It is deliberately not the default path.** What it buys and what it costs:

**Buys**: pushes a rendered file straight into the TikTok app's inbox as a draft, skipping AirDrop.

**Costs**:
- Registering a TikTok developer app under a real identity — **a paperwork surface.** SUNOI's July decision was to stay informal, and the storefront already re-opened that question (root `README.md`, Legal). This compounds with it exactly the way the football broadcast-rights note in §9 does. **Know you're making the choice.**
- OAuth + refresh-token handling for a saving of one AirDrop
- **Until the app passes TikTok's audit, everything posted through it is restricted to private viewing (`SELF_ONLY`), capped at 5 users per 24 hours.** The `video.upload` (inbox draft) path sidesteps the visibility limit only because *you* publish it manually in the app — which is the same manual step AirDrop already gives you
- Uploading a finished file discourages using the in-app editor, which is where trending sounds and auto-captions live — i.e. where the reach is

**Recommendation: don't.** Revisit if SUNOI ever runs 3+ locations and posting volume justifies infrastructure. The script and setup notes are in `tools/tiktok/README.md` if you want it anyway.

---

## 8. Measuring it — the week-4 decision

§12 already tracks "TikTok posts and views." Views alone are the metric §4 warns about — *"treat views as a leading indicator, never as revenue."* Track four things:

| Metric | Where from | Why |
|---|---|---|
| Posts published / week | `01-marketing/tiktok/posts/` | Consistency is the input; if this drops, nothing else means anything |
| Views & follows | TikTok app | Leading indicator only |
| **Walk-ins who say they saw TikTok** | order log → `Acquisition Source` column | **The only number that matters.** Ask at the counter |
| Google Maps review count | Maps | TikTok → Maps is the funnel's validation rung (§4) |

> **KEEP / CHANGE / KILL, end of week 4**: KEEP if TikTok-attributed walk-ins are climbing week over week. CHANGE format mix if views are fine but nobody walks in. KILL if 4 weeks of daily posting produced neither — and put the 10 minutes/day into the partner program (§8) or match nights (§9) instead, both of which produce walk-ins directly.

---

## 9. Open

0. **Whether to run this at all.** `[proposal]` — see the banner. Decide after Day 0, against real trading, not before.

1. **Does SUNOI have a TikTok account yet?** Nothing in this repo says so. If not, create it as Creator (§2) — the handle is worth 2 minutes of thought since it's a permanent keyword
2. **Fix the sunoi.store Zalo link** before driving any traffic (§5, blocking)
3. **COGS** — blocks any post that names a promo price (§15)
4. **Is there a signature drink?** F1 is much stronger with one striking enough to film — open in `04-menu-product/README.md`
5. **Match fixture calendar** — §9 says check weekly; F6 depends on it
6. **Test the posting windows against SUNOI's own hour-by-hour order data** once week 1 is logged, rather than inheriting the 10–11h / 15–16h convention
