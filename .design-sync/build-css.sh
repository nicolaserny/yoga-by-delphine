#!/usr/bin/env bash
# Reproducible cssEntry build for design-sync.
#
# 1. Compile the design-system Tailwind CSS (tokens + every utility used by the
#    scoped component sources and the authored previews) via the standalone CLI.
# 2. Rewrite the app's absolute `/fonts/...` @font-face urls to a path the
#    converter can resolve relative to this CSS file (../public/fonts), so it
#    copies the woff2 into the bundle's fonts/ and rewrites them to ./fonts/.
set -euo pipefail
cd "$(dirname "$0")/.."
./.ds-sync/node_modules/.bin/tailwindcss \
  -i .design-sync/tailwind-input.css \
  -o .design-sync/tailwind-compiled.css
# absolute /fonts/ -> ../public/fonts/ (resolvable from .design-sync/)
perl -0pi -e 's{url\("/fonts/}{url("../public/fonts/}g' .design-sync/tailwind-compiled.css
echo "wrote .design-sync/tailwind-compiled.css"
