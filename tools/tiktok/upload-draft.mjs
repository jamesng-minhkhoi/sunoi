#!/usr/bin/env node
/**
 * SUNOI — push a video into the TikTok app's inbox as a DRAFT.
 *
 * ⚠️ This is the OPTIONAL path. Read §7 of
 * `01-marketing/01-tiktok-content-system.md` before using it — AirDrop does
 * the same job with no developer app, no OAuth, and no paperwork trail.
 *
 * ⚠️ NOT TESTED — no SUNOI developer credentials exist yet. Treat as a
 * reference implementation to verify against TikTok's docs before trusting.
 *
 * Uses the `video.upload` scope (inbox draft). You still finish and publish
 * the post in the TikTok app, which is what keeps it a normal public post:
 * content *posted by* an unaudited API client is forced to SELF_ONLY.
 *
 * Usage: node tools/tiktok/upload-draft.mjs <file.mp4> ["title"]
 */

import { readFile, stat } from 'node:fs/promises';
import { basename } from 'node:path';

const API = 'https://open.tiktokapis.com/v2';

const need = (k) => {
  const v = process.env[k];
  if (!v) { console.error(`Missing ${k} — see tools/tiktok/.env.example`); process.exit(1); }
  return v;
};

/** Exchange the long-lived refresh token for a fresh access token. */
async function accessToken() {
  const res = await fetch(`${API}/oauth/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_key: need('TIKTOK_CLIENT_KEY'),
      client_secret: need('TIKTOK_CLIENT_SECRET'),
      grant_type: 'refresh_token',
      refresh_token: need('TIKTOK_REFRESH_TOKEN'),
    }),
  });
  const json = await res.json();
  if (!res.ok || !json.access_token) throw new Error(`token refresh failed: ${JSON.stringify(json)}`);
  // TikTok rotates the refresh token — persist json.refresh_token if you automate this.
  return json.access_token;
}

async function main() {
  const file = process.argv[2];
  const title = process.argv[3] ?? basename(file ?? '', '.mp4');
  if (!file) { console.error('Usage: node tools/tiktok/upload-draft.mjs <file.mp4> ["title"]'); process.exit(1); }

  const { size } = await stat(file);
  const token = await accessToken();

  // 1. init — single chunk (fine for anything under ~64MB, i.e. every phone clip)
  const init = await fetch(`${API}/post/publish/inbox/video/init/`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      source_info: { source: 'FILE_UPLOAD', video_size: size, chunk_size: size, total_chunk_count: 1 },
      post_info: { title },
    }),
  });
  const initJson = await init.json();
  const upload_url = initJson?.data?.upload_url;
  if (!upload_url) throw new Error(`init failed: ${JSON.stringify(initJson)}`);

  // 2. upload the bytes
  const put = await fetch(upload_url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Length': String(size),
      'Content-Range': `bytes 0-${size - 1}/${size}`,
    },
    body: await readFile(file),
  });
  if (!put.ok) throw new Error(`upload failed: ${put.status} ${await put.text()}`);

  console.log(`✓ ${basename(file)} → TikTok inbox (publish_id ${initJson.data.publish_id})`);
  console.log('  Open TikTok → notifications → finish the post there.');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
