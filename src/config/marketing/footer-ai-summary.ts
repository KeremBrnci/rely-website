import { siteConfig } from "@/config/site";
import { geoPaths } from "@/lib/seo/geo";

const LLMS_INDEX_PATH = geoPaths.llmsIndex;
const LLMS_FULL_PATH = geoPaths.llmsFull;

function buildSummaryPrompt(): string {
  const llmsUrl = new URL(LLMS_FULL_PATH, siteConfig.url).href;
  const indexUrl = new URL(LLMS_INDEX_PATH, siteConfig.url).href;

  return encodeURIComponent(
    [
      "Bu kaynakları okuyarak RELY Subs'ı Türkçe özetle:",
      llmsUrl,
      indexUrl,
      "Odak: e-ticaret abonelik altyapısı, abonelik e-ticaret, otomatik tahsilat, Shopify/İkas entegrasyonu.",
    ].join(" "),
  );
}

export type FooterAiProviderId = "chatgpt" | "claude" | "perplexity" | "grok";

export type FooterAiProvider = {
  id: FooterAiProviderId;
  label: string;
  title: string;
  href: string;
};

export const footerAiSummary = {
  eyebrow: "RELY hakkında yapay zeka özeti alın",
  llmsIndexUrl: new URL(LLMS_INDEX_PATH, siteConfig.url).href,
  llmsFullUrl: new URL(LLMS_FULL_PATH, siteConfig.url).href,
  providers: ((): FooterAiProvider[] => {
    const q = buildSummaryPrompt();

    return [
      {
        id: "chatgpt",
        label: "ChatGPT",
        title: "ChatGPT ile Rely özetle",
        href: `https://chatgpt.com/?hints=search&q=${q}`,
      },
      {
        id: "claude",
        label: "Claude",
        title: "Claude ile Rely özetle",
        href: `https://claude.ai/new?q=${q}`,
      },
      {
        id: "perplexity",
        label: "Perplexity",
        title: "Perplexity ile Rely özetle",
        href: `https://www.perplexity.ai/?q=${q}`,
      },
      {
        id: "grok",
        label: "Grok",
        title: "Grok ile Rely özetle",
        href: `https://grok.com/?q=${q}`,
      },
    ];
  })(),
} as const;
