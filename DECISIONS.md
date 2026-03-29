# DECISIONS

## 2026-03-29

### Decision: Keep route names stable for now
- We will preserve existing public routes unless a migration reason is documented.
- Existing alias-style routes (`/operations`, `/agent-hub`, `/workspace`, `/control-center`, `/command-center`) remain intact during the rebuild.

### Decision: Use App Router with thin route files
- Route files should mainly compose feature components and metadata.
- Content and logic move into `content/`, `src/lib/`, and feature folders.

### Decision: Prefer local structured content over a CMS/database
- The site is a public engineering portfolio and does not need a CMS or DB at this stage.
- Prompts and architectures will use typed local registries.
- Docs will use MDX.

### Decision: Server-first architecture
- Keep pages/layouts server-first.
- Add client boundaries only where interactivity is necessary, such as search/filter UI, copy-to-clipboard, or React Flow.

### Decision: Use local typed registries for prompts and architectures
- Prompt and architecture content now lives in `src/lib` typed registries.
- This keeps filtering, detail pages, and future automation straightforward without introducing a CMS.

### Decision: Use MDX for docs only
- Docs are the long-form content surface, so MDX is appropriate there.
- Prompts and architectures stay in typed data structures because they benefit more from metadata-heavy rendering than free-form prose.

### Decision: Keep the visual language restrained
- The site should feel like a productized engineering system, not a flashy template.
- Favor strong spacing, quiet surfaces, and clear hierarchy over decorative effects.

### Decision: Add a generated root OG image now, defer route-specific OG images
- A single strong OG image gives the site a credible share surface immediately.
- Per-route OG assets can be added later once content breadth grows.
