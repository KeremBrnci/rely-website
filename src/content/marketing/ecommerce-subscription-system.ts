/**
 * E-ticaret abonelik sistemi SEO sayfası (TR) — /e-ticaret-abonelik-sistemi.
 * İçerik kaynağı: https://relysubs.com/e-ticaret-abonelik-sistemi
 * Ödeme/platform detayları docs/rely-product-reference.md ile hizalanır.
 */

import { routes } from "@/config/routes";
import {
  marketingCardStorageComplianceAnswer,
  marketingCardStorageFaqAnswer,
  marketingPaymentIntegrationShortPhrase,
  marketingPaymentIntegrationsPhrase,
} from "@/config/marketing/copy";

export type EcommerceSubscriptionStat = {
  id: string;
  value: string;
  label: string;
};

export type EcommerceSubscriptionSection = {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type EcommerceSubscriptionSector = {
  id: string;
  title: string;
  description: string;
};

export type EcommerceSubscriptionFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const ecommerceSubscriptionMeta = {
  title: "E-Ticaret Abonelik Sistemi ve Altyapısı",
  description:
    "E-ticaret abonelik sistemi ile tekrarlayan gelir modeli kurun. Abonelik e-ticaret altyapısı; mevcut mağazanızla entegrasyon, güvenli tekrarlı ödeme ve müşteri portalı — RELY Subs.",
} as const;

const contactCta = { label: "Hemen teklif alın", href: routes.contact };

export const ecommerceSubscriptionPage = {
  breadcrumb: "E-ticaret rehberi",

  hero: {
    eyebrow: "E-ticaret abonelik sistemi",
    title: "E-ticaret abonelik sistemi ile tekrar eden gelir modeli kurun",
    titleEmphasis: "tekrar eden gelir modeli",
    subtitle:
      "E-ticaret abonelik sistemi, modern markaların sadece ürün değil sürdürülebilir bir hizmet ve düzenli nakit akışı inşa etmesini sağlayan en güçlü stratejilerden biridir.",
    primaryCta: contactCta,
    secondaryCta: { label: "Ürünü inceleyin", href: routes.product },
    stats: [
      { id: "conv", value: "+25%", label: "Dönüşüm oranı" },
      { id: "pci", value: "PCI-DSS", label: "Uyumlu altyapı" },
      { id: "ltv", value: "3,2×", label: "Abone değeri artışı" },
      { id: "churn", value: "−40%", label: "Abone kaybı azalışı" },
    ] satisfies EcommerceSubscriptionStat[],
  },

  sections: [
    {
      id: "dynamics",
      number: "01",
      title: "Abonelik sistemi ve tekrarlı ödeme dinamikleri",
      paragraphs: [
        "Modern bir abonelik sistemi, sadece ürün satmak değil müşteri ile uzun vadeli bir bağ kurmak üzerine kurgulanır. Bu bağın teknolojik temelini tekrarlı ödeme sistemi oluşturur: müşterinin her seferinde kart bilgilerini girmesine gerek kalmadan, belirlenen periyotlarda otomatik tahsilat yapılır.",
        `Türkiye e-ticaret pazarında güvenli bir tekrarlı ödeme kurgulamak markalar için en büyük zorluklardan biridir. RELY Subs, API tabanlı mimarisiyle ${marketingPaymentIntegrationShortPhrase} sayesinde e-ticaret abonelik sistemi içinde pürüzsüz bir tahsilat süreci sunar. Bu yapı hem nakit akışını korur hem de müşteriye kesintisiz bir deneyim yaşatır.`,
      ],
    },
    {
      id: "how-it-works",
      number: "02",
      title: "Abonelik sistemi nasıl çalışır?",
      paragraphs: [
        "RELY Subs, mevcut e-ticaret altyapınıza API tabanlı bağlantı ile entegre olur. Popüler platformlar ve özel entegrasyonlar desteklenir; teknik akış markanızın süreçlerini bozmamak üzere tasarlanmıştır:",
      ],
      bullets: [
        "Subdomain entegrasyonu: Abonelik süreçleri ve müşteri paneli abonelik.markaniz.com gibi size ait bir subdomain üzerinden çalışır; ana sitenizin performansı etkilenmez.",
        "Ürün senkronizasyonu: Mevcut mağazanızdaki ürünler panele çekilir; stok ve fiyat API üzerinden güncel kalır.",
        "Abonelik planları: Ürünlere özel planlar, indirimler ve periyotlar (30, 60, 90 gün vb.) tanımlanır.",
        "Tekrarlayan ödeme motoru: Ödeme alma ve kart saklama RELY'nin güvenli altyapısında yönetilir; kartlar RELY'de tutulmaz.",
        "Sipariş geri bildirimi: Her başarılı tahsilatta sipariş verisi e-ticaret panelinize otomatik aktarılır.",
      ],
      paragraphsAfterBullets: [
        "RELY Subs basit bir market eklentisi değil; veriyi altyapınızdan çeken ve tüm süreci profesyonel bir abonelik yazılımı olarak yöneten bağımsız bir katmandır.",
      ],
    },
    {
      id: "platforms",
      number: "03",
      title: "Platformlara göre abonelik yönetimi",
      paragraphs: [
        "Her platformun kendine has dinamikleri vardır. İhtiyacınıza göre şu kaynaklara göz atabilirsiniz:",
      ],
      links: [
        { label: "Ürün ve abonelik altyapısı", href: routes.product },
        { label: "Kahve abonelik çözümü", href: routes.subscriptions.coffee },
        { label: "Tüm özellikler", href: routes.features.plans },
        { label: "Fiyatlandırma", href: routes.pricingTr },
      ],
    },
    {
      id: "sectors",
      number: "04",
      title: "Hangi sektörler için uygundur?",
      paragraphs: [
        "Abonelik modeli her geçen gün yeni sektörlere yayılıyor. Bazı kategorilerde ise vazgeçilmez bir kanal haline geldi:",
      ],
    },
    {
      id: "advantages",
      number: "05",
      title: "Abonelik modelinin Türkiye'deki avantajları",
      paragraphs: [
        "Reklam maliyetlerinin (müşteri edinme maliyeti) arttığı bu dönemde abonelik modeli markalara somut avantajlar sağlar:",
      ],
      bullets: [
        "Nakit akışı stabilitesi: Her ay ne kadar ciro elde edeceğinizi bilmek finansal planlamayı kolaylaştırır.",
        "Stok yönetimi: Gelecek aylardaki gönderim hacmini öngörerek depo maliyetlerini optimize edersiniz.",
        "Kampanya bağımlılığının azalması: Sürekli indirim kovalamak yerine sadık bir kitleden düzenli gelir elde edersiniz.",
        "Müşteri bağlılığı: Abonelik sistemine dahil olan müşteri, rakiplere karşı daha korunaklı bir ilişki kurar.",
      ],
      paragraphsAfterBullets: [
        "Markanız için abonelik modelinin uygunluğunu öğrenmek ve size özel bir strateji geliştirmek için bizimle iletişime geçebilirsiniz.",
      ],
    },
    {
      id: "pricing-models",
      number: "06",
      title: "Fiyatlandırma modelleri nelerdir?",
      paragraphs: [
        "Bir e-ticaret abonelik sistemi kullanırken genellikle üç farklı fiyatlandırma yapısıyla karşılaşırsınız:",
        "Sabit aylık ücret: Platform kullanımı için ödenen fix bedel; genellikle kurulum ve teknik destek içerir.",
        "Komisyon bazlı (revenue share): Abonelik üzerinden yapılan her başarılı tahsilattan belirli bir yüzde alınır; platform sağlayıcısı markanın büyümesiyle orantılı kazanır.",
        "Hibrit model: Düşük sabit ücret ile düşük komisyonun birleşimi; orta ve büyük ölçekli markalar için sık tercih edilir.",
      ],
      links: [{ label: "Detaylı fiyatlandırma planlarımız", href: routes.pricingTr }],
    },
    {
      id: "secure-payment",
      number: "07",
      title: "Güvenli tekrarlı ödeme sistemi nasıl kurulur?",
      paragraphs: [
        "Başarılı bir abonelik sistemi için en kritik parça tekrarlı ödeme altyapısıdır. Kart verileri sunucularda tutulmaz; ilk başarılı işlemden sonra ödeme kuruluşunda bir token oluşturulur.",
        `${marketingPaymentIntegrationsPhrase}. Tekrarlı ödeme sistemi şu avantajları beraberinde getirir:`,
      ],
      bullets: [
        "Başarısız ödeme kurtarma: Bakiye yetersizliği veya süresi dolmuş kartta sistem yeniden dener ve müşteriye otomatik bilgi verir.",
        "Akıllı kart saklama: Müşteri bir kez kartını kaydettiğinde sonraki tüm dönemlerde ödemeler otomatik çekilir.",
        "Abonelik bazlı indirimler: Yalnızca tekrarlı ödemeyi kabul eden müşterilere özel kampanyalar kurgulayabilirsiniz.",
      ],
    },
    {
      id: "architecture",
      number: "08",
      title: "Teknik altyapı: API tabanlı ve tek parça sistemler",
      paragraphs: [
        "Abonelik sisteminizi kurarken altyapı tipi kritik bir karardır. Geleneksel tek parça yapılar sizi belirli bir tasarıma hapsederken, RELY Subs gibi API tabanlı yapılar esnek entegrasyon sunar.",
        "API tabanlı mimarinin avantajı: Mevcut e-ticaret sitenizin tasarımını değiştirmeden arka planda profesyonel bir abonelik motoru çalıştırabilmeniz. Bu, hız ve esneklik açısından markanızı öne taşır; farklı para birimleri ve dillerle uyumlu bir e-ticaret abonelik sistemi için de doğru tercihtir.",
      ],
    },
  ] as (EcommerceSubscriptionSection & { paragraphsAfterBullets?: string[] })[],

  sectors: [
    {
      id: "coffee",
      title: "Kahve ve içecek",
      description:
        "Kahve kavurma evleri için kahve abonelik sistemi en kârlı kanallardan biridir. Taze kavrum takvimine göre yönetilen sistemde abone kaybı minimumda kalır.",
    },
    {
      id: "supplements",
      title: "Takviye ve sağlık ürünleri",
      description:
        "Vitamin ve protein tozları periyodik kullanım gerektirir. 30 günlük paketin tam zamanında kapıda olması rutin oluşturur; tekrar sipariş oranı yükselir.",
    },
    {
      id: "beauty",
      title: "Kozmetik ve kişisel bakım",
      description:
        "Cilt bakımı ve tıraş setleri abonelik için idealdir. Düzenli ürün gönderimi veya güzellik kutusu konseptiyle müşterinizin tek markası olabilirsiniz.",
    },
    {
      id: "pet",
      title: "Evcil hayvan ürünleri",
      description:
        "Mama ve kum gibi sürekli ihtiyaç duyulan ürünlerin aboneliği pet e-ticaret için vazgeçilmezdir; lojistik ve stok planlamasına net veri sağlar.",
    },
  ] satisfies EcommerceSubscriptionSector[],

  inlineCta: {
    title: "E-ticareti düzenli gelir modeline dönüştürün",
    description:
      "Abonelik modeli ile nakit akışınızı stabilize edin ve her ay sıfırdan satış yapma stresinden kurtulun.",
    cta: { label: "Hemen başlayın", href: routes.contact },
  },

  faq: {
    eyebrow: "Merak edilenler",
    title: "Sıkça sorulan sorular",
    items: [
      {
        id: "faq-what",
        question: "E-ticaret abonelik sistemi nedir?",
        answer:
          "E-ticaret abonelik sistemi, müşterilerin belirli aralıklarla otomatik olarak ürün veya hizmet almasını sağlayan, tekrarlı ödeme ve sipariş süreçlerini yöneten yazılım altyapısıdır. RELY Subs bu süreci mevcut mağazanızın üzerine ekler.",
      },
      {
        id: "faq-platforms",
        question: "Hangi e-ticaret altyapıları ile uyumlu?",
        answer:
          "RELY, kullandığınız e-ticaret altyapısına bağlanır. Hazır bağlantılar ve API ile geniş platform uyumluluğu sunar; kurulum sırasında ekibimiz altyapınıza göre adımları netleştirir.",
      },
      {
        id: "faq-setup",
        question: "Mevcut mağazamda abonelik nasıl kurulur?",
        answer:
          "E-ticaret mağazanızı RELY'e bağlarsınız, ürünleri içe aktarır ve abonelik planlarını tanımlarsınız. Tahsilat ve siparişler otomatik olarak mağaza panelinize yansır.",
      },
      {
        id: "faq-pos",
        question: "Sanal POS ve ödeme kuruluşu uyumu nasıl?",
        answer: marketingCardStorageComplianceAnswer,
      },
    ] satisfies EcommerceSubscriptionFaqItem[],
  },

  closingCta: {
    title: "Daha öngörülebilir, daha kârlı bir e-ticaret",
    description:
      "RELY Subs ile abonelik gelirinizi büyütün. Mevcut altyapınız ne olursa olsun, dakikalar içinde tekrar eden gelir modeline adım atın.",
    cta: contactCta,
  },

  /** Alt SEO metin bloğu — anahtar kelime yoğunluğu ve uzun kuyruk aramalar için. */
  seoProse: {
    title: "E-ticaret abonelik sistemi ve dijital dönüşümün yeni yüzü",
    paragraphs: [
      "Dijital pazarlama dünyasında sürdürülebilirlik ön plana çıkıyor. Reklam maliyetleri ancak müşteri birden fazla kez alışveriş yaptığında anlam kazanır; abonelik modeli bu ilişkiyi otomatize ederek sadakati güçlendirir.",
      "İnsan psikolojisi alışkanlıklara dayanır: Sevdiği bir markayı bulan tüketici, her ay aynı ürünü yeniden sipariş etmek için zaman harcamak istemez. Marka tarafında bu, aylık tekrarlayan gelir ve öngörülebilir nakit akışı demektir.",
      `Kurulumda en kritik konu ödeme güvenliğidir. ${marketingCardStorageFaqAnswer} PCI-DSS uyumlu altyapı üzerinden işlem yapılır. Türkiye'deki fatura ve vergi süreçleriyle uyumlu çalışan altyapı finans ekibinin işini kolaylaştırır.`,
      "Sektörel olarak kahve ve takviye ürünleri öne çıksa da moda, oyuncak, kitap ve niş kategorilerde de abonelik hızla yayılıyor. \"Abone ol ve tasarruf et\" mantığı tüketici için güçlü bir cazibe merkezidir.",
      "Büyüme hedefleyen her orta ve büyük ölçekli e-ticaret markasının ajandasında bir e-ticaret abonelik sistemi planı olmalıdır. RELY Subs'ın API tabanlı teknolojisi bu gücü mevcut mağazanızı değiştirmeden sunar.",
    ],
  },
} as const;
