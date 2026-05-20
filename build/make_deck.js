// DASH × Loren AI HCP — Client Presentation Deck
// Dark luxury aesthetic, 16x9, premium feel

const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 × 7.5"
pres.title = "DASH × Loren AI HCP";
pres.author = "Loren AI (Michael Makabi)";
pres.company = "Loren AI";

// ───── Palette ─────
const C = {
  bg: "0A0A0B",
  bg2: "111114",
  bg3: "16161A",
  ink: "F4F4F3",
  ink2: "C8C8C5",
  ink3: "7A7A78",
  accent: "FF5E5B",
  accent_dim: "8B302F",
  gold: "D4B675",
  line: "242428",
};

const SLIDE_W = 13.3;
const SLIDE_H = 7.5;
const MARGIN = 0.6;

// Helpers
const makeShadow = () => ({ type: "outer", blur: 12, offset: 4, color: "000000", opacity: 0.4, angle: 90 });

function addLogo(slide, options = {}) {
  // DASH logo mark - small black D rounded square
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: options.x || 0.5, y: options.y || 0.4, w: 0.45, h: 0.45,
    fill: { color: C.ink }, line: { color: C.ink, width: 0 }, rectRadius: 0.06
  });
  slide.addText("D", {
    x: options.x || 0.5, y: options.y || 0.4, w: 0.45, h: 0.45,
    fontSize: 22, bold: true, color: C.bg, align: "center", valign: "middle",
    fontFace: "Georgia", margin: 0
  });
  slide.addText("DASH", {
    x: (options.x || 0.5) + 0.55, y: options.y || 0.4, w: 1.5, h: 0.45,
    fontSize: 18, bold: true, color: C.ink, fontFace: "Georgia", valign: "middle", margin: 0,
    charSpacing: 1
  });
}

function addFooter(slide, pageNum) {
  // bottom line
  slide.addShape(pres.shapes.LINE, {
    x: MARGIN, y: SLIDE_H - 0.45, w: SLIDE_W - 2*MARGIN, h: 0,
    line: { color: C.line, width: 0.75 }
  });
  slide.addText("Powered by ", {
    x: MARGIN, y: SLIDE_H - 0.4, w: 2.5, h: 0.3,
    fontSize: 9, color: C.ink3, fontFace: "Calibri", valign: "middle", margin: 0
  });
  slide.addText("LOREN AI", {
    x: MARGIN + 0.85, y: SLIDE_H - 0.4, w: 1.5, h: 0.3,
    fontSize: 9, bold: true, color: C.ink2, fontFace: "Calibri", valign: "middle", margin: 0, charSpacing: 2
  });
  slide.addText(`${pageNum}`, {
    x: SLIDE_W - MARGIN - 0.5, y: SLIDE_H - 0.4, w: 0.4, h: 0.3,
    fontSize: 9, color: C.ink3, fontFace: "Calibri", valign: "middle", align: "right", margin: 0
  });
  slide.addText("DASH × Loren AI HCP   ·   Confidential", {
    x: SLIDE_W/2 - 2, y: SLIDE_H - 0.4, w: 4, h: 0.3,
    fontSize: 9, color: C.ink3, fontFace: "Calibri", align: "center", valign: "middle", margin: 0
  });
}

function addSectionTag(slide, text) {
  slide.addText(text, {
    x: MARGIN, y: 1.2, w: 6, h: 0.3,
    fontSize: 10, bold: true, color: C.accent, fontFace: "Calibri",
    charSpacing: 4, margin: 0
  });
}

function darkBackground(slide) {
  slide.background = { color: C.bg };
}

// ════════════════════════════════════════
// SLIDE 1 — TITLE
// ════════════════════════════════════════
let s = pres.addSlide();
darkBackground(s);

// glow blob
s.addShape(pres.shapes.OVAL, {
  x: -3, y: 2, w: 8, h: 8, fill: { color: C.accent, transparency: 88 }, line: { color: C.accent, width: 0 }
});
s.addShape(pres.shapes.OVAL, {
  x: 8, y: -2, w: 7, h: 7, fill: { color: C.gold, transparency: 92 }, line: { color: C.gold, width: 0 }
});

addLogo(s, { x: MARGIN, y: 0.5 });

s.addText("CELEBRATION PROXIMITY MARKETING", {
  x: MARGIN, y: 2.5, w: 8, h: 0.3,
  fontSize: 10, color: C.accent, bold: true, charSpacing: 5, fontFace: "Calibri", margin: 0
});

s.addText([
  { text: "Your neighbors", options: { color: C.ink } },
  { text: " are celebrating.", options: { color: C.ink, breakLine: true } },
  { text: "Be where they ", options: { color: C.ink } },
  { text: "spend.", options: { color: C.accent, italic: true } },
], {
  x: MARGIN, y: 2.95, w: 12, h: 2.4,
  fontSize: 64, bold: true, fontFace: "Georgia", margin: 0,
  paraSpaceAfter: 0
});

s.addText("DASH × Loren AI HCP — Strategic Architecture, AI Implementation & Launch Plan", {
  x: MARGIN, y: 5.6, w: 11, h: 0.4,
  fontSize: 16, color: C.ink2, fontFace: "Calibri", margin: 0
});

s.addText("Prepared for Alan Majeski, Co-founder · DASH (dashday.co)", {
  x: MARGIN, y: 6.05, w: 8, h: 0.3,
  fontSize: 11, color: C.ink3, fontFace: "Calibri", margin: 0
});
s.addText("By Loren AI — Michael Makabi, COO BRiX Tech · May 2026", {
  x: MARGIN, y: 6.35, w: 8, h: 0.3,
  fontSize: 11, color: C.ink3, fontFace: "Calibri", margin: 0
});

