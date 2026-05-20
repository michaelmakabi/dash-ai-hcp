# DASH — System Architecture Overview
**Document type:** Engineering / Operations
**Powered by LOREN AI**

---

## 1. STACK SUMMARY

| Layer | Component | Provider | Why |
|---|---|---|---|
| **App backend (existing)** | Bubble.io | DASH legacy | Already deployed at dashday.co. No rebuild needed Phase 1. |
| **Marketing site** | Static HTML on Lovable | Lovable | Premium look, fast deploy, hide-badge on |
| **CRM / Pipeline / Workflow** | GoHighLevel sub-account | GoHighLevel | Master Makabi default; white-label ready |
| **AI Voice — outbound + inbound** | Retell AI | Retell | Best-in-class voice agent, post-call analysis hooks |
| **TTS voice** | ElevenLabs | ElevenLabs | Most natural-sounding |
| **LLM brain for voice** | Claude Sonnet 4.6 via webhook | Anthropic | Best at NEPQ judgment + tone control |
| **SMS / Telephony** | Twilio | Twilio | Industry standard |
| **Payments** | Stripe | Stripe | Master Makabi default |
| **Domains / DNS** | GoDaddy API | GoDaddy | Master Makabi default |
| **Outreach SMS/email** | Smartlead + Instantly | Smartlead / Instantly | Master Makabi default for cold |
| **Avatars / Video** | HeyGen | HeyGen | For founder-narrated nurture videos |
| **Memory / Knowledge** | Makabi Memory (MCP) | Internal | Long-term context across sessions |
| **Browser automation** | Playwright | Internal | When needed for Lovable / non-API tasks |

---

## 2. HIGH-LEVEL DIAGRAM

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   ┌─────────────────┐                                                    │
│   │  COLD MERCHANTS │ (enriched NY list, 92 → 69 high-quality)          │
│   └────────┬────────┘                                                    │
│            │                                                              │
│            ▼                                                              │
│   ┌─────────────────┐    NEPQ script v2                                  │
│   │ Retell Outbound │ ◄──────────────────────                            │
│   │  "Reese" Agent  │    + ElevenLabs voice                              │
│   └────────┬────────┘    + Claude Sonnet 4.6                             │
│            │                                                              │
│   ┌────────┴────────────────────────────────────────────┐               │
│   │   POST-CALL WEBHOOK (JSON payload to GHL)            │               │
│   │   { outcome, sentiment, top_objection, pain_quote }  │               │
│   └────────┬────────────────────────────────────────────┘               │
│            │                                                              │
│            ▼                                                              │
│   ┌────────────────────────────────────────────────────┐                │
│   │              GOHIGHLEVEL SUB-ACCOUNT                │                │
│   │                                                      │                │
│   │   Pipeline: Cold → Engaged → Demo Booked → Active   │                │
│   │   Workflows: Onboarding, Nurture, Reactivation      │                │
│   │   Tags: ByCategory, BySource, ByLocation            │                │
│   │   Custom fields: Pain quote, Top objection          │                │
│   └────────┬──────────┬──────────┬──────────┬──────────┘                │
│            │          │          │          │                            │
│            ▼          ▼          ▼          ▼                            │
│       ┌──────┐  ┌──────────┐ ┌──────┐  ┌────────┐                       │
│       │Stripe│  │ Twilio   │ │Slack │  │HeyGen  │                       │
│       │  $   │  │ SMS/Voice│ │alerts│  │ video  │                       │
│       └──────┘  └──────────┘ └──────┘  └────────┘                       │
│                                                                          │
│                                                                          │
│   ┌────────────────────────────────────────────────────┐                │
│   │           DASH.AI-LOREN.COM (Lovable)              │                │
│   │   Hero, mechanism, offer stack, FAQ, CTA, footer   │                │
│   │   Form captures → GHL → Loren AI follow-up call    │                │
│   │   "Powered by LOREN AI" footer                      │                │
│   └────────────────────────────────────────────────────┘                │
│                                                                          │
│   ┌────────────────────────────────────────────────────┐                │
│   │              MAKABI MEMORY (Persistent)             │                │
│   │   Topic: dash_ai_hcp                                │                │
│   │   Stores: brand strategy, scripts, decisions,       │                │
│   │           merchant context, learning loops          │                │
│   └────────────────────────────────────────────────────┘                │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 3. DATA FLOWS

### 3.1 — A merchant going from cold → paying

