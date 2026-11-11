# Validated visual baselines

32 references were generated on 2026-11-11 after visual inspection and corrections,
under the user's explicit delegation to Codex to validate the pages and generate
baselines after validation. See [the validation record](../VALIDATION.md).

Environment: Playwright 1.65.0, official noble image, Linux/amd64. The exact reviewed
manifest SHA-256 is recorded in `approvals.json`, along with the PNG hashes.

Do not replace these files to make a failing test pass. Capture a new review,
inspect it, correct any regressions and obtain authorization for intentional
changes before promoting the exact reviewed manifest. Follow the root `AGENTS.md`
and [the visual testing guide](../README.md), then rerun `npm run test:visual`.
