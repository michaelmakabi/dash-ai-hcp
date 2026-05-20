# SOP: Deploying a Lovable Project to an ai-loren.com Subdomain

> Master Makabi standard subdomain deployment checklist. Apply to every new Lovable project.

## Prerequisites
- Lovable project created
- Code/HTML uploaded
- GoDaddy API access (in CLAUDE.md)
- Base domain `ai-loren.com` (Lovable IP = `185.158.133.1`)

## Steps

1. **Create branded favicon** (SVG + ICO + PNG 16/32/180/512)
2. **Create OG social preview image** (1200×630)
3. **Update index.html:**
   - Full meta tags (description, robots)
   - Open Graph + Twitter Card tags
   - JSON-LD structured data
   - Favicon links + web manifest
4. **Create sitemap.xml + robots.txt** with sitemap directive
5. **Lovable → Publish → Add custom domain** → copy verification token
6. **GoDaddy API:**
   - `A` record: `{subdomain}.ai-loren.com → 185.158.133.1` (TTL 600)
   - `TXT` record: `_lovable.{subdomain}.ai-loren.com → lovable_verify={token}`
7. **Lovable: verify domain** → confirm SSL active
8. **Update canonical + OG URLs** to point to the new subdomain
9. **Hide Lovable badge:** Project Settings → "Hide Lovable badge" → ON (MANDATORY — no "Edit with Lovable" watermark ever)
10. **Public remixing:** OFF for client-facing work
11. **Push + publish**
12. **Verify live site** on subdomain + test OG preview in Slack, iMessage, Twitter

## For DASH specifically

- Subdomain: `dash.ai-loren.com`
- A record: ✅ Created `dash → 185.158.133.1`
- TXT verification: ⚪ Pending Lovable token
- HTML: ✅ `frontend/index.html`
- Footer: ✅ "Powered by LOREN AI" present
- Lovable badge: ⚪ Toggle off after first publish
