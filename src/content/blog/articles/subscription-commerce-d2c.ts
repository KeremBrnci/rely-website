import type { BlogPostSection } from "@/content/blog/types";

export const articleBody = {
  sections: [
    {
      type: "p",
      text: "Subscription commerce, D2C markaların tekrarlayan geliri sistematik hale getirdiği ticaret modelidir. Shopify mağazasına abonelik eklentisi kurmak başlangıçtır; asıl iş teklif mimarisi, kanal stratejisi ve operasyon omurgasını yeniden tasarlamaktır. Bu rehber, replenishment/curation/access stratejilerini, Shopify teknoloji altyapısını ve büyüme metriklerini operatör dilinde bir araya getirir.",
    },
    {
      type: "h2",
      text: "Subscription commerce nedir?",
    },
    {
      type: "p",
      text: "Subscription commerce, tekrarlayan geliri ürün, kanal ve operasyon mimarisinin merkezine koyan ticaret modelidir. Klasik e-ticarette dönüşüm tek seferlik satışa odaklanır; subscription commerce'te ise müşteri yaşam döngüsü — edinme, aktivasyon, yenileme, genişletme, geri kazanma — iş modelinin kendisidir. Shopify D2C markaları için bu, mağazada 'Abone Ol' seçeneğinin eklenmesinden ibaret değildir; fiyatlandırma, lojistik, CRM, destek ve finans raporlamasının abonelik varsayımıyla yeniden kurgulanmasıdır.",
    },
    {
      type: "p",
      text: "Operatör dilinde subscription commerce üç katmandan oluşur: teklif mimarisi (hangi ürünler, hangi periyotlar, hangi indirimler), kanal mimarisi (Shopify storefront, marketplace, retail replenishment) ve operasyon mimarisi (tahsilat tokenization, recurring fulfillment, churn yönetimi). Bu üç katman uyumlu değilse abonelik 'açık' olsa bile tekrarlayan gelir oluşmaz; müşteri bir kez abone olur, deneyim kırılır, iptal eder.",
    },
    {
      type: "h2",
      text: "D2C markalar neden subscription commerce'e geçiyor?",
    },
    {
      type: "p",
      text: "2026 e-ticaret ortamında Meta ve Google reklam maliyetleri, tek seferlik satış modelinde birim ekonomiyi zorluyor. Subscription commerce, CAC'ı birden fazla aya yayarak LTV:CAC oranını iyileştirir. Öngörülebilir MRR, stok ve nakit planlamasını kolaylaştırır. Tüketim odaklı kategorilerde (kahve, supplement, kozmetik, pet food) müşteri zaten tekrar satın alıyordur; subscription commerce bu davranışı resmileştirir ve marka kontrolünü artırır. Rakip marketplace'lerde fiyat savaşı yerine, doğrudan ilişkide sadakat inşa edilir.",
    },
    {
      type: "h3",
      text: "İş etkisi: marj, stok ve ekip odağı",
    },
    {
      type: "p",
      text: "Tekrarlayan sipariş hacmi, tedarikçi MOQ pazarlığında güç verir. Depo pick-pack süreçleri rutinleşir; birim fulfillment maliyeti düşer. Pazarlama ekibi her ay sıfırdan trafik avlamak yerine retention ve expansion'a odaklanır. Finans, MRR bridge ile büyümeyi net görür. Bu avantajlar otomatik gelmez — yanlış kurgulanmış subscription commerce churn'ü hızlandırır ve destek yükünü artırır.",
    },
    {
      type: "h2",
      text: "D2C için abonelik strateji tipleri",
    },
    {
      type: "h3",
      text: "Replenishment (yenileme) aboneliği",
    },
    {
      type: "p",
      text: "Müşteri aynı ürünü düzenli aralıklarla alır. En düşük operasyonel karmaşıklık, en yüksek öngörülebilirlik. Takviye, pet food, temel kozmetik için idealdir. Shopify'da 'Her 30/45/60 günde bir' seçenekleri net olmalı; tüketim hızına göre sıklık ayarı self-servis panelde sunulmalıdır. Strateji başarısı: 90 günlük cohort retention ve involuntary churn oranı.",
    },
    {
      type: "h3",
      text: "Curation (kürasyon) aboneliği",
    },
    {
      type: "p",
      text: "Marka her dönem seçilmiş ürün seti gönderir — kahve keşif kutusu, cilt bakım rutini, snack kutusu. Değer önerisi keşif ve sürprizdir; marj ve lojistik daha zordur. SKU çeşitliliği stok riskini artırır. Operatörler için kritik metrik: kutu başına brüt marj ve kutu içi ürün memnuniyet anketi. Curation, replenishment çekirdeği oturduktan sonra upsell katmanı olarak eklenmelidir.",
    },
    {
      type: "h3",
      text: "Access (erişim) aboneliği",
    },
    {
      type: "p",
      text: "Üyelik ücreti karşılığı indirim, erken erişim, ücretsiz kargo veya özel içerik. Fiziksel ürün + dijital fayda birleşimi D2C'de yaygınlaşıyor. Shopify'da ürün aboneliği ile üyelik programını karıştırmayın; faturalama ve iptal politikaları farklıdır. Access modelinde churn, algılanan üyelik değerine bağlıdır — kullanılmayan fayda iptal getirir.",
    },
    {
      type: "h2",
      text: "Teklif ve kanal mimarisi",
    },
    {
      type: "p",
      text: "Subscription commerce stratejisi seçerken ürün-kanal uyumunu test edin. Shopify ana mağaza abonelik için birincil kanal olmalı; Amazon Subscribe & Save gibi marketplace abonelikleri ayrı operasyon gerektirir. Teklif mimarisinde 'good-better-best' plan yapısı dönüşümü artırır: tek ürün / ikili paket / aile paketi. Yıllık plan ön ödemesi cash flow ve churn azaltma sağlar; ancak ilk iptal dalgasını cohort analizi ile izleyin.",
    },
    {
      type: "ul",
      items: [
        "Shopify PDP'de abonelik varsayılan seçili olabilir ancak tek seferlik seçenek gizlenmemeli",
        "Checkout'ta abonelik koşulları (iptal, yenileme) tek cümleyle net olmalı",
        "Post-purchase upsell ile abonelik dönüşümü deneyin — tek seferlik alıcıyı abone adayı yapın",
        "E-posta akışları: replenishment hatırlatma, abonelik teşviki, win-back",
        "Influencer kodları tek seferlik değil abonelik trial'ına yönlendirilebilir",
      ],
    },
    {
      type: "h2",
      text: "Operasyon altyapısı: Shopify + abonelik katmanı",
    },
    {
      type: "p",
      text: "Shopify native checkout abonelik için payment gateway tokenization ve recurring billing gerektirir. Rely, Recharge veya Shopify Subscriptions gibi katman; plan yönetimi, dunning, müşteri portalı ve MRR raporlamasını sağlar. Operatör seçim kriterleri: Shopify entegrasyon derinliği, duraklatma/iptal esnekliği, başarısız ödeme kurtarma, Türkiye ödeme yöntemleri uyumu. Altyapı kararı strateji kadar önemlidir — migration maliyeti yüksektir.",
    },
    {
      type: "h3",
      text: "Fulfillment ve envanter senkronizasyonu",
    },
    {
      type: "p",
      text: "Subscription commerce'te envanter hatası doğrudan churn yaratır. Recurring siparişler için ayrı fulfillment kuyruğu, cut-off tarihleri ve stok rezervasyonu tanımlayın. Shopify'da abonelik SKU'ları tek seferlik SKU ile aynı envanter havuzunu paylaşıyorsa, abone önceliği politikasını netleştirin. Ön sipariş veya stok tükenmesi durumunda proaktif iletişim şarttır.",
    },
    {
      type: "h2",
      text: "Sık strateji hataları",
    },
    {
      type: "ul",
      items: [
        "Her ürünü abonelik yapmaya çalışmak — tüketim ritmi zayıf SKU'lar churn üretir",
        "Agresif ilk ay indirimi sonrası fiyat şoku — cohort 2. ay churn patlaması",
        "Curation kutusunu replenishment olmadan tek strateji sanmak",
        "Marketplace abonelik ile D2C aboneliği aynı operasyon sanmak",
        "MRR takibi olmadan kanal bütçesi ölçeklemek",
        "Self-servis abonelik yönetimini ihmal edip destek yükünü artırmak",
      ],
    },
    {
      type: "h2",
      text: "Metrikler ve büyüme döngüsü",
    },
    {
      type: "p",
      text: "Subscription commerce büyümesi döngüseldir: yeni abone kazanımı → onboarding kalitesi → 90 gün retention → expansion → referral. Her aşama için KPI tanımlayın. New MRR / CAC, 90 günlük LTV / CAC, net MRR churn, abone portal kullanım oranı, dunning kurtarma oranı. Shopify ve abonelik aracınızdan gelen veriyi haftalık operasyon, aylık strateji toplantısında kullanın.",
    },
    {
      type: "h2",
      text: "Uluslararası genişleme ve çoklu para birimi",
    },
    {
      type: "p",
      text: "Türkiye'den AB veya GCC'ye açılan D2C markalar subscription commerce'te farklı KDV, kargo ve ödeme kurallarıyla karşılaşır. Shopify Markets ile çoklu storefront mümkün; ancak abonelik billing her ülkede ayrı gateway gerektirebilir. Erken aşamada tek pazara odaklanın; MRR modeli oturmadan çoklu ülke aboneliği operasyon karmaşıklığını katlar. Lokal replenishment partneri olmadan uzun mesafe kutu aboneliği marjı eritir.",
    },
    {
      type: "h2",
      text: "Hibrit model: tek seferlik + abonelik birlikte",
    },
    {
      type: "p",
      text: "Subscription commerce'e geçiş 'ya hep ya hiç' değildir. Shopify mağazalarının çoğu hibrit modelde en iyi sonucu alır: hero ürün abonelik, uzun kuyruk tek seferlik. Bu yapı, yeni müşteriyi düşük riskli tek seferlik deneyimle alır, post-purchase akışla abone adayına çevirir. Katalog genişliği abonelik operasyonunu boğmaz. Finans raporunda abonelik MRR ve tek seferlik gelir ayrı satır olmalı — karışık raporlama hibrit modelin değerini gizler.",
    },
    {
      type: "h3",
      text: "B2B2C ve retail replenishment",
    },
    {
      type: "p",
      text: "Bazı D2C markalar subscription commerce'i perakende veya kurumsal kanala taşır: ofis kahve aboneliği, klinik supplement replenishment. Bu kanallar farklı faturalama ve sözleşme gerektirir; Shopify D2C abonelik altyapısı ile karıştırılmamalıdır. Operatörler önce D2C Shopify kanalında modeli oturtmalı, sonra B2B replenishment'ı ayrı ürün hattı olarak değerlendirmelidir.",
    },
    {
      type: "h3",
      text: "Teknoloji altyapısı: Shopify + ödeme + abonelik + CRM",
    },
    {
      type: "p",
      text: "2026 subscription commerce teknoloji altyapısı tipik olarak: Shopify (storefront + checkout), Craftgate/İyzico/Stripe (tokenization), Rely veya eşdeğeri (recurring logic, portal, dunning), Klaviyo (lifecycle e-posta), NetGSM (SMS bildirim). Entegrasyon kopukluğu — örneğin iptal Shopify'da görünüp abonelik aracında aktif kalması — müşteri güvenini yok eder. Quarterly entegrasyon audit yapın; test senaryoları: yeni abonelik, kart reddi, duraklatma, iptal, plan değişikliği.",
    },
    {
      type: "h2",
      text: "Subscription commerce olgunluk modeli",
    },
    {
      type: "p",
      text: "Seviye 1: tek hero ürün replenishment, manuel raporlama. Seviye 2: çoklu plan, dunning otomasyonu, self-servis portal. Seviye 3: curation katmanı, expansion playbook, cohort LTV modeli. Seviye 4: çoklu kanal (D2C + retail replenishment), negatif net MRR churn hedefi. Shopify markalarının çoğu 2026'da Seviye 1-2 arasında; atlayarak Seviye 4'e geçmek operasyon kırılması yaratır. Her seviyede 6 ay kalıp metrikleri stabilize edin.",
    },
    {
      type: "h3",
      text: "Kahve dikeyi subscription commerce örneği",
    },
    {
      type: "p",
      text: "250g/2 hafta replenishment çekirdek; her çeyrek 'origin discovery' curation kutusu upsell. Shopify PDP'de abonelik varsayılan; tek seferlik hediye seçeneği korunur. MRR'ın %70'i replenishment, %30'u curation. Bu hibrit, churn'ü replenishment tabanında düşük tutarken ARPU'yu curation ile artırır.",
    },
    {
      type: "h2",
      text: "Sonuç: subscription commerce strateji disiplinidir",
    },
    {
      type: "p",
      text: "Subscription commerce, D2C markalar için tekrarlayan geliri sistematik hale getiren ticaret modelidir. Replenishment, curation ve access stratejilerinden birini veya hibritini seçmek; Shopify storefront, ödeme, lojistik ve CRM'i buna göre hizalamak gerekir. 2026'da büyüme baskısı altındaki markalar için subscription commerce opsiyon değil, birim ekonomi ve öngörülebilirlik aracıdır. Doğru kurgulandığında MRR büyür, operasyon rutinleşir ve müşteri sadakati indirimle değil süreklilikle inşa edilir.",
    },
    {
      type: "h2",
      text: "Operasyon checklist: subscription commerce go-live",
    },
    {
      type: "ul",
      items: [
        "Shopify checkout abonelik koşulları hukuk onayı",
        "Tokenization ve recurring billing test senaryoları",
        "Recurring order → fulfillment otomatik akış",
        "MRR dashboard ve haftalık stand-up ritmi",
        "Self-servis portal QA (pause, skip, cancel, upgrade)",
      ],
    },
    {
      type: "h2",
      text: "Pazarlama ve operasyon OKR hizalaması",
    },
    {
      type: "p",
      text: "Pazarlama OKR'si 'yeni abone sayısı' ise operasyon OKR'si '90 gün retention' olmalıdır. Hizalanmama: pazarlama ucuz abone getirir, operasyon churn'ü temizler, iki ekip çatışır. Ortak OKR: 'Net New MRR' veya '90 gün cohort LTV'. Shopify markalarında bu hizalamayı quarterly business review'da resmileştirin; subscription commerce sürdürülebilir ancak ekipler aynı metriği optimize ettiğinde ölçeklenir.",
    },
    {
      type: "p",
      text: "Subscription commerce başarısı teknoloji satın almakla gelmez; teklif, kanal ve operasyonun aynı strateji dokümanında hizalanmasıyla gelir. Shopify markanızda bu hizalamayı sağladığınızda tekrarlayan gelir, tek seferlik satışın tamamlayıcısı değil ana büyüme motoru haline gelir.",
    },
    {
      type: "h2",
      text: "Veri altyapısı: subscription commerce analytics",
    },
    {
      type: "p",
      text: "Shopify, abonelik aracı, CRM ve muhasebe yazılımından gelen veriyi tek BI tablosunda birleştirin. Minimum alanlar: customer_id, first_subscription_date, plan, mrr_value, status, channel, cohort_month. Bu tablo olmadan subscription commerce stratejisi sezgisel kalır. Küçük ekipler Google Sheets yeterli; 1000+ abonede Looker, Metabase veya eşdeğeri düşünün. Veri gecikmesi (24 saat sync) operasyon kararları için kabul edilebilir; aylık MRR kapanışı için değil.",
    },
    {
      type: "h2",
      text: "Shopify Plus ve ölçek: subscription commerce altyapısı",
    },
    {
      type: "p",
      text: "Aylık 500+ yeni abone hacmine ulaştığınızda checkout özelleştirme, API rate limit ve fulfillment entegrasyonu kritik hale gelir. Shopify Plus veya güçlü abonelik altyapısı (Rely Subs) bu ölçekte operasyonel stabilite sağlar. Script tag ile yapılan geçici çözümler churn ve tahsilat hatasına açıktır. Altyapı yükseltme kararını MRR büyüme hızı ve destek ticket trendi tetiklemeli — sadece trafik değil.",
    },
    {
      type: "p",
      text: "D2C subscription commerce yolculuğunda her çeyrek bir olgunluk seviyesi hedefleyin; atlama yapmak operasyon borcu biriktirir ve 2026 CAC ortamında geri dönüşü pahalı hale getirir.",
    },
    {
      type: "p",
      text: "Replenishment odaklı subscription commerce, D2C markaların 2026'da en hızlı ROI aldığı strateji tipidir; curation katmanını bu temel oturduktan sonra ekleyin.",
    },
    {
      type: "p",
      text: "Shopify vitrininizde abonelik CTA'sını above the fold tutun; D2C dönüşümün büyük kısmı mobil PDP'de kaybedilir.",
    },
    {
      type: "p",
      text: "Operasyon ve pazarlama aynı metriği hedeflemelidir.",
    },
  ] satisfies BlogPostSection[],
  checklist: [
    "Replenishment, curation veya access stratejinizi yazılı olarak tanımlayın",
    "Shopify PDP ve checkout'ta abonelik koşullarını netleştirin",
    "Good-better-best plan yapısı oluşturun ve ARPU etkisini ölçün",
    "Abonelik altyapısı seçim kriterlerini (dunning, portal, MRR) dokümante edin",
    "Recurring fulfillment cut-off ve stok rezervasyon politikasını belirleyin",
    "90 günlük cohort retention hedefi koyun",
    "Post-purchase abonelik dönüşüm akışını test edin",
    "Marketplace ve D2C abonelik operasyonlarını ayrı P&L'de izleyin",
    "New MRR / CAC ve LTV:CAC metriklerini aylık raporlayın",
    "Self-servis abonelik portalını müşteri yolculuğunda QA'dan geçirin",
  ],
};