addFooter(s, "01");

// ════════════════════════════════════════
// SLIDE 2 — EXECUTIVE SUMMARY
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "EXECUTIVE SUMMARY");

s.addText("What we're building, in one breath.", {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 36, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
});

s.addText([
  { text: "DASH is the anti-Groupon.", options: { bold: true, color: C.ink, breakLine: true } },
  { text: " ", options: { breakLine: true } },
  { text: "Where Groupon trained customers to be discount-hunters, DASH connects neighborhood celebrators (birthdays + anniversaries) with the local studios, salons, and spas within 5 miles of them. No revenue share. No contract. 90 days free. $11.99/month after.", options: { color: C.ink2, breakLine: true } },
  { text: " ", options: { breakLine: true } },
  { text: "This document is the complete Loren AI HCP implementation plan: brand strategy, AI voice agent, NEPQ-rebuilt sales script, automation map, marketing site, and launch playbook — engineered to acquire DASH's first 200 paying merchants in 90 days.", options: { color: C.ink2 } },
], {
  x: MARGIN, y: 2.6, w: 7.5, h: 3.5,
  fontSize: 17, fontFace: "Calibri", margin: 0, lineSpacingMultiple: 1.4
});

// Right callout cards
const callouts = [
  { num: "92", label: "NY merchants in cold list", sub: "60 HIGH confidence enriched" },
  { num: "200", label: "Target merchants in 90 days", sub: "$2,400 MRR floor" },
  { num: "8.6×", label: "Projected return on AI agent cost", sub: "~$25 per paying merchant" },
];
callouts.forEach((c, i) => {
  const yPos = 2.6 + i * 1.3;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 8.6, y: yPos, w: 4.1, h: 1.1, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addText(c.num, {
    x: 8.8, y: yPos + 0.1, w: 1.6, h: 0.95,
    fontSize: 40, bold: true, color: C.accent, fontFace: "Georgia", valign: "middle", margin: 0
  });
  s.addText(c.label, {
    x: 10.45, y: yPos + 0.2, w: 2.2, h: 0.4,
    fontSize: 12, bold: true, color: C.ink, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText(c.sub, {
    x: 10.45, y: yPos + 0.6, w: 2.2, h: 0.4,
    fontSize: 10, color: C.ink3, fontFace: "Calibri", valign: "middle", margin: 0
  });
});

addFooter(s, "02");

// ════════════════════════════════════════
// SLIDE 3 — THE PROBLEM
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "THE PROBLEM");
s.addText([
  { text: "Groupon trained your customers to be ", options: { color: C.ink } },
  { text: "cheap.", options: { color: C.accent, italic: true } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 1.2,
  fontSize: 40, bold: true, fontFace: "Georgia", margin: 0
});

const problems = [
  { n: "01", title: "The Groupon Death Spiral", body: "Discount-hunters arrive once, demand 70% off, leave a 3-star review, never come back. Groupon keeps 30–50% of what's left." },
  { n: "02", title: "Yelp & Meta Don't Filter Intent", body: "$4–$12 per click. The click is just a click. No guarantee of a paying body in your studio." },
  { n: "03", title: "Your Best Customer Is Invisible", body: "The neighbor celebrating a birthday tomorrow has no idea you exist — and you have no way to reach them." },
];
problems.forEach((p, i) => {
  const x = MARGIN + i * 4.05;
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.2, w: 3.9, h: 3.4, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addText(p.n, {
    x: x + 0.3, y: 3.4, w: 3.5, h: 0.9,
    fontSize: 48, bold: true, color: C.accent, fontFace: "Georgia", margin: 0
  });
  s.addText(p.title, {
    x: x + 0.3, y: 4.4, w: 3.5, h: 0.6,
    fontSize: 17, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
  });
  s.addText(p.body, {
    x: x + 0.3, y: 5.1, w: 3.5, h: 1.4,
    fontSize: 12, color: C.ink2, fontFace: "Calibri", margin: 0, paraSpaceAfter: 4
  });
});

addFooter(s, "03");

// ════════════════════════════════════════
// SLIDE 4 — THE MECHANISM
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "THE DASH MECHANISM");
s.addText([
  { text: "We call it ", options: { color: C.ink } },
  { text: "Celebration Proximity Marketing.", options: { color: C.accent, italic: true } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 1,
  fontSize: 34, bold: true, fontFace: "Georgia", margin: 0
});

s.addText("Three signals, fused into one. The combination is the moat.", {
  x: MARGIN, y: 2.7, w: 11, h: 0.4,
  fontSize: 15, color: C.ink2, fontFace: "Calibri", margin: 0
});

const mech = [
  { n: "1", title: "Proximity", body: "5-mile geofence around every merchant. Every match is a neighbor — someone who can return because they live nearby." },
  { n: "2", title: "Life Event", body: "Birthdays. Anniversaries. The moments people will spend on no matter what. Delivered at the moment they're already in spending mode." },
  { n: "3", title: "Active Intent", body: "Celebrators are actively searching for where to celebrate. Your offer arrives at the exact moment of decision." },
];
mech.forEach((m, i) => {
  const y = 3.4 + i * 1.2;
  // Number circle
  s.addShape(pres.shapes.OVAL, {
    x: MARGIN, y: y, w: 0.8, h: 0.8, fill: { color: C.bg2 }, line: { color: C.accent, width: 1 }
  });
  s.addText(m.n, {
    x: MARGIN, y: y, w: 0.8, h: 0.8,
    fontSize: 24, bold: true, color: C.accent, fontFace: "Georgia", align: "center", valign: "middle", margin: 0
  });
  // Title
  s.addText(m.title, {
    x: MARGIN + 1.1, y: y - 0.05, w: 6, h: 0.45,
    fontSize: 19, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
  });
  // Body
  s.addText(m.body, {
    x: MARGIN + 1.1, y: y + 0.4, w: 6, h: 0.8,
    fontSize: 13, color: C.ink2, fontFace: "Calibri", margin: 0
  });
});

// Right side: pin visualization
const pinX = 8.4;
s.addShape(pres.shapes.RECTANGLE, {
  x: pinX, y: 3.4, w: 4.3, h: 3.4, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
});
s.addText("Within 5 miles · this week", {
  x: pinX + 0.3, y: 3.55, w: 4, h: 0.3,
  fontSize: 10, bold: true, color: C.ink3, charSpacing: 2, fontFace: "Calibri", margin: 0
});
const pins = [
  { name: "Sarah, 28 — Birthday Sat", dist: "0.8 mi" },
  { name: "Marco & Priya — 5yr Anniv.", dist: "1.4 mi" },
  { name: "Jasmine, 35 — Birthday Fri", dist: "2.1 mi" },
  { name: "Patel Family — Anniv. dinner", dist: "3.0 mi" },
  { name: "Tyler, 41 — Birthday tonight", dist: "4.6 mi" },
];
pins.forEach((p, i) => {
  const y = 3.95 + i * 0.5;
  s.addShape(pres.shapes.OVAL, {
    x: pinX + 0.3, y: y + 0.13, w: 0.15, h: 0.15, fill: { color: C.accent }, line: { color: C.accent, width: 0 }
  });
  s.addText(p.name, {
    x: pinX + 0.55, y: y, w: 2.8, h: 0.4,
    fontSize: 11, color: C.ink, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText(p.dist, {
    x: pinX + 3.3, y: y, w: 0.9, h: 0.4,
    fontSize: 10, color: C.ink3, fontFace: "Calibri", valign: "middle", align: "right", margin: 0
  });
});

addFooter(s, "04");

// ════════════════════════════════════════
// SLIDE 5 — DASH VS GROUPON
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "THE DIFFERENCE");
s.addText([
  { text: "DASH vs ", options: { color: C.ink } },
  { text: "Groupon", options: { color: C.accent, italic: true } },
  { text: ". Not a feature war.", options: { color: C.ink } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 36, bold: true, fontFace: "Georgia", margin: 0
});

// Comparison table - manual layout for control
const rows = [
  { label: "Customer mindset",   groupon: "Discount-hunter",                dash: "Neighborhood celebrator" },
  { label: "Repeat behavior",    groupon: "One-and-done (under 10%)",       dash: "Repeat-prone (lives nearby)" },
  { label: "Revenue share",      groupon: "30–50% off the top",             dash: "Zero. Flat $11.99/mo" },
  { label: "Contract",           groupon: "Multi-month commitment",         dash: "Cancel anytime" },
  { label: "Targeting signal",   groupon: "Anyone, anywhere, with a coupon",dash: "5-mile + life event + intent" },
  { label: "Merchant control",   groupon: "Groupon sets the offer",         dash: "Merchant posts the offer" },
];

const tableY = 2.85;
const rowH = 0.6;
// header
s.addShape(pres.shapes.RECTANGLE, { x: MARGIN, y: tableY, w: 12.1, h: 0.5, fill: { color: C.bg2 }, line: { color: C.line, width: 0 } });
s.addText("Attribute", { x: MARGIN + 0.2, y: tableY, w: 3.5, h: 0.5, fontSize: 11, bold: true, color: C.ink3, charSpacing: 2, fontFace: "Calibri", valign: "middle", margin: 0 });
s.addText("Groupon", { x: MARGIN + 4, y: tableY, w: 4, h: 0.5, fontSize: 11, bold: true, color: C.ink3, charSpacing: 2, fontFace: "Calibri", valign: "middle", margin: 0 });
s.addText("DASH", { x: MARGIN + 8.2, y: tableY, w: 4, h: 0.5, fontSize: 11, bold: true, color: C.accent, charSpacing: 2, fontFace: "Calibri", valign: "middle", margin: 0 });

rows.forEach((r, i) => {
  const y = tableY + 0.5 + i * rowH;
  // alt row bg
  if (i % 2 === 0) {
    s.addShape(pres.shapes.RECTANGLE, { x: MARGIN, y: y, w: 12.1, h: rowH, fill: { color: C.bg2, transparency: 60 }, line: { color: C.line, width: 0 } });
  }
  s.addText(r.label, { x: MARGIN + 0.2, y: y, w: 3.5, h: rowH, fontSize: 13, color: C.ink, fontFace: "Calibri", valign: "middle", margin: 0 });
  s.addText(r.groupon, { x: MARGIN + 4, y: y, w: 4, h: rowH, fontSize: 13, color: C.ink3, fontFace: "Calibri", valign: "middle", margin: 0 });
  s.addText(r.dash, { x: MARGIN + 8.2, y: y, w: 4, h: rowH, fontSize: 13, bold: true, color: C.ink, fontFace: "Calibri", valign: "middle", margin: 0 });
});

addFooter(s, "05");

// ════════════════════════════════════════
// SLIDE 6 — OFFER STACK
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "THE OFFER STACK");
s.addText([
  { text: "$1,584 in stand-alone value. ", options: { color: C.ink } },
  { text: "$11.99/mo to merchants.", options: { color: C.accent, italic: true } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 30, bold: true, fontFace: "Georgia", margin: 0
});

const stackItems = [
  { item: "5-mile geofenced birthday + anniversary delivery", value: "$497/mo" },
  { item: "Custom merchant landing page on DASH network", value: "$299 setup" },
  { item: "Weekly text report — X people unlocked your offer", value: "$97/mo" },
  { item: "Cross-channel paid amplification — we run ads", value: "$397/mo" },
  { item: "Word-of-mouth flywheel — each celebrator invites 3 friends", value: "$197/mo" },
  { item: "Live merchant dashboard + redemption analytics", value: "$97/mo" },
];
stackItems.forEach((item, i) => {
  const y = 2.85 + i * 0.45;
  s.addText("✓", {
    x: MARGIN, y: y, w: 0.4, h: 0.4,
    fontSize: 14, color: C.accent, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText(item.item, {
    x: MARGIN + 0.4, y: y, w: 5.8, h: 0.4,
    fontSize: 13, color: C.ink2, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText(item.value, {
    x: MARGIN + 6.3, y: y, w: 1.8, h: 0.4,
    fontSize: 13, color: C.ink3, fontFace: "Calibri", valign: "middle", align: "right", margin: 0,
    italic: true
  });
});

// Total line
s.addShape(pres.shapes.LINE, {
  x: MARGIN, y: 5.65, w: 8.1, h: 0, line: { color: C.line, width: 1 }
});
s.addText("TOTAL STAND-ALONE VALUE", {
  x: MARGIN, y: 5.8, w: 4.6, h: 0.4,
  fontSize: 11, bold: true, color: C.ink3, charSpacing: 2, fontFace: "Calibri", valign: "middle", margin: 0
});
s.addText("$1,584+/mo", {
  x: MARGIN + 4.8, y: 5.7, w: 3.0, h: 0.5,
  fontSize: 22, bold: true, color: C.ink, fontFace: "Georgia", align: "right", valign: "middle", margin: 0
});

// Price callout
s.addShape(pres.shapes.RECTANGLE, {
  x: 9.4, y: 2.85, w: 3.3, h: 3.5, fill: { color: C.bg2 }, line: { color: C.accent, width: 1 }
});
s.addText("WHAT THEY PAY", {
  x: 9.4, y: 3.05, w: 3.3, h: 0.3,
  fontSize: 9, bold: true, color: C.accent, charSpacing: 3, fontFace: "Calibri", align: "center", margin: 0
});
s.addText("$0", {
  x: 9.4, y: 3.45, w: 3.3, h: 1.4,
  fontSize: 80, bold: true, color: C.ink, fontFace: "Georgia", align: "center", margin: 0
});
s.addText("for 90 days", {
  x: 9.4, y: 4.85, w: 3.3, h: 0.35,
  fontSize: 14, italic: true, color: C.accent, fontFace: "Georgia", align: "center", margin: 0
});
s.addText("Then $11.99/mo", {
  x: 9.4, y: 5.3, w: 3.3, h: 0.3,
  fontSize: 13, bold: true, color: C.ink2, fontFace: "Calibri", align: "center", margin: 0
});
s.addText("No contract. Cancel anytime.", {
  x: 9.4, y: 5.65, w: 3.3, h: 0.3,
  fontSize: 10, color: C.ink3, fontFace: "Calibri", align: "center", margin: 0
});
s.addText("One repeat celebrator pays for the year.", {
  x: 9.4, y: 5.95, w: 3.3, h: 0.35,
  fontSize: 10, italic: true, color: C.gold, fontFace: "Calibri", align: "center", margin: 0
});

addFooter(s, "06");

// ════════════════════════════════════════
// SLIDE 7 — AI TRANSFORMATION ROADMAP
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "AI TRANSFORMATION ROADMAP");
s.addText([
  { text: "14 AI agents. Three phases. ", options: { color: C.ink } },
  { text: "Built on Loren AI HCP.", options: { color: C.accent, italic: true } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 30, bold: true, fontFace: "Georgia", margin: 0
});

const tiers = [
  {
    title: "TIER 1 — Day One",
    subtitle: "Acquisition flywheel",
    items: [
      "Retell outbound voice agent",
      "AI text-back (missed calls)",
      "AI inbound receptionist",
      "Lead-qualifying chatbot",
      "Onboarding SMS + email burst",
    ],
    color: C.accent
  },
  {
    title: "TIER 2 — Week 2–4",
    subtitle: "Activation + retention",
    items: [
      "AI offer copywriter (3 variants)",
      "Wizard VSL — headline/script gen",
      "AI reactivation campaign",
      "AI retention coach (monthly)",
      "Consumer celebrator notifier",
    ],
    color: C.gold
  },
  {
    title: "TIER 3 — Day 60–90",
    subtitle: "Scale + intelligence",
    items: [
      "AI merchant success agent",
      "AI churn predictor",
      "Cross-merchant referral engine",
      "Monthly cohort analytics auto-pack",
    ],
    color: C.ink2
  },
];
tiers.forEach((t, i) => {
  const x = MARGIN + i * 4.1;
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 2.85, w: 3.9, h: 4, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 2.85, w: 3.9, h: 0.08, fill: { color: t.color }, line: { color: t.color, width: 0 }
  });
  s.addText(t.title, {
    x: x + 0.3, y: 3.05, w: 3.5, h: 0.35,
    fontSize: 11, bold: true, color: t.color, fontFace: "Calibri", charSpacing: 2, margin: 0
  });
  s.addText(t.subtitle, {
    x: x + 0.3, y: 3.4, w: 3.5, h: 0.5,
    fontSize: 18, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
  });
  t.items.forEach((item, j) => {
    const y = 4.05 + j * 0.5;
    s.addText("›", {
      x: x + 0.3, y: y, w: 0.2, h: 0.3,
      fontSize: 13, color: t.color, fontFace: "Calibri", valign: "middle", margin: 0
    });
    s.addText(item, {
      x: x + 0.55, y: y, w: 3.2, h: 0.3,
      fontSize: 12, color: C.ink2, fontFace: "Calibri", valign: "middle", margin: 0
    });
  });
});

addFooter(s, "07");

// ════════════════════════════════════════
// SLIDE 8 — FUNNEL ARCHITECTURE
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "FUNNEL ARCHITECTURE");
s.addText([
  { text: "From cold list to ", options: { color: C.ink } },
  { text: "paying merchant", options: { color: C.accent, italic: true } },
  { text: " — every step automated.", options: { color: C.ink } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 28, bold: true, fontFace: "Georgia", margin: 0
});

const stages = [
  { num: "1", label: "Cold List", sub: "92 enriched merchants" },
  { num: "2", label: "AI Voice Call", sub: "NEPQ Stage 1–7" },
  { num: "3", label: "Booked or Setup", sub: "Live in 2 minutes" },
  { num: "4", label: "Onboarded", sub: "First offer live" },
  { num: "5", label: "Activated", sub: "First celebrator unlocked" },
  { num: "6", label: "Paying", sub: "Day 90 conversion" },
];

// horizontal flow
const flowY = 3.2;
const cardW = 1.85;
const gap = 0.12;
stages.forEach((st, i) => {
  const x = MARGIN + i * (cardW + gap);
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: flowY, w: cardW, h: 2.2, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addShape(pres.shapes.OVAL, {
    x: x + cardW/2 - 0.3, y: flowY + 0.25, w: 0.6, h: 0.6,
    fill: { color: C.bg }, line: { color: C.accent, width: 1.5 }
  });
  s.addText(st.num, {
    x: x + cardW/2 - 0.3, y: flowY + 0.25, w: 0.6, h: 0.6,
    fontSize: 17, bold: true, color: C.accent, fontFace: "Georgia", align: "center", valign: "middle", margin: 0
  });
  s.addText(st.label, {
    x: x + 0.1, y: flowY + 1.05, w: cardW - 0.2, h: 0.4,
    fontSize: 13, bold: true, color: C.ink, fontFace: "Calibri", align: "center", margin: 0
  });
  s.addText(st.sub, {
    x: x + 0.1, y: flowY + 1.5, w: cardW - 0.2, h: 0.6,
    fontSize: 10, color: C.ink3, fontFace: "Calibri", align: "center", margin: 0
  });

  // arrow between
  if (i < stages.length - 1) {
    s.addText("›", {
      x: x + cardW + 0.01, y: flowY + 0.85, w: 0.15, h: 0.5,
      fontSize: 20, bold: true, color: C.accent_dim, fontFace: "Georgia", align: "center", valign: "middle", margin: 0
    });
  }
});

// Conversion metrics row
const metrics = [
  { val: ">12%", label: "Dial → Live conv." },
  { val: ">50%", label: "Live → Qualified" },
  { val: ">30%", label: "Qual → Booked" },
  { val: ">80%", label: "Booked → Activated" },
  { val: ">60%", label: "Activated → Paying" },
];
const metricY = 6.0;
metrics.forEach((m, i) => {
  const x = MARGIN + 0.5 + i * 2.35;
  s.addText(m.val, {
    x: x, y: metricY, w: 2, h: 0.5,
    fontSize: 22, bold: true, color: C.gold, fontFace: "Georgia", align: "center", margin: 0
  });
  s.addText(m.label, {
    x: x, y: metricY + 0.5, w: 2, h: 0.3,
    fontSize: 9, color: C.ink3, fontFace: "Calibri", align: "center", charSpacing: 1, margin: 0
  });
});

addFooter(s, "08");

// ════════════════════════════════════════
// SLIDE 9 — BEFORE / AFTER
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "BEFORE / AFTER");
s.addText("Operating DASH today vs. on the Loren AI HCP.", {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 28, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
});

// Before column
s.addShape(pres.shapes.RECTANGLE, {
  x: MARGIN, y: 2.8, w: 5.9, h: 4.05, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
});
s.addText("BEFORE", {
  x: MARGIN + 0.3, y: 3.0, w: 5.5, h: 0.4,
  fontSize: 11, bold: true, color: C.ink3, charSpacing: 4, fontFace: "Calibri", margin: 0
});
const before = [
  "Alan dials cold by hand, ~30 dials/day",
  "Friendly script — no NEPQ structure",
  "No automated follow-up after voicemail",
  "Onboarding done manually per merchant",
  "No churn prediction, no save calls",
  "Merchant offers written ad-hoc",
  "Zero learning loop from call outcomes",
];
before.forEach((b, i) => {
  s.addText("—", {
    x: MARGIN + 0.3, y: 3.55 + i * 0.42, w: 0.3, h: 0.35,
    fontSize: 14, color: C.ink3, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText(b, {
    x: MARGIN + 0.65, y: 3.55 + i * 0.42, w: 5.1, h: 0.35,
    fontSize: 12, color: C.ink2, fontFace: "Calibri", valign: "middle", margin: 0
  });
});

// After column
s.addShape(pres.shapes.RECTANGLE, {
  x: MARGIN + 6.3, y: 2.8, w: 5.9, h: 4.05, fill: { color: C.bg2 }, line: { color: C.accent, width: 1 }
});
s.addText("AFTER", {
  x: MARGIN + 6.6, y: 3.0, w: 5.5, h: 0.4,
  fontSize: 11, bold: true, color: C.accent, charSpacing: 4, fontFace: "Calibri", margin: 0
});
const after = [
  "Reese (AI) runs 200+ dials/day, 24×7",
  "NEPQ stage flow — prospect sells themselves",
  "Auto VM + 3-text follow-up Day 0/3/7",
  "2-min onboarding from a single SMS link",
  "ML churn predictor + AI save calls",
  "AI offer copywriter — 3 variants per merchant",
  "Every call feeds GHL → tunes next 100 dials",
];
after.forEach((a, i) => {
  s.addText("›", {
    x: MARGIN + 6.6, y: 3.55 + i * 0.42, w: 0.3, h: 0.35,
    fontSize: 14, color: C.accent, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText(a, {
    x: MARGIN + 6.95, y: 3.55 + i * 0.42, w: 5.1, h: 0.35,
    fontSize: 12, color: C.ink, fontFace: "Calibri", valign: "middle", margin: 0
  });
});

addFooter(s, "09");

// ════════════════════════════════════════
// SLIDE 10 — UNIT ECONOMICS
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "UNIT ECONOMICS");
s.addText([
  { text: "Unit math that ", options: { color: C.ink } },
  { text: "compounds", options: { color: C.accent, italic: true } },
  { text: " from week one.", options: { color: C.ink } },
], {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 30, bold: true, fontFace: "Georgia", margin: 0
});

// Three big stats
const stats = [
  { num: "$25", label: "Cost per paying merchant acquired", sub: "Loren AI HCP outbound" },
  { num: "$216", label: "LTV per merchant @ 18mo retention", sub: "$11.99/mo × 18" },
  { num: "8.6×", label: "ROI on AI acquisition spend", sub: "Net of all infrastructure" },
];
stats.forEach((st, i) => {
  const x = MARGIN + i * 4.1;
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 2.9, w: 3.9, h: 2, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addText(st.num, {
    x: x, y: 3.0, w: 3.9, h: 1.1,
    fontSize: 56, bold: true, color: C.accent, fontFace: "Georgia", align: "center", margin: 0
  });
  s.addText(st.label, {
    x: x + 0.3, y: 4.1, w: 3.3, h: 0.4,
    fontSize: 12, bold: true, color: C.ink, fontFace: "Calibri", align: "center", margin: 0
  });
  s.addText(st.sub, {
    x: x + 0.3, y: 4.5, w: 3.3, h: 0.35,
    fontSize: 10, color: C.ink3, fontFace: "Calibri", align: "center", margin: 0
  });
});

// 90-day projection bar
s.addText("90-day projection — NY metro only", {
  x: MARGIN, y: 5.2, w: 8, h: 0.3,
  fontSize: 11, bold: true, color: C.ink3, charSpacing: 2, fontFace: "Calibri", margin: 0
});
const proj = [
  { l: "Day 30", calls: "1,500", booked: "90", paying: "9", mrr: "$108" },
  { l: "Day 60", calls: "4,500", booked: "270", paying: "65", mrr: "$780" },
  { l: "Day 90", calls: "9,000", booked: "540", paying: "200", mrr: "$2,400" },
];
const pY = 5.6;
s.addShape(pres.shapes.RECTANGLE, { x: MARGIN, y: pY, w: 12.1, h: 0.4, fill: { color: C.bg2 }, line: { color: C.line, width: 0 } });
["Phase", "Cumulative dials", "Cumulative booked", "Paying merchants", "MRR"].forEach((h, j) => {
  s.addText(h, {
    x: MARGIN + 0.15 + j * 2.4, y: pY, w: 2.3, h: 0.4,
    fontSize: 10, bold: true, color: C.ink3, charSpacing: 2, fontFace: "Calibri", valign: "middle", margin: 0
  });
});
proj.forEach((row, i) => {
  const y = pY + 0.4 + i * 0.35;
  [row.l, row.calls, row.booked, row.paying, row.mrr].forEach((v, j) => {
    s.addText(v, {
      x: MARGIN + 0.15 + j * 2.4, y: y, w: 2.3, h: 0.35,
      fontSize: 12, color: j === 4 ? C.accent : C.ink, bold: j === 4, fontFace: "Calibri", valign: "middle", margin: 0
    });
  });
});

addFooter(s, "10");

// ════════════════════════════════════════
// SLIDE 11 — 90-DAY LAUNCH ROADMAP
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "90-DAY LAUNCH ROADMAP");
s.addText("From sign-off to 200 paying merchants.", {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 30, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
});

const weeks = [
  { phase: "WEEK 1", title: "Foundation", items: ["Brand sign-off", "Lovable site live", "DNS + SSL", "GHL sub-account provisioned"] },
  { phase: "WEEK 2", title: "Voice Agent", items: ["Retell + ElevenLabs configured", "20 internal test calls", "GHL post-call webhooks", "Slack alerts wired"] },
  { phase: "WEEK 3–4", title: "First Dials", items: ["100 calibration dials", "Script tuning v2.1", "First 10 paying merchants", "Cohort report v1"] },
  { phase: "WEEK 5–8", title: "Scale", items: ["200 dials/day", "Tier 2 AI features deploy", "Activation rate to >80%", "75 paying merchants"] },
  { phase: "WEEK 9–12", title: "Compound", items: ["LA + Miami list seeded", "Tier 3 AI deployed", "Referral engine live", "200 paying merchants"] },
];

const wW = 2.42;
weeks.forEach((w, i) => {
  const x = MARGIN + i * (wW + 0.05);
  // Phase header
  s.addText(w.phase, {
    x: x, y: 2.85, w: wW, h: 0.35,
    fontSize: 10, bold: true, color: C.accent, charSpacing: 3, fontFace: "Calibri", margin: 0
  });
  s.addText(w.title, {
    x: x, y: 3.2, w: wW, h: 0.4,
    fontSize: 16, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
  });
  // Card
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.75, w: wW, h: 3.2, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.75, w: 0.08, h: 3.2, fill: { color: C.accent }, line: { color: C.accent, width: 0 }
  });
  w.items.forEach((item, j) => {
    s.addText("·", {
      x: x + 0.25, y: 3.95 + j * 0.55, w: 0.15, h: 0.4,
      fontSize: 18, color: C.accent, fontFace: "Calibri", valign: "middle", margin: 0
    });
    s.addText(item, {
      x: x + 0.45, y: 3.95 + j * 0.55, w: wW - 0.55, h: 0.5,
      fontSize: 11, color: C.ink2, fontFace: "Calibri", valign: "middle", margin: 0
    });
  });
});

addFooter(s, "11");

// ════════════════════════════════════════
// SLIDE 12 — SCALING ROADMAP (BEYOND 90 DAYS)
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "12-MONTH SCALING ROADMAP");
s.addText("From NY metro to a multi-city network.", {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 30, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
});

const quarters = [
  { q: "Q1", focus: "NY metro launch", merch: "200", mrr: "$2.4K" },
  { q: "Q2", focus: "LA + Miami mirror", merch: "600", mrr: "$7K" },
  { q: "Q3", focus: "Tier-2 AI live, consumer push", merch: "1,500", mrr: "$18K" },
  { q: "Q4", focus: "Franchise / white-label", merch: "3,000", mrr: "$36K" },
];

// Visual timeline
const tlY = 3.6;
const tlW = 11.5;
s.addShape(pres.shapes.LINE, {
  x: MARGIN + 0.5, y: tlY, w: tlW, h: 0,
  line: { color: C.line, width: 2 }
});
quarters.forEach((q, i) => {
  const x = MARGIN + 0.5 + (i / (quarters.length - 1)) * tlW;
  s.addShape(pres.shapes.OVAL, {
    x: x - 0.18, y: tlY - 0.18, w: 0.36, h: 0.36,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 }
  });
  s.addText(q.q, {
    x: x - 0.6, y: tlY - 0.7, w: 1.2, h: 0.4,
    fontSize: 14, bold: true, color: C.ink, fontFace: "Georgia", align: "center", margin: 0
  });
  s.addText(q.focus, {
    x: x - 1.4, y: tlY + 0.4, w: 2.8, h: 0.6,
    fontSize: 11, color: C.ink2, fontFace: "Calibri", align: "center", margin: 0
  });
  s.addText(q.merch + " merchants", {
    x: x - 1.4, y: tlY + 1.05, w: 2.8, h: 0.4,
    fontSize: 11, bold: true, color: C.gold, fontFace: "Calibri", align: "center", margin: 0
  });
  s.addText(q.mrr + " MRR", {
    x: x - 1.4, y: tlY + 1.45, w: 2.8, h: 0.4,
    fontSize: 11, bold: true, color: C.accent, fontFace: "Calibri", align: "center", margin: 0
  });
});

// Bottom note
s.addText([
  { text: "Once the playbook works in NY", options: { color: C.ink, italic: true } },
  { text: " — and we expect first cohort signal at Day 30 — every subsequent city is a 3-week clone job. The AI agent infrastructure is identical. The cold list is the only variable.", options: { color: C.ink2, italic: true } },
], {
  x: MARGIN, y: 6.0, w: 12, h: 0.8,
  fontSize: 12, fontFace: "Calibri", margin: 0
});

addFooter(s, "12");

// ════════════════════════════════════════
// SLIDE 13 — RISKS & MITIGATIONS
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);
addLogo(s);

addSectionTag(s, "RISKS & MITIGATIONS");
s.addText("What could derail us. And how we're already handling it.", {
  x: MARGIN, y: 1.55, w: 12, h: 0.9,
  fontSize: 28, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
});

const risks = [
  { r: "Groupon retaliates with hyperlocal birthday play", m: "Move fast — own the category name 'Celebration Proximity Marketing' before they react." },
  { r: "Merchants don't post offers after onboarding", m: "Loren AI offer-generation autopilot — zero merchant effort. Always-live default offer." },
  { r: "Consumer side never reaches density", m: "Seed from merchant lists. Every merchant brings 200+ existing customers into network." },
  { r: "Churn at Day 90 (free-trial conversion)", m: "Day 75 'value receipt' email + AI save call. Show literal dollars earned during trial." },
  { r: "TCPA/DNC compliance on cold dialing", m: "DNC scrub weekly, transactional-only SMS, full audit trail in GHL." },
];
risks.forEach((rk, i) => {
  const y = 2.85 + i * 0.78;
  s.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN, y: y, w: 12.1, h: 0.7, fill: { color: C.bg2 }, line: { color: C.line, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: MARGIN, y: y, w: 0.08, h: 0.7, fill: { color: C.accent }, line: { color: C.accent, width: 0 }
  });
  s.addText("RISK", {
    x: MARGIN + 0.3, y: y + 0.1, w: 0.7, h: 0.25,
    fontSize: 8, bold: true, color: C.accent, charSpacing: 2, fontFace: "Calibri", margin: 0
  });
  s.addText(rk.r, {
    x: MARGIN + 0.3, y: y + 0.32, w: 5.5, h: 0.35,
    fontSize: 12, color: C.ink, fontFace: "Calibri", valign: "middle", margin: 0
  });
  s.addText("MITIGATION", {
    x: MARGIN + 6.2, y: y + 0.1, w: 1.5, h: 0.25,
    fontSize: 8, bold: true, color: C.gold, charSpacing: 2, fontFace: "Calibri", margin: 0
  });
  s.addText(rk.m, {
    x: MARGIN + 6.2, y: y + 0.32, w: 6, h: 0.35,
    fontSize: 12, color: C.ink2, fontFace: "Calibri", valign: "middle", margin: 0
  });
});

addFooter(s, "13");

// ════════════════════════════════════════
// SLIDE 14 — THE ASK / NEXT STEPS
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);

