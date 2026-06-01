/**
 * RELY Subs — tüzel kişilik ve yasal iletişim bilgileri.
 */

export const companyLegal = {
  legalName: "RELY TEKNOLOJİ VE İLETİŞİM HİZMETLERİ A.Ş.",
  brandName: "RELY Subs",
  address: {
    line1: "Fulya Mah. Büyükdere Cad. No:76/188",
    district: "Şişli",
    city: "İstanbul",
    country: "Türkiye",
  },
  taxOffice: "Mecidiyeköy VD",
  taxNumber: "7331358657",
  tradeRegistryNumber: "1128582",
  mersis: "0733135865700001",
  contactEmail: "contact@relysubs.com",
  privacyEmail: "contact@relysubs.com",
} as const;

export function formatCompanyAddress(): string {
  const { line1, district, city, country } = companyLegal.address;
  return `${line1}, ${district} / ${city}, ${country}`;
}
