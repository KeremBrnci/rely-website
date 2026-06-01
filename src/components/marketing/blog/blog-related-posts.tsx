import { BlogPostCard } from "@/components/marketing/blog/blog-post-card";
import { Container } from "@/components/layout/container";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import type { BlogPostMeta } from "@/content/blog/types";
import { cn } from "@/lib/utils";

type BlogRelatedPostsProps = {
  posts: BlogPostMeta[];
};

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <MarketingSection
      spacing="lg"
      background="default"
      className={cn(
        "border-b border-[color:var(--marketing-section-divider)]",
        "bg-[color:var(--marketing-background)]",
      )}
    >
      <Container>
        <InfrastructureEyebrow>Devam edin</InfrastructureEyebrow>
        <h2 className="mt-4 max-w-[24ch] font-heading text-[clamp(1.375rem,2vw,1.75rem)] font-semibold leading-snug tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
          İlgili yazılar
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="relative flex">
              <BlogPostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </MarketingSection>
  );
}
