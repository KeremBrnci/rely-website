/**
 * Sonuç odaklı çözüm sayfaları içeriği (TR) — /cozumler/*.
 * Tüm yetenekler RELY Subs dokümantasyonundaki gerçek özelliklere dayanır
 * (bkz. docs/rely-product-reference.md). Sunum: components/marketing/solutions/*.
 */

import { routes } from "@/config/routes";
import { marketingConnectPaymentStepPhrase } from "@/config/marketing/copy";
import type { HomeFeatureIcon } from "@/content/marketing/home";

export type SolutionKey =
  | "acquire"
  | "value"
  | "retention"
  | "reward"
  | "efficiency";

export type SolutionFeature = {
  id: string;
  icon: HomeFeatureIcon;
  title: string;
  description: string;
};

export type SolutionStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

type SolutionIntro = {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  description: string;
};

export type SolutionContent = {
  key: SolutionKey;
  href: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  outcome: {
    problemLabel: string;
    problem: string;
    solutionLabel: string;
    solution: string;
  };
  features: { intro: SolutionIntro; items: SolutionFeature[] };
  steps: { intro: SolutionIntro; items: SolutionStep[] };
};

const primaryCta = { label: "Demo talep et", href: routes.pricingTr };
const secondaryCta = { label: "Ürünü inceleyin", href: routes.product };

