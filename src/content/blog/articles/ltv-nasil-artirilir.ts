import type { BlogPostSection } from "@/content/blog/types";

export const articleBody = {
  sections: [
    {
      type: "p",
      text: "Customer Lifetime Value (LTV), abonelik operatörünün en kritik birim ekonomi metriğidir: bir müşterinin ilişki süresi boyunca getirdiği brüt kâr. Shopify D2C markalarında LTV yalnızca pazarlama KPI’sı değil; CAC tavanı, indirim derinliği, plan fiyatı ve destek yatırımının ortak sınırıdır. Bu rehber, LTV’yi «daha çok reklam» ile değil, ARPU, abone ömrü ve marjı birlikte hareket ettirerek büyütmeyi anlatır.",
    },
    {
      type: "h2",
      text: "LTV neden abonelik işletmesinde merkezdedir?",
    },
    {
      type: "h3",
      text: "CAC geri ödemesi ve büyüme bütçesi",
    },
    {
      type: "p",
      text: "LTV/CAC oranı 3:1 altına düştüğünde ölçekleme, nakit yakımına dönüşür. Abonelikte CAC geri ödemesi ilk siparişte değil, 2.–4. teslimatta gerçekleşir; bu yüzden kısa vadeli ROAS yanıltıcıdır. Operatör olarak 90 ve 180 günlük cohort LTV’yi edinme kanalı bazında izlemelisiniz.",
    },
    {
      type: "p",
      text: "Türkiye’de takviye dikeyinde çalışan bir marka, yalnızca ilk kutu marjına bakarak LTV’yi 420 TL hesaplıyordu; 6 aylık cohort gerçek LTV 1.180 TL çıktı. Pazarlama bütçesi aynı kaldı, kârlı ölçekleme mümkün oldu.",
    },
    {
      type: "h3",
      text: "İş etkisi: MRR kalitesi ve yatırım kararı",
    },
    {
      type: "p",
      text: "LTV artışı, aynı abone tabanından daha fazla MRR ve daha düşük net churn demektir. Expansion MRR (plan yükseltme, ek ürün, sıklık artışı) LTV’yi CAC harcamadan büyütür. Finans ve pazarlama aynı LTV tanımını kullanmalı: brüt marj, iade düşülmüş, vergi politikası net.",
    },
    {
      type: "h2",
      text: "LTV nasıl hesaplanır? (operatör formülü)",
    },
    {
      type: "h3",
      text: "Basit ve cohort yaklaşımı",
    },
    {
      type: "p",
      text: "Basit LTV ≈ ARPU × ortalama abone ömrü (ay). Ortalama ömür ≈ 1 ÷ aylık logo churn (stabil churn varsayımı). Örnek: ARPU 320 TL, aylık churn %5 → ömür ~20 ay → LTV ≈ 6.400 TL brüt gelir; brüt marj %55 ise ~3.520 TL brüt kâr LTV. Cohort tablosu daha doğrudur: her edinme ayı için 12 ay boyunca kümülatif brüt kâr.",
    },
    {
      type: "p",
      text: "Paused aboneler, indirimli ilk ay ve yıllık planlar LTV’yi çarpıtır; segmentasyon şarttır. Yıllık planlı cohort’ta nakit peşin gelir ama operasyon yükü aylık yayılır — iki ekip aynı cohort dosyasını okumalı.",
    },
    {
      type: "h2",
      text: "LTV artıran kaldıraçlar",
    },
    {
      type: "h3",
      text: "ARPU: fiyatlandırma ve paketleme",
    },
    {
      type: "p",
      text: "Ön ödemeli 3/6/12 ay planlar, ARPU’yu yükseltir ve voluntary churn’ü geciktirir. Ek kutu, çapraz kategori ekleme ve «sıklık artır» upsell’i expansion MRR üretir. İndirim yerine değer katmanı (özel içerik, öncelikli kargo, üyelik puanı) fiyat hassasiyetini düşürür.",
    },
    {
      type: "h3",
      text: "Abone ömrü: retention ve churn ayrımı",
    },
    {
      type: "p",
      text: "Voluntary churn’ü iptal anketi ve kurtarma teklifleriyle yönetin. Involuntary churn (kart reddi) için dunning, retry takvimi ve kart güncelleme SMS’i şarttır; aksi halde ömür yapay olarak kısalır. Duraklatma, «geçici iptal»i abonelikte tutar; özellikle tatil ve bütçe baskısı dönemlerinde ömür uzar.",
    },
    {
      type: "h3",
      text: "Marj: lojistik ve ürün maliyeti",
    },
    {
      type: "p",
      text: "LTV brüt kâr cinsindendir; kargo sübvansiyonu LTV’yi sessizce eritir. Teslimat sıklığını optimize etmek (daha az ama daha büyük paket) birim lojistik maliyetini düşürür. Bundle’da düşük marjlı SKU aboneliği tüm LTV’yi aşağı çeker.",
    },
    {
      type: "h2",
      text: "Gerçek senaryolar",
    },
    {
      type: "p",
      text: "Kahve markası: 14 günlük plan → 30 günlük plana geçiş teklifi +2. ay, expansion ile ARPU %18 arttı; 90 günlük cohort LTV %24 yükseldi. Churn değişmedi.",
    },
    {
      type: "p",
      text: "Kozmetik markası: İptal akışında «bir ay duraklat» seçeneği voluntary churn’ü %12 düşürdü; 6 aylık LTV/CAC 2,1’den 3,4’e çıktı.",
    },
    {
      type: "p",
      text: "Supplement markası: Başarısız ödeme recovery %41’e çıkarıldı (Craftgate retry + NetGSM hatırlatma, RELY dunning); involuntary churn kaynaklı LTV kaybı yarıya indi.",
    },
    {
      type: "h2",
      text: "Yaygın LTV hataları",
    },
    {
      type: "ul",
      items: [
        "İlk sipariş gelirini LTV sanmak",
        "Brüt marj yerine ciro ile LTV hesaplamak",
        "Churn’ü tek kalem görmek (voluntary / involuntary ayrımı yok)",
        "Tüm kanalları tek LTV/CAC’ta birleştirmek",
        "İndirimli tanıtım fiyatını kalıcı ARPU varsaymak",
        "Paused aboneleri aktif ömür hesabına dahil etmek",
      ],
    },
    {
      type: "p",
      text: "LTV’yi «artırmak» için sadece fiyat zam yapmak, 2. ay churn’ü patlatır; değer ve ritim hizalanmadan fiyat artışı sürdürülemez.",
    },
    {
      type: "h2",
      text: "Uygulanabilir öneriler",
    },
    {
      type: "p",
      text: "Cohort LTV tablosu kurun: edinme ayı × ay 0–12 brüt kâr. Haftalık değil aylık güncelleyin. En az 3 segment: aylık plan, yıllık plan, indirimli giriş cohort’u.",
    },
    {
      type: "p",
      text: "İptal akışında kurtarma: duraklatma, plan düşürme, bir sonraki teslimatta hediye — A/B test. Destek ekibi «iptal nedeni» kodlarını CRM’e işlesin.",
    },
    {
      type: "p",
      text: "Expansion hedefi: aktif abonelerin %8–15’inde plan yükseltme veya ek ürün. PDP’de abonelere özel upsell, storefront’ta tek tık sıklık artışı.",
    },
    {
      type: "p",
      text: "RELY Subs: Shopify/İkas senkronu, token’lı tahsilat, dunning ve müşteri paneli ile ömür uzatan operasyonlar tek yerde; Excel’de cohort takibi yerine hareket verisi export edilir.",
    },
    {
      type: "h2",
      text: "İzlenmesi gereken metrikler",
    },
    {
      type: "ul",
      items: [
        "Cohort LTV (30/60/90/180 gün)",
        "LTV/CAC kanal ve plan bazında",
        "ARPU ve expansion rate",
        "Logo churn vs revenue churn",
        "Involuntary churn oranı",
        "Recovery rate (başarısız ödeme)",
        "Brüt marj abone başına",
        "Payback period (CAC / aylık brüt kâr)",
      ],
    },
    {
      type: "p",
      text: "LTV artışı tek hamle değil; ARPU, ömür ve marjın ürün–fiyat–operasyon üçgeninde birlikte optimize edilmesidir. Abonelik olgunlaştıkça büyüme, yeni müşteri sayısından çok mevcut tabanın LTV genişlemesine kayar.",
    },
    {
      type: "h2",
      text: "Segment bazlı LTV stratejisi",
    },
    {
      type: "p",
      text: "Yıllık planlı abonelerin LTV’si aylık planlılardan yüksektir; pazarlama spend’i yıllık plana kaydırılabilir. İndirimli giriş cohort’u düşük LTV üretiyorsa kanal kapatılır veya teklif değişir. Meta’dan gelen «tek kutu» ile Google’dan gelen «rutin arayan» farklı LTV — bütçe buna göre bölünür.",
    },
    {
      type: "p",
      text: "VIP segment: 6+ teslimat almış abonelerde kişisel upsell ve erken erişim, expansion’ı hızlandırır. Bu segment toplam LTV’nin %40’ını oluşturabilir.",
    },
    {
      type: "h3",
      text: "Ürün ve içerik ile ömür uzatma",
    },
    {
      type: "p",
      text: "Supplement’te kullanım rehberi e-postası, kozmetikte rutin videosu, kahvede demleme ipucu — ürün tüketimini hızlandırmaz, değer algısını yükseltir. Voluntary churn «işe yaramadı» gerekçesi azalır.",
    },
    {
      type: "h2",
      text: "Fiyat artışı ve LTV (dikkatli kaldıraç)",
    },
    {
      type: "p",
      text: "Yıllık planlı cohort’a zam bildirimi 30 gün önceden; aylık planlarda küçük kademeli artış. Zam sonrası 30 günlük churn spike izlenir. Değer mesajı olmadan zam, LTV’yi kısa vadede düşürür.",
    },
    {
      type: "p",
      text: "RELY storefront’ta plan değişikliği self-servis olduğunda «downgrade» contraction MRR’a gider ama tam churn’den iyidir; LTV korunur.",
    },
    {
      type: "h2",
      text: "LTV modelini finans ile hizalamak",
    },
    {
      type: "p",
      text: "Peşin alınan yıllık plan geliri muhasebeleştirme (tahakkuk) ile pazarlama LTV’si farklı takvimde olabilir. İki ekip aynı «tanınan gelir» tanımını kullanmalıdır. Aksi halde LTV/CAC 3:1 görünürken nakit daralır.",
    },
    {
      type: "p",
      text: "İade ve chargeback LTV’den düşülmeli; özellikle kozmetikte gizli LTV düşürücüdür.",
    },
    { type: "h2", text: "Davet ve referans ile LTV" },
    { type: "p", text: "Mevcut abonenin getirdiği referans abonesi genelde daha yüksek LTV ve daha düşük churn gösterir. Referans programı CAC’ı düşürürken ömür uzatır; ödül yapısı nakit indirimden çok «ekstra teslimat» veya «üyelik katmanı» olmalıdır." },
    { type: "h3", text: "Sadakat katmanları" },
    { type: "p", text: "3. teslimattan sonra «Gold» kargo önceliği veya özel içerik, expansion olmadan LTV artırır. Katmanlar şeffaf kurallı olmalı; gizli kriter güven kaybı yaratır." },
    { type: "h2", text: "Churn sonrası reaktivasyon" },
    { type: "p", text: "İptal eden cohort’a 60. günde «geri dön» teklifi, yeni CAC harcamadan LTV kazandırır. Win-back e-postası indirim değil «kaldığınız yerden» mesajı taşımalıdır." },
    { type: "p", text: "Reactivation MRR, MRR bridge’de ayrı satır olmalı; pazarlama başarısı böyle görünür." },
    { type: "h2", text: "LTV simülasyonu (finans + operasyon)" },
    { type: "p", text: "«Churn %1 azalırsa yıllık brüt kâr +X TL» senaryosu yönetim onayı için güçlüdür. Basit spreadsheet: ARPU, marj, aylık churn, abone sayısı. RELY export verisi ile gerçek ARPU beslenir." },
    { type: "p", text: "LTV hedefi koyarken kanal kısıtı ekleyin: Meta LTV/CAC < 2 ise dur, referans ve migrate-in büyüsün." },
    { type: "p", text: "Ürün ekibi «hangi SKU LTV şişiriyor» sorusunu cohort brüt kâr ile yanıtlar; pazarlama hangi mesajı taşıyor sorusuyla birleşir." },
    { type: "h2", text: "Operasyonel LTV: teslimat ve destek" },
    { type: "p", text: "Zamanında teslimat LTV’yi sessizce artırır; gecikme voluntary churn üretir. Destek ilk yanıt süresi ve çözüm oranı, özellikle kozmetikte LTV korelasyonu gösterir." },
    { type: "p", text: "Hasarlı paket telafisi (yeni gönderim + küçük jest) tek iptali önleyerek LTV’yi korur; telafi maliyeti CAC’ın altındadır." },
    { type: "h3", text: "Veri altyapısı" },
    { type: "p", text: "Shopify customer ID ile abonelik ID eşlemesi tek kaynak olmalıdır. Cohort export aylık; RELY hareket verisi MRR bridge ile birleşir." },
    { type: "p", text: "LTV tahmini için 180 günlük pencere, mevsimsel kategorilerde (supplement Ocak spike) yanıltıcı olabilir — 12 ay rolling kullanın." },
    { type: "p", text: "Yönetim hedefi: 12 ayda LTV/CAC medyanını %20 artırmak; taktikler ARPU, ömür, marj üçlüsünde ayrı OKR olur." },
    { type: "h2", text: "LTV artışında 90 günlük sprint" },
    { type: "p", text: "Hafta 1–2: cohort LTV tablosu ve segment tanımı. Hafta 3–4: iptal akışı + pause. Hafta 5–6: dunning ve recovery. Hafta 7–8: expansion upsell. Hafta 9–12: fiyat/plan testi (küçük cohort). Her sprint sonunda LTV/CAC ve net MRR churn raporu." },
    { type: "p", text: "Sprint sahibi pazarlama değil, «abonelik ürünü» owner’ı olmalıdır; finans ve operasyon aynı tabloda." },
    { type: "p", text: "RELY Subs verisi ile Shopify sipariş geçmişi birleştirildiğinde, hangi teslimatın LTV’yi sıçrattığı görülür — genelde 3. teslimat eşiği." },
    { type: "p", text: "LTV artışı yönetime «daha fazla harcama» değil «daha iyi birim ekonomi» olarak sunulmalıdır." },
    { type: "p", text: "Paket boyutu artışı (upsize) expansion değilse bile ARPU artırır; müşteri «bir kutu daha büyük» talebinde self-servis seçenek görmeli." },
    { type: "p", text: "Sadakat puanı parasal değil deneyim odaklı olmalı; puan indirimi ARPU’yu düşürebilir." },
    { type: "p", text: "Operatör notu: metrik tanımlarını ekip içi wiki’de kilitleyin; yeni çalışan onboarding’inde aynı LTV/MRR/churn sözlüğü kullanılsın." },
    { type: "p", text: "Shopify Flow veya harici otomasyon, RELY webhook’larıyla çakışmamalı; çift e-posta müşteri güvenini zedeler." },
    { type: "p", text: "Büyüme toplantısında «bu ay kaç abone» yerine «net MRR ne kadar büyüdü, churn nedenleri ne» sorulmalıdır." },
    { type: "p", text: "Türkiye’de kargo performansı abonelik NPS’ini doğrudan etkiler; lojistik partner quarterly review abonelik KPI’sına bağlanmalıdır." },
    { type: "p", text: "RELY Subs müşteri storefront’u mobil trafiğe göre optimize edilmeli; kart güncelleme ve pause işlemleri üç tıkta tamamlanmalıdır." },
    { type: "p", text: "B2B veya kurumsal wellness programı supplement LTV'sini uzatabilir; ayrı plan ve fatura akışı gerekir." },
    { type: "p", text: "Müşteri anketinde NPS ile LTV korelasyonu yılda bir incelenir; düşük NPS segmentine müdahale planı yazılır." },
    { type: "p", text: "Ücretsiz kargo eşiği abonelikte anlamsız olabilir; zaten düzenli teslimat var — değer başka yerde aranmalı." },
    { type: "p", text: "LTV optimizasyonu «daha çok ürün gönder» değil «daha uzun süre kal ve büyü» hedefi taşır." },
    { type: "p", text: "LTV yönetimi abonelik olgunluğunun göstergesidir; ARPU, ömür ve marj birlikte hareket etmediğinde büyüme kırılgandır. RELY cohort verisi ve Shopify geçmişi birleşince müdahale noktaları netleşir." },
    { type: "p", text: "Operatörler için altın kural: abonelik metrikleri (MRR, churn, LTV, recovery) tek tanımlı dashboard'da haftalık okunur; Excel dağınıklığı karar geciktirir." },
    { type: "p", text: "Türkiye ödeme ve kargo gerçekleri, global abonelik playbook'unu olduğu gibi kopyalamayı engeller; yerel token, SMS ve SLA ile kalibre edin." },
    { type: "p", text: "RELY Subs, Shopify ve İkas mağazanıza headless abonelik katmanı ekler; Craftgate ve İyzico tahsilat, dunning ve müşteri storefront'u operasyonu tekilleştirir." },
    { type: "p", text: "Cohort analizi: edinme kanalı Meta ise 90 günlük LTV, Google organikten düşük çıkabilir; kanal bütçesi LTV'ye göre kısılır." },
    { type: "p", text: "Abonelik sadakati programında «10. teslimat hediyesi» LTV'yi artırır; hediye marjı planlanmış olmalıdır." },
    { type: "p", text: "Bu rehberdeki taktikler, Shopify ve İkas üzerinde çalışan D2C abonelik operatörleri için saha deneyimine dayanır; metrik tanımlarınızı ekip içinde sabitleyip RELY Subs paneli ile haftalık ritim kurduğunuzda MRR, LTV ve recovery birlikte iyileşir. Tek seferlik satışa göre abonelikte kazanç, öngörülebilir taban gelir ve düşük net churn'de görünür." },
    { type: "p", text: "Özet: LTV artışı ARPU, abone ömrü ve brüt marjın senkron hareketidir; cohort tablosu, iptal kurtarma, dunning, expansion ve migrate-in bir arada çalışır. RELY Subs + Shopify/İkas verisiyle müdahale noktaları görünür kalır." },
  ] satisfies BlogPostSection[],
  checklist: [
    "Brüt marj dahil cohort LTV şablonu oluşturun",
    "LTV/CAC’yi kanal ve plan segmentinde aylık raporlayın",
    "Voluntary / involuntary churn ayrımını dashboard’a alın",
    "İptal akışına duraklatma ve plan düşürme seçenekleri ekleyin",
    "Ön ödemeli planların ARPU ve ömür etkisini ölçün",
    "Dunning ve recovery rate hedefi belirleyin",
    "Expansion (upsell / sıklık artışı) kampanyası tanımlayın",
    "İndirimli ilk ay cohort’unu ayrı izleyin",
    "Teslimat başına lojistik maliyeti LTV modeline dahil edin",
    "90 günlük payback sonrası ölçekleme kuralı yazın",
  ],
};
