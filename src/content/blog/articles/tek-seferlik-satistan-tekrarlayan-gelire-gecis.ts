import type { BlogPostSection } from "@/content/blog/types";

export const articleBody = {
  sections: [
    {
      type: "p",
      text: "Tek seferlik satışa dayalı bir D2C markası büyüdükçe, reklam harcaması ve lojistik maliyeti aynı hızda şişer; gelir ise ay sonunda yine sıfırdan başlar. Shopify veya İkas üzerinde aylık ciro hedefi tutturan ekiplerin çoğu, aslında tekrarlayan gelir (recurring revenue) katmanı olmadan ölçeklemenin tavanına çok erken çarptığını fark eder. Bu rehber, operatör perspektifinden geçişi anlatır: hangi metrikler kırılır, hangi süreçler yeniden tasarlanır ve ilk çeyrekte neyi ölçmelisiniz.",
    },
    {
      type: "h2",
      text: "Neden tek seferlik model operasyonel tavana çarpar?",
    },
    {
      type: "h3",
      text: "CAC baskısı ve marj erimesi",
    },
    {
      type: "p",
      text: "Meta ve Google'da müşteri edinme maliyeti (CAC) yükselirken, tek seferlik siparişte geri ödeme süresi uzar. Aynı bütçeyle daha fazla yeni müşteri almak, ortalama sepet tutarını (AOV) şişirmeden mümkün olmaz; indirim ve kampanya bağımlılığı oluşur. Abonelik katmanı, edinme maliyetini birden fazla teslimata yayarak birim ekonomiyi düzeltir; ilk siparişte kâr etmek zorunda kalmazsınız.",
    },
    {
      type: "p",
      text: "Türkiye'de supplement ve kahve dikeyinde çalışan orta ölçekli bir marka, yıllık reklam bütçesinin %60'ını yeni müşteriye harcayıp tekrar sipariş oranını %18'de tuttuğunda, fiili LTV/CAC oranı 1,2'nin altına iner. Abonelik teklifiyle aynı müşteri üç ayda dört teslimat aldığında, aynı CAC ile nakit akışı pozitife döner; finans ekibi bunu MRR tablosunda görür.",
    },
    {
      type: "h3",
      text: "Öngörülemez nakit akışı ve planlama kör noktası",
    },
    {
      type: "p",
      text: "Tek seferlik modelde stok, personel ve kargo anlaşmaları ay sonu satışa göre revize edilir; abonelikte ise aktif abone tabanı (subscriber base) ve yenileme tarihleri planlama girdisidir. Tahsilat günü dağılımı, Craftgate veya İyzico üzerinden token'lı çekimle haftalık öngörülebilir hale gelir. Bu fark, tedarikçi MOQ pazarlığında ve kampanya takviminde doğrudan güç verir.",
    },
    {
      type: "h2",
      text: "Tekrarlayan gelire geçişin iş etkisi",
    },
    {
      type: "h3",
      text: "MRR, net churn ve LTV kaldıracı",
    },
    {
      type: "p",
      text: "Aylık tekrarlayan gelir (MRR), yalnızca muhasebe kalemi değil; büyüme kararlarının ana göstergesidir. Yeni abone MRR'si, genişleme (upgrade), daralma (downgrade) ve churn bileşenlerine ayrıldığında, hangi kanalın gerçekten değer ürettiği görünür. LTV hesabında abonelik süresi ve brüt marj birlikte kullanılmalı; yalnızca ilk sipariş marjına bakmak abonelik yatırımını küçük gösterir.",
    },
    {
      type: "p",
      text: "İkas üzerinde günlük tüketim ürünü satan bir marka, abonelik planlarını 30/60/90 günlük periyotlarla açtığında altı ay içinde tekrarlayan gelirin toplam cirodaki payını %35'e çıkardı. Operasyon ekibi artık kampanya yerine yenileme günü yoğunluğuna göre depo vardiyası planlıyor; bu, lojistik maliyetini birim başına düşürür.",
    },
    {
      type: "h3",
      text: "Stok ve tedarik öngörülebilirliği",
    },
    {
      type: "p",
      text: "Aktif abonelerin bir sonraki teslimat tarihi bilindiğinde, hammadde ve ambalaj siparişi önceden verilir; acil kargo ve stok tükenmesi azalır. Özellikle ithal hammaddede lead time uzunsa, abonelik stoğu fiilen sigorta görevi görür. Tek seferlik kampanya patlamalarında yaşanan «bir günde stok bitti» senaryosu, düzenli abone tabanında seyrekleşir.",
    },
    {
      type: "h2",
      text: "Gerçek senaryolar: Türkiye D2C markalarından örnekler",
    },
    {
      type: "p",
      text: "Kahve: Özel çekirdek satan bir marka, yalnızca tek seferlik 1 kg satışta müşteri başına yılda 1,4 sipariş görüyordu. 250 g / 2 haftada bir abonelik paketiyle aynı müşteri yılda 12 teslimat aldı; kargo birim maliyeti düştü, marka «kavurma tarihi» vaadiyle churn'ü düşük tuttu. Shopify vitrininde tek seferlik SKU korunurken, abonelik checkout'u RELY Subs storefront üzerinden yönetildi; tahsilat token'lı çekimle otomatikleşti.",
    },
    {
      type: "p",
      text: "Kozmetik: Rutin ürün satan bir D2C markası, üç aylık «cilt döngüsü» paketini ön ödemeli plan olarak konumlandırdı. İptal penceresi ilk teslimattan önce net yazıldı; voluntary churn ilk ayda yüksek görünse de, kalan abonelerin LTV'si tek seferlik rutin alıcıya göre 2,4 kat çıktı. Bildirimler (Mailgun/NetGSM) yenileme öncesi kullanıldı, kart reddi kaynaklı involuntary churn ayrı izlendi.",
    },
    {
      type: "p",
      text: "Pet food: Ağır kargo maliyeti olan mamada, abonelikte teslimat sıklığı müşteri panelinden değiştirilebilir tutuldu; duraklatma (pause) özelliği «köpek mama bitmedi» iptallerini %22 azalttı. Operasyon, her hafta «yenilenecek abone» listesini ERP'ye aktararak pick-pack hatasını düşürdü.",
    },
    {
      type: "h2",
      text: "Yaygın hatalar: geçişi yavaşlatan kararlar",
    },
    {
      type: "ul",
      items: [
        "Tüm kataloğu aboneliğe açmak: marjı düşük veya seyrek tüketilen SKU'lar churn'ü şişirir.",
        "Aboneliği yalnızca «%15 indirim» olarak satmak: fiyat hassas müşteri çeker, sadakat oluşturmaz.",
        "Ödeme altyapısını sonraya bırakmak: token'sız manuel tahsilat ölçeklenmez, PCI riski artar.",
        "Shopify sipariş akışı ile abonelik motorunu iki ayrı gerçeklikte tutmak: stok ve müşteri kaydı çiftleşir.",
        "Churn'ü tek kalem görmek: istekli iptal ile kart reddini aynı grafikte birleştirmek yanlış müdahaleye yol açar.",
        "İlk 90 günde LTV tahmin etmek: cohort henüz olgunlaşmadan agresif edinme bütçesi artırmak.",
      ],
    },
    {
      type: "p",
      text: "Bir diğer kritik hata, abonelik storefront'unu ana marka deneyiminden koparmaktır. Müşteri «aboneliğim nerede?» sorusuna net cevap bulamazsa, destek talebi ve iptal artar. RELY Subs gibi headless katmanlarda müşteri paneli ve plan değişikliği tek yerde toplanır; Shopify sipariş geçmişi ile senkron kalır.",
    },
    {
      type: "h2",
      text: "Uygulanabilir geçiş planı: ilk 90 gün",
    },
    {
      type: "h3",
      text: "Gün 0–30: teklif ve altyapı",
    },
    {
      type: "p",
      text: "En yüksek tekrar oranına sahip 3–5 SKU'yu seçin; tüketim ritmi ve kargo ağırlığı uygun mu kontrol edin. Shopify veya İkas bağlantısı, Craftgate/İyzico token'lı tekrarlayan ödeme ve abonelik plan periyotlarını (haftalık/aylık/çok aylık) tanımlayın. Fiyatlandırmada «ön ödemeli plan» ile nakit akışını güçlendirin; aylık planı upsell olarak konumlayın.",
    },
    {
      type: "p",
      text: "Mevcut müşteri tabanına «abone ol» davetini e-posta ve paket içi QR ile verin; yeni müşteri ediniminden önce mevcut LTV'yi büyütmek daha ucuzdur. İlk cohort'ta dunning (başarısız ödeme yeniden deneme) kurallarını test edin: retry günleri, SMS hatırlatma, kart güncelleme linki.",
    },
    {
      type: "h3",
      text: "Gün 31–60: operasyon ve destek",
    },
    {
      type: "p",
      text: "Depo ve kargo SLA'sını abonelik yenileme takvimine göre yazın. Müşteri hizmetleri makrolarını «duraklatma, adres değişikliği, sıklık değişimi» için güncelleyin. Shopify admin'de abonelik kaynaklı siparişleri etiketleyerek raporlama ayrıştırın.",
    },
    {
      type: "h3",
      text: "Gün 61–90: optimizasyon",
    },
    {
      type: "p",
      text: "Cohort bazlı 30/60/90 günlük retention ve net MRR churn hesaplayın. Voluntary churn nedenlerini (anket veya iptal akışı) kodlayın. Başarısız ödeme kurtarma oranını (recovery rate) izleyin; kurtarılan MRR ayrı satır olsun.",
    },
    {
      type: "h2",
      text: "Fiyatlandırma ve teklif mimarisi: geçişin omurgası",
    },
    {
      type: "h3",
      text: "Neden indirim tek başına abonelik değildir?",
    },
    {
      type: "p",
      text: "Operatörlerin çoğu aboneliği «biraz ucuz tek seferlik» olarak paketler; bu, ARPU'yu düşürür ve iptal gerekçesini fiyat olur. Doğru kurgu: teslimat kolaylığı, stok garantisi, kişiselleştirme veya üyelik avantajı (erken erişim, özel kavurma) gibi değer katmanlarıdır. İndirim ikincil kaldıraç olmalı; birincil mesaj «hayatını kolaylaştır» olmalıdır. A/B testlerinde «%10 indirim» yerine «2 haftada bir kapında, tarih seçme yok» mesajı genelde daha yüksek abone dönüşümü verir.",
    },
    {
      type: "p",
      text: "Ön ödemeli 3/6/12 aylık planlar nakit akışını güçlendirir ve voluntary churn'i geciktirir; ancak ilk iptal penceresinde şeffaflık şarttır. Finans ekibi geliri peşin görürken operasyon ekibi teslimat yükümlülüğünü ay ay taşır; iki ekip aynı plan takvimini kullanmalıdır.",
    },
    {
      type: "h3",
      text: "Kanal cannibalization'ı yönetmek",
    },
    {
      type: "p",
      text: "Tek seferlik kanalı kapatmadan abonelik açmak, bilinçli cannibalization yönetimi gerektirir. PDP'de varsayılan CTA abonelik olabilir; tek seferlik ikincil link kalır. İlk 60 günde «abone olanların tek seferlik payı» metriğini izleyin; toplam ciro düşerken MRR ve brüt kâr artıyorsa geçiş sağlıklıdır. Tam tersi durumda teklif veya fiyatlandırma revize edilir.",
    },
    {
      type: "h2",
      text: "Ödeme ve tahsilat: geçişin sessiz riski",
    },
    {
      type: "p",
      text: "Türkiye'de tekrarlayan tahsilat, kart saklama (token) ve 3D Secure dinamikleri yüzünden birçok geçiş burada takılır. Craftgate veya İyzico ile token'lı çekim kurulmadan büyüme planlamak risklidir; manuel «her ay link gönder» modeli 500 aboneden sonra çöker. Başarısız ödeme oranı %2–5 aralığında bile MRR'ın aylık %1–3'ünü silebilir; dunning olmadan bu kayıp kalıcı churn gibi görünür.",
    },
    {
      type: "p",
      text: "RELY Subs üzerinde retry kuralları, e-posta/SMS hatırlatma ve müşteri panelinde kart güncelleme akışı tek operasyon setinde yönetilir; Shopify siparişi yalnızca başarılı tahsilat sonrası oluşur. Bu sıra, stokta «ödenmemiş sipariş» karmaşasını önler.",
    },
    {
      type: "h2",
      text: "Ekip ve organizasyon: kim neyi sahiplenir?",
    },
    {
      type: "ul",
      items: [
        "Pazarlama: abone edinme, teklif testi, cohort LTV/CAC",
        "Ürün/katalog: plan periyotları, bundle, upsell kuralları",
        "Operasyon: yenileme takvimi, pick-pack, kargo SLA",
        "Finans: MRR bridge, peşin gelir tahakkuku, iade politikası",
        "Destek: duraklatma, iptal kurtarma, involuntary churn müdahalesi",
        "Teknoloji: Shopify/İkas senkronu, webhook sağlığı, ödeme entegrasyonu",
      ],
    },
    {
      type: "p",
      text: "Abonelik «pazarlama projesi» olarak kalırsa üç ay sonra dashboard terk edilir. Haftalık 30 dakikalık abonelik stand-up: MRR hareketi, dunning kuyruğu, yaklaşan stok riski. Bu ritim, tek seferlik kampanya kültüründen tekrarlayan gelir kültürüne geçişin organizasyonel yüzüdür.",
    },
    {
      type: "h2",
      text: "RELY Subs ile geçişte operasyonel uyum",
    },
    {
      type: "p",
      text: "Platform değiştirmeden abonelik katmanı eklemek, geçişin en düşük riskli yoludur. RELY Subs; Shopify ve İkas ile ürün/sipariş senkronu, Craftgate ve İyzico ile token'lı tahsilat ve müşteri storefront'unda plan yönetimini tek operasyon panelinde birleştirir. Dunning ve bildirim akışları hazır kurgularla devreye alınabilir; ekip Excel'de yenileme takibi yapmaktan çıkar.",
    },
    {
      type: "p",
      text: "Headless yapı, mevcut tema ve marka dilinizi korur; abonelik checkout ve müşteri paneli API ile bağlanır. Bu, «abonelik için ayrı site» hatasını önler ve SEO/brand bütünlüğünü korur.",
    },
    {
      type: "h2",
      text: "Veri ve raporlama: geçişte tek kaynak",
    },
    {
      type: "p",
      text: "Geçiş döneminde en sık kör nokta, Shopify brüt satış ile abonelik MRR’ının farklı panellerde kalmasıdır. Abone ID, plan, aylık değer, durum ve iptal tarihi tek tabloda toplanmalı; RELY Subs hareket raporu veya eşdeğer bir MRR bridge haftalık okunmalıdır. Pazarlama ROAS hesabında yalnızca New MRR / CAC kullanın; 90 günlük cohort LTV / CAC ile bütçe onayı alın.",
    },
    {
      type: "p",
      text: "İlk çeyrekte «abonelik geliri / toplam ciro» oranını hedefleyin (%15 → %25 gibi). Oran artarken brüt kâr marjı düşüyorsa, indirim veya lojistik kırılımı araştırın — büyüme sağlıksız olabilir.",
    },
    {
      type: "h2",
      text: "Takip edilmesi gereken metrikler",
    },
    {
      type: "ul",
      items: [
        "MRR ve net MRR churn (logo + gelir bazlı)",
        "Aktif abone sayısı ve ARPU (abone başına gelir)",
        "Cohort retention (30/60/90 gün)",
        "Voluntary vs involuntary churn ayrımı",
        "Başarısız ödeme oranı ve recovery rate",
        "LTV/CAC (abonelik kanalı ayrı)",
        "Ön ödemeli plan payı ve nakit öncesi gün sayısı",
        "Teslimat başına lojistik maliyet (abone vs tek seferlik)",
      ],
    },
    {
      type: "h2",
      text: "Yatırımcı ve yönetim kurulu dilinde tekrarlayan gelir",
    },
    {
      type: "p",
      text: "Tek seferlik odaklı markada «bu ay hedefi tuttuk» hikâyesi her ay sıfırlanır. MRR trendi ve net MRR churn ile anlatım değişir: taban gelir, büyüme kalitesi ve kayıp nedenleri görünür olur. Bu, stratejik ortaklık veya kredi görüşmelerinde abonelik katmanının değerini somutlaştırır. Abonelik payının toplam ciroda %30'u geçtiği D2C işletmelerde, değerleme çarpanlarında tekrarlayan gelir bileşeni ayrı konuşulmaya başlanır.",
    },
    {
      type: "p",
      text: "Geçiş döneminde yönetime hem brüt ciro hem MRR bridge sunun; «toplam ciro düştü ama kârlılık arttı» senaryosu planlı olmalıdır. Aksi halde abonelik yatırımı erken kesilir. İlk altı ayda hedef: MRR bileşenlerini doğru ölçmek ve voluntary churn'ü anlamak; agresif büyüme ikinci altı ayın konusudur.",
    },
    {
      type: "p",
      text: "Tek seferlik satıştan tekrarlayan gelire geçiş, «abonelik açmak» değil; finans, lojistik ve ürünün aynı tabloda yeniden kurgulanmasıdır. İlk çeyrekte ölçüm disiplini kurulduğunda, ikinci çeyrekte edinme bütçesini MRR büyümesine göre ölçeklemek mümkün olur. Operatör olarak hedefiniz, kampanya takvimine değil abone tabanı sağlığına bağlı büyüme modeline geçmektir.",
    },
    {
      type: "h2",
      text: "Tek seferlik müşteriyi aboneye taşıma (migrate-in)",
    },
    {
      type: "p",
      text: "Mevcut müşteri tabanı, yeni edinmeden daha ucuz abonelik kaynağıdır. Son 12 ayda 2+ sipariş verenlere kişiselleştirilmiş «sıklığınıza göre plan» teklifi gönderin. Shopify segment + e-posta otomasyonu ile başlayın; dönüşüm %3–8 bandında bile MRR tabanını hızla büyütür. Paket içi QR ve fatura üstü mesaj, operasyon maliyeti olmadan aynı daveti tekrarlar.",
    },
    {
      type: "p",
      text: "Migrate-in kampanyasında ilk teslimat tarihini müşterinin son siparişinden türetin; «henüz bitmedi» algısı churn’ü düşürür. Destek ekibi «tek seferlikten aboneliğe geçiş» makrosu ile sipariş geçmişini panelde görsün.",
    },
    {
      type: "h3",
      text: "Sözleşme ve tüketici beklentisi (Türkiye)",
    },
    {
      type: "p",
      text: "Otomatik yenileme ve iptal koşulları checkout’ta ve müşteri panelinde görünür olmalıdır. Şeffaflık voluntary churn’ü kısa vadede artırsa da chargeback ve marka güvenini korur. Hukuk ve pazarlama aynı dilde «nasıl iptal ederim» sorusunu yanıtlamalıdır.",
    },
    { type: "p", text: "Geçişin başarı kriteri «abonelik ciro payı» kadar «net MRR churn <%5» ve «recovery rate >%30» birlikte sağlanmalıdır; tek metrikle karar vermeyin." },
  ] satisfies BlogPostSection[],
  checklist: [
    "En yüksek tekrar satın alma oranına sahip 3–5 SKU için abonelik uygunluk analizi yapın",
    "Shopify veya İkas entegrasyonu ve ödeme tokenization (Craftgate/İyzico) yol haritasını onaylayın",
    "30/60/90 günlük plan ve ön ödemeli teklif fiyatlandırmasını netleştirin",
    "Mevcut müşteri tabanına abonelik davet kampanyası (e-posta + paket içi) planlayın",
    "Voluntary ve involuntary churn için ayrı raporlama tanımlayın",
    "Dunning retry takvimi ve kart güncelleme bildirimlerini devreye alın",
    "Depo/kargo SLA'sını yenileme takvimine göre güncelleyin",
    "Müşteri storefront'ta duraklatma, sıklık ve adres değişikliğini test edin",
    "Cohort retention ve net MRR churn için haftalık dashboard kurun",
    "İlk 90 gün sonunda LTV/CAC'yi abonelik kanalı için ayrı hesaplayın",
    "Destek ekibi için abonelik SSS ve makrolarını yayınlayın",
    "Tek seferlik kanalı koruyarak kanal cannibalization'ı A/B ile ölçün",
  ],
};