```
T+0   :  Cold list entry in GHL  →  added to Retell campaign
T+5m  :  Reese calls            →  NEPQ flow runs
T+8m  :  Booked outcome         →  webhook fires
T+8m  :  GHL workflow:
         - SMS confirmation
         - Calendar invite to closer
         - Slack ping to Alan
T+1d  :  Demo call               →  signs up
T+1d  :  Stripe subscription created (trial 90 days)
T+1d  :  Onboarding email burst starts
T+5d  :  First offer goes live   →  appears on DASH consumer side
T+8d  :  First celebrator unlocks→ SMS to merchant
T+89d :  Pre-conversion email
T+90d :  Stripe auto-charges $11.99 (or merchant cancels)
T+91d+:  Retention coach AI runs monthly
```

### 3.2 — Inbound web form

```
Form submit on dash.ai-loren.com
    │
    ▼
GHL contact created with tag "web-inbound"
    │
    ├─► Instant SMS: "Hey, this is DASH. Got your form."
    └─► Retell triggers outbound call within 5 minutes
            │
            ▼
        Inbound version of NEPQ script runs
```

---

## 4. SECURITY & COMPLIANCE

| Concern | Handling |
|---|---|
| **TCPA (SMS)** | Opt-in required for marketing SMS; transactional SMS only otherwise |
| **DNC (Do Not Call)** | NY state DNC list scrub before any cold outbound; weekly refresh |
| **PCI** | Stripe only — DASH never touches card numbers |
| **CCPA/state privacy** | Privacy policy on site; data deletion request workflow in GHL |
| **API key storage** | All credentials in env vars; rotated quarterly; never in repo |
| **GoDaddy keys** | Stored in CLAUDE.md per Makabi standard; production-tier |
| **GitHub PAT** | Classic, repo scope only |

---

## 5. SCALING CONSIDERATIONS

### When DASH hits 500 merchants:
- Move from Bubble.io to Node/Postgres backend (Supabase)
- Add real-time consumer push notifications (Firebase / OneSignal)
- Build native consumer mobile app (React Native)
- Add multi-language support (Spanish first for NY/Miami markets)

### When DASH hits 5,000 merchants:
- Move outbound calling to a dedicated dialer infrastructure (multiple Retell agents in rotation)
- Add white-label / franchise tooling
- Implement merchant-tier pricing ($11.99 / $29 / $79 plans)
- Build merchant API for POS integrations (Square, Toast, Mindbody)

---

## 6. KEY APIS / ENV VARS

```env
# GoHighLevel
GHL_API_KEY=...
GHL_LOCATION_ID=...
GHL_PIPELINE_ID_OUTREACH=...

# Retell
RETELL_API_KEY=...
RETELL_AGENT_ID_OUTBOUND_REESE=...
RETELL_AGENT_ID_INBOUND_RECEPTIONIST=...

# ElevenLabs
ELEVENLABS_API_KEY=...
ELEVENLABS_VOICE_ID_BELLA=EXAVITQu4vr4xnSDxMaL
ELEVENLABS_VOICE_ID_ADAM=pNInz6obpgDQGcFmaJgB

# Stripe
STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
STRIPE_PRICE_ID_DASH_MONTHLY=...

# Twilio
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_NUMBER_DASH_OUTBOUND=...
TWILIO_NUMBER_DASH_INBOUND=...

# GoDaddy (already in CLAUDE.md)
GODADDY_API_KEY=9ETK6jMnrCB_Wr2LJHMNubjhDUFniNEfNi
GODADDY_API_SECRET=RgkfGFRM6wTe5V4WM1etnb

# Anthropic
ANTHROPIC_API_KEY=...

# HeyGen
HEYGEN_API_KEY=...

# Slack
SLACK_WEBHOOK_DASH_WINS=...
SLACK_WEBHOOK_DASH_FRICTION=...
SLACK_WEBHOOK_DASH_OPS=...
```

---

## 7. RECOMMENDED DEPLOYMENT ORDER

1. ✅ Brand strategy + script (done)
2. ✅ Lovable site → dash.ai-loren.com (HTML done; deploy to Lovable next)
3. ✅ GitHub repo (created)
4. ✅ DNS A record (created)
5. ⚪ Lovable custom domain + TXT verification
6. ⚪ GHL sub-account provision + workflows
7. ⚪ Retell agent deploy + 20 internal test calls
8. ⚪ Twilio numbers provision
9. ⚪ Stripe setup
10. ⚪ First 100 production dials → tune
11. ⚪ Scale to full enriched list

---

**End of system architecture.**
