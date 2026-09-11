# tools/tiktok

Scripts behind `01-marketing/01-tiktok-content-system.md`. **Read §0 and §7 there first** — the content system is deliberately mostly manual, because filming is the bottleneck and the TikTok in-app editor is where reach comes from.

| File | What it does | Status |
|---|---|---|
| `prep-clips.sh` | Crops/scales a folder of raw phone clips and photos to 1080×1920 (9:16). No text, no music — those go on in the app | ✅ logic tested; needs `brew install ffmpeg` |
| `upload-draft.mjs` | Optional: pushes one video into the TikTok app inbox as a draft via the Content Posting API | ⚠️ **untested** — no credentials exist. Reference implementation |
| `.env.example` | Credentials template for `upload-draft.mjs` | — |

## The normal loop

```bash
/tiktok-post                            # Claude Code writes today's spec
# ...film it on a phone, 10 minutes, AirDrop into assets/tiktok-raw/
tools/tiktok/prep-clips.sh assets/tiktok-raw
# ...AirDrop assets/tiktok-raw/prepped/ back, post from the TikTok app
```

`assets/tiktok-raw/` is git-ignored. **Raw footage must never be committed** — this repo is documents.

## About `upload-draft.mjs`

It exists so the option is documented, not because it's recommended. Before using it, know:

- It needs a **registered TikTok developer app** — a paperwork surface against a business that decided to stay informal (root `README.md`, Legal)
- **Until that app passes TikTok's audit**, content *posted by* the client is forced to `SELF_ONLY` and capped at 5 users / 24h. The inbox-draft path avoids that only because a human publishes it in the app — the same manual step AirDrop already involves
- Uploading a finished file discourages the in-app editor, and trending sounds + auto-captions are where a local shop's reach comes from
- It has never been run. Verify every endpoint against https://developers.tiktok.com/doc/content-posting-api-get-started/ before relying on it
