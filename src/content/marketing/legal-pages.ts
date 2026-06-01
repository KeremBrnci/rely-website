import { companyLegal, formatCompanyAddress } from "@/config/company";
import { routes } from "@/config/routes";
import type { BlogPostSection } from "@/content/blog/types";

export type LegalDocument = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: BlogPostSection[];
};

const operatorParagraph = `${companyLegal.legalName} (“Şirket”), ${companyLegal.brandName} markası altında sunulan hizmetler bakımından veri sorumlusu ve hizmet sağlayıcıdır. Merkez: ${formatCompanyAddress()}. Vergi dairesi / no: ${companyLegal.taxOffice} – ${companyLegal.taxNumber}. Ticaret sicil no: ${companyLegal.tradeRegistryNumber}. MERSİS: ${companyLegal.mersis}.`;

export const privacyPage: LegalDocument = {
  meta: {
    title: "Gizlilik Politikası",
    description:
      "RELY Subs gizlilik politikası — kişisel verilerin işlenmesi, saklanması ve haklarınız hakkında bilgilendirme.",
  },
  eyebrow: "Yasal",
  title: "Gizlilik Politikası",
  subtitle:
    "Bu metin, RELY Subs platformunu ve web sitemizi kullanırken işlenen kişisel verilere ilişkin demo bilgilendirmedir. Yayınlanmadan önce hukuk danışmanınızca gözden geçirilmelidir.",
  lastUpdated: "30 Mayıs 2026",
  sections: [
    { type: "p", text: operatorParagraph },
    {
      type: "h2",
      text: "1. Kapsam",
    },
    {
      type: "p",
      text: "Bu politika; relysubs.com alan adlı web sitesi, demo ve iletişim formları, abonelik yönetim platformu (RELY Subs) ve buna bağlı destek kanalları üzerinden toplanan kişisel verileri kapsar. Platform müşterilerimiz (markalar) kendi son kullanıcılarına ayrıca kendi gizlilik metinleriyle hüküm getirebilir; bu durumda marka kendi veri sorumlusu sıfatıyla hareket eder.",
    },
    {
      type: "h2",
      text: "2. Toplanan veri kategorileri",
    },
    {
      type: "ul",
      items: [
        "Kimlik ve iletişim: ad, soyad, e-posta, telefon, şirket unvanı.",
        "Hesap ve kullanım: giriş kayıtları, panel tercihleri, destek talepleri.",
        "İletişim formu: mesaj içeriği ve talep türü (demo, teknik, genel).",
        "Teknik veriler: IP adresi, tarayıcı türü, cihaz bilgisi, çerez tanımlayıcıları.",
        "Ödeme ve abonelik verileri: platform üzerinden işlenen işlem meta verileri; kart bilgileri ödeme kuruluşunda saklanır, RELY Subs tam kart numarasını tutmaz.",
      ],
    },
    {
      type: "h2",
      text: "3. İşleme amaçları ve hukuki sebepler",
    },
    {
      type: "p",
      text: "Kişisel verileriniz; hizmet sunumu ve sözleşmenin ifası, meşru menfaat (güvenlik, ürün geliştirme), açık rızanız (pazarlama iletişimi gibi isteğe bağlı alanlar) ve hukuki yükümlülükler (muhasebe, resmi talepler) kapsamında, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) md. 5 ve 6’ya uygun olarak işlenir.",
    },
    {
      type: "h2",
      text: "4. Saklama süresi",
    },
    {
      type: "p",
      text: "Veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuattaki zamanaşımı süreleri kadar saklanır. İletişim formu kayıtları genel olarak 24 ay; hesap verileri sözleşme süresi + 10 yıl (ticari kayıt yükümlülükleri) çerçevesinde değerlendirilir. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.",
    },
    {
      type: "h2",
      text: "5. Aktarım",
    },
    {
      type: "p",
      text: "Hizmet sağlayıcılarımız (barındırma, e-posta, analitik, ödeme kuruluşları) ile yalnızca hizmetin gerektirdiği ölçüde ve sözleşmesel güvenlik taahhütleriyle paylaşım yapılabilir. Yurt dışına aktarım söz konusuysa KVKK md. 9’daki şartlara uygun hüküm veya açık rıza mekanizmaları uygulanır.",
    },
    {
      type: "h2",
      text: "6. Çerezler",
    },
    {
      type: "p",
      text: "Sitemizde zorunlu çerezler (oturum, güvenlik) ve tercihe bağlı analitik çerezler kullanılabilir. Tarayıcı ayarlarınızdan çerezleri reddedebilirsiniz; bazı site işlevleri kısıtlanabilir.",
    },
    {
      type: "h2",
      text: "7. Haklarınız",
    },
    {
      type: "ul",
      items: [
        "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve bilgi talep etme.",
        "Amacına uygun kullanılıp kullanılmadığını öğrenme.",
        "Yurt içi / yurt dışı aktarılan üçüncü kişileri bilme.",
        "Eksik veya yanlış işlenmişse düzeltilmesini isteme.",
        "KVKK md. 7 kapsamında silinmesini veya yok edilmesini isteme.",
        "Otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz.",
        "Zararın giderilmesini talep etme.",
      ],
    },
    {
      type: "p",
      text: `Taleplerinizi ${companyLegal.privacyEmail} adresine veya yazılı başvuru ile ${formatCompanyAddress()} adresine iletebilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılır.`,
    },
    {
      type: "h2",
      text: "8. Güvenlik",
    },
    {
      type: "p",
      text: "Teknik ve idari tedbirler (erişim kontrolü, şifreleme, loglama, tedarikçi değerlendirmesi) ile verilerinizin yetkisiz erişim, kayıp veya ifşasına karşı koruma sağlanır. Olay müdahale prosedürlerimiz periyodik olarak gözden geçirilir.",
    },
    {
      type: "h2",
      text: "9. Politika güncellemeleri",
    },
    {
      type: "p",
      text: "Bu politika güncellenebilir; güncel sürüm bu sayfada yayımlanır. Önemli değişikliklerde kayıtlı kullanıcılara e-posta veya panel bildirimi ile bilgi verilebilir.",
    },
    {
      type: "p",
      text: `İlgili: ${routes.contact} · Kullanım şartları: ${routes.terms}`,
    },
  ],
};

