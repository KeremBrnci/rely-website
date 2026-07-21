import type { FooterAiProviderId } from "@/config/marketing/footer-ai-summary";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function IconChatGPT({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.998-2.9 6.056 6.056 0 0 0-.748-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.142-.08 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855L13.104 8.36 15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.792a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.407-.667zm2.01-3.023l-.142-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.062l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 12.863L6.287 11.7a.08.08 0 0 1-.038-.057V6.074a4.5 4.5 0 0 1 7.376-3.454l-.142.081L8.704 5.46a.795.795 0 0 0-.393.681zm1.098-2.365l2.602-1.5 2.607 1.5v3l-2.598 1.5-2.607-1.5z" />
    </svg>
  );
}

export function IconClaude({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.709 15.955l4.72-2.647.079-.23-.079-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.571-.121L0 11.784l.055-.352.479-.321.686.06 1.517.103 2.276.158 1.651.097 2.449.255h.389l.055-.158-.134-.097-.103-.097-2.349-1.595-2.543-1.681-1.329-.964-.722-.49-.365-.461-.158-1.011.654-.722.881.06.225.061.892.686 1.905 1.474 2.491 1.832.365.304.146-.103.018-.073-.164-.273-1.359-2.456-1.451-2.498-.644-1.04-.158-.62a2.967 2.967 0 01-.103-.74l.741-1.011.413-.134.992.134.413.358.61 1.395.985 2.193 1.523 2.973.446.881.237.815.087.255h.146v-.146l.121-1.612.219-1.979.213-2.549.073-.717.346-.84.69-.452.534.255.443.625-.06.401-.255 1.668-.504 2.62-.328 1.749h.188l.225-.225.91-1.207 1.523-1.905.674-.758.785-.834.504-.401h.952l.7 1.044-.31 1.075-.985 1.243-.81 1.049-1.158 1.559-.722 1.243.067.103.176-.018 2.679-.574 1.456-.255 1.736-.298.785.365.085.376-.31.767-1.864.461-2.18.437-3.262.771-.04.03.046.06 1.474.139.628.034h1.541l2.873.213.749.498.452.601-.073.456-1.158.595-1.55-.365-3.62-.864-1.243-.31h-.176v.103l1.025 1.008 1.881 1.7 2.349 2.187.122.547-.31.437-.328-.048-2.13-1.61-.822-.723-1.864-1.572h-.122v.158l.43.625 2.265 3.402.122 1.044-.158.346-.595.213-.65-.115-1.335-1.882-1.382-2.106-1.116-1.9-.134.085-.66 7.097-.31.358-.71.273-.595-.443-.31-.71.31-1.43.376-1.875.31-1.488.273-1.851.158-.61-.013-.043-.134.018-1.376 1.888-2.094 2.83-1.657 1.778-.395.158-.683-.358.06-.625.395-.583 2.36-3.001 1.426-1.864.917-1.073-.012-.158h-.06l-6.39 4.146-1.134.158-.486-.456.06-.747.231-.243 1.918-1.316z" />
    </svg>
  );
}

/** Masked brand mark — inherits currentColor like SVG icons. */
function BrandMaskIcon({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

export function IconPerplexity({ className }: IconProps) {
  return <BrandMaskIcon src="/brand/ai/perplexity.png" className={className} />;
}

export function IconGrok({ className }: IconProps) {
  return <BrandMaskIcon src="/brand/ai/grok.png" className={className} />;
}

const icons: Record<FooterAiProviderId, typeof IconChatGPT> = {
  chatgpt: IconChatGPT,
  claude: IconClaude,
  perplexity: IconPerplexity,
  grok: IconGrok,
};

export function FooterAiProviderIcon({
  id,
  className,
}: {
  id: FooterAiProviderId;
  className?: string;
}) {
  const Icon = icons[id];
  return <Icon className={className} />;
}
