# Commit Convention

This project follows the **[Conventional Commits](https://www.conventionalcommits.org/)** standard.

---

## Language Standard

**CRITICAL RULE:** All commit messages (type, scope, description, and body) **MUST be written in English**. 
Do not use Portuguese or any other language for commit messages or branch names.

---

## Structure

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

- **type**: required — the category of the change (see table below)
- **scope**: optional — the area or component affected (e.g., `navbar`, `auth`, `docker`)
- **description**: required — short summary in imperative mood, all lowercase, no ending period
- **body**: optional — detailed motivation and context for the change
- **footer**: optional — references to issues/PRs or breaking changes

---

## Commit Types

| Type       | When to use |
|------------|-------------|
| `feat`     | A new user-facing feature |
| `fix`      | A bug fix |
| `hotfix`   | An urgent production bug fix |
| `style`    | Visual styling, CSS changes, formatting (no logic changes) |
| `refactor` | Code refactoring without changing external behavior |
| `perf`     | Performance improvements |
| `test`     | Adding or updating automated tests |
| `docs`     | Documentation updates (README, comments, changelogs) |
| `chore`    | Routine maintenance tasks, dependency updates, scripts |
| `build`    | Changes affecting build systems or external dependencies |
| `ci`       | CI/CD configuration (GitHub Actions, Dockerfiles, workflows) |
| `revert`   | Reverting a previous commit |
| `wip`      | Work in progress (avoid on main/develop branches) |
| `init`     | Initial project or module setup |
| `security` | Security vulnerability patches |
| `i18n`     | Internationalization and translation updates |
| `a11y`     | Accessibility improvements |
| `db`       | Database changes (migrations, seeders, schema updates) |
| `config`   | Changes to configuration files |
| `infra`    | Infrastructure updates (Docker, Kubernetes, Nginx, cloud setups) |

---

## Examples

```bash
# Feature
feat(navbar): add smooth scroll on nav click

# Bug fix
fix(skills): remove blurred background overlay from section

# Urgent hotfix
hotfix(auth): fix token expiry not being checked on refresh

# Style / Visual
style(hero): adjust heading font size on mobile

# Refactor
refactor(AppDesktop): extract motion slice into composable

# Performance
perf(images): lazy load project thumbnails

# Tests
test(useMotionSlice): add unit test for intersection observer

# Documentation
docs(readme): add dev setup instructions

# Maintenance / Chore
chore(deps): bump vite from 5.0 to 5.4

# Build
build(docker): add multi-stage build to frontend image

# CI/CD
ci(github-actions): add lint check on pull request

# Revert
revert: feat(navbar): add smooth scroll on nav click

# Database
db: add migration for users table

# Security
security(auth): sanitize user input before query execution

# Accessibility
a11y(navbar): add aria-label to social icon links

# Internationalization
i18n(hero): add EN translation for hero section

# Infrastructure
infra(docker): switch frontend container to node:22-alpine

# Configuration
config(vite): add path aliases for src directory
```

---

## Breaking Changes

For changes that break backward compatibility, append `!` right after the type/scope or use `BREAKING CHANGE:` in the footer:

```bash
# Using ! in the header
feat(api)!: rename /user endpoint to /profile

# Using footer
feat(auth): migrate to JWT-based authentication

BREAKING CHANGE: sessions are no longer stored server-side.
Clients must update to send Bearer token in Authorization header.
```

---

## Rules & Checklist

- Always write commit messages strictly in **English**.
- Use the **imperative mood** in the description: `add`, `fix`, `remove`, `update` — not `added`, `fixes`, `removing`.
- Keep the first line (header) under **72 characters**.
- Write the scope in **lowercase**.
- Do **not** end the description with a period (`.`).
- Do **not** commit unrelated changes together in a single commit.
- Avoid `wip` commits on shared branches (`main`, `develop`).

---

## Branch Naming Convention

All branch names must also be written in English using lowercase and hyphens:

| Pattern                  | Example                           |
|--------------------------|-----------------------------------|
| `feat/<description>`     | `feat/smooth-scroll-navbar`       |
| `fix/<description>`      | `fix/skills-blur-background`      |
| `hotfix/<description>`   | `hotfix/token-expiry-check`       |
| `chore/<description>`    | `chore/update-vite-version`       |
| `refactor/<description>` | `refactor/motion-slice-composable`|
| `docs/<description>`     | `docs/readme-dev-setup`           |
| `release/<version>`      | `release/1.2.0`                   |
