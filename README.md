# DASH × Loren AI HCP

> **The neighborhood celebration network for local businesses.**
> Hyperlocal, celebration-triggered customer acquisition platform.

[![Powered by LOREN AI](https://img.shields.io/badge/Powered%20by-LOREN%20AI-FF5E5B?style=for-the-badge)](https://ai-loren.com)
[![Status](https://img.shields.io/badge/status-pre--launch-yellow?style=for-the-badge)]()

---

## What is DASH?

DASH (dashday.co) connects people celebrating birthdays and anniversaries within 5 miles of a local business with offers from that business. No revenue share. No contract. 90 days free, then $11.99/month.

It is the anti-Groupon: instead of training customers to be discount-hunters, DASH trains them to be neighborhood celebrators who come back.

This repository contains the **complete Loren AI HCP implementation** for DASH — including AI voice agents, NEPQ-rebuilt sales scripts, the Lovable marketing site, the GoHighLevel automation map, the system architecture, and the launch playbook.

---

## Repository Structure

```
dash-ai-hcp/
├── README.md                    ← you are here
├── .env.example                 ← all environment variables
├── .gitignore
│
├── frontend/                    ← Lovable site source
│   └── index.html               ← single-file premium site → dash.ai-loren.com
│
├── docs/                        ← strategy + implementation docs
│   ├── 00_INDEX.md
│   ├── 01_brand_strategy.md
│   ├── 02_sales_script_nepq.md
│   ├── 03_ai_agent_spec.md
│   ├── 04_basecamp_plan.md
│   ├── 05_automation_map.md
│   └── 08_system_architecture.md
│
├── agents/                      ← AI agent configurations
│   └── retell_outbound_reese.json
│
├── prompts/                     ← prompt library
│   └── nepq_voice_agent.md
│
├── branding/                    ← brand guide
│   └── brand_guide.md
│
├── data/                        ← enriched data sets
│   └── DASH_NY_Cold_Call_List_ENRICHED.csv  (not in repo for privacy)
│
└── sops/                        ← runbooks
    └── lovable_subdomain_deploy.md
```

---

## Quick Links

- 🌐 **Marketing site:** [dash.ai-loren.com](https://dash.ai-loren.com)
- 🌐 **Production app:** [dashday.co](https://dashday.co)
- 📋 **Strategy index:** [docs/00_INDEX.md](./docs/00_INDEX.md)
- 🎤 **NEPQ sales script v2:** [docs/02_sales_script_nepq.md](./docs/02_sales_script_nepq.md)
- 🤖 **AI agent spec:** [docs/03_ai_agent_spec.md](./docs/03_ai_agent_spec.md)
- ⚙️ **System architecture:** [docs/08_system_architecture.md](./docs/08_system_architecture.md)

---

## The DASH Mechanism

**Celebration Proximity Marketing.** Three signals, fused into one:

1. **Proximity** — 5-mile geofence
2. **Life event** — birthday or anniversary this week
3. **Active intent** — celebrators are searching for where to spend

Result: a hyperlocal, repeat-prone, high-intent customer delivered to the merchant at the moment of decision.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Existing app | Bubble.io (dashday.co) |
| Marketing site | Lovable on `dash.ai-loren.com` |
| CRM + automations | GoHighLevel |
| Voice AI | Retell AI |
| TTS voice | ElevenLabs |
| LLM brain | Claude Sonnet 4.6 |
| Payments | Stripe |
| SMS / telephony | Twilio |
| Avatars / video | HeyGen |
| Domains | GoDaddy API |

---

## Deployment Status

- ✅ Brand strategy + positioning locked
- ✅ NEPQ sales script v2 (Jeremy Miner framework) — 10x rebuild of Alan Majeski's v1
- ✅ Retell AI agent spec + system prompt + config JSON
- ✅ Lovable site HTML (dark luxury aesthetic)
- ✅ GoDaddy A record `dash.ai-loren.com → 185.158.133.1`
- ✅ Cold call list enriched (60 HIGH / 9 MED / 23 LOW confidence)
- ⚪ Lovable custom domain TXT verification
- ⚪ GoHighLevel sub-account provisioned
- ⚪ Retell agent deployed to production
- ⚪ First 100 production dials

---

## Quick Start — Internal

1. Read `docs/01_brand_strategy.md` for context
2. Read `docs/02_sales_script_nepq.md` for the script
3. Read `docs/08_system_architecture.md` for the full stack
4. Provision env vars from `.env.example`
5. Follow `docs/04_basecamp_plan.md` for project execution order

---

## Contributing

This repository is maintained by Master Makabi (Michael Makabi) and the Loren AI team. Internal only.

| Role | Person |
|---|---|
| Project lead | Michael Makabi |
| DASH founder | Alan Majeski |
| BRiX CEO | Julio Caceres |
| Loren AI ops | Sanjeev, Shalu |

---

**Powered by LOREN AI.**
