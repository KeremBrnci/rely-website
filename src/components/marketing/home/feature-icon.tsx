import type { SVGProps } from "react";

import type { HomeFeatureIcon } from "@/content/marketing/home";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Esnek akış — dallanan düğümler (workflow). */
function IconFlow(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="5.5" cy="6" r="2.25" />
      <circle cx="5.5" cy="18" r="2.25" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M7.6 7 15.6 11" />
      <path d="M7.6 17 15.6 13" />
    </IconBase>
  );
}

/** Ölçek — yükselen sütunlar + trend (layers). */
function IconScale(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5V15" />
      <path d="M12 20.5V10.5" />
      <path d="M17.5 20.5V6" />
      <path d="M5 9.5 11 6l3.2 2 4-3.2" />
    </IconBase>
  );
}

/** Gönül rahatlığı — kalkan + onay (shield). */
function IconShield(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.2 18.5 6v5c0 4.4-2.9 7.4-6.5 8.8C8.4 18.4 5.5 15.4 5.5 11V6L12 3.2Z" />
      <path d="M9.3 11.7 11.2 13.6 14.9 9.8" />
    </IconBase>
  );
}

/** Sezgisel — segment / analitik halka (gauge). */
function IconInsights(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12V3.5A8.5 8.5 0 0 1 19.6 9Z" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

/** Farklı / göç — döngüsel geçiş okları (globe). */
function IconMigrate(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5.5 10.5A6.5 6.5 0 0 1 16.7 6.4" />
      <path d="M16.8 3.7V6.6H13.9" />
      <path d="M18.5 13.5A6.5 6.5 0 0 1 7.3 17.6" />
      <path d="M7.2 20.3V17.4H10.1" />
    </IconBase>
  );
}

/** Basit — kullanıcı dostu portal + kontrol (sparkles). */
function IconPortal(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="3" />
      <path d="M3.5 9h17" />
      <circle cx="6.4" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <rect x="12.5" y="12.5" width="5.5" height="3" rx="1.5" />
      <circle cx="16.5" cy="14" r="0.85" fill="currentColor" stroke="none" />
      <path d="M6 13h3.5" />
      <path d="M6 16h2" />
    </IconBase>
  );
}

const icons = {
  layers: IconScale,
  gauge: IconInsights,
  shield: IconShield,
  workflow: IconFlow,
  globe: IconMigrate,
  sparkles: IconPortal,
} satisfies Record<HomeFeatureIcon, (props: IconProps) => React.JSX.Element>;

export function FeatureIcon({
  name,
  className,
}: {
  name: HomeFeatureIcon;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={cn("size-8", className)} />;
}
