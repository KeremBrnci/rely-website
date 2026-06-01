import type { BlogPostSection } from "@/content/blog/types";

export const articleBody = {
  sections: [
    {
      type: "p",
      text: "Aylık ürün kutusu modeli D2C pazarlamasında en görünür abonelik formatlarından biridir. Shopify operatörleri için cazibe yüksek; marj ve lojistik disiplini zayıfsa her yeni abone zarar yazar. Bu rehber kutu ekonomisini, içerik kurgusunu, fulfillment takvimini ve churn dinamiklerini sahada kullanılan maliyet tablolarıyla anlatır.",
    },
    {
      type: "h2",
      text: "Subscription box modelinin cazibesi ve gerçek maliyeti",
    },
    {
      type: "p",
      text: "Aylık ürün kutusu (subscription box) modeli, D2C markalar için hızlı büyüme hikâyesi gibi görünür: sabit fiyat, sürpriz içerik, sosyal medyada paylaşılabilir unboxing. Operatör gerçeği daha serttir. Kutu başına SKU çeşitliliği, özel ambalaj, kargo hacmi ve iade/churn maliyeti birleşince brüt marj hızla erir. Shopify'da subscription box kurmadan önce birim ekonomiyi Excel'de değil, gerçek fulfillment verisiyle test etmelisiniz. Model çalışıyorsa LTV yüksek ve referral güçlüdür; çalışmıyorsa her yeni abone zarar yazar.",
    },
    {
      type: "p",
      text: "Başarılı subscription box işletmeleri 'kutu'yu ürün sanmaz; kutu deneyim + ürün + lojistik sistemidir. Kahve discovery box, cilt bakım rutin kutusu, healthy snack kutusu — hepsinde ortak gereksinim: tahmin edilebilir maliyet, tutarlı teslimat penceresi ve churn'ü düşüren içerik kalitesi. Türkiye'de kargo maliyeti ve COD (kapıda ödeme) alışkanlığı subscription box için ek sürtünme yaratır; D2C operatörleri ön ödemeli kart aboneliğine odaklanmalıdır.",
    },
    {
      type: "h2",
      text: "Kutu ekonomisi: marj hesabı",
    },
    {
      type: "h3",
      text: "Kutu başına maliyet kalemleri",
    },
    {
      type: "ul",
      items: [
        "COGS: kutu içi tüm ürünlerin toplam maliyeti (hedef: satış fiyatının %35-45'i)",
        "Ambalaj: dış kutu, dolgu malzemesi, insert, baskı (often underestimated)",
        "Pick-pack: abone başına işçilik ve depo maliyeti",
        "Kargo: desi/ağırlık — kutu boyutu stratejik karar",
        "Payment processing: ~%2-3 + sabit işlem ücreti",
        "Churn allowance: iptal ve iade rezervi",
        "Pazarlama: CAC / tahmini abone ömrü",
      ],
    },
    {
      type: "p",
      text: "Örnek: 449 TL'lik aylık kutu. COGS 180 TL, ambalaj 35 TL, pick-pack 25 TL, kargo 45 TL, ödeme ~13 TL = ~298 TL değişken maliyet. Brüt marj ~151 TL (%34). CAC 250 TL ve ortalama abone ömrü 4 ay ise, pazarlama maliyeti aylık ~62 TL ekler — net ~89 TL/ay. Bu marj destek, pazarlama artışı ve stok firesi için yeterli mi? Operatörler bu tabloyu her kutu revizyonunda güncellemelidir.",
    },
    {
      type: "h3",
      text: "Fiyatlandırma ve plan yapısı",
    },
    {
      type: "p",
      text: "Subscription box'ta aylık, 3 aylık ve yıllık planlar sunun. Yıllık ön ödeme nakit akışını güçlendirir ve churn'ü geciktirir; ancak içerik kalitesi düşükse 3. ayda toplu iptal dalgası gelir. Shopify'da plan seçeneklerini checkout'ta net gösterin. Kutu değer algısı için 'perceived value' (algılanan retail değer) ile fiyat arasında makul fark bırakın; abartılı '2000 TL değerinde' iddiaları güveni zedeler.",
    },
    {
      type: "h2",
      text: "Kutu kurgusu: içerik stratejisi",
    },
    {
      type: "p",
      text: "Her kutu bir tema taşımalı: 'Kış nem rutini', 'Single origin Etiyopya keşfi', 'Glutensiz atıştırmalık mix'. Tema, pazarlama ve operasyonu hizalar. SKU seçiminde tam boy ürün + sample kombinasyonu dengeleyin; sadece sample göndermek değer algısını düşürür. Stok riskini azaltmak için çekirdek ürün + 1 rotasyon SKU modeli kullanın. Kutu içi QR kod ile dijital içerik (tarif, kullanım rehberi) maliyetsiz değer ekler.",
    },
    {
      type: "h3",
      text: "Kişiselleştirme ölçeği",
    },
    {
      type: "p",
      text: "Başlangıçta tek kutu varyantı ile launch yapın. 500+ aktif aboneden sonra onboarding anketi ile segmentasyon ekleyin: vegan / normal, cilt tipi, pet boyutu. Her segment için pick-list oluşturun ancak SKU sayısını 3-5 ile sınırlayın. Aşırı kişiselleştirme fulfillment hata oranını artırır; hata abonelik iptalinin bir numaralı nedenidir.",
    },
    {
      type: "h2",
      text: "Lojistik ve operasyon kurulumu",
    },
    {
      type: "p",
      text: "Subscription box lojistiği tek seferlik siparişten farklıdır. Her ay belirli cut-off tarihinde tüm abone siparişleri batch olarak işlenir. Shopify + abonelik uygulaması recurring order'ları otomatik oluşturmalı; depo WMS veya fulfillment partneri bu batch'i işleyebilmeli. Teslimat penceresi vaadi tutarlı olmalı: 'Her ay 10-15 arası' gibi. Gecikme churn'ü hızlandırır.",
    },
    {
      type: "ul",
      items: [
        "Aylık fulfillment takvimi oluşturun (cut-off, pick, ship, delivery)",
        "Kutu boyutunu kargo desi optimizasyonuna göre tasarlayın",
        "Stok rezervasyonu: abone sayısı × birim COGS kadar buffer",
        "Hasarlı kutu prosedürü: yeniden gönderim maliyetini modele dahil edin",
        "Mevsimsel kampanyalar için kapasite planı (Kasım-Aralık spike)",
      ],
    },
    {
      type: "h2",
      text: "Abone edinme ve ilk 90 gün",
    },
    {
      type: "p",
      text: "Subscription box CAC genelde yüksektir çünkü görsel içerik ve influencer pazarlaması gerektirir. İlk 1000 aboneye ulaşırken referral ve unboxing UGC (kullanıcı içeriği) maliyet-etkin kanallardır. İlk kutu deneyimi kritiktir: ambalaj, insert notu, kullanım rehberi, bir sonraki kutu teaser'ı. 90 gün içinde churn en yüksektir; bu dönemde destek proaktif olmalı, dunning sıkı çalışmalıdır.",
    },
    {
      type: "h2",
      text: "Churn yönetimi subscription box'ta",
    },
    {
      type: "p",
      text: "Box modelinde voluntary churn nedenleri: tekrarlayan içerik, değer algısı düşüşü, stok birikimi (kullanılamayan ürünler), fiyat. İptal akışında 'duraklat' seçeneği sunun — 1-2 ay skip birçok iptali önler. Exit survey verisini aylık analiz edin. Involuntary churn (kart reddi) subscription box'ta özellikle tehlikelidir çünkü kutu hazırlanmış olabilir; cut-off öncesi ödeme doğrulama yapın.",
    },
    {
      type: "h2",
      text: "Sık yapılan hatalar",
    },
    {
      type: "ul",
      items: [
        "Ambalaj maliyetini modelde küçümsemek",
        "Her ay tamamen farklı SKU seti — tedarik riski ve stok firesi",
        "Launch'ta agresif lifetime indirim — kalitesiz abone tabanı",
        "Fulfillment partner kapasitesini test etmeden viral kampanya",
        "Kutu içi değeri düşürüp fiyatı artırmak",
        "Shopify envanter senkronizasyonunu ihmal — oversell ve iptal",
      ],
    },
    {
      type: "h2",
      text: "Shopify kurulum adımları",
    },
    {
      type: "p",
      text: "1) Box ürününü Shopify'da subscription-enabled SKU olarak tanımlayın. 2) Abonelik uygulamasında plan periyotları ve fiyatları ayarlayın. 3) Müşteri portalında skip, pause, cancel akışlarını yapılandırın. 4) Recurring order'ların fulfillment partnerinize otomatik aktarımını test edin. 5) İlk 50 abone ile pilot: maliyet, teslimat SLA, NPS ölçün. 6) Pilot verisiyle birim ekonomiyi doğrulayın, sonra pazarlama ölçekleyin.",
    },
    {
      type: "h2",
      text: "Takip edilmesi gereken metrikler",
    },
    {
      type: "ul",
      items: [
        "Kutu başına brüt marj (ambalaj dahil)",
        "CAC ve CAC payback (ay)",
        "3. ve 6. ay cohort retention",
        "Voluntary vs involuntary churn",
        "Fulfillment hata oranı (yanlış/eksik kutu)",
        "Skip/pause kullanım oranı",
        "Referral kaynaklı yeni abone payı",
        "Kargo maliyeti / kutu fiyatı oranı",
      ],
    },
    {
      type: "h2",
      text: "Gift abonelik ve kurumsal kutu satışı",
    },
    {
      type: "p",
      text: "Hediye abonelik (3/6/12 ay prepaid gift) New MRR spike yaratır; ancak hediye alan kişi 3. ayda kendi kartını bağlamazsa churn olur. Gift redemption akışında 30. gün 'kendi aboneliğine geç %20' teklifi dönüşüm sağlar. Kurumsal hediye (şirket çalışanına kutu) B2B fatura ve toplu gönderim gerektirir — Shopify D2C checkout'tan ayrı süreç tanımlayın. Gift MRR'ı recurring MRR'dan ayrı cohort'ta izleyin.",
    },
    {
      type: "h2",
      text: "Ambalaj ve unboxing: sadakat yatırımı mı maliyet mi?",
    },
    {
      type: "p",
      text: "Subscription box'ta ambalaj marka deneyiminin parçasıdır — Instagram unboxing içerikleri organik edinme getirir. Ancak her kutu için özel baskı, tissue paper ve insert maliyeti birikir. Operatörler ambalaj maliyetini kutu başına brüt marjın %8-12'si ile sınırlamalıdır. İlk kutu premium, sonraki kutular sadeleştirilmiş ambalaj (cost-down) modeli hem sadakat hem marj dengeler. A/B test: premium ambalaj cohort'unun referral ve retention farkı ölçülmeden ambalaj bütçesi artırılmamalıdır.",
    },
    {
      type: "h3",
      text: "Mevsimsel ve sınırlı baskı kutular",
    },
    {
      type: "p",
      text: "Bayram, yılbaşı veya yaz temalı limited edition kutular New MRR spike yaratır ancak operasyon stresi de yüksektir. Sınırlı baskı kutularda stok fazlası fire riski taşır; abone sayısı + %5 buffer ile üretim planlayın. Limited edition sonrası standart kutuya dönüş churn yaratabilir — 'sürpriz bitti' algısını yönetmek için standart kutunun değerini insert ile anlatın.",
    },
    {
      type: "h3",
      text: "3PL ve in-house fulfillment kararı",
    },
    {
      type: "p",
      text: "500 abonenin altında in-house fulfillment maliyet kontrolü sağlar; 500-2000 arası 3PL değerlendirilir. 3PL seçerken subscription batch deneyimi sorun; tek seferlik sipariş odaklı depolar cut-off deadline'ı kaçırır. SLA sözleşmesine 'abonelik batch günü' maddesi ekleyin. Shopify'dan recurring order export formatını 3PL ile önceden test edin.",
    },
    {
      type: "h2",
      text: "Returns ve hasar: kutu modelinde gizli maliyet",
    },
    {
      type: "p",
      text: "Subscription box'ta iade oranı tek seferlik satıştan düşük olabilir ancak hasarlı kutu oranı yüksektir. Her hasarlı kutu = birim maliyetin 2x yeniden gönderimi. Taşıyıcı anlaşmasında hasar tazmin prosedürü tanımlayın; ambalaj drop test yapın. Hasar oranı %2'nin üzerindeyse ambalaj veya taşıyıcı değişikliği gündeme alın. Operasyon bu metriği aylık P&L'e 'shrinkage' satırı olarak yazmalıdır.",
    },
    {
      type: "h3",
      text: "Snack box: son kullanma tarihi yönetimi",
    },
    {
      type: "p",
      text: "Gıda içeren kutularda SKT kısa ürün fire riski taşır. FIFO (first in first out) pick kuralı zorunlu; kutu içi ürünlerin minimum 30 gün SKT'si kalmalı. Abone sayısı düşükken over-order yapmak fire yaratır; rotasyon SKU sayısını stok devir hızına göre sınırlayın.",
    },
    {
      type: "h2",
      text: "Sonuç: disiplinli kutu ekonomisi olmadan ölçekleme yapmayın",
    },
    {
      type: "p",
      text: "Subscription box iş modeli, D2C markalar için güçlü bir tekrarlayan gelir aracı olabilir — ancak yalnızca kutu başına marj, lojistik kapasitesi ve içerik kalitesi disiplinle yönetildiğinde. Shopify altyapısında abonelik katmanı, batch fulfillment ve churn yönetimi birlikte tasarlanmalıdır. Pilot ile birim ekonomiyi doğrulamadan pazarlama bütçesi ölçeklemek, subscription box'ın en yaygın başarısızlık modudur. Doğru kurgulandığında kutu, marka hikâyesini her ay müşterinin kapısına taşıyan ölçeklenebilir bir kanala dönüşür.",
    },
    {
      type: "h2",
      text: "Launch sonrası ilk 6 ay: kutu operasyon takvimi",
    },
    {
      type: "p",
      text: "Ay 1-2: pilot cohort, maliyet doğrulama, NPS. Ay 3-4: ambalaj optimizasyonu, skip/pause analizi. Ay 5-6: ikinci kutu varyantı veya yıllık plan teşviki. Her ay kutu başına brüt marj ve 90 gün retention birlikte değerlendirilir; marj düşükse fiyat artışı değil COGS/ambalaj revizyonu önce gelir. Subscription box uzun mesafe maratonudur; ilk 6 ayda unit economics kanıtlanmadan paid ölçekleme yapılmaz.",
    },
    {
      type: "h2",
      text: "Kutu içeriği tedarik ve marka ortaklıkları",
    },
    {
      type: "p",
      text: "Subscription box'ta marka ortaklığı (co-brand sample) tedarik maliyetini düşürür ve algılanan değeri artırır. Ortaklık anlaşmasında minimum adet ve SKT maddeleri net olmalı. Kendi ürününüz + partner sample modeli marjı korur. Operatörler her kutu için tedarik risk matrisi tutmalı: tek tedarikçiye bağımlı SKU'lar alternatif ile yedeklenmeli. Türkiye'de ithal sample gecikmesi kutu gecikmesi demektir — lead time'ı modele dahil edin.",
    },
    {
      type: "h2",
      text: "Fiyat artışı ve kutu değer iletişimi",
    },
    {
      type: "p",
      text: "Maliyet baskısında kutu fiyatını artırmak gerekebilir. Mevcut aboneleri 30 gün önceden bilgilendirin; değer artışı (daha büyük sample, premium insert) ile gerekçelendirin. Ani fiyat artışı voluntary churn dalgası yaratır. Yeni aboneler yeni fiyattan, eskiler grandfathering veya kademeli geçiş ile yönetilir. Fiyat artışı sonrası 60 gün churn'i normal churn ile karşılaştırın; sapma %2 üzerindeyse iletişim veya değer paketi revize edin.",
    },
    {
      type: "p",
      text: "Subscription box iş modelinde en sık görülen başarısızlık, pazarlama ölçeklenirken kutu ekonomisinin güncellenmemesidir. Her 500 yeni abonede birim maliyet tablosunu yeniden hesaplayın; kargo anlaşması, ambalaj tedarikçisi ve COGS değişir.",
    },
    {
      type: "p",
      text: "Kutu modelinde NPS'i 2. kutu teslimatından 48 saat sonra ölçün; 1. kutu heyecanı yanıltıcı olabilir, asıl sadakat sinyali 2. ve 3. kutudadır.",
    },
    {
      type: "p",
      text: "Her yeni kutu tasarımında operasyon ekibini tasarım sürecine dahil edin; güzel kutu paketlenemiyorsa churn artar.",
    },
  ] satisfies BlogPostSection[],
  checklist: [
    "Kutu başına tam maliyet tablosu oluşturun (COGS, ambalaj, kargo, pick-pack)",
    "Brüt marj hedefi belirleyin (minimum %30-35) ve altına düşen kutu revize edin",
    "Aylık fulfillment cut-off takvimini operasyon ekibiyle paylaşın",
    "Launch'ta tek kutu varyantı ile pilot yapın (50-100 abone)",
    "Skip/pause seçeneklerini müşteri portalinde aktif edin",
    "Cut-off öncesi ödeme doğrulama ve dunning akışını test edin",
    "Exit survey ile voluntary churn nedenlerini aylık raporlayın",
    "Kargo desi optimizasyonu için kutu boyutunu yeniden değerlendirin",
    "3 aylık ve yıllık plan seçeneklerini checkout'ta sunun",
    "Influencer/UGC bütçesini CAC payback hesabına bağlayın",
  ],
};
