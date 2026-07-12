# RELY Subs — Ürün Referansı (İçerik Kaynağı)

> Bu dosya, pazarlama sitesi içeriklerinin **tek doğru kaynağıdır**. Ürün
> sayfası ve ana sayfa kopyaları buradaki gerçek özelliklere göre yazılır.
> Kaynak: [help.relysubs.com](https://help.relysubs.com/) (resmi dokümantasyon).
> Yeni özellik eklendiğinde önce bu dosyayı güncelle, sonra içerikleri hizala.

Son güncelleme: 2026-05-30 · Kaynak indeksi: https://help.relysubs.com/llms.txt

---

## Konumlandırma (tek cümle)

RELY Subs, **mevcut e-ticaret altyapınızı değiştirmeden** üzerine abonelik ve
tekrarlayan gelir katmanı ekleyen **bağımsız bir platformdur**. Ürünleri
aboneliğe açar, düzenli ödeme alır ve tüm operasyonu tek panelden yönetirsiniz.

Öne çıkan vaatler:

- **Hızlı kurulum** — ~30 dakikada satışa hazır (Hızlı Başlangıç akışı).
- **Tekrarlayan gelir** — haftalık / aylık / yıllık abonelik seçenekleri.
- **Otomatik operasyon** — tahsilat, sipariş oluşturma, stok ve bildirimler.
- **Merkezi yönetim** — abonelik, müşteri, sipariş ve ödeme tek panelde.

---

## Entegrasyonlar (gerçek)

| Alan | Sağlayıcılar |
| --- | --- |
| E-ticaret platformu | **Shopify** (API token + webhook), **İkas** (API anahtarı) |
| Ödeme | **Kart saklama (token) destekleyen sanal POS ve ödeme kuruluşları** — Craftgate, İyzico ve diğerleri; recurring destek gerekir |
| E-posta | **E-posta bildirimleri** |
| SMS | **NetGSM** |

> Platform bağlantısı kurulmadan ürün aktarılamaz. Kart bilgileri RELY'de
> tutulmaz; ödeme sağlayıcı tarafında token olarak saklanır.

---

## Kurulum akışı (Hızlı Başlangıç — gerçek adımlar)

1. Backoffice paneline giriş yapın.
2. E-ticaret platformunu bağlayın (Shopify / İkas).
3. Ürünleri içe aktarın (aboneliğe açılacakları seçin).
4. Abonelik planı oluşturun (ürün + sıklık + indirim).
5. Ödeme altyapısını kurun (kart saklama destekleyen sanal POS API bilgileri).
6. Domaini ayarlayın (müşteri abonelik storefront URL'si).
7. Koleksiyon ve menü yapısını kurun.

> Pazarlamada "Dört adım" özetlersek: **Bağla → Ürün/Plan → Ödeme → Yayına al**.

---

## Çekirdek özellikler

### Abonelik planları
- Plan = bir ürünün abonelik koşulları; bir ürüne birden çok plan tanımlanabilir.
- **Plan tipleri:** Standart, Ön ödemeli, Dinamik, Tek seferlik satış.
- **Sıklık:** haftalık / aylık / yıllık.
- **İndirim:** abonelik fiyatının normal fiyata göre avantajı.
- **Süre:** belirli dönem sonra otomatik sonlanır veya sınırsız.
- **Varyant kısıtlaması:** plana dahil varyantlar seçilebilir.
- Toplu plan oluşturma ve plan kopyalama desteklenir.

### Ürünler, koleksiyonlar, paketler
- Ürünler e-ticaret platformundan içe aktarılır (ad, harici ID, varyantlar).
- **Koleksiyonlar:** ürünleri gruplayarak storefront deneyimini düzenler.
- **Paketler (bundles):** birden fazla ürünü tek teklifte birleştirir
  (örn. kahve + filtre + kupa); sepet tutarını artırır, mevcut satışı bozmaz.

### Müşteri storefront'u (abonelik sitesi)
- Müşterinin abonelik başlattığı/yönettiği ayrı bir storefront.
- **Kendi domaininde** yayınlanır (örn. `abonelik.magazaniz.com`, CNAME ile).
- Varsayılan: `marka.relysubs.com`.

### Abonelik yönetimi (tek ekran)
- **Durumlar:** Aktif / Duraklatılmış / İptal Edilmiş (ödeme + gönderimi etkiler).
- Başarısız ödemede müşteriye **kart güncelleme bağlantısı** gönderilir.
- Teslimat/fatura adresi güncellenir; değişiklik bir sonraki siparişe uygulanır.
- Her abonelik için: müşteri, ürün/plan, sonraki ödeme & gönderim tarihi, geçmiş.
- **Abonelik olayları:** tüm geçmiş kronolojik izlenir.

### Ödeme & tahsilat
1. Müşteri ilk ödemede kartını girer → sağlayıcıda token'lanır.
2. Her yenilemede sistem otomatik tahsilat dener.
3. Başarılıysa abonelik sürer; başarısızsa **retry** süreci başlar.

### Bildirimler (otomatik)
E-posta ve SMS şablonları, değişken (`{{customer_name}}`, `{{update_card_url}}`,
`{{next_billing_date}}` vb.) destekler. Tetikleyiciler:

| Bildirim | Ne zaman |
| --- | --- |
| Yenileme hatırlatması | Ödeme tarihinden önce |
| Ödeme başarılı | Ödeme alındığında |
| Ödeme başarısız | Ödeme alınamadığında |
| Kart güncelleme | Kart güncelleme gerektiğinde |
| Abonelik iptali | Abonelik sonlandığında |

### Hediye çekleri (indirim kodları)
- `fixed` / `percent`, maksimum indirim, kullanım & kişi başı limit, tarih aralığı.
- "Sadece ilk siparişe" ve "sadece abonelikte" kuralları.
- Kullanım: hoşgeldin indirimi, ilk sipariş kampanyası, sadakat, dönemsel.

### Müşteriler & ekip
- **Müşteriler:** ad/e-posta/telefon/aktif abonelik; detayda adres, ödeme durumu,
  aktif+geçmiş abonelikler, sipariş geçmişi.
- **Panel kullanıcıları (team):** backoffice erişimi ve yetki yönetimi.

### Siparişler
- Aboneliklerden **otomatik oluşturulan siparişler** takip edilip yönetilir.

---

## Sözlük / doğru terimler

- "Mevcut altyapınızı değiştirmeden" (replatform yok).
- "Storefront" = müşteri abonelik sitesi (kendi domaininde).
- "Tokenization" = kart saklama; kartlar RELY'de tutulmaz.
- Entegrasyon adlarını doğru yaz: Shopify, İkas, Craftgate, İyzico (örnek sanal POS), NetGSM.

## Yapılmayacaklar / dikkat

- Henüz dokümante edilmeyen entegrasyon/özellik **uydurma**. Yeni veri için
  önce help.relysubs.com'u kontrol et, sonra bu dosyaya ekle.
- Analitik (MRR/churn/LTV) panel görselleri pazarlama amaçlı; dokümantasyon
  operasyon yönetimini vurgular — abartılı analitik iddialarından kaçın.
