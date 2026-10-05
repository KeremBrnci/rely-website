/**
 * Site genelinde tekrarlayan pazarlama ifadeleri — kurulum süresi, tahsilat vb.
 */

/** Hızlı Başlangıç ile satışa hazır olma süresi. */
export const marketingSetupReadyPhrase = "yaklaşık 30 dakikada satışa hazır";

export const marketingSetupReadyHighlight = "~30 dakikada satışa hazır";

export const marketingSetupSelfServiceLabel = "Kendi kendine kurulum (~30 dakika)";

export const marketingSetupComparisonLabel = "Kendi kendine kurulum (~30 dk)";

export const marketingSetupQuickStartLabel = "Kurulum için ~30 dakikalık hızlı başlangıç";

/** SSS ve güven metinleri — kart saklama. */
export const marketingCardStorageFaqAnswer =
  "Kart bilgileri RELY'de tutulmaz; kart saklama hizmeti sunan ödeme kuruluşunuzda token olarak saklanır. Her yenilemede tahsilat bu güvenli token üzerinden yapılır.";

export const marketingAutoBillingIncludeLabel =
  "Otomatik tahsilat (kart saklama destekleyen sanal POS'lar)";

export const marketingPaymentProvidersShortLabel =
  "Tahsilat: Kart saklama (tokenization) destekleyen tüm ödeme sağlayıcıları ile entegrasyon";

export const marketingPaymentIntegrationsPhrase =
  "Kart saklama (token) hizmeti sunan tüm sanal POS ve ödeme kuruluşlarıyla çalışır (Craftgate, İyzico ve diğerleri).";

export const marketingTokenBillingPhrase =
  "Kart saklama destekleyen sanal POS'larla token'lı tekrarlayan tahsilat";

export const marketingPaymentIntegrationShortPhrase =
  "kart saklama destekleyen sanal POS entegrasyonu";

export const marketingConnectPaymentStepPhrase =
  "Kart saklama destekleyen sanal POS'unuzla token'lı tahsilatı kurun.";

export const marketingCardStorageComplianceAnswer =
  "Kart saklama destekleyen sanal POS'unuzla token'lı tekrarlayan tahsilat kurulur. Kart bilgileri RELY'de değil, ödeme kuruluşunuzda saklanır; PCI-DSS uyumlu altyapı üzerinden işlem yapılır.";

/** Aylık sabit platform ücreti (fiyatlandırma sayfası + SSS). */
export const marketingPlatformMonthlyFee = "12.990 ₺";

export const marketingPlatformMonthlyFeePerMonthLabel = `${marketingPlatformMonthlyFee} / ay platform ücreti`;

export const marketingEnterprisePricingContactLabel = "Özel teklif";

/** Başarı Payı — yalnızca RELY üzerinden oluşan abonelik cirosu. */
export const marketingSuccessFeeOnlySubscriptionRevenue =
  "Ücretlendirme yalnızca RELY üzerinden oluşan abonelik cirosuna uygulanır. Mevcut mağazanızdaki tek seferlik siparişlerden pay alınmaz.";

export type MarketingSuccessFeeTier = {
  range: string;
  rate: string;
  /** Oran yerine sabit ücret uygulanan dilim. */
  flat?: boolean;
  note?: string;
};

export const marketingSuccessFeeTiers: readonly MarketingSuccessFeeTier[] = [
  {
    range: "₺0 – ₺1.000.000",
    rate: "Sabit ücret",
    flat: true,
    note: "Başarı Payı uygulanmaz",
  },
  { range: "₺1.000.001 – ₺5.000.000", rate: "%2,29" },
  { range: "₺5.000.001 – ₺10.000.000", rate: "%1,99" },
  { range: "₺10.000.001 – ₺20.000.000", rate: "%1,79" },
  { range: "₺20.000.001+", rate: "%1,59" },
];

export const marketingSuccessFeeSummaryLabel = "Kademeli Başarı Payı";

/** SSS — fiyatlandırma, taşıma, ödeme (anasayfa dışı sayfalar). */
export const marketingPlatformPricingFaqAnswer =
  `Aylık ${marketingPlatformMonthlyFee} platform ücreti. Aylık abonelik cirosu 1.000.000 ₺'ye kadar yalnızca sabit ücret ödenir; bu eşiğin üzerinde RELY abonelik cirosuna %2,29 ile %1,59 arasında kademeli Başarı Payı uygulanır. Tek seferlik siparişlerden pay alınmaz.`;

export const marketingSubscriberMigrationFaqAnswer =
  "Evet. Uygun sistemlerden mevcut abonelik verilerini ve müşteri kayıtlarını taşımanız için destek sağlıyoruz.";

export const marketingPaymentProvidersFaqAnswer =
  "Kart saklama desteği sunan sanal POS ve ödeme altyapılarıyla çalışır. Ödeme süreçleri mevcut sağlayıcınız üzerinden devam eder.";
