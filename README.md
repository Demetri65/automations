# Automations

Public Next.js site for prompts, agentic architectures, and documentation.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Pages
- `/`
- `/prompts`
- `/architectures`
- `/docs`

## Vercel setup
1. Import this repo into Vercel
2. Framework preset: Next.js
3. Deploy
4. Add custom domain: `automations.demetri-sebastian-lopez.com`
5. In DNS, point the domain/subdomain where Vercel tells you
6. Re-deploy if needed after DNS propagates

## Notes
- Metadata base is already set for the target domain
- Good next step: replace placeholder page content with real prompt and architecture content
