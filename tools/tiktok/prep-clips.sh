#!/usr/bin/env bash
# SUNOI — prepare raw phone footage for TikTok.
#
# Crops/scales everything in a folder to 1080x1920 (9:16) so horizontal or
# square phone captures don't have to be cropped by hand in the app.
# Deliberately does NOT burn text or add music — both belong in the TikTok
# in-app editor, which is where trending sounds and auto-captions live.
#
# Usage:  tools/tiktok/prep-clips.sh <folder> [max_seconds]
# Output: <folder>/prepped/

set -euo pipefail

SRC="${1:-assets/tiktok-raw}"
MAXSEC="${2:-60}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install it once with:" >&2
  echo "    brew install ffmpeg" >&2
  exit 1
fi

if [ ! -d "$SRC" ]; then
  echo "No such folder: $SRC" >&2
  exit 1
fi

OUT="$SRC/prepped"
mkdir -p "$OUT"

# scale up until it covers 1080x1920, then centre-crop. No letterboxing.
VF="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920"
n=0

shopt -s nullglob nocaseglob
for f in "$SRC"/*.{mp4,mov,m4v,jpg,jpeg,png,heic}; do
  [ -f "$f" ] || continue
  base="$(basename "${f%.*}")"
  case "${f##*.}" in
    [Jj][Pp][Gg]|[Jj][Pp][Ee][Gg]|[Pp][Nn][Gg]|[Hh][Ee][Ii][Cc])
      # stills stay stills -> use TikTok's native photo mode, it outperforms a rendered slideshow
      ffmpeg -loglevel error -y -i "$f" -vf "$VF" "$OUT/${base}.jpg"
      ;;
    *)
      ffmpeg -loglevel error -y -i "$f" -t "$MAXSEC" -vf "$VF" \
        -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p \
        -c:a aac -b:a 128k -movflags +faststart "$OUT/${base}.mp4"
      ;;
  esac
  n=$((n+1))
  echo "  ✓ $base"
done
shopt -u nullglob nocaseglob

if [ "$n" -eq 0 ]; then
  echo "Nothing to do — no video or image files in $SRC"
  exit 0
fi

echo
echo "$n file(s) → $OUT"
echo "AirDrop that folder to the phone, then post from the TikTok app"
echo "(add the trending sound and auto-captions there — that's where the reach is)."
