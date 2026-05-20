# DASH — Full Automation Architecture Map
**Stack:** GoHighLevel + Retell AI + ElevenLabs + Stripe + Twilio + Loren AI orchestrator
**Powered by LOREN AI**

---

## OVERVIEW: The DASH AI Operating System

```
┌────────────────────────────────────────────────────────────────────────┐
│                       THE DASH MERCHANT FUNNEL                          │
│                                                                          │
│   COLD LIST ──► AI Outbound Call ──► Qualified ──► Booked ──► Onboarded │
│                       │                  │           │           │       │
│                       ▼                  ▼           ▼           ▼       │
│              [Retell + Loren AI]   [GHL Pipeline]  [Stripe]  [Live Offer]│
│                                                                          │
│   ◄── AI Reactivation                       AI Retention Coach ──►       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## LAYER 1 — ACQUISITION AUTOMATIONS

### 1.1 — Outbound Cold Call (Loren AI Voice Agent)
| Trigger | Action | Tool |
|---|---|---|
| List uploaded to GHL "NY Cold Wave" | Push first 50 contacts to Retell queue | GHL → Retell webhook |
| Retell completes call | Webhook POST to GHL with outcome JSON | Retell post-call analysis |
| Outcome = "booked" | Move to "Demo Booked" stage, fire confirmation SMS + email | GHL workflow |
| Outcome = "vm" | Trigger SMS sequence Day 0/3/7 | GHL automation |
| Outcome = "callback" | Schedule callback via scheduled-tasks MCP | GHL + scheduler |
| Outcome = "declined" | Add to 90-day reactivation drip | GHL |
| Sentiment < -0.5 | Alert Alan in Slack — high-friction call needs human review | Webhook → Slack |

### 1.2 — Inbound Missed Call Text-Back
| Trigger | Action |
|---|---|
| Missed call to DASH inbound number | Auto-SMS within 60 seconds: "Hey, this is DASH. Missed your call — what's up?" |
| Caller replies | Loren AI conversational bot qualifies + books |
| Bot escalates | Hand-off to human in Slack channel #dash-inbound |

### 1.3 — Form Capture (from dash.ai-loren.com landing)
| Trigger | Action |
|---|---|
| Form submission | Instant SMS confirmation + Loren AI follow-up call within 5 minutes |
| Email captured | Add to email nurture Day 0/1/3/7 sequence |
| High-intent signal (price page viewed 3x) | Priority queue for human closer |

---

## LAYER 2 — QUALIFICATION & BOOKING

### 2.1 — Lead Qualification AI
- Runs on: every inbound conversation (SMS, email, web chat, voice)
- Decision tree:
  - Decision-maker? Y/N
  - Currently on Groupon/Yelp? Y/N
  - Within 5-mile of an existing DASH market? Y/N
  - Category match? Y/N
- Output: Score 0–100, tag in GHL, route accordingly

### 2.2 — Smart Booking
| Trigger | Action |
|---|---|
| Qualification score > 70 | Offer instant booking link (10-min slot) |
| Score 40–70 | Offer 5-min discovery call |
| Score < 40 | Drop into educational nurture sequence |

---

## LAYER 3 — ONBOARDING

### 3.1 — 90-Second Setup Flow
1. Merchant clicks signup link from SMS
2. Pre-filled form (name, business, address)
3. AI offer-generator suggests 3 celebration offer variants
4. Merchant picks one → offer goes live
5. SMS confirmation: "🎉 You're live. First celebrator alert coming this week."

### 3.2 — Day 0–14 Nurture
| Day | Channel | Message |
|---|---|---|
| 0 | SMS | "You're set up. Here's what to expect." |
| 1 | Email | Welcome video from Alan (HeyGen avatar) |
| 3 | SMS | First weekly redemption report preview |
| 7 | Email | Tips: "Most successful DASH offers do X" |
| 14 | SMS | Mid-trial check-in — "How's it going?" |
| 30 | Email | First 30-day numbers + congratulations |
| 60 | Email | Case study from a similar merchant |
| 75 | Email | Pre-conversion: "Your 90 ends in 15 days" |
| 90 | SMS + Email | Auto-convert OR easy cancel link |

---

## LAYER 4 — ACTIVATION & RETENTION

### 4.1 — Activation Triggers
| Event | AI Response |
|---|---|
| First redemption | SMS to merchant: "🎉 Sarah just unlocked your offer! She's coming this Saturday." |
| 3 redemptions in week 1 | "You're in the top 10% of merchants. Want to invite a friend studio?" |
| Zero redemptions after 14 days | AI offer-coach: "Your offer might be too vanilla. Want help rewriting it?" |

### 4.2 — Retention AI Coach
- Runs monthly
- Analyzes merchant's: offer conversion rate, redemption growth, repeat customer %
- Sends personalized SMS recommendation:
  - "Studios like yours that updated their offer copy saw 23% more redemptions. Want me to suggest 3 variants?"
  - "You haven't posted a new offer in 21 days. Top performers post bi-weekly. Want help?"

### 4.3 — Churn Predictor
- ML model on: dashboard logins, redemption velocity, support ticket sentiment
- 30 days before predicted churn → trigger AI "save call"
- Loren AI calls merchant with diagnostic + tailored solution

---

## LAYER 5 — COMMUNITY & GROWTH

### 5.1 — Merchant Referral Engine
- Trigger: Merchant gets 5+ redemptions in a month
- Action: "We'd love to bring in one more studio in your neighborhood. Who should we talk to?"
- Referral closes → both get 1 free month

### 5.2 — Consumer Side Growth
- Push notification to DASH consumer app:
  - "It's your birthday this Saturday — here are 4 places near you with offers"
- Email blast every Sunday: "5 places celebrating your week, near you"
- Word-of-mouth: each celebrator can invite 3 friends → tracked → both get extra perk

### 5.3 — Cross-Merchant Introductions
- AI detects: 2 merchants within 0.5mi, complementary categories (e.g. yoga + smoothie bar)
- Sends to both: "Want a coffee with the studio across the street? Both of you should run a joint celebration package."

---

## LAYER 6 — INTERNAL OPERATIONS AUTOMATIONS

### 6.1 — Daily KPI Digest (Auto-generated)
- 8am ET email to Alan + Mike with:
  - Calls made yesterday + outcomes
  - New merchants signed + activated
  - Redemptions across network
  - Churn flags
  - Top objection of the day
  - 3 recommended next actions

### 6.2 — Slack Notifications
| Channel | Notification |
|---|---|
| #dash-wins | Every new merchant signup, first redemption, 10+ redemption milestone |
| #dash-friction | Sentiment-negative calls, churn risks, support escalations |
| #dash-ops | Daily KPI digest, weekly cohort report, monthly forecast |

### 6.3 — Weekly Cohort Report (AI-generated)
- Cohort by signup week
- Metrics: activation rate, week-2 redemption rate, day-90 conversion, LTV projection
- Auto-emailed Friday morning

---

## LAYER 7 — AI WIZARD VSL SYSTEM

### 7.1 — Offer Generator
For each merchant on signup, Loren AI generates:
- 3 offer headline variants
- 3 supporting body copy variants
- 3 CTA variants
- 1 emotional anchor (e.g. "Make their birthday unforgettable")
- 1 urgency frame (e.g. "This Saturday only")

### 7.2 — VSL Generator
For high-tier merchants (eventually), AI auto-generates:
- 60-second video script
- HeyGen avatar variant
- Background music suggestion
- A/B test variants

### 7.3 — Asset Optimization Loop
- Every offer's redemption rate fed back into the LLM
- Top-performing offer patterns surface as templates
- New merchants see the highest-converting templates first

---

## INFRASTRUCTURE CONNECTIONS

```
                   ┌─────────────────────────────────────────┐
                   │              GoHighLevel                 │
                   │     (CRM, pipelines, automations)        │
                   └──┬───────────────┬─────────────┬─────────┘
                      │               │             │
              webhooks│         APIs  │      tags   │
                      ▼               ▼             ▼
        ┌──────────────────┐  ┌─────────────┐  ┌──────────────┐
        │   Retell AI      │  │   Stripe    │  │   Loren AI   │
        │  (voice agent)   │  │  (payments) │  │  orchestrator│
        └────────┬─────────┘  └──────┬──────┘  └──────┬───────┘
                 │                   │                │
                 ▼                   ▼                ▼
        ┌──────────────────┐  ┌─────────────┐  ┌──────────────┐
        │   ElevenLabs     │  │   Twilio    │  │   Slack      │
        │   (voice)        │  │   (SMS)     │  │   (alerts)   │
        └──────────────────┘  └─────────────┘  └──────────────┘
```

---

**End of automation map. Next: system architecture overview.**
