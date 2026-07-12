/**
 * Sektör (abonelik dikeyi) sayfaları — /sektorler/*.
 * Her dikey: neden abonelik, avantajlar, neden RELY, SSS.
 */

import { routes } from "@/config/routes";
import { marketingPaymentIntegrationShortPhrase } from "@/config/marketing/copy";
import {
  verticalAssetsByKey,
  type SubscriptionVerticalKey,
  type VerticalAssets,
} from "@/config/marketing/vertical-assets";
import { additionalSubscriptionVerticalsContent } from "@/content/marketing/subscription-verticals-additional";
import type { HomeFeatureIcon } from "@/content/marketing/home";
import type { SolutionContent } from "@/content/marketing/solutions";

export type { SubscriptionVerticalKey } from "@/config/marketing/vertical-assets";

export type SubscriptionVerticalSlug =
  | "coffee"
  | "beauty"
  | "supplements"
  | "pet-food"
  | "meal-kits"
  | "wellness"
  | "abonelik-kutulari"
  | "saglikli-atistirmaliklar"
  | "market-ihtiyaclari"
  | "ozel-tuketim-urunleri"
  | "ev-tuketim-urunleri"
  | "saglikli-icecekler"
  | "saglikli-protein";

export const subscriptionVerticalSlugToKey: Record<
  SubscriptionVerticalSlug,
  SubscriptionVerticalKey
> = {
  coffee: "coffee",
  beauty: "beauty",
  supplements: "supplements",
  "pet-food": "petFood",
  "meal-kits": "mealKits",
  wellness: "wellness",
  "abonelik-kutulari": "subscriptionBoxes",
  "saglikli-atistirmaliklar": "healthySnacks",
  "market-ihtiyaclari": "grocery",
  "ozel-tuketim-urunleri": "specialtyPantry",
  "ev-tuketim-urunleri": "householdEssentials",
  "saglikli-icecekler": "functionalBeverages",
  "saglikli-protein": "protein",
};

export type VerticalFaqItem = {
  id: string;
  question: string;
  answer: string;
};

type VerticalIntro = {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  description: string;
};

type VerticalFeature = {
  id: string;
  icon: HomeFeatureIcon;
  title: string;
  description: string;
};

export type SubscriptionVerticalContent = {
  key: SubscriptionVerticalKey;
  href: string;
  meta: { title: string; description: string };
  visuals: VerticalAssets;
  hero: SolutionContent["hero"];
  whyUsed: SolutionContent["outcome"];
  advantages: { intro: VerticalIntro; items: VerticalFeature[] };
  whyRely: { intro: VerticalIntro; items: VerticalFeature[] };
  faq: { title: string; items: VerticalFaqItem[] };
};

const primaryCta = { label: "Demo Talep Et", href: routes.contact };
const secondaryCta = { label: "Ürünü inceleyin", href: routes.product };

export const subscriptionVerticalsContent: Record<
  SubscriptionVerticalKey,
  Omit<SubscriptionVerticalContent, "visuals">
