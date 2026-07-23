import { articleBody as article2026EticaretBuyumeKanaliAbonelik } from "./2026-eticaret-buyume-kanali-abonelik";
import { articleBody as articleAbonelikIlk1000Musteri } from "./abonelik-ilk-1000-musteri";
import { articleBody as articleAbonelikMusteriSadakati } from "./abonelik-musteri-sadakati";
import { articleBody as articleAbonelikUrunKategorileri } from "./abonelik-urun-kategorileri";
import { articleBody as articleBasarisizOdemelerGelirKaybi } from "./basarisiz-odemeler-gelir-kaybi";
import { articleBody as articleChurnAzaltma10Yol } from "./churn-azaltma-10-yol";
import { articleBody as articleKahveTakviyeKozmetikAbonelik } from "./kahve-takviye-kozmetik-abonelik";
import { articleBody as articleLtvNasilArtirilir } from "./ltv-nasil-artirilir";
import { articleBody as articleMrrTekrarlayanGelirHesaplama } from "./mrr-tekrarlayan-gelir-hesaplama";
import { articleBody as articleReklamYerineMevcutMusteriDegeri } from "./reklam-yerine-mevcut-musteri-degeri";
import { articleBody as articleShopifyAbonelikOncesi } from "./shopify-abonelik-oncesi";
import { articleBody as articleSubscriptionBoxIsModeli } from "./subscription-box-is-modeli";
import { articleBody as articleSubscriptionCommerceD2c } from "./subscription-commerce-d2c";
import { articleBody as articleTekrarEdenGelirNedir } from "./tekrar-eden-gelir-nedir";
import { articleBody as articleTekSeferlikSatistanTekrarlayanGelireGecis } from "./tek-seferlik-satistan-tekrarlayan-gelire-gecis";

export const blogArticles: Record<
  string,
  { sections: typeof articleMrrTekrarlayanGelirHesaplama.sections; checklist: string[] }
> = {
  "tekrar-eden-gelir-nedir": articleTekrarEdenGelirNedir,
  "reklam-yerine-mevcut-musteri-degeri": articleReklamYerineMevcutMusteriDegeri,
  "tek-seferlik-satistan-tekrarlayan-gelire-gecis":
    articleTekSeferlikSatistanTekrarlayanGelireGecis,
  "abonelik-urun-kategorileri": articleAbonelikUrunKategorileri,
  "ltv-nasil-artirilir": articleLtvNasilArtirilir,
  "basarisiz-odemeler-gelir-kaybi": articleBasarisizOdemelerGelirKaybi,
  "shopify-abonelik-oncesi": articleShopifyAbonelikOncesi,
  "churn-azaltma-10-yol": articleChurnAzaltma10Yol,
  "kahve-takviye-kozmetik-abonelik": articleKahveTakviyeKozmetikAbonelik,
  "mrr-tekrarlayan-gelir-hesaplama": articleMrrTekrarlayanGelirHesaplama,
  "abonelik-musteri-sadakati": articleAbonelikMusteriSadakati,
  "subscription-commerce-d2c": articleSubscriptionCommerceD2c,
  "subscription-box-is-modeli": articleSubscriptionBoxIsModeli,
  "abonelik-ilk-1000-musteri": articleAbonelikIlk1000Musteri,
  "2026-eticaret-buyume-kanali-abonelik": article2026EticaretBuyumeKanaliAbonelik,
};
