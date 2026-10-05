---
description: Generate one ready-to-post SUNOI Facebook group post (H1 hook + Vietnamese body, guardrails-checked)
---

Generate **one** Facebook group post for SUNOI. Arguments: `$ARGUMENTS`

Pick from these choices (multiple-choice — no free invention):

```
audience=<students|residents|office|gym>
angle=<gom-order|study-place|budget|golden-hour|weekend|new-drink>
promo=<none|free-topping|discount-10k>
group=<students-big|residents-near|students-school|residents-local|residents-micro>
```

Example: `/fb-post audience=students angle=gom-order promo=discount-10k group=students-big`

## Read these first — never invent facts

| Source | What you must take from it |
|---|---|
| `01-marketing/04-copywriting-guardrails.md` | **The voice contract. Every rule applies, no exceptions** |
| `04-menu-product/README.md` | Real drink names and real prices. Never make up an item or a price |
| `01-marketing/02-partner-outreach-posts.md` | Group names + links (the table below mirrors it). Never suggest the Phòng Trọ group — vetoed |
| `01-marketing/fb-posts/` | What was already posted — don't repeat the same angle in the same group twice in a row |

## Group keys

| key | Group | Members | Link |
|---|---|---|---|
| `students-big` | Tôi là Dân Thủ Đức ✅ | 202k | https://facebook.com/groups/2498859517073430/ |
| `residents-near` | Cư dân phường Hiệp Bình Chánh - Thủ Đức | 89k | https://facebook.com/groups/188852009891338/ |
| `students-school` | Học sinh THPT Hiệp Bình | 13k | https://facebook.com/groups/416187915995247/ |
| `residents-local` | Người dân phường Hiệp Bình, TP Thủ Đức | 25k | https://facebook.com/groups/226126336077225/ |
| `residents-micro` | Cư dân Khu phố 6,7,8 phường Hiệp Bình Chánh | 5k | https://facebook.com/groups/609880727877275/ |

## The anatomy — every post has exactly these 5 parts

1. **Hook (H1)** — one line: a question or a real situation from the audience's day + 1 emoji. Never a label like [TÌM ĐỐI TÁC].
2. **Opener (1–3 short paragraphs)** — empathy before selling. Name the pain or situation in plain sentences. No hype, no pitch yet.
3. **Info block (2–4 emoji-anchored lines)** — the facts only: how it works, price, deal, hours. One fact per line, emoji at the start of the line.
4. **Closer (1–2 sentences)** — the action. Soft for discovery posts ("chiều ghé thử một ly"). For `angle=gom-order`: **must** name the cashback explicitly + CTA nhắn tin hoặc Zalo.
5. **Address** — once, short, at the end. `RPPH+687, Hiệp Bình`.

## Match the angle breadth to the group

- Niche groups (`students-school`): a narrow angle is fine — "chỗ học bài" works in a student group.
- General groups (`students-big`, `residents-near`, `residents-local`, `residents-micro`): **broaden the use case.** Never write "chỗ học bài" alone in a general group — write "học bài, làm việc". One narrow use case in a general group wastes the reach.
- Localize the hook to the group: "quanh Hiệp Bình Chánh" in `residents-near`, "quanh Thủ Đức" in `students-big`, "quanh Hiệp Bình" in `residents-local`.

## Angle → content rules

| angle | Opener is about | Info block must include | Closer |
|---|---|---|---|
| `gom-order` | The mess of collecting group orders (seen không rep, đổi món phút cuối, thu tiền thiếu) | How ordering works (1 người nhắn Zalo, pha 1 lần, ghi tên từng ly) + promo if any | Cashback explicit + nhắn tin/Zalo |
| `study-place` | Nowhere quiet to study (nhà ồn, quán lớn đắt và ồn) | Hours (mở tới 22h), WiFi, ổ cắm, price anchor (25–40k/buổi) | Soft: đi một mình hay nhóm bạn đều được |
| `budget` | Student budget reality (30k) | 2–3 real drinks with prices + one-line taste note each | Concrete action: "chiều ghé thử một ly" |
| `golden-hour` | After school/work hunger window | Deal mechanics (free topping 16h–18h T2–T6, tại quán) + which toppings | Same-day nudge: "chiều nay tan học ghé thử" |
| `weekend` | Weekend indecision | 2 most-ordered drinks with prices + one-line taste note each | "Đi đông thì nhắn Zalo trước" |
| `new-drink` | Curiosity | What it is, price, one-line taste note | "Ghé thử" |

## Promo mechanics (only these exist — never invent a new one)

- `none` — no deal mentioned
- `free-topping` — T2–T6, 16h–18h, order tại quán được free 1 topping (trị giá tới 15k)
- `discount-10k` — đơn nhóm từ 80k được giảm 10k (Zalo/at-shop)

## Anti-slop scan — run before delivering, fix on the spot

- [ ] No em dash `—` anywhere (short `–` in number ranges like 25–40k is fine)
- [ ] No "vừa đẹp" / "chuẩn bài" / "hết sảy"
- [ ] No "đuổi" or other harsh words
- [ ] No "chủ quán"
- [ ] No hype words (🔥 SIÊU "duy nhất" "rẻ nhất" "inbox ngay")
- [ ] Hook is H1, one line, question or real situation
- [ ] 2–4 emojis, at the start of info lines — not every sentence
- [ ] One post = one idea; CTA is something a Vietnamese customer actually does (never "uống dở thì nói thẳng")

## Output

Save to `01-marketing/fb-posts/YYYY-MM-DD-<angle>-<group>.md` using today's date, and print it too. Exactly this shape:

```markdown
# YYYY-MM-DD · <angle> → <group name>

**Group:** <name> (<link>)
**Post between:** <11:00–13:00 | 19:00–21:00>

## Post — copy this
# <hook> <emoji>

<opener: 1–3 short paragraphs>

<emoji> <info line>
<emoji> <info line>

<closer>
<address>
```

Then stop. One post per run — unless the user explicitly asks for a batch.
