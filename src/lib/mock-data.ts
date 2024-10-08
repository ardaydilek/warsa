import {
  Facebook,
  Instagram,
  LineChart,
  Linkedin,
  Tag,
  BookOpenCheck,
  ShieldCheck,
  Twitter,
  Home,
  LandPlot,
  Pyramid,
  Rss,
  KeyRound,
  Mail,
} from "lucide-react";

export const ListItems = [
  { name: "Hakkımızda", href: "/about", icon: Home },
  { name: "Arsalar", href: "/lands", icon: Pyramid },
  { name: "Blog", href: "/blog", icon: Rss },
  { name: "Topraktan Arsa", href: "/from-ground", icon: KeyRound },
  { name: "İletişim", href: "/contact", icon: Mail },
];

export const Counties = [
  "Ankara",
  "İstanbul",
  "Konya",
  "Adana",
  "Kayseri",
  "Trabzon",
  "Bursa",
  "Eskişehir",
  "İzmir",
  "Antalya",
  "Çanakkale",
  "Adıyaman",
];

export const FooterLeftLinks = [
  { name: "Satılık Arazi", href: "/" },
  { name: "Kiralık Arazi", href: "/" },
  { name: "Temsilciler", href: "/" },
];

export const FooterMiddleLinks = [
  { name: "Yardım Merkezi", href: "/" },
  { name: "Temsilci Bul", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Kredi Hesaplama", href: "/" },
  { name: "Servisler", href: "/" },
  { name: "Hakkımızda", href: "/" },
  { name: "Proje Akışı", href: "/" },
  { name: "Yorumlar", href: "/" },
  { name: "İletişim", href: "/" },
];

export const FooterRightLinks = [
  { name: "Facebook", href: "/", Icon: Facebook },
  { name: "Twitter", href: "/", Icon: Instagram },
  { name: "Instagram", href: "/", Icon: Twitter },
  { name: "Linkedin", href: "/", Icon: Linkedin },
];

export const FooterMetadata = [
  { name: "Site Haritası", href: "/" },
  { name: "Gizlilik", href: "/" },
  { name: "Koşullar", href: "/" },
];

export const IconInfoContainerData = [
  {
    icon: LineChart,
    title: "Yükselen Kazanç",
    description:
      "Proje bedeli ödemeden yatırımınız ilk günden büyümeye başlasın.",
  },
  {
    icon: BookOpenCheck,
    title: "Hemen Tapu",
    description:
      "Tüm resmi izin ve belgeler tamamlanmış olarak tapunuza sahip olabilirsiniz.",
  },
  {
    icon: Tag,
    title: "Sıfır Risk",
    description:
      "İmarlı, ifrazlı olarak hemen tapu alabileceğiniz yeni nesil yatırım.",
  },
  {
    icon: ShieldCheck,
    title: "Kamusal Güvence",
    description:
      "18 Uygulaması bitmiş, master planlı bir arsa sahibi olabilirsiniz.",
  },
];

export const LandData = [
  {
    title: "arsaVev Dikili",
    slug: "arsavev-dikili",
    description:
      "Konumu, eşsiz iklimi ve bitki çeşitliliğin etkili olmasından kaynaklı bir çok uygarlığı misafir etmiş, tarihte bir çok filozof ve bilgeyi ağırlamış olan Dikili’de siz de yerinizi alın. Evinizin kapılarını Ege kıyılarına ve doğal güzelliklerine açabilirsiniz. İstanbul’a 4 saat mesafede İzmir Dikili’de yer alan arsaVev projemizde siz de yerinizi alıp Aralık 2026’da yaşamaya başlayabilirsiniz.",
    social_areas: ["Fitness", "Açık Havuz", "Özel Plaj", "Kapalı Otopark"],
    images: [
      "/arsavev-dikili/1.jpg",
      "/arsavev-dikili/2.jpg",
      "/arsavev-dikili/3.jpg",
      "/arsavev-dikili/4.jpg",
      "/arsavev-dikili/5.jpg",
      "/arsavev-dikili/6.jpg",
      "/arsavev-dikili/7.jpg",
    ],
    status: "Yapım Aşaması",
    location: "İzmir - Dikili - Salihler",
    concept: "Arsa + Ev",
    product: "Arsa + Ev",
    floor_number: "5",
    total_project_area: "3.387,11m²",
    payment_plan: "%50 Peşinat + 24 Ay Vade",
    arsa_metrakare_araliklari: "48",
    home_required: "Evet, Ekmas Tarafından Yapılacaktır.",
    can_owner_construct: "Hayır, EKMAS Yapı ile anlaşma gereklidir.",
    title_deed_delivery_time: "2 ay",
    project_delivery_time: "Aralık 2026",
    example_parcel: "Dikili-İsmetpaşa - 771 Ada 1 Parsel",
    latitude: 39.086275159902684,
    longitude: 26.88587459648408,
    added_date: "2023-05-01",
  },
  {
    title: "arsaVev Edirne",
    slug: "arsavev-edirne",
    description:
      "arsaVev Edirne, şehir hayatının gürültüsünden uzaklaşmak isteyenler için mükemmel bir kaçış noktası… Tertemiz havayı soluyarak güneşin keyfini çıkarabilir, doğal göletler ve nehirlerle çevrili alanlarda balık tutabilirsiniz. Sadece doğal güzellikleri ve dinginliğiyle değil aynı zamanda şarapları ve üzüm bağlarıyla da ünlü olan Edirne Yeniköy, size huzurlu bir köy hayatı yaşama imkanı sunuyor. Siz de şehir hayatının karmaşasından uzaklaşmak istiyorsanız doğru yerdesiniz.",
    social_areas: [
      "Taş Fırın",
      "Spor Salonu",
      "Havuz",
      "Yürüş Parkurları",
      "Mini Çiftlik",
      "Mini Bostan",
      "Çocuk oyun parkları",
      "Kafetarya",
      "Çok amaçlı Spor Sahası",
    ],
    images: [
      "/arsavev-edirne/1.jpg",
      "/arsavev-edirne/2.jpg",
      "/arsavev-edirne/3.jpg",
      "/arsavev-edirne/4.jpg",
      "/arsavev-edirne/5.jpg",
      "/arsavev-edirne/6.jpg",
      "/arsavev-edirne/7.jpg",
      "/arsavev-edirne/8.jpg",
      "/arsavev-edirne/9.jpg",
      "/arsavev-edirne/10.jpg",
    ],
    status: "Yapım Aşaması",
    location: "Edirne-Uzunköprü-Yeniköy",
    concept: "Arsa + Ev",
    product: "Arsa + Ev",
    floor_number: "2",
    total_project_area: "27.600m²",
    payment_plan: "%50 Peşinat + 24 Ay Vade",
    arsa_metrakare_araliklari: "200-300",
    home_required: "Evet",
    can_owner_construct: "Hayır, arsaVev ile anlaşma gereklidir.",
    // title_deed_delivery_time: "2 ay",
    project_delivery_time: "Haziran 2025",
    example_parcel: "Uzunköprü-Yeniköy 0 Ada 5846 Parsel",
    latitude: 41.26827653344119,
    longitude: 26.688879208733084,
    added_date: "2023-06-01",
  },
  {
    title: "arsaVev Yalova",
    slug: "arsavev-yalova",
    description: `Doğası, eşsiz tarihi, ticari ve fiziki yapısıyla eğitim ve turizm kentine dönüşen, Yalova’da “arsaVev Yalova” projesiyle siz de hemen yerinizi alın…
    İstanbul, Kocaeli ve Bursa arasında köprü görevi gören bu diyar, gelişmiş deniz, hava ve kara ulaşım ağıyla merkezi bir konumda yer alıyor. Armutlu Yarımadası’nın kuzey kıyısındaki güzellikleri ve Samanlı Dağları’nın eteklerindeki serin esintisiyle, adeta doğa harikası bu konumda yeniden nefes alıp tazelenin!
    39 bin 746 metrekarelik bu büyük proje, hayallerinizi gerçeğe dönüştürmek için “Köyde Doğal Yaşam” konseptiyle tasarlandı. Spor, oyun, tarım, yoga ve meditasyon alanları, bisiklet yolları ve köy pazarı gibi zenginleştirilmiş sosyal alanlarından faydalanabileceğiniz arsaVev Yalova’da, sevdiklerinizle mutlu bir yaşama davetlisiniz.`,
    social_areas: [
      "Tarım Alanları",
      "Açık Hava Sineması",
      "Yoga-Meditasyon Alanı",
      "Köy Kahvesi Ateş Çukuru",
      "Köy Pazarı Çocuk Oyun Alanları",
      "Açık-Kapalı Havuz",
    ],
    images: [
      "/arsavev-yalova/1.jpg",
      "/arsavev-yalova/2.jpg",
      "/arsavev-yalova/3.jpg",
      "/arsavev-yalova/4.jpg",
      "/arsavev-yalova/5.jpg",
      "/arsavev-yalova/6.jpg",
      "/arsavev-yalova/7.jpg",
      "/arsavev-yalova/8.jpg",
      "/arsavev-yalova/9.jpg",
    ],
    status: "Yapım Aşaması",
    location: "Yalova-Çiftlikköy-Kabaklı",
    concept: "Arsa + Ev",
    product: "Arsa + Ev",
    floor_number: "3",
    total_project_area: "39.746,62m²",
    payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    arsa_metrakare_araliklari: "50-180",
    home_required: "Evet",
    can_owner_construct: "Hayır, arsaVev ile anlaşma gereklidir.",
    title_deed_delivery_time: "Haziran 2027",
    project_delivery_time: "Haziran 2027",
    example_parcel: "Yalova-Çiftlikköy-Kabaklı 189 Ada 21 Parsel",
    latitude: 40.65618331667207,
    longitude: 29.41028253612248,
    added_date: "2023-07-01",
  },
  {
    title: "arsaVev Foça",
    slug: "arsavev-foca",
    description: `Ege bölgesinde bulunan Foça; saf kalabilmiş doğası, denizi ve tarihiyle eşsiz bir cennettir. Sahil ilçesi olma özelliğine sahip bu ilçe, mavi bayrağa sahip koyları, rengarenk limanları, taş evlerle donatılmış sokakları ve rengarenk limanlarıyla Türkiye’nin önemli tatil destinasyonları arasındadır.
    Siz de Foça ilçesinde doğayla iç içe, deniz manzaralı arsaVev Foça Villa Etabı’nda kaliteli bir yaşama sahip olabilirsiniz. Şimdi arsaVev’e gelin ekstra hiçbir ek ücret ödemeden arsa maliyetine villa sahibi olun.`,
    social_areas: [
      "Mini Golf",
      "Bisiklet Yolu",
      "Macera Parkuru",
      "Sessizlik Bahçesi",
      "Çocuk Oyun Alanı",
      "Çocuk Tarım Deneyim Atölyesi",
      "Açık Hava Fitness",
      "Açık Hava Sinema",
    ],
    images: [
      "/arsavev-foca/1.jpg",
      "/arsavev-foca/2.jpg",
      "/arsavev-foca/3.jpg",
      "/arsavev-foca/4.jpg",
      "/arsavev-foca/5.jpg",
      "/arsavev-foca/6.jpg",
      "/arsavev-foca/7.jpg",
      "/arsavev-foca/8.jpg",
      "/arsavev-foca/9.jpg",
    ],
    status: "Yapım Aşaması",
    location: "İzmir - Foça - Yenifoça",
    concept: "Arsa + Ev",
    product: "Arsa + Ev",
    floor_number: "3",
    total_project_area: "39.746,62m²",
    payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    arsa_metrakare_araliklari: "125-500",
    home_required: "Parselde Hayır / Hissede Evet",
    can_owner_construct: "Evet, malik kendisi evini yaptırabilir.",
    title_deed_delivery_time: "1 Ay",
    project_delivery_time: "Aralık 2024",
    example_parcel: "İzmir-Foça-Yenifoça 10948 Ada 5 Parsel",
    latitude: 38.74112671207892,
    longitude: 26.84400254297645,
    added_date: "2023-07-08",
  },
  {
    title: "Master Kandıra Köy Evleri",
    slug: "master-kandira-koy-evleri",
    description: `Master Köy Evleri Kocaeli Kandıra Kırkarmut köyünün hemen yanında inşaa ediliyor. Doğa ile iç içe 10 adet özel evden oluşuyor. Her eve ait hobi tarlası sizlerin yaşamına sunuluyor.

    Master Köy Evleri toplam 2 katlı 80 m2 dir. Her evin kendine özel kış bahçesi ve otopark alanı bulunmaktadır.

    Master Köy Evlerinde her eve ait 280 m2 hobi bahçesi bulunmaktadır. Evinizinden bağımsız olan hobi bahçeleri evinize sadece 20 metre uzaklıktadır. Hobi bahçeniz sadece size özel olup bahçe duvarı ile çevirilecektir.`,
    social_areas: [
      "Mini Golf",
      "Bisiklet Yolu",
      "Macera Parkuru",
      "Sessizlik Bahçesi",
      "Çocuk Oyun Alanı",
      "Çocuk Tarım Deneyim Atölyesi",
      "Açık Hava Fitness",
      "Açık Hava Sinema",
    ],
    images: [
      "/master-kandira-koy-evleri/1.jpg",
      "/master-kandira-koy-evleri/2.jpg",
      "/master-kandira-koy-evleri/3.jpg",
      "/master-kandira-koy-evleri/4.png",
      "/master-kandira-koy-evleri/5.png",
      "/master-kandira-koy-evleri/6.png",
      "/master-kandira-koy-evleri/7.png",
      "/master-kandira-koy-evleri/8.png",
      "/master-kandira-koy-evleri/9.png",
      "/master-kandira-koy-evleri/10.png",
      "/master-kandira-koy-evleri/11.png",
    ],
    status: "Yapım Aşaması",
    location: "Kocaeli-Kandıra-Kırkarmut",
    // concept: "Arsa + Ev",
    // product: "Arsa + Ev",
    // floor_number: "3",
    // total_project_area: "39.746,62m²",
    // payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    // arsa_metrakare_araliklari: "125-500",
    // home_required: "Parselde Hayır / Hissede Evet",
    // can_owner_construct: "Evet, malik kendisi evini yaptırabilir.",
    // title_deed_delivery_time: "1 Ay",
    // project_delivery_time: "Aralık 2024",
    // example_parcel: "İzmir-Foça-Yenifoça 10948 Ada 5 Parsel",
    latitude: 40.99055282049923,
    longitude: 30.142600502331913,
    added_date: "2023-07-10",
  },
  {
    title: "Master Villa Van",
    slug: "master-villa-van",
    description: `Bankasız, faizsiz, kefilsiz, Projemizde önce tapunuzu alırsınız sonra peşinatınızı ödersiniz. Kalan ödemenizi inşaat tamamlama hakediş ödeme planına göre aylık taksitlerle ödersiniz. Master Villavan projemiz  Van İpekyolu ilçesin de inşaat ediliyor hem yatırım hem oturum için sizlere sunuyoruz.  Projemiz güvenlikli toplam 20 adet lüks villadan oluşmaktadır. Her villanın kendine özel bahçesi ve otopark alanı bulunmaktadır. Projemiz özel mimari tasarımla  yapılarak müşterilerimize hem müstakil hem site içinde yaşama fırsatı sunuyor.  Doğa ile bütünlüğü korunarak özenle projelendirilmiş master Villavan projemiz  merkeze 5dk   Havalimanı’na 10 dk Van gölüne 6 dk mesafede bulunmaktadır. Doğa ile iç içe bir yaşam süreceğiniz projemizde tüm ayrıntılar sizler için özel tasarlanmıştır.`,
    social_areas: [
      "Mini Golf",
      "Bisiklet Yolu",
      "Macera Parkuru",
      "Sessizlik Bahçesi",
      "Çocuk Oyun Alanı",
      "Çocuk Tarım Deneyim Atölyesi",
      "Açık Hava Fitness",
      "Açık Hava Sinema",
    ],
    images: [
      "/master-villa/1.jpg",
      "/master-villa/2.jpg",
      "/master-villa/3.jpg",
    ],
    status: "Yapım Aşaması",
    location: "Van-Buzhane",
    // concept: "Arsa + Ev",
    // product: "Arsa + Ev",
    // floor_number: "3",
    // total_project_area: "39.746,62m²",
    // payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    // arsa_metrakare_araliklari: "125-500",
    // home_required: "Parselde Hayır / Hissede Evet",
    // can_owner_construct: "Evet, malik kendisi evini yaptırabilir.",
    // title_deed_delivery_time: "1 Ay",
    // project_delivery_time: "Aralık 2024",
    // example_parcel: "İzmir-Foça-Yenifoça 10948 Ada 5 Parsel",
    latitude: 38.494317504185666,
    longitude: 43.337048076269994,
    added_date: "2023-07-10",
  },
  {
    title: "Master Villas Erzincan Üzümlü",
    slug: "master-villas-erzincan-uzumlu",
    description: `Master Villas projesi modern taş evlerin doğa ile bütünlüğü korunarak özenle projelendirilmiştir. Master Villas Üzümlü Erzincan merkeze 20 dk Havalimanı’na 10 dk otogara 15 dk mesafede bulunmaktadır. Doğa ile iç içe bir yaşam süreceğiniz projemizde tüm ayrıntılar siz üyelerimize özel tasarlanmıştır. Toplam 24 adet 2+1, 3+1 ve 4+1 villalardan oluşan projemizde evlerinize ait müstakil bahçeler ve otopark alanı bulunmaktadır.`,
    social_areas: [
      "Mini Golf",
      "Bisiklet Yolu",
      "Macera Parkuru",
      "Sessizlik Bahçesi",
      "Çocuk Oyun Alanı",
      "Çocuk Tarım Deneyim Atölyesi",
      "Açık Hava Fitness",
      "Açık Hava Sinema",
    ],
    images: [
      "/master-villas-uzumlu/1.jpg",
      "/master-villas-uzumlu/2.jpg",
      "/master-villas-uzumlu/3.jpg",
    ],
    status: "Yapım Aşaması",
    location: "Erzincan-Üzümlü-Bayırbağ",
    // concept: "Arsa + Ev",
    // product: "Arsa + Ev",
    // floor_number: "3",
    // total_project_area: "39.746,62m²",
    // payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    // arsa_metrakare_araliklari: "125-500",
    // home_required: "Parselde Hayır / Hissede Evet",
    // can_owner_construct: "Evet, malik kendisi evini yaptırabilir.",
    // title_deed_delivery_time: "1 Ay",
    // project_delivery_time: "Aralık 2024",
    // example_parcel: "İzmir-Foça-Yenifoça 10948 Ada 5 Parsel",
    latitude: 39.69689640337872,
    longitude: 39.719144998616834,
    added_date: "2023-07-10",
  },
  {
    title: "Master Köy Doğa Evleri",
    slug: "master-koy-doga-evleri",
    description: `Bankasız, faizsiz, kefilsiz, projemizde önce tapunuzu alırsınız sonra peşinatınızı ödersiniz. Kalan ödemenizi inşaat tamamlama hakediş ödeme planına göre aylık taksitlerle ödersiniz. Master Köy Doğa evleri projemiz Kocaeli Bahçecik sınırlarında doğanın içinde inşaat ediliyor. Hem yatırım hem oturum için sizlere sunuyoruz. Projemiz güvenlikli, yüzme havuzlu toplam 50 adet 2+1, 4+1  villadan oluşmaktadır. Her villanın kendine özel bahçesi ve otopark alanı bulunmaktadır. Projemiz özel mimari tasarımla yapılarak müşterilerimize hem müstakil hem site içinde yaşama fırsatı sunuyor. Doğa ile bütünlüğü korunarak özenle projelendirilmiş Master Köy Doğa evleri projemiz İstanbul’a 70 dk İzmit merkeze 20 dk Bahçecik merkeze 10 dk mesafede bulunmaktadır. Doğa ile iç içe bir yaşam süreceğiniz projemizde tüm ayrıntılar sizler için özel tasarlanmıştır.`,
    social_areas: [
      "Mini Golf",
      "Bisiklet Yolu",
      "Macera Parkuru",
      "Sessizlik Bahçesi",
      "Çocuk Oyun Alanı",
      "Çocuk Tarım Deneyim Atölyesi",
      "Açık Hava Fitness",
      "Açık Hava Sinema",
    ],
    images: [
      "/masterkoy-doga-evleri/1.png",
      "/masterkoy-doga-evleri/2.jpg",
      "/masterkoy-doga-evleri/3.jpg",
    ],
    status: "Yapım Aşaması",
    location: "Kocaeli-Bahçecik",
    // concept: "Arsa + Ev",
    // product: "Arsa + Ev",
    // floor_number: "3",
    // total_project_area: "39.746,62m²",
    // payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    // arsa_metrakare_araliklari: "125-500",
    // home_required: "Parselde Hayır / Hissede Evet",
    // can_owner_construct: "Evet, malik kendisi evini yaptırabilir.",
    // title_deed_delivery_time: "1 Ay",
    // project_delivery_time: "Aralık 2024",
    // example_parcel: "İzmir-Foça-Yenifoça 10948 Ada 5 Parsel",
    latitude: 39.69689640337872,
    longitude: 39.719144998616834,
    added_date: "2023-07-10",
  },
  {
    title: "Master Villas Kartepe",
    slug: "master-villas-kartepe",
    description: `Master Kartepe Villas projesi Kocaeli ili Kartepe ilçesi Avluburun Mahallesinin hemen yanında inşaa ediliyor. Projemiz doğa ile iç içe Sapanca Gölü manzaralı harika bir lokasyonda bulunmaktadır. 16 adet villadan oluşan projemizde her villaya özel 100 m2 ile 215 m2 arasında değişiklik gösteren müstakil bahçeleriniz bulunmaktadır.`,
    social_areas: [
      "Mini Golf",
      "Bisiklet Yolu",
      "Macera Parkuru",
      "Sessizlik Bahçesi",
      "Çocuk Oyun Alanı",
      "Çocuk Tarım Deneyim Atölyesi",
      "Açık Hava Fitness",
      "Açık Hava Sinema",
    ],
    images: [
      "/master-villas-kartepe/1.jpg",
      "/master-villas-kartepe/2.jpg",
      "/master-villas-kartepe/3.jpg",
    ],
    status: "Yapım Aşaması",
    location: "Kocaeli-Bahçecik",
    // concept: "Arsa + Ev",
    // product: "Arsa + Ev",
    // floor_number: "3",
    // total_project_area: "39.746,62m²",
    // payment_plan: "%50 Peşinat + 24 Ay Vade + 1 Ara Ödeme",
    // arsa_metrakare_araliklari: "125-500",
    // home_required: "Parselde Hayır / Hissede Evet",
    // can_owner_construct: "Evet, malik kendisi evini yaptırabilir.",
    // title_deed_delivery_time: "1 Ay",
    // project_delivery_time: "Aralık 2024",
    // example_parcel: "İzmir-Foça-Yenifoça 10948 Ada 5 Parsel",
    latitude: 40.75024312905305,
    longitude: 30.176194113629414,
    added_date: "2023-07-14",
  },
];

export const LandCoverImages = [
  {
    title: "arsaVev Dikili",
    src: "/arsavev-dikili/1.jpg",
    slug: "arsavev-dikili",
  },
  {
    title: "arsaVev Edirne",
    src: "/arsavev-edirne/1.jpg",
    slug: "arsavev-edirne",
  },
  { title: "arsaVev Foca", src: "/arsavev-foca/1.jpg", slug: "arsavev-foca" },
  {
    title: "arsaVev Yalova",
    src: "/arsavev-yalova/1.jpg",
    slug: "arsavev-yalova",
  },
  {
    title: "arsaVev Dikili",
    src: "/arsavev-dikili/1.jpg",
    slug: "arsavev-dikili",
  },
  {
    title: "Master Kandıra Köy Evleri",
    src: "/master-kandira-koy-evleri/1.jpg",
  },
  { title: "Master Villa Van", src: "/master-villa/1.jpg" },
  { title: "Master Villas Kartepe", src: "/master-villas-kartepe/1.jpg" },
  { title: "Master Villas Üzümlü", src: "/master-villas-uzumlu/1.jpg" },
  { title: "Master Köy Doğa Evleri", src: "/masterkoy-doga-evleri/2.jpg" },
];

export const LandCounties = [
  "Kocaeli",
  "Edirne",
  "İzmir",
  "Yalova",
  "Van",
  "Erzincan",
];

const user = {
  id: "clz12wfz70002lzy6t4g8cgla",
  externalId: "user_2jjUpxWeoxAVj0NJXoIOlqQtf8P",
  name: "Arda Aydilek",
  email: "ardakaanaydilek@gmail.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yamRiM1NTTENndkRUTWR3YzFZN0FtWUJTZmwiLCJyaWQiOiJ1c2VyXzJqalVweFdlb3hBVmowTkpYb0lPbHFRdGY4UCIsImluaXRpYWxzIjoiQUEifQ",
  bio: null,
  role: "client",
  isProffesional: false,
  phoneNumber: "+905362703402",
  createdAt: "2024-07-25T09:36:06.326Z",
  updatedAt: " 2024-07-25T09:36:06.326Z",
};
