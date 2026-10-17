# WiseBlock — hosting

Deployed on Freebuff Sites (Cloudflare Workers + static assets).

## Live URL

- **Preview (test):** https://site-e08fca99294e41dea587ab85831078d8.freebuff.page
- Production: not deployed yet

## Project IDs

| Field | Value |
| --- | --- |
| Site ID | `8f3a2c1e-5b7d-4a96-b2e4-7c1d9f0a3b58` |
| Preview environment ID | `e08fca99-294e-41de-a587-ab85831078d8` |
| Production environment ID | `d48a4346-4b30-4d96-a401-4fec2d8e61bc` |

## How it is served

The app is a static, hash-routed Vite build, so there is no backend, database or
secret to configure.

- `worker.js` — Worker entrypoint; forwards every request to `env.ASSETS`.
- `deploy.manifest.json` — deploy manifest; uploads `dist/` with `spa: true`.
- `wrangler.toml` — mirrors the same Worker + asset config for local workerd testing.

## Redeploying

```bash
npm run build                     # regenerate dist/
npx wrangler dev --local --port 8788   # optional: verify in workerd first
# then deploy dist/ via the Sites deploy tool with a fresh requestId
```

Only `dist/` is uploaded — never `src/`, `node_modules/`, or logs.
