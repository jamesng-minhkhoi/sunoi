# Daily group-posting workflow (Codex + computer use) `[proposal]`

**Status: proposal — not running.** How a daily scheduled agent (Codex or any
agent with browser computer-use) posts the partner-program outreach to the
local Facebook groups. Read `02-partner-outreach-posts.md` first — this doc is
the *execution* layer for that kit.

## Why computer use (and not an API)

Facebook offers no supported API for posting to groups as a personal profile.
The only route is driving the real Facebook web UI in a logged-in browser —
exactly what computer-use does. That also means this workflow inherits
Facebook's spam defenses: keep volume low, vary everything, and stop at the
first sign of a flag.

## Safety rules (non-negotiable)

1. **Max 2 posts per day**, at least 4 hours apart, in the 11:00–13:00 and
   19:00–21:00 windows.
2. **Read the group's rules before every first post** (About → Rules). If promo
   posts need admin approval, ask first — never post blind into a strict group.
3. **Never post identical text twice.** Tweak 1–2 lines per group; never reuse
   the same image + text combination.
4. **Stop conditions — halt the run and report to James if:** a post is
   removed/flagged, Facebook shows any warning or checkpoint, a group requires
   captcha, or 2+ groups reject/queue posts for review in one day.
5. **No posting to the high-school group outside the approved variant** (V4
   only, online outreach — no on-campus promotion).
6. Every run writes to the tracking log (below), success or failure.

## Daily runbook

The agent runs once per day and posts **only the groups scheduled for that
day** (rotation from `02-partner-outreach-posts.md`, extended as a rolling
7-day cycle — day 8 restarts day 1 with tweaked copy).

For each scheduled group, in order:

1. Open the group in the logged-in browser. Confirm James is still a member.
2. Re-read the group rules (skip if posted there within the last 7 days and
   rules were already checked).
3. Pick the variant + image from the schedule. Apply the 1–2 line tweak so the
   copy is unique.
4. Create the post: paste text, attach the image from
   `01-marketing/assets/post-images/`, preview, then publish.
5. Copy the post URL. Append one row to the tracking log.
6. Wait at least 4 hours before the next group's post.

## Tracking log

One line per posted (or attempted) post. Keep it in the run's notes; weekly
roll it into the order log's Acquisition Source when partners convert.

```
date | group | variant | image | post_url | status | notes
```

`status` is `posted`, `pending-review`, `removed`, or `blocked`. Anything but
`posted` triggers the stop-condition review.

## Reply duty (same day)

Within a few hours of each post: read comments, reply to every genuine
question, and move interested people to inbox with a tasting invite — never a
hard sell. Log which group each prospect came from.

## Scheduling it

Schedule the agent to run **once daily ~10:30** (before the midday window) with
this doc + `02-partner-outreach-posts.md` + the image folder as its context.
The agent decides nothing about offer terms — the rate stays
"khoảng 10%, thương lượng" until James locks it in (see open decisions in
`02-partner-outreach-posts.md`).