// glow
s.addShape(pres.shapes.OVAL, {
  x: -3, y: 2, w: 9, h: 9, fill: { color: C.accent, transparency: 86 }, line: { color: C.accent, width: 0 }
});
s.addShape(pres.shapes.OVAL, {
  x: 8, y: -3, w: 8, h: 8, fill: { color: C.gold, transparency: 92 }, line: { color: C.gold, width: 0 }
});

addLogo(s);

s.addText("THE ASK", {
  x: MARGIN, y: 1.3, w: 6, h: 0.4,
  fontSize: 11, bold: true, color: C.accent, charSpacing: 5, fontFace: "Calibri", margin: 0
});

s.addText([
  { text: "Greenlight the build. ", options: { color: C.ink } },
  { text: "We're live in 14 days.", options: { color: C.accent, italic: true } },
], {
  x: MARGIN, y: 1.8, w: 12.5, h: 1.8,
  fontSize: 50, bold: true, fontFace: "Georgia", margin: 0
});

const asks = [
  { num: "1", title: "Sign off on the strategy", body: "Brand voice, NEPQ script v2, AI agent rollout, $11.99 offer structure." },
  { num: "2", title: "Approve the budget", body: "Phase 1 infrastructure (Retell, ElevenLabs, Twilio, GHL) — under $1.5K setup, $400/mo ops." },
  { num: "3", title: "Lock the kickoff date", body: "We're ready to start the build the moment you say go. First production dials in 14 days." },
];
asks.forEach((a, i) => {
  const y = 4 + i * 0.95;
  s.addShape(pres.shapes.OVAL, {
    x: MARGIN, y: y, w: 0.7, h: 0.7, fill: { color: C.bg2 }, line: { color: C.accent, width: 1.5 }
  });
  s.addText(a.num, {
    x: MARGIN, y: y, w: 0.7, h: 0.7,
    fontSize: 22, bold: true, color: C.accent, fontFace: "Georgia", align: "center", valign: "middle", margin: 0
  });
  s.addText(a.title, {
    x: MARGIN + 1, y: y - 0.05, w: 11, h: 0.45,
    fontSize: 19, bold: true, color: C.ink, fontFace: "Georgia", margin: 0
  });
  s.addText(a.body, {
    x: MARGIN + 1, y: y + 0.4, w: 11, h: 0.5,
    fontSize: 13, color: C.ink2, fontFace: "Calibri", margin: 0
  });
});

