import type { BlogPostSection } from "@/content/blog/types";

export const articleBody = {
  sections: [
    {
      type: "p",
      text: "Abonelik işletmesi yöneten operatörler için MRR, günlük kararların finansal dilidir. Shopify'da brüt ciro rekor kırabilir; ancak MRR düz kalıyorsa tekrarlayan gelir tabanınız büyümüyor demektir. Bu rehber, D2C markalar için MRR hesaplama, hareket tablosu, ARR/ARPU türevleri ve raporlama disiplinini operatör perspektifinden anlatır — muhasebe teorisi değil, sahada kullanılan formüller.",
    },
    {
      type: "h2",
      text: "MRR neden abonelik operasyonunun ana dilidir?",
    },
    {
      type: "p",
      text: "Monthly Recurring Revenue (MRR), abonelik işletmesinin her ay tekrarlayan gelir taahhüdünü tek bir rakamda ifade eder. Shopify ve D2C markalar için MRR yalnızca finans raporu değildir; stok planlaması, reklam bütçesi, lojistik kapasitesi ve ekip büyüme kararlarının ortak referans noktasıdır. Tek seferlik satış odaklı bir mağazada gelir dalgalanır; abonelikte ise MRR, bir sonraki ayın taban gelirini önceden görmenizi sağlar. Bu öngörülebilirlik, özellikle kahve, takviye, kozmetik ve pet food gibi tüketim ritmi güçlü kategorilerde nakit akışı disiplinini belirler.",
    },
    {
      type: "p",
      text: "Operatör perspektifinden MRR'ı doğru okumak, brüt satış hacmi ile tekrarlayan taahhüdü ayırmayı gerektirir. Bir kampanya haftasında toplam ciro artabilir ancak yeni abone kazanımı düşükse MRR büyümesi yavaşlar. Tersine, düşük promosyon döneminde bile expansion MRR (plan yükseltme, ek ürün) ve düşük churn ile net MRR artışı sürdürülebilir. Yatırımcı veya yönetim kurulu sunumunda MRR trendi, abonelik modelinin gerçek sağlığını anlatır; Shopify Analytics'teki toplam sipariş sayısı bu hikâyeyi tek başına taşıyamaz.",
    },
    {
      type: "h2",
      text: "MRR nasıl hesaplanır?",
    },
    {
      type: "h3",
      text: "Temel formül ve abonelik türleri",
    },
    {
      type: "p",
      text: "Standart MRR hesabı: aktif abonelerin aylık abonelik bedellerinin toplamıdır. Yıllık ön ödemeli bir plan için yıllık tutar 12'ye bölünür; çeyreklik planlar 3'e bölünür. Shopify Subscriptions veya Rely gibi altyapılarda farklı periyotlar aynı dashboard'da normalize edilmelidir. Örneğin 120 abonenin aylık 299 TL planında olması 35.880 TL MRR demektir. 40 abonenin yıllık 2.990 TL (aylık eşdeğer ~249 TL) planında olması ~9.960 TL MRR ekler. Haftalık teslimat kutularında periyot farklı olsa bile finansal raporlama için aylık eşdeğer kullanılır.",
    },
    {
      type: "h3",
      text: "MRR bileşenleri: hareket tablosu",
    },
    {
      type: "p",
      text: "Operasyonel MRR takibi, statik toplam yerine hareket tablosu (MRR bridge) ile yapılır. Her dönem sonunda şu kalemleri ayırın:",
    },
    {
      type: "ul",
      items: [
        "New MRR: dönem içinde kazanılan yeni abonelerin aylık değeri",
        "Expansion MRR: mevcut abonelerin plan yükseltmesi, ek kutu veya sıklık artışı",
        "Contraction MRR: plan düşürme, sıklık azaltma, kısmi iptal",
        "Churned MRR: tam iptal eden abonelerin kaybedilen aylık değeri",
        "Reactivation MRR: geri dönen eski aboneler",
      ],
    },
    {
      type: "p",
      text: "Net yeni MRR = New MRR + Expansion MRR + Reactivation MRR − Contraction MRR − Churned MRR. Bu tablo, pazarlama ekibinin 'kaç abone kazandık' sorusunu finansın 'MRR ne kadar büyüdü' sorusuyla hizalar. Sadece abone sayısına bakmak yanıltıcıdır: düşük ARPU'lu kampanya aboneleri sayıyı şişirirken net MRR'ı zayıflatır.",
    },
    {
      type: "h2",
      text: "ARR, ARPU ve net MRR churn",
    },
    {
      type: "h3",
      text: "ARR: yıllık perspektif",
    },
    {
      type: "p",
      text: "Annual Recurring Revenue (ARR), MRR × 12'dir. Yıllık sözleşmeli B2B aboneliklerde doğrudan sözleşme değeri kullanılır; D2C Shopify markalarında ise ARR genelde MRR projeksiyonudur. ARR, uzun vadeli kapasite planı (depo, paketleme hattı, müşteri destek headcount) için kullanışlıdır. 500.000 TL MRR ≈ 6 M TL ARR; bu rakam lojistik anlaşmalarında ve tedarikçi minimum sipariş miktarlarında referans olur.",
    },
    {
      type: "h3",
      text: "ARPU ve birim ekonomi",
    },
    {
      type: "p",
      text: "Average Revenue Per User (ARPU) = MRR ÷ aktif abone sayısı. D2C operatörleri ARPU'yu segment bazında izlemelidir: ilk abonelik indirimiyle gelenler, yıllık plan seçenler, çoklu ürün aboneleri. ARPU düşüşü contraction veya düşük fiyatlı plan kaymasına işaret eder. LTV hesabında ARPU ile ortalama abone ömrü (1 ÷ aylık churn oranı) çarpılır; bu, CAC toleransını belirler.",
    },
    {
      type: "h3",
      text: "Net MRR churn oranı",
    },
    {
      type: "p",
      text: "Net MRR churn = (Churned MRR + Contraction MRR − Expansion MRR) ÷ dönem başı MRR. Negatif net MRR churn, expansion'ın kayıpları aştığı anlamına gelir — sağlıklı olgun abonelik işletmelerinin hedeflediği durumdur. Örneğin ay başında 100.000 TL MRR varken 8.000 TL churn, 2.000 TL contraction ve 5.000 TL expansion varsa net MRR churn %5'tir (5.000 ÷ 100.000). Gross churn (sadece iptaller) ile net churn'i ayrı raporlayın; voluntary churn ile involuntary churn (başarısız ödeme) ayrımı operasyonel müdahaleyi belirler.",
    },
    {
      type: "h2",
      text: "Shopify D2C markası için pratik örnek",
    },
    {
      type: "p",
      text: "Takviye markası varsayalım: 850 aktif abone, dağılım — 600 kişi aylık 349 TL, 150 kişi iki aylık 629 TL (aylık eşdeğer 314,5 TL), 100 kişi yıllık 3.490 TL (aylık eşdeğer 290,8 TL). MRR ≈ 600×349 + 150×314,5 + 100×290,8 = 209.400 + 47.175 + 29.080 = 285.655 TL. Ay içinde 120 yeni abone (ortalama 329 TL), 18 iptal (ortalama 340 TL churned MRR), 12 plan yükseltmesi (+45 TL/ay ortalama = 540 TL expansion), 5 başarısız ödeme kurtarması (1.700 TL reactivation sayılmaz, zaten aktifti). Net yeni MRR ≈ 120×329 + 540 − 18×340 = 39.480 + 540 − 6.120 = 33.900 TL. Bu tablo, '120 yeni abone' başarısının MRR'a ~%12 büyüme getirdiğini gösterir.",
    },
    {
      type: "h2",
      text: "Sık yapılan hesaplama hataları",
    },
    {
      type: "ul",
      items: [
        "Tek seferlik (one-time) siparişleri MRR'a dahil etmek — abonelik olmayan geliri tekrarlayan sanmak bütçe planını şişirir",
        "İptal edilen aboneleri dönem sonuna kadar aktif saymak — churn tarihi iptal anı veya son teslimat dönemi olmalı, politikanız net olmalı",
        "İndirimli ilk ay fiyatını kalıcı ARPU sanmak — tanıtım fiyatı bitince ARPU sıçrar; cohort bazlı takip şart",
        "KDV dahil/hariç tutarsızlığı — tüm MRR raporları aynı vergi varsayımını kullanmalı",
        "Paused (duraklatılmış) aboneleri aktif MRR'a saymak — duraklatma politikasına göre MRR'dan düşün veya ayrı kova kullan",
        "Shopify brüt satış ile abonelik MRR'ını karıştırmak — upsell one-time ürünler MRR değildir",
      ],
    },
    {
      type: "h2",
      text: "Operasyonel öneriler ve raporlama ritmi",
    },
    {
      type: "p",
      text: "MRR raporlamasını haftalık operasyon toplantısında değil, aylık finans kapanışında resmileştirin; ancak leading indicator'ları (yeni abone, dunning kuyruğu, iptal niyeti) haftalık izleyin. Shopify + abonelik uygulamanızdan dışa aktarılan abone listesini tek kaynak (source of truth) yapın. Pazarlama ROAS hesabında yalnızca New MRR / CAC değil, 90 günlük cohort LTV / CAC oranını kullanın. Yönetim için tek sayfalık MRR bridge: dönem başı, hareketler, dönem sonu, net MRR churn, ARPU trendi.",
    },
    {
      type: "p",
      text: "Rely veya benzeri abonelik altyapısında otomatik MRR hareket raporu yoksa, Google Sheets'te basit bir model yeterlidir: abone ID, plan, aylık değer, durum, başlangıç/iptal tarihi. Her ay bu tabloyu snapshot alın; önceki ay ile diff çıkarın. İlk kurulum zahmetli görünür ancak yanlış MRR ile alınan stok ve personel kararlarının maliyeti çok daha yüksektir.",
    },
    {
      type: "h2",
      text: "Hangi metrikleri MRR ile birlikte izlemelisiniz?",
    },
    {
      type: "ul",
      items: [
        "Gross MRR churn ve net MRR churn (aylık)",
        "Logo churn (abone sayısı bazlı) ve revenue churn (MRR bazlı) — ikisi farklı hikâye anlatır",
        "CAC payback period: New MRR / aylık pazarlama harcaması",
        "LTV:CAC oranı — hedef genelde 3:1 üzeri olgunlaşmış D2C aboneliklerde",
        "Involuntary churn oranı — başarısız ödeme kaynaklı MRR kaybı",
        "Expansion rate — mevcut tabandan gelen MRR büyümesi",
        "Quick ratio (New + Expansion) ÷ (Churn + Contraction) — 4 üzeri güçlü büyüme sinyali",
      ],
    },
    {
      type: "h2",
      text: "Senaryo analizi: fiyat artışının MRR etkisi",
    },
    {
      type: "p",
      text: "349 TL planı 379 TL'ye çıkardığınızda MRR anında artar — ancak 30 gün içinde voluntary churn spike gelebilir. Doğru analiz: fiyat artışı cohort'u vs kontrol cohort. %8 fiyat artışı + %3 ek churn net pozitif olabilir; %15 artış + %12 churn net negatif. Grandfathering (eski aboneleri eski fiyatta tutma) MRR büyümesini yavaşlatır ama churn'i sınırlar. Operatörler fiyat artışını MRR bridge'de 'expansion' değil ayrı 'price increase' satırı olarak izlemelidir.",
    },
    {
      type: "h2",
      text: "Shopify ve Rely ile MRR raporlama pratiği",
    },
    {
      type: "p",
      text: "Shopify Admin'deki toplam satış raporu MRR vermez; abonelik katmanından (Rely Subs, Shopify Subscriptions veya eşdeğeri) dışa aktarılan abone ledger'ı tek kaynak olmalıdır. Her aktif abone için: customer ID, plan adı, periyot, aylık normalize değer, status (active/paused/cancelled), next billing date. Bu tabloyu Google Sheets veya BI aracınıza günlük sync edin. Finance ekibi ay kapanışında Shopify brüt ciro ile abonelik MRR'ını mutabakat yapmalı — fark genelde tek seferlik upsell, iade veya yanlış status kodlamasından kaynaklanır.",
    },
    {
      type: "h3",
      text: "Cohort MRR analizi",
    },
    {
      type: "p",
      text: "Ortalama MRR büyümesi yeterli değil; kayıt ayına göre cohort MRR eğrisi çizin. Ocak 2026 cohort'unun 6. ayda ne kadar MRR bıraktığını görmek, pazarlama kanalı kalitesini anlatır. Meta kampanyasından gelen cohort agresif indirimle yüksek New MRR getirip 3. ayda çöküyorsa, o kanalın MRR değil logo metriği optimize ettiği anlaşılır. Influencer cohort'u daha düşük başlangıç ARPU ile daha uzun ömür gösterebilir — toplam cohort LTV karşılaştırması kanal bütçesi dağıtımını belirler.",
    },
    {
      type: "h3",
      text: "Finans ve operasyon el sıkışması",
    },
    {
      type: "p",
      text: "MRR raporu finance, growth ve ops arasında ortak dil olmalıdır. Finance: gelir tanınıması, KDV, iade muhasebesi. Growth: New MRR hedefi, CAC tavanı. Ops: next 30 gün renewal hacmi, stok ihtiyacı. Haftalık 15 dakikalık MRR stand-up: bu hafta kaç yenileme, kaç dunning kuyruğunda, kaç iptal niyeti. Bu ritim, 'ay sonunda sürpriz' churn dalgasını erken yakalar. Türkiye'de kapıda ödeme abonelikte nadir çalışır; kart tokenization ile otomatik çekim MRR tahminini güvenilir kılar.",
    },
    {
      type: "h2",
      text: "Board raporu şablonu: tek sayfa MRR özeti",
    },
    {
      type: "p",
      text: "Yönetim kuruluna sunulacak MRR özeti tek sayfayı geçmemeli: dönem başı/sonu MRR, net yeni MRR, net MRR churn %, ARPU, aktif abone sayısı, New MRR/CAC, 90 gün cohort retention. Grafik: son 12 ay MRR trendi + churn bileşenleri stacked bar. Yorum satırı: 'Bu ay churn artışının %60'ı X kampanyası cohort'undan; 3. ayda normalize olması bekleniyor.' Bu disiplin, finans ve growth arasında tartışmayı veriye taşır.",
    },
    {
      type: "h2",
      text: "Sonuç: MRR doğru hesaplanmazsa büyüme kararları körleşir",
    },
    {
      type: "p",
      text: "MRR, abonelik işletmesinin nabzıdır. Shopify D2C markaları için doğru hesaplama; periyot normalizasyonu, hareket tablosu disiplini ve churn ayrımı demektir. Brüt satışa veya abone sayısına tek başına güvenmek, marj baskısı altındaki 2026 e-ticaret ortamında yanlış ölçekleme riski taşır. MRR'ı haftalık değil aylık resmi metrik, günlük operasyonel kararlar için ise yeni abone kalitesi ve dunning kuyruğu ile birlikte okuyun. Finans, pazarlama ve operasyon aynı MRR tanımını paylaştığında abonelik modeli öngörülebilir büyüme kanalına dönüşür.",
    },
    {
      type: "p",
      text: "MRR bridge'i Excel veya BI aracınızda otomatikleştirin; manuel hesaplama ay sonu hatalarına açıktır ve büyüme kararlarını geciktirir.",
    },
    {
      type: "p",
      text: "MRR tanımınızı yazılı dokümante edin ve tüm ekiplerle paylaşın.",
    },
    {
      type: "p",
      text: "Paused aboneleri ayrı raporlayın; aktif MRR ile karıştırmayın.",
    },
    {
      type: "p",
      text: "Bu disiplin olmadan abonelik ölçeklenmez.",
    },
  ] satisfies BlogPostSection[],
  checklist: [
    "Aktif abone listesinde tüm plan periyotlarını aylık eşdeğere normalize edin",
    "MRR bridge şablonu oluşturun: New, Expansion, Contraction, Churned, Reactivation",
    "Voluntary ve involuntary churn'i ayrı KPI olarak tanımlayın",
    "ARPU'yu cohort ve plan segmenti bazında haftalık değil aylık raporlayın",
    "Tek seferlik sipariş gelirini MRR raporundan tamamen hariç tutun",
    "Duraklatılmış aboneler için MRR sayım politikasını yazılı hale getirin",
    "Shopify brüt ciro ile abonelik MRR'ını yönetim dashboard'unda ayırın",
    "Net MRR churn hedefi belirleyin (ör. olgunluk aşamasında <%3 aylık)",
    "CAC hesabında yalnızca New MRR kullanın; expansion'ı pazarlama ROI'sine karıştırmayın",
    "Her ay dönem sonu MRR snapshot'ı alın ve önceki ayla diff çıkarın",
  ],
};
