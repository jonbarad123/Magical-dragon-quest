# Kimberly & Lorenzo’s Magical Dragon Quest — v1.1 (WebP-only)

Small, fast build using WebP images only. Human‑readable HTML/CSS/JS. Full PWA (install + offline).

## Publish on GitHub Pages
1) Create a **public** repo (e.g. `magical-dragon-quest`).
2) Upload **all files** from this folder to the **root** of the repo.
3) Settings → Pages → **Deploy from a branch**, Branch `main`, Folder `/ (root)` → Save.
4) Wait ~1 minute → open: `https://YOUR-USERNAME.github.io/magical-dragon-quest/`

## Install as an App (PWA)
- Android/Chrome: ⋮ → Add to Home screen → Install
- iPhone/Safari: Share → Add to Home Screen → Add

## Narration
- Add MP3 files in `/audio` named after scene keys (e.g., `cover.mp3`). If missing, “Read Aloud” uses calm male TTS.
- Optional: add `audio/pageflip.mp3` for page‑turn sound.

## Edit the Story
- Open `index.html` → edit the `scenes` object (text + choices).
- Replace art by overwriting `.webp` files in `/images` (keep filenames).
