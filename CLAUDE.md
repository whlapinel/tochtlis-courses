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

## Repo structure (planned — in progress)
```
tochtlis-courses/
├── CLAUDE.md                  # this file
├── learning_plan.md           # master course outline (32 weeks, 4 phases)
├── content/                   # Hugo content (markdown)
│   └── course/
│       ├── _index.md
│       ├── 2026/
│       │   ├── _index.md
│       │   └── june/
│       │       ├── _index.md
│       │       ├── week1/
│       │       │   ├── _index.md
│       │       │   ├── day01.md   # Marp slide source
│       │       │   └── ...
│       │       └── ...
│       └── ...
├── static/                    # Hugo static files
│   └── slides/                # Marp-generated HTML (gitignored or generated in CI)
├── hugo.toml                  # Hugo config
├── themes/
│   └── PaperMod/              # git submodule
├── .github/
│   └── workflows/
│       └── hugo.yml           # CI/CD to GitHub Pages
├── Taskfile.yml               # task automation (marp build, hugo serve, etc.)
└── package.json               # node deps (Tailwind CSS)
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

The header link uses a relative path (`../../../../course/...`) because slides are served from `/slides/2026/june/weekN/` and an absolute path would miss the `/tochtlis-courses/` baseURL prefix.

Week index files (`weekN/_index.md`) link to compiled slide HTML using the `slide` shortcode:
```markdown
---
title: "Week N: [Title]"
weight: N
---
- {{< slide "2026/june/weekN/day01.html" "Day 1: [Phenomenon]" >}}
```

## Hugo setup
- **Theme:** PaperMod (git submodule at `themes/PaperMod/`)
- **Base URL:** will be GitHub Pages — `https://whlapinel.github.io/tochtlis-courses` (confirm before first deploy)
- **Key config:** `markup.goldmark.renderer.unsafe = true` for embedded HTML in markdown
- **Reference config:** `../personal_projects/portfolio_hugo/portfolio/hugo.toml`

## CI/CD
- GitHub Actions deploys to GitHub Pages on push to `main`
- Reference workflow: `../personal_projects/portfolio_hugo/portfolio/.github/workflows/hugo.yml`
- Hugo version used in that workflow: `0.146.0` (use same)
- Marp HTML generation: either pre-built and committed to `static/slides/`, or generated in CI before Hugo build

## Key reference repos (on this machine)
- `../mob_learning/secure-comms/` — content structure model (phase → week → day, Marp slides)
- `../personal_projects/portfolio_hugo/portfolio/` — Hugo config, GitHub Actions, Taskfile, PaperMod theme

## What has been done
- [x] Repo initialized at `https://github.com/whlapinel/tochtlis-courses`
- [x] `learning_plan.md` written (June 2026, 4 weeks, math-through-phenomena)
- [ ] Hugo site scaffold (hugo.toml, theme submodule, layouts)
- [ ] GitHub Actions workflow
- [ ] Taskfile (marp build + hugo serve tasks)
- [ ] First week of content (Week 1: shadows & similar triangles)

## What to do next (when resuming)
1. Scaffold the Hugo site: `hugo new site . --force`, add PaperMod submodule, write `hugo.toml`
2. Copy `.github/workflows/hugo.yml` from portfolio, adjust `baseURL`
3. Write `Taskfile.yml` with `marp-build` and `serve` tasks
4. Start Phase 1 Week 1 content (`content/course/phase1/week1/`)

## Working style preferences (captured from session)
- Be incremental — draft first, write files only after approval
- Don't generate entire phases of content at once; do one week at a time
- CLAUDE.md is the source of truth for future sessions on other machines
