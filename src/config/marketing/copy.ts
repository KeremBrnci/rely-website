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

export const marketingSuccessFeeTiers = [
  { range: "0 – 1.000.000 ₺", rate: "%2,59" },
  { range: "1.000.001 – 5.000.000 ₺", rate: "%2,19" },
  { range: "5.000.001 – 10.000.000 ₺", rate: "%1,79" },
  { range: "10.000.000 ₺+", rate: "%1,39" },
] as const;

export const marketingSuccessFeeSummaryLabel = "Kademeli Başarı Payı (%2,59 – %1,39)";

/** SSS — fiyatlandırma, taşıma, ödeme (anasayfa dışı sayfalar). */
export const marketingPlatformPricingFaqAnswer =
  `Aylık ${marketingPlatformMonthlyFee} platform ücreti ve yalnızca RELY üzerinden oluşan abonelik cirosuna uygulanan kademeli Başarı Payı. Tek seferlik siparişlerden pay alınmaz. Oranlar aylık abonelik cirosuna göre %2,59 ile %1,39 arasında değişir.`;

export const marketingSubscriberMigrationFaqAnswer =
  "Evet. Uygun sistemlerden mevcut abonelik verilerini ve müşteri kayıtlarını taşımanız için destek sağlıyoruz.";

export const marketingPaymentProvidersFaqAnswer =
  "Kart saklama desteği sunan sanal POS ve ödeme altyapılarıyla çalışır. Ödeme süreçleri mevcut sağlayıcınız üzerinden devam eder.";
