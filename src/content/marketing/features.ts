/**
 * Özellik detay sayfaları içeriği (TR) — /ozellikler/*.
 * Header "Özellikler" mega-menüsündeki her başlık kendi sayfasına sahiptir.
 * Tüm yetenekler RELY Subs dokümantasyonundaki gerçek özelliklere dayanır
 * (bkz. docs/rely-product-reference.md). Sunum: components/marketing/solutions/*.
 */

import { routes } from "@/config/routes";
import {
  marketingConnectPaymentStepPhrase,
  marketingPaymentIntegrationsPhrase,
} from "@/config/marketing/copy";
import type { SolutionContent } from "@/content/marketing/solutions";

export type FeatureKey =
  | "plans"
  | "bundles"
  | "vouchers"
  | "recovery"
  | "pause"
  | "billing"
  | "integrations";

/** Özellik sayfası içeriği — çözüm sayfası şablonuyla aynı bölümleri kullanır. */
export type FeatureContent = Omit<SolutionContent, "key">;

const primaryCta = { label: "Demo Talep Et", href: routes.contact };
const secondaryCta = { label: "Ürünü inceleyin", href: routes.product };

export const featuresContent: Record<FeatureKey, FeatureContent> = {
  plans: {
    href: routes.features.plans,
    meta: {
      title: "Abonelik Planları — RELY Subs özellikleri",
      description:
        "E-ticaret abonelik altyapısında standart, ön ödemeli ve dinamik plan tipleri; haftalık, aylık, yıllık sıklık ve esnek indirimlerle her ürüne özel abonelik koşulu.",
    },
    hero: {
      eyebrow: "Özellik · Planlar",
      title: "Her ürün için doğru abonelik planı",
      titleEmphasis: "doğru abonelik planı",
      subtitle:
        "Bir ürüne birden çok plan tanımlayın; tip, sıklık, indirim ve süreyle abonelik koşullarını tam kontrol edin.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem: "Tek tip abonelik her ürüne ve her müşteriye uymuyor.",
      solutionLabel: "Sonuç",
      solution:
        "Plan tipleri, sıklık ve indirimle her ürüne özel abonelik koşulu tanımlarsınız.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Esnek plan yapılandırması",
        titleEmphasis: "plan yapılandırması",
        description: "Her ürünün satış mantığına uyan abonelik koşulları kurun.",
      },
      items: [
        {
          id: "plans-types",
          icon: "layers",
          title: "Plan tipleri",
          description:
            "Standart, ön ödemeli, dinamik ve tek seferlik satış seçenekleri.",
        },
        {
          id: "plans-frequency",
          icon: "gauge",
          title: "Sıklık ve indirim",
          description: "Haftalık/aylık/yıllık periyot ve plana özel indirim oranı.",
        },
        {
          id: "plans-control",
          icon: "shield",
          title: "Varyant ve süre kontrolü",
          description:
            "Plana dahil varyantları seçin; süreli veya sınırsız tanımlayın.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda plan oluşturun",
        titleEmphasis: "plan oluşturun",
        description: "Ürünü seçin, planı tanımlayın ve yayına alın.",
      },
      items: [
        {
          id: "plans-step-1",
          step: "01",
          title: "Ürünü seçin",
          description: "Aboneliğe açılacak ürünü belirleyin.",
        },
        {
          id: "plans-step-2",
          step: "02",
          title: "Plan tipini tanımlayın",
          description: "Tip, sıklık, indirim ve süreyi ayarlayın.",
        },
        {
          id: "plans-step-3",
          step: "03",
          title: "Yayına alın",
          description: "Toplu plan oluşturma ve kopyalama ile hızlandırın.",
        },
      ],
    },
  },

  bundles: {
    href: routes.features.bundles,
    meta: {
      title: "Paketler — RELY Subs özellikleri",
      description:
        "Birden fazla ürünü tek abonelik paketinde birleştirerek ortalama sepet tutarını artırın.",
    },
    hero: {
      eyebrow: "Özellik · Paketler",
      title: "Ürünleri tek teklifte birleştirin",
      titleEmphasis: "tek teklifte birleştirin",
      subtitle:
        "Tamamlayıcı ürünleri tek pakette sunarak değeri ve ortalama sipariş tutarını büyütün — mevcut satışı bozmadan.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem: "Tek ürünlü abonelikler ortalama sepet tutarını sınırlıyor.",
      solutionLabel: "Sonuç",
      solution:
        "Paketlerle tamamlayıcı ürünleri birleştirip değeri ve geliri büyütürsünüz.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Değeri büyüten paketler",
        titleEmphasis: "paketler",
        description: "Ürünleri anlamlı kombinasyonlarda birleştirin.",
      },
      items: [
        {
          id: "bundles-combo",
          icon: "layers",
          title: "Ürün kombinasyonları",
          description: "Örn. kahve + filtre + kupa'yı tek pakette sunun.",
        },
        {
          id: "bundles-aov",
          icon: "gauge",
          title: "Sepeti büyütün",
          description: "Mevcut satışı bozmadan ortalama sipariş değerini artırın.",
        },
        {
          id: "bundles-merch",
          icon: "globe",
          title: "Koleksiyonlarla sunum",
          description: "Paketleri abonelik sitesinde ve koleksiyonlarda öne çıkarın.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda paket yayınlayın",
        titleEmphasis: "paket yayınlayın",
        description: "Ürünleri seçin, paketi oluşturun ve sunun.",
      },
      items: [
        {
          id: "bundles-step-1",
          step: "01",
          title: "Ürünleri seçin",
          description: "Birlikte sunulacak ürünleri belirleyin.",
        },
        {
          id: "bundles-step-2",
          step: "02",
          title: "Paketi oluşturun",
          description: "Fiyat ve abonelik koşullarını tanımlayın.",
        },
        {
          id: "bundles-step-3",
          step: "03",
          title: "Abonelik sitesinde yayınlayın",
          description: "Koleksiyon ve menüde paketi görünür kılın.",
        },
      ],
    },
  },

  vouchers: {
    href: routes.features.vouchers,
    meta: {
      title: "Hediye Çekleri — RELY Subs özellikleri",
      description:
        "Yüzde veya tutar bazlı indirim kodlarıyla hoş geldin, ilk sipariş, sadakat ve dönemsel kampanyalar oluşturun.",
    },
    hero: {
      eyebrow: "Özellik · Hediye Çekleri",
      title: "İndirim kodlarıyla dönüşümü artırın",
      titleEmphasis: "dönüşümü artırın",
      subtitle:
        "Esnek kurallı indirim kodlarıyla doğru teklifi doğru müşteriye sunun; giriş bariyerini düşürün.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem: "İlk siparişin önündeki fiyat bariyeri dönüşümü düşürüyor.",
      solutionLabel: "Sonuç",
      solution:
        "Esnek indirim kodlarıyla doğru teklifi doğru müşteriye sunarsınız.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Hassas kampanya kuralları",
        titleEmphasis: "kampanya kuralları",
        description: "Kodları kullanım amacına göre milimetrik ayarlayın.",
      },
      items: [
        {
          id: "vouchers-rules",
          icon: "layers",
          title: "Esnek kurallar",
          description:
            "Sabit tutar veya yüzde indirim; maksimum indirim, kullanım ve kişi başı limit.",
        },
        {
          id: "vouchers-target",
          icon: "sparkles",
          title: "Hedefli kampanyalar",
          description: "'Sadece ilk siparişe' ve 'sadece abonelikte' kuralları.",
        },
        {
          id: "vouchers-date",
          icon: "gauge",
          title: "Tarihli geçerlilik",
          description: "Başlangıç/bitiş tarihiyle dönemsel kampanya yönetin.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda kampanya açın",
        titleEmphasis: "kampanya açın",
        description: "Çeki oluşturun, kuralları belirleyin ve yayınlayın.",
      },
      items: [
        {
          id: "vouchers-step-1",
          step: "01",
          title: "Çek oluşturun",
          description: "Kod, indirim tipi ve değerini tanımlayın.",
        },
        {
          id: "vouchers-step-2",
          step: "02",
          title: "Kuralları belirleyin",
          description: "Limit, süre ve geçerlilik koşullarını ayarlayın.",
        },
        {
          id: "vouchers-step-3",
          step: "03",
          title: "Yayınlayın",
          description: "Kampanyayı başlatın ve performansını izleyin.",
        },
      ],
    },
  },

  recovery: {
    href: routes.features.recovery,
    meta: {
      title: "Ödeme Kurtarma — RELY Subs özellikleri",
      description:
        "Reddedilen tahsilatlar otomatik yeniden denenir ve müşteriye kart güncelleme bağlantısı gönderilir.",
    },
    hero: {
      eyebrow: "Özellik · Ödeme Kurtarma",
      title: "Başarısız ödemeleri otomatik kurtarın",
      titleEmphasis: "otomatik kurtarın",
      subtitle:
        "Yenilemede başarısız olan tahsilatlar yeniden denenir; müşteriye güvenli kart güncelleme bağlantısı iletilir.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem: "Başarısız kart ödemeleri sessiz bir gelir kaçağı yaratıyor.",
      solutionLabel: "Sonuç",
      solution:
        "Otomatik yeniden deneme ve kart güncelleme ile gelir kaçağını kapatırsınız.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Geliri koruyan kurtarma akışı",
        titleEmphasis: "kurtarma akışı",
        description: "Başarısız ödemeleri otomatik sürece bağlayın.",
      },
      items: [
        {
          id: "recovery-retry",
          icon: "shield",
          title: "Otomatik yeniden deneme",
          description: "Başarısız tahsilatta sistem ödemeyi tekrar dener.",
        },
        {
          id: "recovery-card",
          icon: "workflow",
          title: "Kart güncelleme bağlantısı",
          description: "Müşteriye güvenli kart güncelleme linki iletilir.",
        },
        {
          id: "recovery-token",
          icon: "gauge",
          title: "Kayıtlı kart ile tahsilat",
          description: "Ödeme kuruluşunuzda saklanan kart bilgisiyle yenileme yapılır.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda kaçağı kapatın",
        titleEmphasis: "kaçağı kapatın",
        description: "Ödeme altyapısını bağlayın ve kuralları açın.",
      },
      items: [
        {
          id: "recovery-step-1",
          step: "01",
          title: "Ödeme sağlayıcıyı bağlayın",
          description: marketingConnectPaymentStepPhrase,
        },
        {
          id: "recovery-step-2",
          step: "02",
          title: "Yeniden deneme kurallarını ayarlayın",
          description: "Yeniden deneme akışını tanımlayın.",
        },
        {
          id: "recovery-step-3",
          step: "03",
          title: "Bildirimleri açın",
          description: "Kart güncelleme bildirimini etkinleştirin.",
        },
      ],
    },
  },

  pause: {
    href: routes.features.pause,
    meta: {
      title: "Duraklatma & İptal — RELY Subs özellikleri",
      description:
        "Müşteri aboneliği duraklatabilir; durum ödeme ve gönderimi etkiler, sonra kaldığı yerden devam eder.",
    },
    hero: {
      eyebrow: "Özellik · Duraklatma & İptal",
      title: "İptal yerine duraklatma sunun",
      titleEmphasis: "duraklatma sunun",
      subtitle:
        "Aboneliği geçici durdurma seçeneğiyle ilişkiyi koruyun; duraklatılmış abonelikte ödeme ve gönderim durur.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem: "Tek seçenek iptal olduğunda müşteriyi tamamen kaybedersiniz.",
      solutionLabel: "Sonuç",
      solution:
        "Duraklatma seçeneğiyle ilişkiyi koruyup abone kaybını azaltırsınız.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Esnek durum yönetimi",
        titleEmphasis: "durum yönetimi",
        description: "Aboneyi kaybetmeden esneklik tanıyın.",
      },
      items: [
        {
          id: "pause-resume",
          icon: "workflow",
          title: "Duraklat / devam ettir",
          description: "Aboneliği geçici durdurun; hazır olunca sürdürün.",
        },
        {
          id: "pause-status",
          icon: "shield",
          title: "Durum kontrolü",
          description: "Duraklatılmış abonelikte ödeme ve gönderim durur.",
        },
        {
          id: "pause-cancel",
          icon: "layers",
          title: "İptal yönetimi",
          description: "İptalleri tek ekrandan izleyin ve yönetin.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda esneklik tanıyın",
        titleEmphasis: "esneklik tanıyın",
        description: "Kuralı tanımlayın, sunun ve akışı izleyin.",
      },
      items: [
        {
          id: "pause-step-1",
          step: "01",
          title: "Duraklatma kuralını tanımlayın",
          description: "Süre ve koşulları belirleyin.",
        },
        {
          id: "pause-step-2",
          step: "02",
          title: "Müşteri portalında sunun",
          description: "Müşteriye duraklatma seçeneğini abonelik yönetim ekranında açın.",
        },
        {
          id: "pause-step-3",
          step: "03",
          title: "Devam/iptal akışını izleyin",
          description: "Durumları tek panelden yönetin.",
        },
      ],
    },
  },

  billing: {
    href: routes.features.billing,
    meta: {
      title: "Otomatik Tahsilat — RELY Subs özellikleri",
      description:
        "Yenileme tarihinde sistem tahsilatı dener ve başarılı ödemede siparişi otomatik oluşturur.",
    },
    hero: {
      eyebrow: "Özellik · Otomatik Tahsilat",
      title: "Her döngüde otomatik tahsilat ve sipariş",
      titleEmphasis: "otomatik tahsilat ve sipariş",
      subtitle:
        "Yenileme tarihinde sistem kayıtlı karttan tahsilat dener; başarılı ödemede siparişi otomatik oluşturur ve takip eder.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Manuel tahsilat ve sipariş oluşturma ekibi yoruyor ve hata üretiyor.",
      solutionLabel: "Sonuç",
      solution:
        "Otomatik tahsilat–sipariş akışıyla operasyon arka planda kendi kendine yürür.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Uçtan uca otomatik akış",
        titleEmphasis: "otomatik akış",
        description: "Tahsilattan sipariş takibine kadar her şey otomatik.",
      },
      items: [
        {
          id: "billing-charge",
          icon: "gauge",
          title: "Otomatik tahsilat",
          description: "Yenileme gününde kayıtlı karttan ödeme otomatik denenir.",
        },
        {
          id: "billing-order",
          icon: "workflow",
          title: "Otomatik sipariş",
          description: "Başarılı ödemede sipariş otomatik oluşturulur.",
        },
        {
          id: "billing-track",
          icon: "layers",
          title: "Sipariş takibi",
          description: "Aboneliklerden oluşan siparişleri izleyin ve yönetin.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda otomasyonu kurun",
        titleEmphasis: "otomasyonu kurun",
        description: "Bağlayın, planlayın ve akışı otomasyona bırakın.",
      },
      items: [
        {
          id: "billing-step-1",
          step: "01",
          title: "Platform ve ödeme bağlayın",
          description: "E-ticaret ve ödeme sağlayıcısını tanımlayın.",
        },
        {
          id: "billing-step-2",
          step: "02",
          title: "Plan ve sıklığı tanımlayın",
          description: "Yenileme döngüsünü ayarlayın.",
        },
        {
          id: "billing-step-3",
          step: "03",
          title: "Akışı otomasyona bırakın",
          description: "Tahsilat ve sipariş arka planda çalışır.",
        },
      ],
    },
  },

  integrations: {
    href: routes.features.integrations,
    meta: {
      title: "Entegrasyonlar — RELY Subs özellikleri",
      description:
        `${marketingPaymentIntegrationsPhrase}. E-ticaret abonelik altyapınızı mevcut mağaza, ödeme ve mesajlaşma sistemleriyle sorunsuz bağlayın.`,
    },
    hero: {
      eyebrow: "Özellik · Entegrasyonlar",
      title: "Mevcut altyapınızla sorunsuz çalışır",
      titleEmphasis: "mevcut altyapınızla",
      subtitle:
        "RELY mevcut e-ticaret ve ödeme altyapınızın üzerine eklenir; platform değiştirme veya veri taşıma gerekmez.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Yeni bir sistem genelde platform değiştirme ve veri taşıma riski getirir.",
      solutionLabel: "Sonuç",
      solution:
        "RELY mevcut altyapınızın üzerine eklenir; mağazanızı değiştirmeniz gerekmez.",
    },
    features: {
      intro: {
        eyebrow: "Neler sunar",
        title: "Hazır bağlantılar",
        titleEmphasis: "Hazır bağlantılar",
        description: "E-ticaret, ödeme ve mesajlaşma sağlayıcılarıyla çalışın.",
      },
      items: [
        {
          id: "integrations-commerce",
          icon: "globe",
          title: "E-ticaret",
          description: "Popüler e-ticaret platformları ve API ile mağaza bağlantısı.",
        },
        {
          id: "integrations-payment",
          icon: "shield",
          title: "Ödeme",
          description: marketingPaymentIntegrationsPhrase,
        },
        {
          id: "integrations-messaging",
          icon: "workflow",
          title: "Mesajlaşma",
          description: "E-posta ve SMS (NetGSM).",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda bağlanın",
        titleEmphasis: "bağlanın",
        description: "Platform, ödeme ve mesajlaşmayı sırayla tanımlayın.",
      },
      items: [
        {
          id: "integrations-step-1",
          step: "01",
          title: "E-ticaret platformunu bağlayın",
          description: "Kullandığınız e-ticaret altyapısını tanımlayın.",
        },
        {
          id: "integrations-step-2",
          step: "02",
          title: "Ödeme sağlayıcıyı tanımlayın",
          description:
            "Kart saklama destekleyen sanal POS API bilgilerinizi girin (Craftgate, İyzico ve diğerleri).",
        },
        {
          id: "integrations-step-3",
          step: "03",
          title: "Mesajlaşma kanallarını ekleyin",
          description: "E-posta ve SMS kanallarını bağlayın.",
        },
      ],
    },
  },
};

export const featuresOrder: FeatureKey[] = [
  "plans",
  "bundles",
  "vouchers",
  "recovery",
  "pause",
  "billing",
  "integrations",
];
