# CLAUDE.md — tochtlis-courses

## What this repo is
A STEM homeschool course for a 13.5-year-old boy, spanning the remainder of calendar year 2026 (May–December). The repo contains both the course content (Marp slides, markdown) and the Hugo site that publishes it.

## Student profile
- Age: 13.5, homeschooled
- Coding level: some experience (Python basics / simple programs, no data structures yet)
- Subjects: all four — Math, CS, Physics/Engineering, Biology/Chemistry

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
│       ├── phase1/
│       │   ├── _index.md
│       │   ├── week1/
│       │   │   ├── _index.md
│       │   │   ├── day01.md   # Marp slide source
│       │   │   └── ...
│       │   └── ...
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
Marp slide source files (`dayNN.md`) use this frontmatter:
```yaml
---
marp: true
theme: default
paginate: true
header: "← [Week N: Title](/course/phaseN/weekN/)"
---
```

Week index files (`weekN/_index.md`) list links to the day slide HTML files:
```markdown
---
title: "Phase N Week N: [Title]"
weight: N
---
- [Day 1: [Phenomenon]](/slides/phaseN/weekN/day01.html)
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
- [x] `learning_plan.md` written (32 weeks, 4 phases, phenomenon-anchored)
- [ ] Hugo site scaffold (hugo.toml, theme submodule, layouts)
- [ ] GitHub Actions workflow
- [ ] Taskfile (marp build + hugo serve tasks)
- [ ] First week of content (Phase 1, Week 1: snowflakes)

## What to do next (when resuming)
1. Scaffold the Hugo site: `hugo new site . --force`, add PaperMod submodule, write `hugo.toml`
2. Copy `.github/workflows/hugo.yml` from portfolio, adjust `baseURL`
3. Write `Taskfile.yml` with `marp-build` and `serve` tasks
4. Start Phase 1 Week 1 content (`content/course/phase1/week1/`)

## Working style preferences (captured from session)
- Be incremental — draft first, write files only after approval
- Don't generate entire phases of content at once; do one week at a time
- CLAUDE.md is the source of truth for future sessions on other machines
