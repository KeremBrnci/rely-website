/**
 * Ek sektör dikeyleri — subscription-verticals.ts ile birleştirilir.
 */

import { routes } from "@/config/routes";

type VerticalBlock = Omit<
  import("@/content/marketing/subscription-verticals").SubscriptionVerticalContent,
  "visuals"
>;

const primaryCta = { label: "Demo Talep Et", href: routes.contact };
const secondaryCta = { label: "Ürünü inceleyin", href: routes.product };

export const additionalSubscriptionVerticalsContent: Record<
  | "subscriptionBoxes"
  | "healthySnacks"
  | "grocery"
  | "specialtyPantry"
  | "householdEssentials"
  | "functionalBeverages"
  | "protein",
  VerticalBlock
> = {
  subscriptionBoxes: {
    key: "subscriptionBoxes",
    href: routes.subscriptions.subscriptionBoxes,
    meta: {
      title: "Abonelik kutuları — RELY Subs",
      description:
        "Aylık keşif kutuları, sürpriz ürün deneyimleri ve kürasyonlu abonelik paketleri için plan, tahsilat ve operasyon altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Abonelik kutuları",
      title: "Keşif kutularında tekrarlayan gelir",
      titleEmphasis: "tekrarlayan gelir",
      subtitle:
        "Her ay farklı ürünler sunan kutu aboneliklerinde tahsilat, paketleme planı ve müşteri deneyimini tek panelden yönetin.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Kutu modeli tek seferlik satışta sürpriz etkisini kaybeder; müşteri bir kez alır ve unutur.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; aylık keşif, sadakat ve öngörülebilir kargo hacmiyle kutu markalarının ana gelir motoru olur.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Abonelik kutularında kazanımlar",
        titleEmphasis: "kazanımlar",
        description:
          "Kürasyon, çeşit rotasyonu ve hediye abonelik bu dikeyin temel beklentileridir.",
      },
      items: [
        {
          id: "box-adv-1",
          icon: "sparkles",
          title: "Aylık keşif ve sürpriz",
          description:
            "Her dönem farklı ürün seti; abone merakını ve yenileme motivasyonunu canlı tutar.",
        },
        {
          id: "box-adv-2",
          icon: "layers",
          title: "Kürasyonlu paketler",
          description:
            "Standart, premium veya temalı kutuları ayrı planlarda sunun; ortalama sepet tutarını büyütün.",
        },
        {
          id: "box-adv-3",
          icon: "gauge",
          title: "Öngörülebilir operasyon",
          description:
            "Aktif abone sayısına göre paketleme ve stok planlayın; kesim tarihine göre üretim hacmini netleştirin.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Abonelik kutuları için RELY",
        titleEmphasis: "için RELY",
        description:
          "Kutu markaları için paket tanımı, hediye çekleri, tahsilat ve müşteri portalı tek altyapıda.",
      },
      items: [
        {
          id: "box-rely-1",
          icon: "layers",
          title: "Paket ve plan esnekliği",
          description:
            "Aylık, çeyreklik veya hediye kutusu planlarını tek panelden tanımlayın.",
        },
        {
          id: "box-rely-2",
          icon: "shield",
          title: "Tahsilat sürekliliği",
          description:
            "Otomatik yenileme ve ödeme kurtarma; kutu gönderimi ödeme gecikmesinde aksamaz.",
        },
        {
          id: "box-rely-3",
          icon: "globe",
          title: "Markalı abonelik sitesi",
          description:
            "Kutu seçimi, hediye abonelik ve kampanya kodları kendi domaininizde.",
        },
      ],
    },
    faq: {
      title: "Abonelik kutusu SSS",
      items: [
        {
          id: "box-faq-1",
          question: "Kutu içeriği her ay değişebilir mi?",
          answer:
            "Evet. Plan ve paket tanımlarıyla dönemsel ürün setlerini güncellersiniz; aktif aboneler sonraki kesimde yeni içeriği alır.",
        },
        {
          id: "box-faq-2",
          question: "Hediye abonelik sunulabilir mi?",
          answer:
            "Hediye çeki veya hediye kutusu planı tanımlanabilir; alıcı portaldan aktivasyon yapar.",
        },
        {
          id: "box-faq-3",
          question: "Farklı kutu tipleri (standart / premium) aynı anda satılabilir mi?",
          answer: "Birden fazla plan ve paket aynı anda yayında olabilir; müşteri kayıtta veya portalde seçer.",
        },
        {
          id: "box-faq-4",
          question: "Mağazamla entegre mi?",
          answer:
            "RELY e-ticaret altyapınıza bağlanır; sipariş ve stok akışı mağaza panelinizle senkron kalır.",
        },
      ],
    },
  },

  healthySnacks: {
    key: "healthySnacks",
    href: routes.subscriptions.healthySnacks,
    meta: {
      title: "Sağlıklı atıştırmalık abonelikleri — RELY Subs",
      description:
        "Protein bar, kuruyemiş, granola ve sağlıklı kutu abonelikleri için esnek plan, otomatik tahsilat ve müşteri portalı.",
    },
    hero: {
      eyebrow: "Sektör · Sağlıklı atıştırmalıklar",
      title: "Atıştırmalık markalarında düzenli kutu geliri",
      titleEmphasis: "düzenli kutu geliri",
      subtitle:
        "Müşteriler favori bar ve karışımlarını periyodik alsın; siz stok, paket ve tahsilatı tek panelden yönetin.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Sağlıklı atıştırmalık alışkanlık ürünüdür; tek seferlik siparişte müşteri rutini kopar, marka hatırlanmazlığa kaybolur.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; düzenli teslimat, çeşit rotasyonu ve abone indirimiyle hem abone değerini hem de tahmin edilebilir üretim hacmini artırır.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Sağlıklı atıştırmalıkta abonelik kazanımları",
        titleEmphasis: "kazanımları",
        description:
          "Kutu çeşitleri, sıklık ve kanal esnekliği bu dikeyin temel beklentileridir.",
      },
      items: [
        {
          id: "snack-adv-1",
          icon: "layers",
          title: "Kutu & karışım paketleri",
          description:
            "Protein bar, kuruyemiş ve granola setlerini tek abonelik planında birleştirin.",
        },
        {
          id: "snack-adv-2",
          icon: "workflow",
          title: "Esnek sıklık",
          description:
            "Haftalık veya aylık teslimat; müşteri portaldan erteleme ve adres güncelleme.",
        },
        {
          id: "snack-adv-3",
          icon: "gauge",
          title: "Üretim planı netliği",
          description:
            "Aktif abone sayısına göre parti ve ambalaj planlayın; fireyi azaltın.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Atıştırmalık aboneliği için RELY",
        titleEmphasis: "için RELY",
        description:
          "Doğrudan satış yapan atıştırmalık markaları için ödeme kurtarma, müşteri portalı ve Shopify ve İkas mağaza entegrasyonu.",
      },
      items: [
        {
          id: "snack-rely-1",
          icon: "shield",
          title: "Ödeme kurtarma",
          description:
            "Başarısız çekimlerde otomatik yeniden deneme; abonelik sessizce iptal olmaz.",
        },
        {
          id: "snack-rely-2",
          icon: "globe",
          title: "Abonelik sitesi",
          description:
            "Kendi domaininizde kutu seçimi ve ilk sipariş kampanyaları.",
        },
        {
          id: "snack-rely-3",
          icon: "sparkles",
          title: "Tek operasyon paneli",
          description:
            "Abonelik, sipariş ve müşteri geçmişi aynı ekranda; Excel takibi biter.",
        },
      ],
    },
    faq: {
      title: "Sağlıklı atıştırmalık aboneliği SSS",
      items: [
        {
          id: "snack-faq-1",
          question: "Kutu içeriği her dönem değişebilir mi?",
          answer:
            "Plan ve paket tanımlarıyla dönemsel ürün setleri güncellenir; aktif aboneler sonraki kesimde yeni içeriği alır.",
        },
        {
          id: "snack-faq-2",
          question: "İlk kutu indirimi sunulabilir mi?",
          answer:
            "Hediye çeki ve kampanya kodları abonelik sitesinde desteklenir.",
        },
        {
          id: "snack-faq-3",
          question: "Soğuk zincir gerektiren ürünler desteklenir mi?",
          answer:
            "Lojistik kuralınız plan ve bölge kısıtlarıyla tanımlanır; uygun olmayan adreslerde kayıt engellenir.",
        },
        {
          id: "snack-faq-4",
          question: "Kurulum süresi ne kadar?",
          answer:
            "Mağaza ve ödeme bağlantısıyla çoğu marka birkaç iş günü içinde canlıya alınabilir.",
        },
      ],
    },
  },

  grocery: {
    key: "grocery",
    href: routes.subscriptions.grocery,
    meta: {
      title: "Market alışverişi abonelikleri — RELY Subs",
      description:
        "Temel gıda, sık tüketilen market ürünleri ve tekrarlayan sepet aboneliği; tahsilat ve lojistik öngörülebilirliği.",
    },
    hero: {
      eyebrow: "Sektör · Market alışverişleri",
      title: "Market alışverişini abonelik ritmine taşıyın",
      titleEmphasis: "abonelik ritmine",
      subtitle:
        "Sık tüketilen temel gıda ve market ürünlerinde müşteri stok takibini operasyonunuza devredin; gelir düzenli akar.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Un, pirinç, zeytinyağı ve temel market ürünleri düzenli tükenir; müşteri her seferinde yeniden sepet kurmak istemez.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; ‘eksik kalmasın’ vaadiyle yüksek abone tutma oranı ve öngörülebilir sevkiyat hacmi sağlar.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Market dikeyinde abonelik faydaları",
        titleEmphasis: "faydaları",
        description:
          "Otomatik yenileme odaklı kurgu ve bölgesel teslimat kuralları kritiktir.",
      },
      items: [
        {
          id: "groc-adv-1",
          icon: "workflow",
          title: "Otomatik yenileme planları",
          description:
            "Aylık veya 4 haftada bir temel sepet; müşteri portaldan ürün ekleme/çıkarma.",
        },
        {
          id: "groc-adv-2",
          icon: "layers",
          title: "Çok ürünlü sepet",
          description:
            "Tek abonelikte un, yağ, konserve ve temel gıda bir arada yönetilir.",
        },
        {
          id: "groc-adv-3",
          icon: "gauge",
          title: "Lojistik öngörüsü",
          description:
            "Aktif abone ve bölge kırılımıyla depo ve rota planlaması kolaylaşır.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Market aboneliği için RELY altyapısı",
        titleEmphasis: "RELY altyapısı",
        description:
          "Yüksek sipariş sıklığı ve düşük hata toleransı için otomasyon ve güvenilir tahsilat.",
      },
      items: [
        {
          id: "groc-rely-1",
          icon: "shield",
          title: "Kesintisiz tahsilat",
          description:
            "Ödeme kurtarma ve kart güncelleme ile abonelik aralıksız devam eder.",
        },
        {
          id: "groc-rely-2",
          icon: "globe",
          title: "Müşteri portalı",
          description:
            "Adres, teslimat günü ve sepet güncellemesi müşteri tarafından yapılır.",
        },
        {
          id: "groc-rely-3",
          icon: "workflow",
          title: "Bölge & stok kuralları",
          description:
            "Planlar posta kodu ve stok durumuna bağlanır; operasyon tek gerçeklikte kalır.",
        },
      ],
    },
    faq: {
      title: "Market aboneliği SSS",
      items: [
        {
          id: "groc-faq-1",
          question: "Minimum sepet tutarı veya ücretsiz kargo kuralı tanımlanır mı?",
          answer:
            "Plan ve fiyatlandırma kuralları RELY üzerinden yapılandırılır; kampanyalar abonelik sitesinde yansır.",
        },
        {
          id: "groc-faq-2",
          question: "Teslimat bölgesi kısıtlanabilir mi?",
          answer: "Evet. Planlar bölge veya posta kodu listesine bağlanabilir.",
        },
        {
          id: "groc-faq-3",
          question: "Tek seferlik market siparişleriyle birlikte çalışır mı?",
          answer:
            "Abonelik kanalı mağaza kataloğunuzla entegre; tek seferlik ve abonelik ürünleri bir arada yönetilir.",
        },
        {
          id: "groc-faq-4",
          question: "Kurulum ne kadar sürer?",
          answer:
            "Entegrasyon ve ödeme bağlantısıyla çoğu ekip birkaç iş günü içinde canlıya geçer.",
        },
      ],
    },
  },

  specialtyPantry: {
    key: "specialtyPantry",
    href: routes.subscriptions.specialtyPantry,
    meta: {
      title: "Özel tüketim ürünleri abonelikleri — RELY Subs",
      description:
        "Tahin, pekmez, kuruyemiş, bal ve gurme kiler ürünlerinde düzenli teslimat; plan, paket ve otomatik tahsilat altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Özel tüketim ürünleri",
      title: "Gurme kiler markalarında tekrarlayan sipariş",
      titleEmphasis: "tekrarlayan sipariş",
      subtitle:
        "Tahin, pekmez, kuruyemiş ve premium gıda ürünlerinde müşteri alışkanlığını abonelikle sürdürün; stok ve tahsilatı tek panelden yönetin.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Özel tüketim ürünleri sadakat gerektirir; tek seferlik alımda müşteri farklı satıcıya kayar, marka rutini kopar.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; düzenli teslimat, set rotasyonu ve abone fiyatıyla hem sadakati hem de öngörülebilir üretim hacmini artırır.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Özel tüketimde abonelik kazanımları",
        titleEmphasis: "kazanımları",
        description:
          "Set paketleri, sıklık esnekliği ve hediye abonelik bu dikeyin temel beklentileridir.",
      },
      items: [
        {
          id: "spec-adv-1",
          icon: "layers",
          title: "Kiler set paketleri",
          description:
            "Tahin, pekmez ve kuruyemiş karışımlarını aylık veya çeyreklik planlarda sunun.",
        },
        {
          id: "spec-adv-2",
          icon: "workflow",
          title: "Esnek sıklık",
          description:
            "Aylık veya 6 haftada bir teslimat; müşteri portaldan erteleme ve adres güncelleme.",
        },
        {
          id: "spec-adv-3",
          icon: "gauge",
          title: "Parti planı netliği",
          description:
            "Aktif abone sayısına göre üretim ve ambalaj hacmini önceden planlayın.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Özel tüketim aboneliği için RELY",
        titleEmphasis: "için RELY",
        description:
          "Gurme ve geleneksel gıda markaları için paket tanımı, tahsilat ve abonelik sitesi tek altyapıda.",
      },
      items: [
        {
          id: "spec-rely-1",
          icon: "shield",
          title: "Kesintisiz tahsilat",
          description:
            "Otomatik yenileme ve ödeme kurtarma; düzenli teslimat ödeme gecikmesinde aksamaz.",
        },
        {
          id: "spec-rely-2",
          icon: "globe",
          title: "Abonelik sitesi",
          description:
            "Set seçimi, hediye abonelik ve kampanya kodları kendi domaininizde.",
        },
        {
          id: "spec-rely-3",
          icon: "sparkles",
          title: "Paket rotasyonu",
          description:
            "Dönemsel ürün setlerini plan tanımında güncelleyin; aktif aboneler sonraki kesimde alır.",
        },
      ],
    },
    faq: {
      title: "Özel tüketim aboneliği SSS",
      items: [
        {
          id: "spec-faq-1",
          question: "Tahin, pekmez ve kuruyemiş aynı planda birleştirilebilir mi?",
          answer:
            "Evet. Birden fazla plan ve paket tanımlanır; müşteri kayıtta veya portalde set seçer.",
        },
        {
          id: "spec-faq-2",
          question: "Ürün seti her dönem değişebilir mi?",
          answer:
            "Plan ve paket tanımlarıyla dönemsel içerik güncellenir; aktif aboneler sonraki teslimatta yeni seti alır.",
        },
        {
          id: "spec-faq-3",
          question: "Hediye abonelik sunulabilir mi?",
          answer:
            "Hediye çeki veya hediye paketi planı tanımlanabilir; alıcı portaldan aktivasyon yapar.",
        },
        {
          id: "spec-faq-4",
          question: "Mağazamla entegre mi?",
          answer:
            "RELY e-ticaret altyapınıza bağlanır; sipariş ve stok akışı mağaza panelinizle senkron kalır.",
        },
      ],
    },
  },

  householdEssentials: {
    key: "householdEssentials",
    href: routes.subscriptions.householdEssentials,
    meta: {
      title: "Ev tüketim ürünleri abonelikleri — RELY Subs",
      description:
        "Deterjan, bulaşık ve yüzey temizleyicileri ile ev bakım sarf ürünlerinde otomatik yenileme aboneliği.",
    },
    hero: {
      eyebrow: "Sektör · Ev tüketim ürünleri",
      title: "Temizlik ve ev bakımında düzenli yenileme",
      titleEmphasis: "düzenli yenileme",
      subtitle:
        "Deterjan, temizlik malzemesi ve sarf ürünlerinde müşteri stok takibini aboneliğe taşıyın; tahsilat ve sevkiyat öngörülebilir olsun.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Çamaşır deterjanı, bulaşık sıvısı ve temizlik ürünleri düzenli biter; müşteri her ay aynı ürünleri yeniden aramak istemez.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; otomatik yenileme ve sabit teslimat ritmiyle yüksek abone tutma oranı ve düzenli gelir sağlar.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Ev tüketiminde abonelik faydaları",
        titleEmphasis: "faydaları",
        description:
          "Yenileme odaklı planlar, çok ürünlü paketler ve bölgesel teslimat kuralları kritiktir.",
      },
      items: [
        {
          id: "house-adv-1",
          icon: "workflow",
          title: "Otomatik yenileme planları",
          description:
            "Aylık veya 4 haftada bir temizlik paketi; müşteri portaldan ürün ekleme ve çıkarma.",
        },
        {
          id: "house-adv-2",
          icon: "layers",
          title: "Ev bakım setleri",
          description:
            "Deterjan, yumuşatıcı, bulaşık ve yüzey temizleyiciyi tek abonelikte birleştirin.",
        },
        {
          id: "house-adv-3",
          icon: "gauge",
          title: "Lojistik öngörüsü",
          description:
            "Aktif abone ve bölge kırılımıyla depo ve rota planlaması kolaylaşır.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Ev tüketim aboneliği için RELY",
        titleEmphasis: "için RELY",
        description:
          "Yüksek sipariş sıklığı ve düşük hata toleransı için otomasyon ve güvenilir tahsilat.",
      },
      items: [
        {
          id: "house-rely-1",
          icon: "shield",
          title: "Kesintisiz tahsilat",
          description:
            "Ödeme kurtarma ve kart güncelleme ile abonelik aralıksız devam eder.",
        },
        {
          id: "house-rely-2",
          icon: "globe",
          title: "Müşteri portalı",
          description:
            "Adres, teslimat günü ve paket içeriği müşteri tarafından güncellenir.",
        },
        {
          id: "house-rely-3",
          icon: "workflow",
          title: "Bölge & stok kuralları",
          description:
            "Planlar posta kodu ve stok durumuna bağlanır; operasyon tek gerçeklikte kalır.",
        },
      ],
    },
    faq: {
      title: "Ev tüketim aboneliği SSS",
      items: [
        {
          id: "house-faq-1",
          question: "Farklı temizlik ürünleri aynı abonelikte olur mu?",
          answer:
            "Evet. Deterjan, bulaşık ve yüzey temizleyici tek pakette veya ayrı planlarda tanımlanabilir.",
        },
        {
          id: "house-faq-2",
          question: "Teslimat bölgesi kısıtlanabilir mi?",
          answer: "Evet. Planlar bölge veya posta kodu listesine bağlanabilir.",
        },
        {
          id: "house-faq-3",
          question: "Tek seferlik siparişlerle birlikte çalışır mı?",
          answer:
            "Abonelik kanalı mağaza kataloğunuzla entegre; tek seferlik ve abonelik ürünleri bir arada yönetilir.",
        },
        {
          id: "house-faq-4",
          question: "Kurulum ne kadar sürer?",
          answer:
            "Entegrasyon ve ödeme bağlantısıyla çoğu ekip birkaç iş günü içinde canlıya geçer.",
        },
      ],
    },
  },

  functionalBeverages: {
    key: "functionalBeverages",
    href: routes.subscriptions.functionalBeverages,
    meta: {
      title: "Sağlıklı içecek abonelikleri — RELY Subs",
      description:
        "Bitki çayı, detoks karışımı, katkısız meyve suyu ve fonksiyonel içecek markaları için abonelik planları ve otomatik tahsilat.",
    },
    hero: {
      eyebrow: "Sektör · Sağlıklı içecekler",
      title: "Sağlıklı içecek markalarında tekrarlayan sipariş",
      titleEmphasis: "tekrarlayan sipariş",
      subtitle:
        "Bitki çayları, kilo yönetimi karışımları, soğuk sıkım meyve suları ve vitaminli içeceklerde müşteri rutinini abonelikle sürdürün.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Sağlıklı içecekler günlük veya haftalık tüketim ürünüdür; stok bitince müşteri başka markaya geçer.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; düzenli teslimat, çay/aroma rotasyonu ve abone fiyatıyla alışkanlığı markaya kilitler.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "İçecek dikeyinde abonelik avantajları",
        titleEmphasis: "avantajları",
        description:
          "Sıklık, paket hacmi ve soğuk zincir kuralları bu kategoride öne çıkar.",
      },
      items: [
        {
          id: "bev-adv-1",
          icon: "workflow",
          title: "Haftalık / aylık planlar",
          description:
            "6’lı, 12’li kutu veya tek şişe otomatik yenileme; portaldan sıklık değişimi.",
        },
        {
          id: "bev-adv-2",
          icon: "layers",
          title: "Çeşit paketleri",
          description:
            "Detoks çayı, yeşil çay, meyve suyu veya bitkisel karışım setlerini tek abonelikte sunun.",
        },
        {
          id: "bev-adv-3",
          icon: "gauge",
          title: "Sadakat ve sepet büyütme",
          description:
            "Abone müşteriye özel içerik ve üst paket; abone değeri odaklı büyüme.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "İçecek aboneliği için RELY",
        titleEmphasis: "için RELY",
        description:
          "Doğrudan satış yapan içecek markaları için tahsilat, bildirim ve abonelik sitesi tek platformda.",
      },
      items: [
        {
          id: "bev-rely-1",
          icon: "shield",
          title: "Ödeme güvenilirliği",
          description:
            "Kayıtlı kart ile tahsilat ve ödeme kurtarma; abonelik aralıksız yenilenir.",
        },
        {
          id: "bev-rely-2",
          icon: "globe",
          title: "Abonelik sitesi",
          description:
            "Kendi domaininizde abonelik başlatma ve müşteri portalı.",
        },
        {
          id: "bev-rely-3",
          icon: "sparkles",
          title: "Bildirimler",
          description:
            "Sonraki teslimat ve ödeme hatırlatmaları; destek yükünü düşürür.",
        },
      ],
    },
    faq: {
      title: "Sağlıklı içecek aboneliği SSS",
      items: [
        {
          id: "bev-faq-1",
          question: "Çay, meyve suyu ve karışım gibi farklı ürünler aynı planda olur mu?",
          answer:
            "Birden fazla plan ve paket tanımlanır; müşteri kayıtta veya portalde çay, su veya karışım seçer.",
        },
        {
          id: "bev-faq-2",
          question: "Müşteri teslimatı erteleyebilir mi?",
          answer: "Evet. Portaldan erteleme ve sıklık değişimi desteklenir.",
        },
        {
          id: "bev-faq-3",
          question: "Soğuk zincir gerektiren içecekler için kural tanımlanır mı?",
          answer:
            "Bölge ve lojistik kısıtları plan seviyesinde yapılandırılabilir.",
        },
        {
          id: "bev-faq-4",
          question: "İlk sipariş indirimi verilebilir mi?",
          answer:
            "Hediye çeki ve kampanya kodları abonelik sitesinde kullanılabilir.",
        },
      ],
    },
  },

  protein: {
    key: "protein",
    href: routes.subscriptions.protein,
    meta: {
      title: "Sağlıklı protein tozu abonelikleri — RELY Subs",
      description:
        "Whey, bitkisel ve spor protein tozu abonelikleri; periyot, paket ve otomatik tahsilat altyapısı.",
    },
    hero: {
      eyebrow: "Sektör · Protein tozu",
      title: "Protein markalarında düzenli yenileme",
      titleEmphasis: "düzenli yenileme",
      subtitle:
        "Spor ve beslenme odaklı müşteriler protein stoğunu abonelikle tutsun; siz plan, paket ve tahsilatı yönetin.",
      primaryCta,
      secondaryCta,
    },
    whyUsed: {
      problemLabel: "Neden abonelik?",
      problem:
        "Protein tozu düzenli tüketim ürünüdür; tek seferlik alımda müşteri programdan çıkınca abone kaybı artar.",
      solutionLabel: "Neden mantıklı?",
      solution:
        "Abonelik; aylık kutu, aroma seçimi ve abone indirimiyle hem sadakat hem öngörülebilir satış hacmi sağlar.",
    },
    advantages: {
      intro: {
        eyebrow: "Avantajlar",
        title: "Protein dikeyinde abonelik kazanımları",
        titleEmphasis: "kazanımları",
        description:
          "Aroma, gramaj ve program paketleri bu dikeyin temel kurgularıdır.",
      },
      items: [
        {
          id: "prot-adv-1",
          icon: "layers",
          title: "Gramaj & aroma planları",
          description:
            "900 g, 2 kg veya çoklu aroma setleri; portaldan plan yükseltme.",
        },
        {
          id: "prot-adv-2",
          icon: "workflow",
          title: "Program paketleri",
          description:
            "30 veya 60 günlük spor beslenmesi paketleri tek abonelikte.",
        },
        {
          id: "prot-adv-3",
          icon: "gauge",
          title: "Yüksek yenileme oranı",
          description:
            "Düzenli kullanım alışkanlığı abonelikle doğal olarak desteklenir.",
        },
      ],
    },
    whyRely: {
      intro: {
        eyebrow: "Neden RELY",
        title: "Protein aboneliği için RELY",
        titleEmphasis: "için RELY",
        description:
          "Spor beslenmesi markaları için ödeme kurtarma, abonelik sitesi ve e-ticaret entegrasyonu.",
      },
      items: [
        {
          id: "prot-rely-1",
          icon: "shield",
          title: "Başarısız ödeme kurtarma",
          description:
            "Kart yenileme ve otomatik yeniden deneme ile program yarıda kalmaz.",
        },
        {
          id: "prot-rely-2",
          icon: "globe",
          title: "Abonelik sitesi",
          description:
            "Kendi domaininizde plan seçimi ve ilk kutu kampanyaları.",
        },
        {
          id: "prot-rely-3",
          icon: "workflow",
          title: "Mağaza senkronu",
          description:
            "E-ticaret kataloğunuz (Shopify veya İkas) ile ürün ve sipariş akışı uyumlu kalır.",
        },
      ],
    },
    faq: {
      title: "Protein tozu aboneliği SSS",
      items: [
        {
          id: "prot-faq-1",
          question: "Bitkisel ve whey protein ayrı planlarda sunulur mu?",
          answer: "Evet. Ürün tipine göre ayrı plan ve paket tanımlanabilir.",
        },
        {
          id: "prot-faq-2",
          question: "Aroma değişimi müşteri tarafından yapılabilir mi?",
          answer:
            "Portaldan bir sonraki dönem için aroma veya gramaj güncellenebilir.",
        },
        {
          id: "prot-faq-3",
          question: "Takviye aboneliğinden farkı nedir?",
          answer:
            "Vitamin odaklı takviye sayfalarından bağımsız; protein ve spor beslenmesi için özelleştirilmiş plan şablonları sunulur.",
        },
        {
          id: "prot-faq-4",
          question: "Kurulum süresi?",
          answer:
            "Ödeme ve mağaza entegrasyonu tamamlandığında çoğu marka birkaç iş günü içinde yayına alınır.",
        },
      ],
    },
  },
};
