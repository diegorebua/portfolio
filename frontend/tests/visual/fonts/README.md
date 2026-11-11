# Font fixtures

Pinned copies of the fonts already requested by `frontend/index.html`.
Downloaded from Google Fonts on 2026-11-11 using the original CSS2 query:

https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap

`google-fonts.css` preserves the downloaded URLs. The Playwright fixture
intercepts those requests and serves the corresponding local TTF files.
Inter and JetBrains Mono are distributed under the included SIL Open Font
License files, sourced from google/fonts/ofl/inter and ofl/jetbrainsmono.
These assets are test-only and do not change the production font loader.
