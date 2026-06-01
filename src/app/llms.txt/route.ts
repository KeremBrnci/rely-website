import { buildLlmsTxt } from "@/lib/seo/llms-content";
import { geoPaths } from "@/lib/seo/geo";
import { toAbsoluteUrl } from "@/lib/seo/site-index";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      Link: `<${toAbsoluteUrl(geoPaths.llmsFull)}>; rel="describedby"`,
    },
  });
}