addFooter(s, "14");

// ════════════════════════════════════════
// FINAL — POWERED BY LOREN AI
// ════════════════════════════════════════
s = pres.addSlide();
darkBackground(s);

s.addText("Powered by", {
  x: 0, y: 3.0, w: SLIDE_W, h: 0.6,
  fontSize: 16, color: C.ink3, fontFace: "Calibri", align: "center", margin: 0, charSpacing: 3
});

s.addText("LOREN AI", {
  x: 0, y: 3.55, w: SLIDE_W, h: 1.2,
  fontSize: 88, bold: true, color: C.ink, fontFace: "Georgia", align: "center", margin: 0, charSpacing: 8
});

s.addShape(pres.shapes.LINE, {
  x: SLIDE_W/2 - 1, y: 4.85, w: 2, h: 0, line: { color: C.accent, width: 2 }
});

s.addText("The AI HCP for category-creating brands.", {
  x: 0, y: 5.05, w: SLIDE_W, h: 0.4,
  fontSize: 15, italic: true, color: C.accent, fontFace: "Georgia", align: "center", margin: 0
});

s.addText("Michael Makabi  ·  mtip@hey.com  ·  ai-loren.com", {
  x: 0, y: 5.7, w: SLIDE_W, h: 0.4,
  fontSize: 11, color: C.ink3, fontFace: "Calibri", align: "center", margin: 0
});

pres.writeFile({ fileName: "/sessions/nifty-exciting-ramanujan/mnt/outputs/07_DASH_Client_Presentation.pptx" })
  .then(f => console.log("Deck saved:", f))