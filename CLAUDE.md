# CLAUDE.md

Context for Claude Code sessions working in this repo.

## What this is

A tiny habit tracker built with plain HTML, CSS, and vanilla JavaScript — no
framework, no build step. It exists primarily as a teaching vehicle for
learning Git and GitHub workflows, so the git history matters as much as the code.

## Conventions

- **One feature per branch**, named `feat/<short-name>` (or `<issue-number>-<slug>`
  when the work starts from a GitHub issue).
- **Small, focused commits.** Imperative mood ("Add streak counter", not
  "added streak counter"). The subject line says what; the body says why if it
  isn't obvious.
- Every change lands through a pull request, even solo work.
- Keep `index.html`, `styles.css`, and `app.js` as the only runtime files until
  Chapter 06 introduces tests.
- No dependencies without a clear reason. Chapter 06 adds tests using Node's
  built-in runner (`node --test`) — still zero npm packages.

## Running

Open `index.html` directly, or `python3 -m http.server 8000`.

## Roadmap

See the roadmap checklist in `README.md`.
