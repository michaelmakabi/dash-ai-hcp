# DASH × Loren AI HCP — Basecamp Project Plan
**Project name (suggested):** `DASH — Loren AI HCP Launch`
**Status:** Ready to import into Basecamp 4
**Powered by LOREN AI**

> ⚠️ **NOTE:** This Cowork session does not have a Basecamp MCP connector available. This document is structured so that each section maps **1:1 to a Basecamp To-Do List**. To import: create the Basecamp project, then copy each "List" section into a new To-Do List of the same name. Each `- [ ]` line is a single to-do. Do NOT assign owners (per Master Makabi's instruction). Owners will be assigned in the second wave.

> ✅ **Tasks marked [DONE] in this doc have already been executed by Claude in this session — check them off in Basecamp manually after import.**

---

## PROJECT STRUCTURE OVERVIEW

```
DASH — Loren AI HCP Launch
├── 📋 Phase 1 — Brand & Strategy (DONE in this session)
├── 📋 Phase 2 — Sales Script & AI Agent (DONE in this session)
├── 📋 Phase 3 — GitHub & Infrastructure
├── 📋 Phase 4 — Lovable Site Build
├── 📋 Phase 5 — DNS & Hosting (PARTIAL — A record set)
├── 📋 Phase 6 — Loren AI HCP / GoHighLevel build
├── 📋 Phase 7 — Outreach Operations
├── 📋 Phase 8 — Client Presentation & Sign-off
├── 📋 Phase 9 — Launch & QA
└── 📋 Phase 10 — Post-launch Scaling
```

---

## 📋 LIST 1 — Phase 1: Brand & Strategy

- [x] **[DONE]** Deep research on dashday.co + competitive landscape
- [x] **[DONE]** Write Brand Strategy & Positioning doc (file 01)
- [x] **[DONE]** Identify ICP across 9 sub-categories (yoga, pilates, gym, spa, ice cream, escape room, paint & sip, boutique wellness, PT)
- [x] **[DONE]** Define unique mechanism: "Celebration Proximity Marketing"
- [x] **[DONE]** Build Hormozi-grade value stack with $1,584/mo perceived value
- [x] **[DONE]** Define 6 emotional buying drivers
- [x] **[DONE]** Draft 3 taglines for A/B testing
- [ ] Get Alan's sign-off on brand voice + tagline finalists
- [ ] Decide on color palette: keep boxed-black or add "Celebration Coral" accent
- [ ] Commission professional brand photography (real merchants, no stock)

---

## 📋 LIST 2 — Phase 2: Sales Script & AI Voice Agent

- [x] **[DONE]** Audit Alan Majeski's v1 cold-call script — identify 3 weaknesses
- [x] **[DONE]** Rebuild script in Jeremy Miner NEPQ framework (file 02)
- [x] **[DONE]** Write 7-stage NEPQ outbound flow
- [x] **[DONE]** Write 12 NEPQ-style objection handlers
- [x] **[DONE]** Write inbound receptionist script
- [x] **[DONE]** Write voicemail + 3-text follow-up sequence
- [x] **[DONE]** Define script success metrics + tracking
- [x] **[DONE]** Write Retell AI agent system prompt (file 03)
- [x] **[DONE]** Write Retell config JSON
- [x] **[DONE]** Design cost model: ~$25 per paying merchant acquired
- [x] **[DONE]** Design A/B test plan for first 2,000 calls
- [ ] Provision Retell AI workspace for DASH
- [ ] Provision ElevenLabs voice IDs (test both Bella & Adam)
- [ ] Set up Twilio number for outbound caller ID
- [ ] Deploy agent to Retell staging
- [ ] Run 20 internal test calls (Mike + Julio + Alan)
- [ ] Run 100 calibration calls to live numbers
- [ ] Analyze post-call data, tune NEPQ stage timing
- [ ] Promote agent to production
- [ ] Set up GoHighLevel webhook for call outcomes
- [ ] Configure GHL post-call workflows (booked/callback/declined/vm)

---

## 📋 LIST 3 — Phase 3: GitHub Infrastructure

- [ ] **[DONE-IF-EXECUTED]** Create repo `michaelmakabi/dash-ai-hcp` (public)
- [ ] **[DONE-IF-EXECUTED]** README.md with project overview + architecture
- [ ] **[DONE-IF-EXECUTED]** `/frontend` — Lovable site source
- [ ] **[DONE-IF-EXECUTED]** `/backend` — webhook handlers, API integrations
- [ ] **[DONE-IF-EXECUTED]** `/automation` — GHL workflows, Zapier exports
- [ ] **[DONE-IF-EXECUTED]** `/prompts` — Retell + Claude prompt library
- [ ] **[DONE-IF-EXECUTED]** `/agents` — full Retell agent configs
- [ ] **[DONE-IF-EXECUTED]** `/api` — third-party integration docs
- [ ] **[DONE-IF-EXECUTED]** `/docs` — deployment, onboarding, runbooks
- [ ] **[DONE-IF-EXECUTED]** `/branding` — logos, color palette, brand guide
- [ ] **[DONE-IF-EXECUTED]** `/sops` — operational SOPs
- [ ] **[DONE-IF-EXECUTED]** `.env.example` template with all env vars
- [ ] **[DONE-IF-EXECUTED]** `LICENSE` (private/proprietary)
- [ ] **[DONE-IF-EXECUTED]** `.github/workflows` — CI placeholders
- [ ] Invite collaborators: Alan, Julio, Sanjeev, Shalu
- [ ] Set branch protection on `main`
- [ ] Enable Dependabot

---

## 📋 LIST 4 — Phase 4: Lovable Site Build

- [x] **[DONE]** Design single-file premium dark-luxury HTML site (file 06)
- [x] **[DONE]** Hero w/ VSL placeholder + above-fold offer
- [x] **[DONE]** Unique mechanism section ("Celebration Proximity Marketing")
- [x] **[DONE]** Offer stack section ($1,584 stack at $11.99)
- [x] **[DONE]** Social proof section (placeholder, populate after first wins)
- [x] **[DONE]** FAQ section (NEPQ-style answers)
- [x] **[DONE]** Booking funnel CTA
- [x] **[DONE]** "Powered by LOREN AI" global footer
- [ ] Create Lovable project, import HTML
- [ ] Add favicon (SVG + ICO + PNG 16/32/180/512)
- [ ] Add OG social preview image (1200×630)
- [ ] Add full meta tags + JSON-LD
- [ ] Add sitemap.xml + robots.txt
- [ ] **Hide Lovable badge** (mandatory per Makabi SOP)
- [ ] Turn off public remixing
- [ ] Publish to Lovable
- [ ] Connect custom domain (dash.ai-loren.com)
- [ ] Confirm SSL active
- [ ] Test OG preview on Slack, iMessage, Twitter
- [ ] Test mobile responsive on iPhone + Android
- [ ] Record VSL video to embed in hero

---

## 📋 LIST 5 — Phase 5: DNS & Hosting

- [x] **[DONE-IF-EXECUTED]** GoDaddy API: A record `dash.ai-loren.com → 185.158.133.1`
- [ ] Lovable: trigger custom domain verification, retrieve TXT token
- [ ] GoDaddy API: create TXT record `_lovable.dash.ai-loren.com → lovable_verify={token}`
- [ ] Verify domain in Lovable
- [ ] Confirm SSL propagation (within 4 hours)
- [ ] Test all canonical URLs point to the subdomain

---

## 📋 LIST 6 — Phase 6: Loren AI HCP / GoHighLevel Build

- [ ] Create GHL sub-account: "DASH Production"
- [ ] Apply Loren AI HCP base snapshot
- [ ] Configure CRM stages: Cold → Engaged → Demo Booked → Active → Paying → Churned
- [ ] Build automations:
  - [ ] Cold call → outcome → tagged → routed
  - [ ] Missed call → text-back (Loren AI)
  - [ ] New signup → 6-touch onboarding sequence
  - [ ] Day 0/3/7/14/30/60/75/90 nurture
  - [ ] Day 75 conversion pre-email
  - [ ] Day 90 auto-convert or cancel
  - [ ] Day 120/180 win-back sequences
- [ ] Build pipelines: Outreach / Onboarding / Activation
- [ ] Set up smart tags: BySource, ByCategory, ByLocation, ByObjection
- [ ] Set up opportunity scoring rules
- [ ] Connect Twilio sub-account for SMS
- [ ] Connect SMTP for email sending
- [ ] Build merchant-facing dashboard (within GHL or external)
- [ ] Build internal Slack notifications for: new signup, first redemption, churn risk

---

## 📋 LIST 7 — Phase 7: Outreach Operations

- [x] **[DONE]** Enrich NY cold call list (60 HIGH, 9 MED, 23 LOW confidence)
- [x] **[DONE]** Flag 5 closed businesses
- [x] **[DONE]** Flag 2 duplicates
- [x] **[DONE]** Correct 3 mislabeled addresses
- [ ] Trim list to HIGH+MED only for first dial wave (69 businesses)
- [ ] Upload list to GoHighLevel as "NY Cold Wave 1"
- [ ] Configure Retell campaign with list
- [ ] Start with Pilates + Escape Room + Massage/Spa + PT (100% match rate categories)
- [ ] Run first 100 dials in supervised mode (human listens)
- [ ] Review post-call data daily for first week
- [ ] Tune script weekly based on outcomes
- [ ] Scale to 200 dials/day once 60% qualification rate confirmed

---

## 📋 LIST 8 — Phase 8: Client Presentation & Sign-Off

- [x] **[DONE]** Build investor-grade client deck (file 07)
- [ ] Walk Alan through deck on a call
- [ ] Get sign-off on:
  - [ ] Brand strategy
  - [ ] NEPQ script v2
  - [ ] AI agent rollout plan
  - [ ] Pricing / offer stack
  - [ ] Phase 1 budget
- [ ] Document any change requests
- [ ] Update deliverables based on feedback
- [ ] Finalize SOW + statement of intent
- [ ] Countersign + kickoff

---

## 📋 LIST 9 — Phase 9: Launch & QA

- [ ] End-to-end test: cold call → booked → onboarded → first offer live → first redemption
- [ ] Load test: 50 simultaneous Retell calls
- [ ] Compliance review: DNC list scrubbed against cold list
- [ ] Compliance review: TCPA compliance on outbound SMS
- [ ] Privacy: confirm consumer data handling meets NY state requirements
- [ ] Set up monitoring: Retell dashboard, GHL alerts, Slack pings
- [ ] Set up daily KPI digest (auto-email to Alan + Mike)
- [ ] Launch — Wave 1 of 69 dials
- [ ] Wave 1 retro: what worked, what didn't
- [ ] Wave 2: scale to full enriched list

---

## 📋 LIST 10 — Phase 10: Post-Launch Scaling

- [ ] Expand to LA + Miami cold lists
- [ ] Build referral program: "Refer a studio, get a month free"
- [ ] Build merchant-to-merchant intro engine
- [ ] Launch consumer-side push notifications
- [ ] Build white-label / franchise package
- [ ] Document case studies from first 10 success stories
- [ ] Publish case studies to dashday.co
- [ ] Run paid retargeting on case-study video views
- [ ] Add Wizard VSL engine (AI generates merchant offers)
- [ ] Add AI churn predictor
- [ ] Add monthly cohort analytics report

---

## MILESTONES

| Milestone | Target date | Status |
|---|---|---|
| M1 — Brand + Strategy locked | T+3 days | ✅ Strategy delivered |
| M2 — AI agent live in staging | T+10 days | 🟡 Spec delivered |
| M3 — Lovable site live on dash.ai-loren.com | T+7 days | 🟡 HTML delivered |
| M4 — First 100 NEPQ dials run | T+14 days | ⚪ Pending |
| M5 — First 10 paying merchants | T+45 days | ⚪ Pending |
| M6 — 50 paying merchants ($600 MRR) | T+90 days | ⚪ Pending |
| M7 — 200 paying merchants ($2.4K MRR) | T+120 days | ⚪ Pending |

---

## FILES TO ATTACH IN BASECAMP

Attach all of the following to the project's "Docs & Files" section:

1. `01_DASH_Brand_Strategy.md`
2. `02_DASH_Sales_Script_NEPQ_v2.md`
3. `03_DASH_AI_Agent_Spec.md`
4. `04_DASH_Basecamp_Project_Plan.md` (this file)
5. `05_DASH_Automation_Map.md`
6. `06_DASH_Site_dash-ai-loren-com.html`
7. `07_DASH_Client_Presentation.pptx`
8. `08_DASH_System_Architecture.md`
9. `DASH_NY_Cold_Call_List_ENRICHED.csv`
10. `DASH_enrichment_summary.md`
11. Original DASH Outbound Sales Script (Alan's v1) — for archival reference
12. Original DASH NY Cold Call List (raw) — for archival reference

---

**End of Basecamp plan. Next: Lovable site + presentation deck.**
