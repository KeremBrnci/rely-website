import { buildGeoAiTxt } from "@/lib/seo/geo";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const body = buildGeoAiTxt();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
