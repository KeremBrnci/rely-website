import type { BlogPostMeta } from "@/content/blog/types";

/** Liste sayfası ve generateStaticParams için meta. */
export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "tekrar-eden-gelir-nedir",
    title: "Tekrar Eden Gelir Nedir? E-Ticarette Sürdürülebilir Büyümenin Anahtarı",
    description:
      "Tekrar eden gelir (recurring revenue) nedir, e-ticarette nasıl oluşur ve abonelik modeliyle sürdürülebilir büyümeye nasıl katkı sağlar?",
    excerpt:
      "Her ay satışları sıfırdan kurmak yerine mevcut müşterilerle öngörülebilir gelir oluşturun. Tekrar eden gelir modelinin tanımı, avantajları ve ilk adımları.",
    publishedAt: "2026-07-24",
    readingTimeMinutes: 8,
    category: "Gelir",
  },
  {
    slug: "reklam-yerine-mevcut-musteri-degeri",
    title: "Sürekli Reklam Vermek Yerine Mevcut Müşterilerinizden Daha Fazla Değer Elde Edin",
    description:
      "Reklam maliyetleri yükselirken büyüme için mevcut müşteri değeri, tekrar sipariş ve abonelik modeliyle LTV artırma stratejileri.",
    excerpt:
      "Daha fazla reklam her zaman daha fazla büyüme demek değildir. Mevcut müşterilerden değer çıkarmak ve abonelikle tekrar siparişi sistematik hale getirmek.",
    publishedAt: "2026-07-23",
    readingTimeMinutes: 8,
    category: "Büyüme",
  },
  {
    slug: "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
    title: "Tek Seferlik Satıştan Tekrarlayan Gelire Geçiş Rehberi",
    description:
      "Doğrudan tüketiciye satış yapan markalar için tek seferlik satıştan abonelik gelirine geçiş: operasyon, fiyatlandırma, tahsilat ve büyüme metrikleri.",
    excerpt:
      "Tek seferlik satışa bağımlı kalmak müşteri edinme maliyetini büyütür. Tekrarlayan gelire geçişte operasyonel kırılma noktalarını ve ilk 90 günlük yol haritasını netleştiriyoruz.",
    publishedAt: "2026-05-28",
    readingTimeMinutes: 9,
    category: "Operasyon",
  },
  {
    slug: "abonelik-urun-kategorileri",
    title: "Abonelik Modeli İçin En Uygun Ürün Kategorileri Nelerdir?",
    description:
      "Hangi ürün kategorileri abonelik için gerçekten uygun? Marj, tüketim sıklığı ve abone kaybı dinamikleriyle kategori seçimi.",
    excerpt:
      "Her ürün aboneliğe uygun değil. Tüketim ritmi, marj yapısı ve lojistik öngörülebilirliği doğru kategoriyi belirler.",
    publishedAt: "2026-05-27",
    readingTimeMinutes: 8,
    category: "Strateji",
  },
  {
    slug: "ltv-nasil-artirilir",
    title: "Müşteri Yaşam Boyu Değeri (LTV) Nasıl Artırılır?",
    description:
      "Abonelik işletmelerinde müşteri değeri artışı: paketleme, ön ödemeli planlar, abone kaybını azaltma ve gelir genişletme taktikleri.",
    excerpt:
      "Müşteri yaşam boyu değeri, abonelik ekonomisinin ana kaldıracıdır. Ortalama sipariş tutarını ve abone ömrünü aynı anda büyüten operasyonel kaldıraçlar.",
    publishedAt: "2026-05-26",
    readingTimeMinutes: 9,
    category: "Gelir",
  },
  {
    slug: "basarisiz-odemeler-gelir-kaybi",
    title: "Başarısız Ödemelerden Kaynaklanan Gelir Kaybı Nasıl Önlenir?",
    description:
      "İstek dışı abone kaybı ve başarısız tahsilat: yeniden deneme, kart güncelleme kuralları ve kurtarılan gelir metrikleri.",
    excerpt:
      "Abone kaybının önemli bir kısmı istek dışıdır: kart reddi. Yeniden deneme ve müşteri iletişimi olmadan tekrarlayan gelir sessizce erir.",
    publishedAt: "2026-05-25",
    readingTimeMinutes: 8,
    category: "Tahsilat",
  },
  {
    slug: "shopify-abonelik-oncesi",
    title: "Shopify Mağazanızda Abonelik Modeli Kurmadan Önce Bilmeniz Gerekenler",
    description:
      "Shopify mağazasında abonelik öncesi kontrol listesi: entegrasyon, kart saklama, abonelik sitesi ve operasyon hazırlığı.",
    excerpt:
      "Shopify mağazanızda abonelik kurmadan önce ödeme, ürün yapısı ve müşteri deneyimi aynı çatı altında planlanmalı.",
    publishedAt: "2026-05-24",
    readingTimeMinutes: 9,
    category: "E-ticaret",
  },
  {
    slug: "churn-azaltma-10-yol",
    title: "Abonelik İptallerini Azaltmanın 10 Etkili Yolu",
    description:
      "İstekli ve istek dışı iptalleri ayırarak abonelik iptallerini azaltma: duraklatma, kurtarma, bildirim ve teklif stratejileri.",
    excerpt:
      "Abone kaybını tek sepette görmek hata. İstekli iptal ile kart reddini ayrı yönetmek tekrarlayan geliri korur.",
    publishedAt: "2026-05-23",
    readingTimeMinutes: 10,
    category: "Elde tutma",
  },
  {
    slug: "kahve-takviye-kozmetik-abonelik",
    title: "Kahve, Takviye ve Kozmetik Markaları Neden Abonelik Modeline Geçiyor?",
    description:
      "Kahve, takviye ve kozmetik dikeylerinde abonelik ekonomisi: tekrar sipariş, rutin ve müşteri değeri dinamikleri.",
    excerpt:
      "Tüketim ritmi güçlü kategoriler abonelikte kazanır. Üç dikeyde ortak büyüme mantığı ve operasyon farkları.",
    publishedAt: "2026-05-22",
    readingTimeMinutes: 8,
    category: "Sektör",
  },
  {
    slug: "mrr-tekrarlayan-gelir-hesaplama",
    title: "Aylık Tekrarlayan Gelir (MRR) Nasıl Hesaplanır?",
    description:
      "Aylık ve yıllık tekrarlayan gelir, net abone kaybı ve genişleme geliri: abonelik finansal metriklerini hesaplama rehberi.",
    excerpt:
      "Aylık tekrarlayan gelir, tahmin edilebilir nakit akışının temelidir. Yanlış hesaplama büyüme kararlarını felç eder.",
    publishedAt: "2026-05-21",
    readingTimeMinutes: 8,
    category: "Metrikler",
  },
  {
    slug: "abonelik-musteri-sadakati",
    title: "Abonelik İş Modeli ile Müşteri Sadakati Nasıl Oluşturulur?",
    description:
      "Abonelikle sadakat inşası: rutin, değer algısı, kişiselleştirme ve operasyonel güven.",
    excerpt:
      "Sadakat indirimle satın alınmaz; kesintisiz değer ve öngörülebilir deneyimle oluşur.",
    publishedAt: "2026-05-20",
    readingTimeMinutes: 9,
    category: "Strateji",
  },
  {
    slug: "subscription-commerce-d2c",
    title: "Abonelik Ticareti Nedir? Doğrudan Satış Markaları İçin Stratejiler",
    description:
      "Abonelik ticareti tanımı ve doğrudan tüketiciye satış yapan markalar için uygulanabilir abonelik stratejileri.",
    excerpt:
      "Abonelik ticareti tek kanal değil; tekrarlayan geliri ürün, kanal ve operasyonla birleştiren modeldir.",
    publishedAt: "2026-05-19",
    readingTimeMinutes: 9,
    category: "Doğrudan satış",
  },
  {
    slug: "subscription-box-is-modeli",
    title: "Aylık Ürün Kutusu İş Modeli Nasıl Kurulur?",
    description:
      "Abonelik kutusu ekonomisi: kutu kurgusu, marj, abone kaybı, lojistik ve müşteri edinme maliyeti.",
    excerpt:
      "Kutu modeli cazip görünür; marj ve lojistik disiplini olmadan hızla erir.",
    publishedAt: "2026-05-18",
    readingTimeMinutes: 9,
    category: "Operasyon",
  },
  {
    slug: "abonelik-ilk-1000-musteri",
    title: "Abonelik Modelinde İlk 1000 Müşteriye Nasıl Ulaşılır?",
    description:
      "Abonelikte ilk 1000 abone: teklif, kanal, dönüşüm ve operasyonel ölçekleme odağı.",
    excerpt:
      "İlk 1000 abone büyüme değil sistem testidir. Yanlış teklifle ölçeklemek abone kaybını kalıcılaştırır.",
    publishedAt: "2026-05-17",
    readingTimeMinutes: 9,
    category: "Büyüme",
  },
  {
    slug: "2026-eticaret-buyume-kanali-abonelik",
    title: "2026'da E-Ticaret Markalarının En Büyük Büyüme Kanalı Neden Abonelik?",
    description:
      "2026 e-ticaret ortamında abonelik kanalı: müşteri edinme maliyeti, marj baskısı ve tekrarlayan gelir avantajı.",
    excerpt:
      "Reklam maliyetleri yükselirken abonelik, öngörülebilir gelir ve sadakat için ana büyüme kaldıracıdır.",
    publishedAt: "2026-05-16",
    readingTimeMinutes: 8,
    category: "Trend",
  },
];

export function getBlogPostMeta(slug: string) {
  return blogPostsMeta.find((p) => p.slug === slug);
}

export const blogPostSlugs = blogPostsMeta.map((p) => p.slug);