export const solutionsContent: Record<SolutionKey, SolutionContent> = {
  acquire: {
    key: "acquire",
    href: routes.solutions.acquire,
    meta: {
      title: "Abone kazanın — RELY Subs çözümleri",
      description:
        "Hediye çekleri, başlangıç paketleri ve markalı abonelik sitesi ile daha fazla ziyaretçiyi aboneye dönüştürün.",
    },
    hero: {
      eyebrow: "Çözüm · Abone kazanımı",
      title: "Daha fazla ziyaretçiyi aboneye çevirin",
      titleEmphasis: "aboneye çevirin",
      subtitle:
        "RELY Subs; indirim kampanyaları, hazır paketler ve kendi domaininizdeki abonelik sitesiyle abone olmanın önündeki engelleri kaldırır.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Ziyaretçiler ilgileniyor ama abonelik başlatmak çok adımlı ve riskli geliyor.",
      solutionLabel: "Sonuç",
      solution:
        "Düşük giriş bariyeri, cazip ilk teklif ve güven veren abonelik sitesi ile dönüşüm artar.",
    },
    features: {
      intro: {
        eyebrow: "Nasıl yardımcı olur",
        title: "Abone kazanmanın araçları hazır",
        titleEmphasis: "araçları hazır",
        description:
          "İlk siparişi kolaylaştıran kampanyalar ve sunum araçlarıyla yeni abone kazanın.",
      },
      items: [
        {
          id: "acq-vouchers",
          icon: "sparkles",
          title: "Hediye çekleri",
          description:
            "Hoşgeldin indirimi ve sadece ilk siparişe özel kodlarla giriş bariyerini düşürün.",
        },
        {
          id: "acq-bundles",
          icon: "layers",
          title: "Başlangıç paketleri",
          description:
            "Hazır ürün kombinasyonlarıyla aboneliğe başlamayı kolay ve cazip hale getirin.",
        },
        {
          id: "acq-storefront",
          icon: "globe",
          title: "Markalı abonelik sitesi",
          description:
            "Kendi domaininizde güven veren bir abonelik sitesiyle dönüşümü artırın.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda kampanyaya başlayın",
        titleEmphasis: "kampanyaya başlayın",
        description:
          "Kampanyalarınızı kurun, paketleri yayınlayın ve abonelik sitenizi açın.",
      },
      items: [
        {
          id: "acq-step-1",
          step: "01",
          title: "Kampanya kurun",
          description: "Hediye çeki ve ilk siparişe özel indirimi tanımlayın.",
        },
        {
          id: "acq-step-2",
          step: "02",
          title: "Paketleri yayınlayın",
          description: "Başlangıç paketlerini koleksiyon ve menüye ekleyin.",
        },
        {
          id: "acq-step-3",
          step: "03",
          title: "Abonelik sitesini açın",
          description: "Kendi domaininizde abonelik sitenizi yayına alın.",
        },
      ],
    },
  },

  value: {
    key: "value",
    href: routes.solutions.value,
    meta: {
      title: "Abone değerini artırın — RELY Subs çözümleri",
      description:
        "Paketler ve ön ödemeli planlarla ortalama sepet tutarını ve abone yaşam değerini büyütün.",
    },
    hero: {
      eyebrow: "Çözüm · Abone değeri",
      title: "Abone başına geliri büyütün",
      titleEmphasis: "geliri büyütün",
      subtitle:
        "Paketler, ön ödemeli planlar ve esnek sıklık seçenekleriyle her aboneden elde ettiğiniz değeri artırın.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Aboneler tek üründe kalıyor; ortalama sepet tutarı ve yaşam değeri düşük.",
      solutionLabel: "Sonuç",
      solution:
        "Paketler ve ön ödemeli planlarla daha güçlü teklifler ve peşin gelir oluşur.",
    },
    features: {
      intro: {
        eyebrow: "Nasıl yardımcı olur",
        title: "Değeri büyüten teklif yapıları",
        titleEmphasis: "teklif yapıları",
        description:
          "Daha güçlü teklifler ve esnek planlarla abone başına geliri yükseltin.",
      },
      items: [
        {
          id: "val-bundles",
          icon: "layers",
          title: "Paketler",
          description:
            "Birden fazla ürünü tek teklifte birleştirerek ortalama sepet tutarını artırın.",
        },
        {
          id: "val-prepaid",
          icon: "workflow",
          title: "Ön ödemeli planlar",
          description:
            "3 veya 12 aylık ön ödemeli planlarla peşin gelir ve uzun dönem bağlılık kazanın.",
        },
        {
          id: "val-frequency",
          icon: "gauge",
          title: "Esnek sıklık ve indirim",
          description:
            "Haftalık, aylık veya yıllık planlarla her müşteriye uygun değer önerisi sunun.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda teklifinizi güçlendirin",
        titleEmphasis: "teklifinizi güçlendirin",
        description: "Paketi oluşturun, plan tipini seçin ve sıklığı belirleyin.",
      },
      items: [
        {
          id: "val-step-1",
          step: "01",
          title: "Paket oluşturun",
          description: "İlgili ürünleri tek pakette birleştirin.",
        },
        {
          id: "val-step-2",
          step: "02",
          title: "Plan tipini seçin",
          description: "Standart, ön ödemeli veya dinamik plan tanımlayın.",
        },
        {
          id: "val-step-3",
          step: "03",
          title: "Sıklık ve indirimi ayarlayın",
          description: "Periyot ve indirim kurallarını belirleyin.",
        },
      ],
    },
  },

  retention: {
    key: "retention",
    href: routes.solutions.retention,
    meta: {
      title: "Aboneyi elde tutun — RELY Subs çözümleri",
      description:
        "Başarısız ödeme kurtarma, otomatik bildirimler ve duraklatma seçeneğiyle abone kaybını azaltın.",
    },
    hero: {
      eyebrow: "Çözüm · Elde tutma",
      title: "Abone kaybını azaltın, geliri koruyun",
      titleEmphasis: "geliri koruyun",
      subtitle:
        "Başarısız ödemeleri otomatik kurtarın, müşteriyi doğru zamanda bilgilendirin ve iptal yerine duraklatma sunun.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Başarısız kart ödemeleri ve sessiz iptaller sürekli gelir kaçağı yaratıyor.",
      solutionLabel: "Sonuç",
      solution:
        "Otomatik yeniden deneme, kart güncelleme ve bildirimlerle abonelikler devam eder.",
    },
    features: {
      intro: {
        eyebrow: "Nasıl yardımcı olur",
        title: "Geliri koruyan elde tutma araçları",
        titleEmphasis: "elde tutma araçları",
        description:
          "Ödeme sürekliliği ve doğru iletişimle aboneyi yanınızda tutun.",
      },
      items: [
        {
          id: "ret-recovery",
          icon: "shield",
          title: "Başarısız ödeme kurtarma",
          description:
            "Reddedilen ödemeler otomatik yeniden denenir; kart güncelleme bağlantısı gönderilir.",
        },
        {
          id: "ret-notifications",
          icon: "gauge",
          title: "Otomatik bildirimler",
          description:
            "Yenileme hatırlatması, ödeme ve kart güncelleme bildirimleriyle müşteriyi bilgilendirin.",
        },
        {
          id: "ret-pause",
          icon: "sparkles",
          title: "Duraklatma seçeneği",
          description:
            "İptal yerine aboneliği duraklatma sunarak müşteriyi elde tutun.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda kaçağı kapatın",
        titleEmphasis: "kaçağı kapatın",
        description:
          "Ödeme altyapısını bağlayın, bildirimleri açın ve kuralları ayarlayın.",
      },
      items: [
        {
          id: "ret-step-1",
          step: "01",
          title: "Ödeme sağlayıcıyı bağlayın",
          description: marketingConnectPaymentStepPhrase,
        },
        {
          id: "ret-step-2",
          step: "02",
          title: "Bildirimleri açın",
          description: "E-posta ve SMS şablonlarını etkinleştirin.",
        },
        {
          id: "ret-step-3",
          step: "03",
          title: "Kuralları ayarlayın",
          description: "Yeniden deneme ve duraklatma akışlarını tanımlayın.",
        },
      ],
    },
  },

  reward: {
    key: "reward",
    href: routes.solutions.reward,
    meta: {
      title: "Aboneleri ödüllendirin — RELY Subs çözümleri",
      description:
        "Sadakat kampanyaları ve esnek indirim kodlarıyla mevcut aboneleri elde tutun ve yeniden etkileşim kurun.",
    },
    hero: {
      eyebrow: "Çözüm · Ödüllendirme",
      title: "Sadık aboneleri ödüllendirin",
      titleEmphasis: "ödüllendirin",
      subtitle:
        "Mevcut abonelerinize özel indirim kodları ve dönemsel kampanyalarla bağlılığı güçlendirin.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Mevcut aboneler zamanla ilgisini kaybediyor ve özel bir teşvik göremiyor.",
      solutionLabel: "Sonuç",
      solution:
        "Hedefli sadakat kampanyalarıyla aboneler değer görür ve daha uzun kalır.",
    },
    features: {
      intro: {
        eyebrow: "Nasıl yardımcı olur",
        title: "Sadakati besleyen kampanya araçları",
        titleEmphasis: "kampanya araçları",
        description:
          "Esnek indirim kodlarıyla mevcut abonelere özel teklifler kurgulayın.",
      },
      items: [
        {
          id: "rew-loyalty",
          icon: "sparkles",
          title: "Sadakat kampanyaları",
          description:
            "Mevcut abonelere özel indirim kodlarıyla bağlılığı ödüllendirin.",
        },
        {
          id: "rew-rules",
          icon: "layers",
          title: "Esnek indirim kuralları",
          description:
            "Yüzde/tutar, kullanım limiti, kişi başı limit ve süreyle kampanyaları hassas yönetin.",
        },
        {
          id: "rew-seasonal",
          icon: "gauge",
          title: "Dönemsel teklifler",
          description:
            "Özel gün ve dönemlere özel kampanyalarla yeniden etkileşim kurun.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda kampanyayı sunun",
        titleEmphasis: "kampanyayı sunun",
        description: "Çeki oluşturun, kurallarını belirleyin ve abonelere sunun.",
      },
      items: [
        {
          id: "rew-step-1",
          step: "01",
          title: "Hediye çeki oluşturun",
          description: "Kod, indirim tipi ve değerini tanımlayın.",
        },
        {
          id: "rew-step-2",
          step: "02",
          title: "Kuralları belirleyin",
          description: "Kişi başı limit, süre ve geçerlilik koşullarını ayarlayın.",
        },
        {
          id: "rew-step-3",
          step: "03",
          title: "Abonelere sunun",
          description: "Kampanyayı yayınlayın ve performansını izleyin.",
        },
      ],
    },
  },

  efficiency: {
    key: "efficiency",
    href: routes.solutions.efficiency,
    meta: {
      title: "Operasyonu verimli yönetin — RELY Subs çözümleri",
      description:
        "Tahsilat, sipariş ve abonelikleri tek panelden otomatikleştirerek operasyonel yükü azaltın.",
    },
    hero: {
      eyebrow: "Çözüm · Operasyon",
      title: "Operasyonel yükü ortadan kaldırın",
      titleEmphasis: "yükü ortadan kaldırın",
      subtitle:
        "Abonelik, müşteri, sipariş ve ödemeleri tek panelden yönetin; tekrarlayan işleri otomasyona bırakın.",
      primaryCta,
      secondaryCta,
    },
    outcome: {
      problemLabel: "Sorun",
      problem:
        "Yenileme, tahsilat ve sipariş takibi ekibinizin zamanını manuel işlerle tüketiyor.",
      solutionLabel: "Sonuç",
      solution:
        "Otomatik tahsilat ve sipariş akışıyla ekip operasyonla değil büyümeyle ilgilenir.",
    },
    features: {
      intro: {
        eyebrow: "Nasıl yardımcı olur",
        title: "Operasyonu sadeleştiren tek panel",
        titleEmphasis: "tek panel",
        description:
          "Tüm abonelik operasyonunu merkezi bir panelden kontrol edin.",
      },
      items: [
        {
          id: "eff-panel",
          icon: "gauge",
          title: "Merkezi yönetim paneli",
          description:
            "Abonelik, müşteri, sipariş ve ödemeleri tek ekrandan yönetin.",
        },
        {
          id: "eff-automation",
          icon: "workflow",
          title: "Otomatik sipariş ve tahsilat",
          description:
            "Her döngüde tahsilat ve sipariş arka planda otomatik oluşur.",
        },
        {
          id: "eff-team",
          icon: "shield",
          title: "Ekip ve yetki yönetimi",
          description:
            "Panel kullanıcıları ve yetkileriyle operasyonu güvenle paylaşın.",
        },
      ],
    },
    steps: {
      intro: {
        eyebrow: "Nasıl çalışır",
        title: "Üç adımda otomasyonu kurun",
        titleEmphasis: "otomasyonu kurun",
        description: "Platformu bağlayın, kuralları ayarlayın ve ekibi davet edin.",
      },
      items: [
        {
          id: "eff-step-1",
          step: "01",
          title: "Platformu bağlayın",
          description: "Mevcut e-ticaret mağazanızı RELY'e bağlayın.",
        },
        {
          id: "eff-step-2",
          step: "02",
          title: "Otomasyon kurallarını ayarlayın",
          description: "Tahsilat, yenileme ve sipariş akışını tanımlayın.",
        },
        {
          id: "eff-step-3",
          step: "03",
          title: "Ekibi davet edin",
          description: "Panel kullanıcılarını ekleyip yetkilerini belirleyin.",
        },
      ],
    },
  },
};

export const solutionsOrder: SolutionKey[] = [
  "acquire",
  "value",
  "retention",
  "reward",
  "efficiency",
];