export const termsPage: LegalDocument = {
  meta: {
    title: "Kullanım Şartları",
    description:
      "RELY Subs platformu ve web sitesi kullanım şartları — demo metin.",
  },
  eyebrow: "Yasal",
  title: "Kullanım Şartları",
  subtitle:
    "RELY Subs hizmetlerini ve web sitemizi kullanırken geçerli olan genel hükümler. Bu metin demo amaçlıdır; bağlayıcı sözleşme için hukuk onayı gereklidir.",
  lastUpdated: "30 Mayıs 2026",
  sections: [
    { type: "p", text: operatorParagraph },
    {
      type: "h2",
      text: "1. Tanımlar ve kabul",
    },
    {
      type: "p",
      text: `“Platform”, Şirket tarafından sunulan ${companyLegal.brandName} abonelik ticareti altyapısını; “Kullanıcı”, platforma kayıt olan veya web sitesini ziyaret eden gerçek veya tüzel kişiyi ifade eder. Siteye erişim veya hizmet talebi, bu şartların okunduğu ve kabul edildiği anlamına gelir.`,
    },
    {
      type: "h2",
      text: "2. Hizmetin niteliği",
    },
    {
      type: "p",
      text: "RELY Subs; abonelik planları, tekrarlayan tahsilat, müşteri portalı, abonelik sitesi ve operasyon araçları sunan bir kurumsal (B2B) yazılım hizmetidir. Özellik kapsamı, fiyatlandırma ve hizmet düzeyi (SLA) detayları ayrı hizmet sözleşmesi veya sipariş formunda belirlenir.",
    },
    {
      type: "h2",
      text: "3. Hesap ve güvenlik",
    },
    {
      type: "ul",
      items: [
        "Kayıt bilgilerinin doğru ve güncel tutulması kullanıcı sorumluluğundadır.",
        "Hesap kimlik bilgileri üçüncü kişilerle paylaşılmamalıdır.",
        "Yetkisiz erişim şüphesinde derhal contact@relysubs.com üzerinden bildirim yapılmalıdır.",
      ],
    },
    {
      type: "h2",
      text: "4. Kabul edilebilir kullanım",
    },
    {
      type: "p",
      text: "Platform; yürürlükteki mevzuata, ödeme kurallarına ve üçüncü taraf entegrasyon şartlarına aykırı, yanıltıcı, zararlı veya hak ihlali oluşturan faaliyetler için kullanılamaz. Şirket, ihlal tespitinde hesabı askıya alma veya sonlandırma hakkını saklı tutar.",
    },
    {
      type: "h2",
      text: "5. Ücretlendirme ve ödeme",
    },
    {
      type: "p",
      text: "Ücretler fiyatlandırma sayfasında veya teklif dokümanında belirtilir. Deneme süreleri ve kurumsal planlar yazılı mutabakatla netleşir. Ödeme gecikmesinde hizmet askıya alınabilir; tahsilat ödeme kuruluşu altyapısı üzerinden yürütülür.",
    },
    {
      type: "h2",
      text: "6. Fikri mülkiyet",
    },
    {
      type: "p",
      text: "Platform yazılımı, arayüz, marka ve dokümantasyon Şirket’e veya lisans verenlerine aittir. Kullanıcı yalnızca sözleşme süresince, hizmet kapsamında sınırlı kullanım hakkına sahiptir. Tersine mühendislik ve yetkisiz kopyalama yasaktır.",
    },
    {
      type: "h2",
      text: "7. Veri ve gizlilik",
    },
    {
      type: "p",
      text: `Kişisel veriler Gizlilik Politikası (${routes.privacy}) ve KVKK hükümlerine uygun işlenir. Markalar kendi müşteri verileri için ayrıca veri sorumlusu yükümlülüklerini yerine getirmekle yükümlüdür.`,
    },
    {
      type: "h2",
      text: "8. Sorumluluk sınırı",
    },
    {
      type: "p",
      text: "Platform “olduğu gibi” sunulur. Mücbir sebep, üçüncü taraf kesintileri veya kullanıcı kaynaklı yapılandırma hatalarından doğan dolaylı zararlardan Şirket, yürürlükteki emredici hükümler saklı kalmak kaydıyla ve yazılı sözleşmede aksi kararlaştırılmadıkça sorumlu tutulamaz. Demo ortamında canlı işlem garantisi verilmez.",
    },
    {
      type: "h2",
      text: "9. Fesih",
    },
    {
      type: "p",
      text: "Taraflar, sözleşme süresine ve bildirim sürelerine uygun olarak hizmeti sonlandırabilir. Kullanıcının şart ihlali halinde Şirket derhal fesih uygulayabilir. Fesih sonrası veri ihracı ve silme süreçleri hizmet sözleşmesinde tanımlanır.",
    },
    {
      type: "h2",
      text: "10. Uygulanacak hukuk ve uyuşmazlık",
    },
    {
      type: "p",
      text: "Bu şartlara Türkiye Cumhuriyeti kanunları uygulanır. İstanbul (Merkez) mahkeme ve icra daireleri yetkilidir; tüketici işlemlerinde emredici tüketici hükümleri saklıdır.",
    },
    {
      type: "h2",
      text: "11. İletişim",
    },
    {
      type: "p",
      text: `Sorularınız için: ${companyLegal.contactEmail} · ${routes.contact}`,
    },
  ],
};
