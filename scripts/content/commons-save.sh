#!/usr/bin/env bash
# Saves a free photo from Wikimedia Commons (960 px thumbnail) into
# content/<course>/assets/photos/<name>.jpg and records its credit.
#   scripts/content/commons-save.sh english-a1 greet-wave "File:Child waving-Rwanda.jpg" "CC BY-SA 4.0" "Matthew Guitguit"
set -euo pipefail
course=$1 name=$2 title=$3 license=$4 author=$5
case "$license" in CC0*|"Public domain"*|PD*|"CC BY "*|"CC BY-SA "*) ;; *) echo "Not a free licence: $license" >&2; exit 1;; esac
file=${title#File:}; file=${file// /_}
md5=$(printf '%s' "$file" | md5sum | cut -c1-32)
enc=$(python3 -I -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1]))' "$file")
dir="content/$course/assets/photos"; mkdir -p "$dir"
out="$dir/$name.jpg"
for i in 1 2 3 4 5 6; do
  code=$(curl -s -m 60 -A "LinguaRoomCourseBuilder/1.0 (educational course images)" -o "$out" -w "%{http_code}" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/${md5:0:1}/${md5:0:2}/$enc/960px-$enc")
  [ "$code" = 200 ] && break
  sleep 15
done
[ "$code" = 200 ] || { rm -f "$out"; echo "Download failed: HTTP $code" >&2; exit 1; }
python3 -I - "$dir/credits.json" "$name.jpg" "$title" "$author" "$license" <<'PY'
import json, sys, urllib.parse
path, key, title, author, license = sys.argv[1:]
try: credits = json.load(open(path))
except FileNotFoundError: credits = {}
credits[key] = {"title": title, "author": author, "license": license,
  "source": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(title.replace(" ", "_"))}
json.dump(credits, open(path, "w"), indent=2, ensure_ascii=False); open(path, "a").write("\n")
PY
echo "✓ photos/$name.jpg — $author, $license"
