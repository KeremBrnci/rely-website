export type MarketingLinkItem = {
  href: string;
  label: string;
  description?: string;
};

export type MarketingLinkGroup = {
  title: string;
  items: MarketingLinkItem[];
};

export type MarketingInternalLinks = {
  groups: MarketingLinkGroup[];
};
