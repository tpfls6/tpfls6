# Graph Report - tpfls6  (2026-10-23)

## Corpus Check
- 76 files · ~1,068,390 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 9, .css 2, .ico 1)

## Summary
- 322 nodes · 644 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `63854c57`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- CaseStudyBody.jsx
- StockMateCase.jsx
- package.json
- site.js
- [slug]/page.js
- ExperienceSection.jsx
- IrisCase.jsx
- JewelryCase.jsx
- compilerOptions
- layout.js
- 박세린 · Serin Park
- verify-overviews.cjs
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `react` - 15 edges
3. `next` - 12 edges
4. `Wash()` - 12 edges
5. `ProjectCover()` - 12 edges
6. `CaseStudyBody()` - 10 edges
7. `getDisplayTitle()` - 10 edges
8. `getViewMeta()` - 9 edges
9. `MoreWorks()` - 8 edges
10. `useView()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `MoreWorks()` --calls--> `getTimelineProjects()`  [EXTRACTED]
  src/components/home/MoreWorks.jsx → src/data/projects.js
- `CaseStudyBody()` --calls--> `getProjectYear()`  [EXTRACTED]
  src/components/projects/CaseStudyBody.jsx → src/data/projects.js
- `ProjectDetailPage()` --calls--> `getMoreCase()`  [EXTRACTED]
  src/app/projects/[slug]/page.js → src/data/moreCases.js
- `ProjectDetailPage()` --calls--> `getProjectBySlug()`  [EXTRACTED]
  src/app/projects/[slug]/page.js → src/data/projects.js
- `MoreWorks()` --calls--> `useView()`  [EXTRACTED]
  src/components/home/MoreWorks.jsx → src/components/layout/RoleProvider.jsx

## Import Cycles
- None detected.

## Communities (14 total, 3 thin omitted)

### Community 0 - "CaseStudyBody.jsx"
Cohesion: 0.12
Nodes (35): MoreWorks(), TONES, RoleProvider(), useRole(), useView(), ViewContext, VIEWS, CaseStudyBody() (+27 more)

### Community 1 - "StockMateCase.jsx"
Cohesion: 0.12
Nodes (24): react, decisions, hero, shots, CaseHero(), WASH_SEED, Close(), Core() (+16 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (33): eslintConfig, dependencies, next, react, react-dom, react-icons, devDependencies, eslint (+25 more)

### Community 3 - "site.js"
Cohesion: 0.10
Nodes (19): ContactSection(), LINKS, FeaturedProjects(), Hero(), HomeNavigation(), StrengthsSection(), ProfileContent(), abilities (+11 more)

### Community 4 - "[slug]/page.js"
Cohesion: 0.09
Nodes (22): ProjectDetailPage(), BlankyCase(), IrisCase(), JewelryCase(), MoreCase(), filters, ProjectGallery(), projects (+14 more)

### Community 5 - "ExperienceSection.jsx"
Cohesion: 0.14
Nodes (17): capabilities, contexts, metadata, CertificatesContent(), byLatest(), dash(), ExperienceSection(), periodKey() (+9 more)

### Community 6 - "IrisCase.jsx"
Cohesion: 0.15
Nodes (15): Close(), Core(), Features(), Flow(), Problems(), Verify(), IRIS_CLOSE, IRIS_CORE (+7 more)

### Community 7 - "JewelryCase.jsx"
Cohesion: 0.14
Nodes (14): Close(), Core(), Features(), Flow(), Problems(), Verify(), JEWELRY_CLOSE, JEWELRY_CORE (+6 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "layout.js"
Cohesion: 0.15
Nodes (9): nextConfig, next, src_app_globals, inter, metadata, mono, Footer(), Header() (+1 more)

### Community 10 - "박세린 · Serin Park"
Cohesion: 0.13
Nodes (14): About Me, Contact, EL EXPO — 손 재활·발달 플랫폼, Feed Coder — 개발자 커뮤니티 플랫폼, Navis — AI 기반 애자일 프로젝트 관리 솔루션, Re-Route — AI 기반 회복탄력성 지원 플랫폼, StockMate — AI 기반 투자 학습 및 모의투자 플랫폼, Tech Stack (+6 more)

## Knowledge Gaps
- **86 isolated node(s):** `{chromium}`, `eslintConfig`, `nextConfig`, `name`, `version` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 115 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `layout.js` to `CaseStudyBody.jsx`, `StockMateCase.jsx`, `package.json`, `site.js`, `[slug]/page.js`, `ExperienceSection.jsx`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Why does `react` connect `StockMateCase.jsx` to `CaseStudyBody.jsx`, `package.json`, `[slug]/page.js`, `IrisCase.jsx`, `JewelryCase.jsx`, `layout.js`?**
  _High betweenness centrality (0.146) - this node is a cross-community bridge._
- **What connects `{chromium}`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _86 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CaseStudyBody.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11818181818181818 - nodes in this community are weakly interconnected._
- **Should `StockMateCase.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11829268292682926 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Should `site.js` be split into smaller, more focused modules?**
  _Cohesion score 0.1032258064516129 - nodes in this community are weakly interconnected._