> = {
  coffee: {
    key: "coffee",
    href: routes.subscriptions.coffee,
    meta: {
      title: "Kahve abonelikleri — RELY Subs",
      description:
        "Taze kavrum, esnek teslimat sıklığı ve otomatik tahsilat ile kahve markaları için abonelik altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Kahve",
      title: "Kahve markaları için tekrarlayan gelir",
      titleEmphasis: "tekrarlayan gelir",
      subtitle:
        "Müşterileriniz favori çekirdeğini düzenli alsın; siz stok, kavrum partisi ve tahsilatı tek panelden yönetin.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Kahve tüketimi günlük bir ritimdir. Tek seferlik siparişlerde müşteri her ay yeniden karar verir; stok bitince rakibe kayar.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; taze kavrum garantisi, sabit fiyat ve esnek teslimatla abone değerini yükseltir. Operasyon tarafında da gelir ve sevkiyat öngörülebilir olur.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Kahve aboneliğinin markanıza kazandırdıkları",
        titleEmphasis: "kazandırdıkları",
        description:
          "Sıklık, paket ve kanal esnekliği kahve markalarının en çok ihtiyaç duyduğu üç alandır.",
      },
      items: [
        {
          id: "coffee-adv-1",
          icon: "workflow",
          title: "Esnek teslimat sıklığı",
          description:
            "Haftalık, iki haftada bir veya aylık planlar; müşteri portalından erteleme ve adres güncelleme.",
        },
        {
          id: "coffee-adv-2",
          icon: "layers",
          title: "Çekirdek & öğütme paketleri",
          description:
            "250 g, 1 kg veya demleme seti gibi hazır paketlerle ortalama sepet tutarını artırın; mağaza kataloğunuzla senkron stok.",
        },
        {
          id: "coffee-adv-3",
          icon: "gauge",
          title: "Öngörülebilir kavrum partisi",
          description:
            "Aktif abone sayısına göre üretim planlayın; fire ve stok fazlasını azaltın.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Kahve aboneliği için doğru altyapı",
        titleEmphasis: "doğru altyapı",
        description:
          `RELY; ödeme kurtarma, müşteri portalı ve ${marketingPaymentIntegrationShortPhrase} ile Türkiye’deki kahve markalarına göre tasarlandı.`,
      },
      items: [
        {
          id: "coffee-rely-1",
          icon: "shield",
          title: "Başarısız ödeme kurtarma",
          description:
            "Kart yenileme ve otomatik yeniden deneme ile abonelik iptalini geciktirmeden geliri koruyun.",
        },
        {
          id: "coffee-rely-2",
          icon: "globe",
          title: "Müşteri portalı",
          description:
            "Kendi domaininizde abonelik yönetim ekranı; müşteriler teslimat ve planlarını destek olmadan günceller.",
        },
        {
          id: "coffee-rely-3",
          icon: "sparkles",
          title: "Operasyon tek panelde",
          description:
            "Abonelik, fatura ve müşteri geçmişi ayrı tablolarda değil; ekip aynı gerçeğe bakar.",
        },
      ],
    },
    faq: {
      title: "Kahve aboneliği hakkında sık sorulanlar",
      items: [
        {
          id: "coffee-faq-1",
          question: "Müşteri teslimatı erteleyebilir mi?",
          answer:
            "Evet. Müşteri portalında bir sonraki sevkiyatı erteleyebilir veya sıklığı değiştirebilir; operasyon ekibi panelden de müdahale edebilir.",
        },
        {
          id: "coffee-faq-2",
          question: "Farklı çekirdek ve öğütme seçenekleri sunulabilir mi?",
          answer:
            "Abonelik planlarına ürün varyantları ve paketler bağlanır. E-ticaret kataloğunuzla eşleşen ürünler kullanılır.",
        },
        {
          id: "coffee-faq-3",
          question: "İlk sipariş indirimi veya hediye çeki verilebilir mi?",
          answer:
            "Hediye çeki ve kampanya kodları abonelik sitesinde ve ödeme akışında desteklenir; ilk kutu denemesi için yaygın bir kurgudur.",
        },
        {
          id: "coffee-faq-4",
          question: "Kurulum ne kadar sürer?",
          answer:
            "Mağaza entegrasyonu ve ödeme sağlayıcı bağlantısıyla çoğu kahve markası birkaç iş günü içinde canlıya alınabilir; ekibimiz kurulumda eşlik eder.",
        },
      ],
    },
  },

  beauty: {
    key: "beauty",
    href: routes.subscriptions.beauty,
    meta: {
      title: "Güzellik & cilt bakımı abonelikleri — RELY Subs",
      description:
        "Güzellik kutusu, kişiselleştirme ve düzenli bakım rutini için abonelik altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Güzellik",
      title: "Güzellik markalarında sadakat kutusu",
      titleEmphasis: "sadakat kutusu",
      subtitle:
        "Düzenli teslimat, üyelik katmanları ve promosyonlarla cilt bakımı rutinini aboneliğe taşıyın.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Güzellik alışverişi keşif ve tekrar satın alma kararı gerektirir; müşteri doğru ürünü bulana kadar markadan uzaklaşabilir.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik kutusu; rutin oluşturur, abone başına geliri artırır ve stok eritme (ürün rotasyonu) için kontrollü bir kanal sunar.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Güzellik markalarında aboneliğin avantajları",
        titleEmphasis: "avantajları",
        description: "Kişiselleştirme ve promosyon, güzellik markalarının fark yarattığı iki alandır.",
      },
      items: [
        {
          id: "beauty-adv-1",
          icon: "sparkles",
          title: "Kutu & üyelik katmanları",
          description:
            "Temel, premium veya sezonluk kutular; farklı fiyat noktalarında aynı altyapı.",
        },
        {
          id: "beauty-adv-2",
          icon: "layers",
          title: "Çapraz satış ve numune",
          description:
            "Paket içi mini ürünlerle tam boy ürüne geçiş; abonelik kanalı deneme maliyetini düşürür.",
        },
        {
          id: "beauty-adv-3",
          icon: "gauge",
          title: "Stok rotasyonu kontrolü",
          description:
            "Belirli dönemlerde kutu içeriğini planlayarak son kullanma ve fazla stok riskini yönetin.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Güzellik aboneliği için RELY’i tercih edin",
        titleEmphasis: "tercih edin",
        description:
          "Bildirimler, müşteri portalı ve ödeme kurtarma; yüksek abone kaybı riski olan güzellik markalarında kritiktir.",
      },
      items: [
        {
          id: "beauty-rely-1",
          icon: "workflow",
          title: "Duraklatma ve kolay iptal",
          description:
            "Şeffaf iptal politikası güven oluşturur; sistem kurallarınızla uyumlu duraklatma seçenekleri sunar.",
        },
        {
          id: "beauty-rely-2",
          icon: "globe",
          title: "Müşteri portalı",
          description:
            "Mevcut mağaza temanızdan kopmadan, kendi domaininizde abonelik satışı ve müşteri hesabı.",
        },
        {
          id: "beauty-rely-3",
          icon: "shield",
          title: "Tahsilat güvenilirliği",
          description:
            "Başarısız ödemelerde otomatik yeniden deneme; kutunun yolda kalmaması için operasyon uyarıları.",
        },
      ],
    },
    faq: {
      title: "Güzellik aboneliği SSS",
      items: [
        {
          id: "beauty-faq-1",
          question: "Müşteri kutusunu kişiselleştirebilir mi?",
          answer:
            "Plan ve paket kurgunuza bağlı olarak varyant seçimi ve kutu içeriği müşteri portalında sunulabilir.",
        },
        {
          id: "beauty-faq-2",
          question: "İade ve iptal politikası nasıl yönetilir?",
          answer:
            "İptal, duraklatma ve iade kuralları panelden tanımlanır; müşteri portalı aynı kuralları gösterir.",
        },
        {
          id: "beauty-faq-3",
          question: "Mevcut e-ticaret mağazamla çalışır mı?",
          answer:
            "Evet. Ürün ve sipariş senkronu kullandığınız altyapıyla desteklenir; abonelik olayları mağaza panelinize yansır.",
        },
        {
          id: "beauty-faq-4",
          question: "Kampanya ve temsilci kodları kullanılabilir mi?",
          answer:
            "Hediye çeki ve indirim kodları abonelik başlangıcında uygulanabilir; kanal bazlı performansı takip edebilirsiniz.",
        },
      ],
    },
  },

  supplements: {
    key: "supplements",
    href: routes.subscriptions.supplements,
    meta: {
      title: "Takviye & vitamin abonelikleri — RELY Subs",
      description:
        "Düzenli kullanım ritmi, yüksek yenileme ve uyumlu iptal politikaları ile takviye abonelikleri.",
    },
    hero: {
      eyebrow: "Sektör · Takviye",
      title: "Takviyede düzenli kullanım aboneliği",
      titleEmphasis: "aboneliği",
      subtitle:
        "Müşterileriniz programa sadık kalsın; siz yenileme, stok ve regülasyon dostu iletişimi tek akışta yönetin.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Takviye etkisi düzenli kullanımla gelir; tek seferlik alımda müşteri stoğu bitince yenilemeyi unutur.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; kullanım alışkanlığını destekler, abone kaybını düşürür ve 60–90 günlük yenileme döngüsünü otomatikleştirir.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Takviye markalarında aboneliğin avantajları",
        titleEmphasis: "avantajları",
        description: "Yüksek abone değeri ve düşük destek yükü, bu kategoride aboneliği öne çıkarır.",
      },
      items: [
        {
          id: "supp-adv-1",
          icon: "gauge",
          title: "Yüksek yenileme oranı",
          description:
            "Otomatik tahsilat ve hatırlatma ile program bitmeden yeni kutu yola çıkar.",
        },
        {
          id: "supp-adv-2",
          icon: "layers",
          title: "Paket ve aile paketleri",
          description:
            "Çoklu ürün paketleriyle sepet ortalamasını artırın; tek abonelikte birden fazla ürün.",
        },
        {
          id: "supp-adv-3",
          icon: "workflow",
          title: "Sıklık seçenekleri",
          description:
            "30, 60 veya 90 günlük planlar; müşteri ihtiyacına göre portaldan güncelleme.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Takviye için doğru abonelik altyapısı",
        titleEmphasis: "abonelik altyapısı",
        description:
          "Ödeme kurtarma ve şeffaf müşteri hesabı, takviye markalarının regülasyon ve güven beklentilerine uyumludur.",
      },
      items: [
        {
          id: "supp-rely-1",
          icon: "shield",
          title: "Güvenilir tahsilat",
          description:
            "Kayıtlı kart ile otomatik tahsilat; başarısız çekimlerde otomatik yeniden deneme.",
        },
        {
          id: "supp-rely-2",
          icon: "globe",
          title: "Bilgilendirme ve portal",
          description:
            "Sonraki teslimat, fatura ve iptal tek yerde; destek taleplerini azaltır.",
        },
        {
          id: "supp-rely-3",
          icon: "sparkles",
          title: "Gelir görünürlüğü",
          description:
            "Aylık tekrarlayan gelir, aktif abone ve abone kaybı metrikleri operasyon ve pazarlama için aynı kaynaktan alınabilir.",
        },
      ],
    },
    faq: {
      title: "Takviye aboneliği SSS",
      items: [
        {
          id: "supp-faq-1",
          question: "60 ve 90 günlük planlar destekleniyor mu?",
          answer: "Evet. Plan sıklığı markanızın kullanım önerisine göre tanımlanır ve müşteri portalında görünür.",
        },
        {
          id: "supp-faq-2",
          question: "Abonelik iptali nasıl işler?",
          answer:
            "İptal kuralları sizin politikalarınıza göre ayarlanır; müşteri portaldan iptal edebilir veya destek üzerinden işlem yapabilir.",
        },
        {
          id: "supp-faq-3",
          question: "Birden fazla ürün tek abonelikte olabilir mi?",
          answer: "Paket tanımlarıyla aynı abonelikte birden fazla ürün sunulabilir.",
        },
        {
          id: "supp-faq-4",
          question: "Ödeme başarısız olursa ne olur?",
          answer:
            "Ödeme kurtarma akışı devreye girer; müşteriye bildirim gider ve yapılandırılmış yeniden deneme yapılır.",
        },
      ],
    },
  },

  petFood: {
    key: "petFood",
    href: routes.subscriptions.petFood,
    meta: {
      title: "Pet maması & bakım abonelikleri — RELY Subs",
      description:
        "Mama, ödül ve sarf malzemelerinde otomatik teslimat ve müşteri portalı.",
    },
    hero: {
      eyebrow: "Sektör · Pet",
      title: "Pet sahipleri için otomatik mama teslimatı",
      titleEmphasis: "otomatik mama teslimatı",
      subtitle:
        "Mama bitmeden kutu kapıda; ağırlık ve yaşam evresine göre planlar, tahsilat ve lojistik öngörülebilir.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Pet sahipleri mama stoğunu takip etmek istemez; gecikme pet beslenmesini doğrudan etkiler ve marka güvenini zedeler.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; ‘bir daha unutma’ vaadiyle en yüksek abone tutma oranına sahip kategorilerden biridir; müşteri edinme maliyeti hızla geri döner.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Pet markalarında aboneliğin avantajları",
        titleEmphasis: "avantajları",
        description: "Doğru miktarda, doğru zamanda teslimat pet kategorisinin temel beklentisidir.",
      },
      items: [
        {
          id: "pet-adv-1",
          icon: "workflow",
          title: "Ağırlık & yaşam evresi planları",
          description:
            "Yavru, yetişkin ve yaşlı pet için farklı paketler; portaldan geçiş kolaylığı.",
        },
        {
          id: "pet-adv-2",
          icon: "layers",
          title: "Mama + ödül + sarf",
          description:
            "Tek abonelikte mama, ödül maması ve kum/tuvalet ürünü kombinasyonları.",
        },
        {
          id: "pet-adv-3",
          icon: "gauge",
          title: "Uzun ömürlü abone değeri",
          description:
            "Pet yaşam döngüsü boyunca abonelik; segment değişiminde plan yükseltme.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Pet aboneliği için RELY altyapısı",
        titleEmphasis: "RELY altyapısı",
        description:
          "Yüksek sipariş hacmi ve düşük hata toleransı; otomasyon ve ödeme güvenilirliği şarttır.",
      },
      items: [
        {
          id: "pet-rely-1",
          icon: "shield",
          title: "Kesintisiz tahsilat",
          description:
            "Mama bitiminden önce başarılı ödeme; yeniden deneme ile boş stok dönemini önleyin.",
        },
        {
          id: "pet-rely-2",
          icon: "globe",
          title: "Müşteri portalı",
          description:
            "Adres, pet profili ve teslimat tarihi müşteri tarafından güncellenir; destek yükü azalır.",
        },
        {
          id: "pet-rely-3",
          icon: "workflow",
          title: "Operasyon uyarıları",
          description:
            "Başarısız ödeme ve erteleme talepleri panelde görünür; ekip proaktif hareket eder.",
        },
      ],
    },
    faq: {
      title: "Pet aboneliği SSS",
      items: [
        {
          id: "pet-faq-1",
          question: "Farklı pet türleri için ayrı plan olur mu?",
          answer: "Köpek, kedi veya diğer türler için ayrı plan ve ürün setleri tanımlanabilir.",
        },
        {
          id: "pet-faq-2",
          question: "Müşteri teslimatı erteleyebilir mi?",
          answer: "Evet. Tatil veya stok fazlası durumunda portaldan erteleme desteklenir.",
        },
        {
          id: "pet-faq-3",
          question: "Ağırlık değişince paket güncellenir mi?",
          answer: "Müşteri veya destek panelden bir üst pakete geçebilir; fiyat farkı sonraki dönemde yansır.",
        },
        {
          id: "pet-faq-4",
          question: "Tek seferlik ürünlerle birlikte çalışır mı?",
          answer: "Abonelik kanalı mağaza kataloğunuzla entegre; tek seferlik ve abonelik ürünleri bir arada yönetilir.",
        },
      ],
    },
  },

  mealKits: {
    key: "mealKits",
    href: routes.subscriptions.mealKits,
    meta: {
      title: "Yemek kiti ve gıda abonelikleri — RELY Subs",
      description:
        "Haftalık menü, esnek teslimat penceresi ve öngörülebilir lojistik için abonelik altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Gıda ve yemek kiti",
      title: "Haftalık menü için abonelik modeli",
      titleEmphasis: "abonelik modeli",
      subtitle:
        "Müşteri menüsünü seçsin, siz üretim ve sevkiyatı abone sayısına göre planlayın.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Yemek kiti ve taze gıda tedarikinde son kullanma ve lojistik penceresi kritiktir; düzensiz sipariş fireyi artırır.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Haftalık veya iki haftalık abonelik; üretim hacmini sabitler, israfı düşürür ve müşteriye rutin kolaylığı sunar.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Yemek kiti markalarında aboneliğin avantajları",
        titleEmphasis: "avantajları",
        description: "Kesim tarihi ve teslimat penceresi bu kategorinin operasyonel omurgasıdır.",
      },
      items: [
        {
          id: "food-adv-1",
          icon: "gauge",
          title: "Öngörülebilir üretim",
          description:
            "Aktif abonelere göre haftalık üretim planı; ham madde tedarikini optimize edin.",
        },
        {
          id: "food-adv-2",
          icon: "workflow",
          title: "Teslimat penceresi",
          description:
            "Bölge ve gün seçimi; müşteri portalinde son teslimat tarihine kadar değişiklik.",
        },
        {
          id: "food-adv-3",
          icon: "layers",
          title: "Menü rotasyonu",
          description:
            "Haftalık menü paketleri; vegan, aile veya kalori hedefli planlar.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Yemek kiti için neden RELY?",
        titleEmphasis: "neden RELY?",
        description:
          "Yüksek operasyon temposu olan gıda markaları için bildirim, erteleme ve tahsilat otomasyonu hayati önem taşır.",
      },
      items: [
        {
          id: "food-rely-1",
          icon: "workflow",
          title: "Kesim tarihi öncesi değişiklik",
          description:
            "Müşteri kesimden önce menü veya teslimatı günceller; panelde son değişiklik listesi.",
        },
        {
          id: "food-rely-2",
          icon: "shield",
          title: "Ödeme ve iptal kuralları",
          description:
            "Kesim sonrası ücret politikaları net tanımlanır; hem müşteri hem operasyon aynı kurala bakar.",
        },
        {
          id: "food-rely-3",
          icon: "globe",
          title: "Doğrudan abonelik satışı",
          description:
            "Kendi sitenizde abonelik; pazar yeri komisyonu olmadan doğrudan müşteri ilişkisi.",
        },
      ],
    },
    faq: {
      title: "Yemek kiti ve gıda aboneliği SSS",
      items: [
        {
          id: "food-faq-1",
          question: "Haftalık menü değişimleri nasıl yönetilir?",
          answer: "Her dönem için plan ve ürün seti güncellenir; aktif aboneler bir sonraki kesimde yeni menüyü alır.",
        },
        {
          id: "food-faq-2",
          question: "Teslimat günü değiştirilebilir mi?",
          answer: "Kesim tarihinden önce portal veya destek üzerinden teslimat penceresi güncellenebilir.",
        },
        {
          id: "food-faq-3",
          question: "Bölgesel teslimat kısıtları desteklenir mi?",
          answer: "Planlar bölge veya posta kodu kurallarına bağlanabilir; uygun olmayan adreslerde kayıt engellenir.",
        },
        {
          id: "food-faq-4",
          question: "İlk hafta indirimli deneme yapılabilir mi?",
          answer: "Hediye çeki veya ilk kutu indirimi abonelik sitesinde tanımlanabilir.",
        },
      ],
    },
  },

  wellness: {
    key: "wellness",
    href: routes.subscriptions.wellness,
    meta: {
      title: "Wellness abonelikleri — RELY Subs",
      description:
        "Düzenli kullanım rutini, kişisel bakım ve wellness ürünleri için abonelik altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Wellness",
      title: "Wellness markalarında düzenli rutin",
      titleEmphasis: "düzenli rutin",
      subtitle:
        "Protein, kişisel bakım veya mindfulness ürünlerinde abonelik; müşteri alışkanlığını ve marka sadakatini güçlendirir.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Wellness ürünleri sonuç için düzenli kullanım ister; ara veren müşteri ürün etkisini görmez ve markayı bırakır.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; hedefe yönelik program paketleri (30/60 gün) ve hatırlatmalarla rutin sadakatini artırır.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Wellness markalarında aboneliğin avantajları",
        titleEmphasis: "avantajları",
        description: "Program paketleri ve çapraz kategori kombinasyonları wellness markalarında yaygındır.",
      },
      items: [
        {
          id: "well-adv-1",
          icon: "sparkles",
          title: "Program paketleri",
          description:
            "30 günlük detoks, 60 günlük protein veya uyku rutini gibi süreli paketler.",
        },
        {
          id: "well-adv-2",
          icon: "layers",
          title: "Rutin setleri",
          description:
            "Takviye, kişisel bakım ve aksesuarı tek abonelik programında birleştirin.",
        },
        {
          id: "well-adv-3",
          icon: "gauge",
          title: "Sadakat ve üst plan satışı",
          description:
            "Abone müşteriye özel içerik ve üst plan teklifleri; abone değeri odaklı büyüme.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Wellness için RELY tercih sebepleri",
        titleEmphasis: "tercih sebepleri",
        description:
          "Çok kanallı wellness markaları için tek abonelik omurgası: tahsilat, müşteri portalı ve bildirimler.",
      },
      items: [
        {
          id: "well-rely-1",
          icon: "globe",
          title: "Doğrudan müşteri ilişkisi",
          description:
            "Pazar yerine bağımlı olmadan kendi domaininizde abonelik ve yenileme.",
        },
        {
          id: "well-rely-2",
          icon: "shield",
          title: "Tahsilat ve abone kaybı kontrolü",
          description:
            "Başarısız ödeme kurtarma ve duraklatma; program yarıda kalmaz.",
        },
        {
          id: "well-rely-3",
          icon: "workflow",
          title: "Bildirimler",
          description:
            "Sonraki teslimat, ödeme ve kargo bildirimleri; destek talebi hacmini düşürür.",
        },
      ],
    },
    faq: {
      title: "Wellness aboneliği SSS",
      items: [
        {
          id: "well-faq-1",
          question: "Farklı wellness programları aynı anda sunulabilir mi?",
          answer: "Birden fazla plan ve paket tanımlanır; müşteri kayıtta veya portalde seçim yapar.",
        },
        {
          id: "well-faq-2",
          question: "Abonelik hediye olarak verilebilir mi?",
          answer: "Hediye çeki ile belirli süreli abonelik hediye edilebilir; alıcı portaldan aktivasyon yapar.",
        },
        {
          id: "well-faq-3",
          question: "E-ticaret altyapımla entegre mi?",
          answer:
            "RELY, kullandığınız e-ticaret altyapısına bağlanır; ürün ve sipariş akışı mağazanızla senkron kalır.",
        },
        {
          id: "well-faq-4",
          question: "Kurumsal wellness paketleri mümkün mü?",
          answer: "Çoklu abonelik ve özel fiyatlandırma için satış ekibimizle iletişime geçebilirsiniz.",
        },
      ],
    },
  },

  ...additionalSubscriptionVerticalsContent,
};

export function getSubscriptionVerticalBySlug(
  slug: SubscriptionVerticalSlug,
): SubscriptionVerticalContent {
  const key = subscriptionVerticalSlugToKey[slug];
  return {
    ...subscriptionVerticalsContent[key],
    visuals: verticalAssetsByKey[key],
  };
}
