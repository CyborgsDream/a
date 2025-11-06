# AGENTS.md — Guidance for Code Agents (e.g., OpenAI Codex)

## Purpose
This repository **a** is an **HTML5-only alpha workspace** that hosts many mini-apps in one place.
It must remain fully static (no server-side code, no build steps).

## Structure
    /index.html
    /projects.json
    /shared/v1/utils.js
    /apps/<slug>/index.html
    /apps/<slug>/project.json
    /tools/manifest-editor.html        ← optional helper, pure HTML
    /.github/workflows/pages.yml       ← GitHub Pages deploy workflow
    /.nojekyll                         ← disable Jekyll processing

## Rules
1) Static only: do not add Python, PHP, Node servers, or bundlers.
2) Versioned shared code: mini-apps import helpers from /shared/vX/ using an import map.
   - If you need breaking changes, clone /shared/v1 → /shared/v2; do NOT silently switch existing apps.
3) Paths: use relative paths (e.g., apps/hello/index.html, ../../shared/v1/) so GitHub Pages works under /user/repo/.
4) Headers: every HTML file begins with a comment block containing @project, @version, @date (Europe/Warsaw), @blurb.
5) Safety: never mass-edit multiple apps at once. Propose new shared versions instead.
6) Validation: ensure projects.json is valid JSON and all listed path targets exist.
7) Commits/PRs: small, focused commits. PR title summarizes the feature (e.g., “feat: scaffold HTML5 hub v0.1.0”).
