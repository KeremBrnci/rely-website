import type {
  PricingComparisonGroup,
  PricingComparisonRow,
} from "@/components/sections/pricing/pricing-comparison-matrix";

function cmpRow(
  id: string,
  feature: string,
  starter: boolean,
  growth: boolean,
): PricingComparisonRow {
  return { id, feature, values: { starter, growth } };
}

const coreRows: PricingComparisonRow[] = [
  cmpRow("cmp-core-1", "Unified subscription ledger & contract history", true, true),
  cmpRow("cmp-core-2", "Customer portal with branded theming", true, true),
  cmpRow("cmp-core-3", "Self-serve plan changes & quantity updates", true, true),
  cmpRow("cmp-core-4", "Trials, coupons, and proration policies", true, true),
  cmpRow("cmp-core-5", "Tax-ready invoicing exports", true, true),
  cmpRow("cmp-core-6", "Standard revenue dashboards (MRR, churn, expansion)", true, true),
  cmpRow("cmp-core-7", "Role-based admin access", false, true),
  cmpRow("cmp-core-8", "Webhook event catalog & retries", false, true),
  cmpRow("cmp-core-9", "Sandbox environment for billing changes", false, true),
  cmpRow("cmp-core-10", "CSV exports & scheduled reporting", true, true),
  cmpRow("cmp-core-11", "Multi-currency list pricing", false, true),
  cmpRow("cmp-core-12", "Usage meters & hybrid billing models", false, true),
];

const billingRows: PricingComparisonRow[] = [
  cmpRow("cmp-bill-1", "Payment routing & dunning workflows", true, true),
  cmpRow("cmp-bill-2", "Automated payment retries with pacing rules", true, true),
  cmpRow("cmp-bill-3", "Credit notes & balance adjustments", true, true),
  cmpRow("cmp-bill-4", "Finance-approved refund workflows", false, true),
  cmpRow("cmp-bill-5", "ASC 606 / IFRS-friendly revenue schedules", false, true),
  cmpRow("cmp-bill-6", "Contract amendments without migration", false, true),
  cmpRow("cmp-bill-7", "Chargeback monitoring hooks", true, true),
  cmpRow("cmp-bill-8", "Bank-transfer & invoice workflows", false, true),
];

const experienceRows: PricingComparisonRow[] = [
  cmpRow("cmp-exp-1", "Lifecycle email triggers", true, true),
  cmpRow("cmp-exp-2", "In-app subscription management surfaces", true, true),
  cmpRow("cmp-exp-3", "Localized checkout copy templates", true, true),
  cmpRow("cmp-exp-4", "SSO for admin console", false, true),
  cmpRow("cmp-exp-5", "Audit trail for subscriber-visible changes", false, true),
  cmpRow("cmp-exp-6", "SLA-backed uptime targets", false, true),
  cmpRow("cmp-exp-7", "Priority routing for escalations", false, true),
  cmpRow("cmp-exp-8", "Custom domain for portal & emails", false, true),
];

const automationRows: PricingComparisonRow[] = [
  cmpRow("cmp-auto-1", "Workflow builder for lifecycle automation", false, true),
  cmpRow("cmp-auto-2", "Salesforce / HubSpot sync connectors", false, true),
  cmpRow("cmp-auto-3", "Segment-style event forwarding", false, true),
  cmpRow("cmp-auto-4", "API rate limits suitable for batch jobs", true, true),
  cmpRow("cmp-auto-5", "Signature-ready PDF quotes", false, true),
  cmpRow("cmp-auto-6", "Terraform-style infra-as-code for environments", false, true),
  cmpRow("cmp-auto-7", "Alerting on billing anomalies", false, true),
  cmpRow("cmp-auto-8", "CSV-based bulk subscriber updates", true, true),
];

const securityRows: PricingComparisonRow[] = [
  cmpRow("cmp-sec-1", "SOC 2 Type II reports under NDA", false, true),
  cmpRow("cmp-sec-2", "Encryption in transit & at rest", true, true),
  cmpRow("cmp-sec-3", "Immutable audit logs", false, true),
  cmpRow("cmp-sec-4", "SCIM provisioning", false, true),
  cmpRow("cmp-sec-5", "Regional data residency options", false, true),
  cmpRow("cmp-sec-6", "Penetration testing summaries", false, true),
  cmpRow("cmp-sec-7", "Fine-grained API scopes", false, true),
];

const supportRows: PricingComparisonRow[] = [
  cmpRow("cmp-sup-1", "Email support with next-business-day guidance", true, true),
  cmpRow("cmp-sup-2", "Shared Slack / Teams channel", false, true),
  cmpRow("cmp-sup-3", "Named customer success manager", false, true),
  cmpRow("cmp-sup-4", "Quarterly business reviews", false, true),
  cmpRow("cmp-sup-5", "Implementation playbooks & office hours", true, true),
  cmpRow("cmp-sup-6", "Migration assistance for legacy billing tools", false, true),
];

const comparisonGroups: PricingComparisonGroup[] = [
  { id: "grp-core", title: "Core platform", defaultOpen: true, rows: coreRows },
  { id: "grp-billing", title: "Billing & revenue operations", rows: billingRows },
  { id: "grp-exp", title: "Customer experience", rows: experienceRows },
  { id: "grp-auto", title: "Automation & integrations", rows: automationRows },
  { id: "grp-sec", title: "Security & compliance", rows: securityRows },
  { id: "grp-sup", title: "Support & success", rows: supportRows },
];

export const homePricing = {
  cards: {
    starter: {
      badge: { label: "Starter", tone: "cerulean" as const },
      planLabel: "Starter",
      price: "$0",
      priceSuffix: "",
      microLine: "No monthly platform fee while you validate subscription motion.",
      description:
        "Rely is free to start for qualifying workspaces: launch billing, portal, and analytics without a lengthy procurement cycle. Upgrade when volume, controls, or integrations demand more.",
      includesTitle: "Includes",
      includesItems: [
        "Core billing engine & customer portal",
        "Subscription lifecycle automation basics",
        "Standard analytics & exports",
        "Email support during onboarding",
        "Webhook notifications for key events",
        "Coupon & trial policies",
        "Basic role separation for admins",
        "Tax-ready invoice artifacts",
        "Dunning & payment retry defaults",
        "Guided setup checklist",
      ],
      cta: { label: "Start free", href: "#" },
    },
    scale: {
      badge: { label: "Scale", tone: "navy" as const },
      planLabel: "Scale",
      price: "Custom",
      microLine: "",
      description:
        "Tailored for teams shipping complex packaging, deep integrations, and finance-grade controls — with hands-on support from day one.",
      includesTitle: "All in Starter, plus exclusive capabilities",
      includesItems: [
        "Advanced workflows & approval chains",
        "Enterprise SSO, SCIM, and audit exports",
        "Solutions engineer & migration support",
        "Custom contracts, SLAs, and billing schedules",
      ],
      cta: { label: "Talk to sales", href: "#" },
    },
  },
  comparison: {
    title: "Compare features",
    featureLabel: "FEATURES",
    plans: [
      { id: "starter", label: "STARTER" },
      { id: "growth", label: "PRO" },
    ],
    groups: comparisonGroups,
  },
} as const;
