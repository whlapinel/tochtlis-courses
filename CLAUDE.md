# CLAUDE.md — tochtlis-courses

## What this repo is
A math-focused homeschool course for a 13.5-year-old boy, covering June 2026 (approximately 4 weeks, 3 sessions/week). Every session is anchored in a real-world phenomenon; the math emerges from trying to describe or predict it. The repo contains both the course content (Marp slides, markdown) and the Hugo site that publishes it.

## Student profile
- Age: 13.5, homeschooled
- Coding level: some experience (Python basics / simple programs, no data structures yet)
- This month's focus: math-heavy (7th/8th grade coverage), anchored in real-world phenomena

## Course design philosophy
- **Phenomenon-first:** every session opens with a puzzling, counterintuitive question. Never "today we study X" — always "here is something weird; let's figure out why."
- **Interleaved subjects:** rotate between math, CS, physics, and bio/chem week to week. Do NOT block-schedule one subject for many weeks. Progress within each domain is real but not labeled as such.
- **Incremental content creation:** build content week by week, not all at once. The learning plan is the master document; individual week/day slides come later.
- **13.5-year-old tone:** curious and direct. No condescension. Treat him as a junior scientist. Puzzles before explanations.
- **Resource-limited:** physical activities should be optional, not required. Core lessons work on screen.

## Repo structure
```
tochtlis-courses/
├── CLAUDE.md                  # this file
├── learning_plan.md           # master course outline (4 weeks, math-through-phenomena)
├── content/                   # Hugo content (markdown)
│   └── course/
│       ├── _index.md
│       ├── 2026/
│       │   ├── _index.md
│       │   └── june/
│       │       ├── _index.md
│       │       ├── week1/
│       │       │   ├── _index.md        # lists slide links using {{< slide >}} shortcode
│       │       │   ├── .day01.md        # Marp slide source (dot prefix — Hugo ignores it)
│       │       │   ├── .day02.md
│       │       │   └── .day03.md
│       │       └── ...
│       └── ...
├── static/
│   └── slides/                # Marp-compiled HTML (committed, also built in CI)
├── themes/
│   ├── PaperMod/              # git submodule
│   └── marp/
│       └── dracula.css        # Dracula theme for Marp slides
├── layouts/
│   └── shortcodes/
│       └── slide.html         # shortcode: prepends baseURL to slide links
├── hugo.toml                  # Hugo config
├── Taskfile.yml               # task automation
├── package.json               # node deps (@marp-team/marp-cli)
└── .github/
    └── workflows/
        └── hugo.yml           # CI/CD: builds Marp slides then Hugo, deploys to Pages
```

## Content file conventions
Marp slide source files are named `.dayNN.md` (dot prefix) so Hugo ignores them as content pages. Use this frontmatter:
```yaml
---
marp: true
theme: dracula
paginate: true
header: "← [Week N: Title](../../../../course/2026/june/weekN/)"
---
```

The header link uses a relative path (`../../../../course/...`) because slides are served from `/slides/2026/june/weekN/` — an absolute path would miss the `/tochtlis-courses/` baseURL prefix.

Week index files (`weekN/_index.md`) link to compiled slide HTML using the `slide` shortcode:
```markdown
---
title: "Week N: [Title]"
weight: N
---
- {{< slide "2026/june/weekN/day01.html" "Day 1: [Phenomenon]" >}}
```

The `slide` shortcode prepends `{{ .Site.BaseURL }}` to fix the same baseURL issue for Hugo-rendered links.

**All URLs in hugo.toml (menus, buttons) must be relative (no leading slash)** — e.g. `course/` not `/course/` — otherwise the `/tochtlis-courses/` subpath is dropped.

## Marp build
Slides are compiled by `@marp-team/marp-cli` using the Dracula theme. The build script:
```bash
find content/course -name ".day*.md" | while IFS= read -r f; do
  rel="${f#content/course/}"
  dir="static/slides/$(dirname "$rel")"
  mkdir -p "$dir"
  outname=$(basename "$f" .md | sed 's/^\.//').html
  npx @marp-team/marp-cli --html --theme themes/marp/dracula.css --output "$dir/$outname" "$f" </dev/null
done
```

**Important:** `</dev/null` is required. Without it, marp-cli reads the remaining filenames from the find pipe and errors on multiple inputs.

Run locally with: `task marp-build`

## Hugo setup
- **Theme:** PaperMod (git submodule), profile mode enabled (no recent posts on home page)
- **Base URL:** `https://whlapinel.github.io/tochtlis-courses/`
- **Key config:** `markup.goldmark.renderer.unsafe = true` for inline SVG and HTML in slides
- Hugo version: 0.161.1 extended (installed at `/usr/local/bin/hugo` or `~/.local/bin/hugo`)

## Diagrams
Inline SVG is used for geometric diagrams directly in Marp slides. Math renders as SVG automatically via Marp's built-in MathJax — no external scripts needed. Use `$$...$$` for display math, `$...$` for inline.

Open question: a Python SVG generator script would reduce token cost for future diagrams.

## CI/CD
- GitHub Actions deploys to GitHub Pages on push to `main`
- Workflow: builds Marp slides first, then runs Hugo
- Repo is public; GitHub Pages is enabled (Source: GitHub Actions)
- Live site: `https://whlapinel.github.io/tochtlis-courses/`

## Reference repo
- `../whlapinel.github.io` — portfolio Hugo site; reference for hugo.toml, PaperMod config, GitHub Actions workflow

## What has been done
- [x] Repo initialized and public at `https://github.com/whlapinel/tochtlis-courses`
- [x] `learning_plan.md` written (June 2026, 4 weeks, math-through-phenomena)
- [x] Hugo site scaffold (hugo.toml, PaperMod submodule, profile mode home page)
- [x] GitHub Actions workflow (Marp build + Hugo deploy)
- [x] Taskfile (`marp-build`, `serve`, `build`, `update-theme`)
- [x] Dracula Marp theme (`themes/marp/dracula.css`)
- [x] `slide` shortcode for correct baseURL-aware links
- [x] Week 1 all 3 days (shadows & similar triangles)
- [x] GitHub Pages live

## What to do next (when resuming)
1. Add SVG diagram to Day 3 ("See it" slide — ruler trick / similar triangles)
2. Draft Week 2 content (slope & falling things — coordinate plane, rise/run, linear functions)
3. Consider writing a Python SVG generator script for reusable diagram types

## Working style preferences
- Draft first, write files only after approval
- One week of content at a time
- No Co-Authored-By trailers in commit messages
- CLAUDE.md is the source of truth for future sessions
