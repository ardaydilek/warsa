import {
  LandFormat,
  OwnerType,
  PrismaClient,
  PublishStatus,
  ZoningStatus,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Mock user data
  const user = await prisma.user.findUnique({
    where: {
      email: "ardakaanaydilek@gmail.com",
    },
  });

  if (!user) throw new Error("User not found");

  // Mock land data
  const lands = [
    {
      format: LandFormat.sale,
      province: "İzmir",
      district: "Dikili",
      neighborhood: "Salihler",
      streetAdress: "123 Example Street",
      latitude: 39.086275159902684,
      longitude: 26.88587459648408,
      size: 3387.11,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Konumu, eşsiz iklimi ve bitki çeşitliliğin etkili olmasından kaynaklı bir çok uygarlığı misafir etmiş, tarihte bir çok filozof ve bilgeyi ağırlamış olan Dikili’de siz de yerinizi alın. Evinizin kapılarını Ege kıyılarına ve doğal güzelliklerine açabilirsiniz. İstanbul’a 4 saat mesafede İzmir Dikili’de yer alan arsaVev projemizde siz de yerinizi alıp Aralık 2026’da yaşamaya başlayabilirsiniz.",
      price: 1000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.reviewing,
      parcels: {
        create: [{ number: "771 Ada 1 Parsel" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/3.jpg",
            order: 3,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/4.jpg",
            order: 4,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/5.jpg",
            order: 5,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/6.jpg",
            order: 6,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-dikili/7.jpg",
            order: 7,
          },
        ],
      },
      landTypes: {
        connect: [{ name: "Tarla" }, { name: "Zeytinlik" }],
      },
    },
    {
      format: LandFormat.sale,
      province: "Edirne",
      district: "Uzunköprü",
      neighborhood: "Yeniköy",
      streetAdress: "123 Example Street",
      latitude: 41.26827653344119,
      longitude: 26.688879208733084,
      size: 27600,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "arsaVev Edirne, şehir hayatının gürültüsünden uzaklaşmak isteyenler için mükemmel bir kaçış noktası… Tertemiz havayı soluyarak güneşin keyfini çıkarabilir, doğal göletler ve nehirlerle çevrili alanlarda balık tutabilirsiniz. Sadece doğal güzellikleri ve dinginliğiyle değil aynı zamanda şarapları ve üzüm bağlarıyla da ünlü olan Edirne Yeniköy, size huzurlu bir köy hayatı yaşama imkanı sunuyor. Siz de şehir hayatının karmaşasından uzaklaşmak istiyorsanız doğru yerdesiniz.",
      price: 2000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "5846 Parsel" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/3.jpg",
            order: 3,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/4.jpg",
            order: 4,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/5.jpg",
            order: 5,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/6.jpg",
            order: 6,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/7.jpg",
            order: 7,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/8.jpg",
            order: 8,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/9.jpg",
            order: 9,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-edirne/10.jpg",
            order: 10,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "Yalova",
      district: "Çiftlikköy",
      neighborhood: "Kabaklı",
      streetAdress: "123 Example Street",
      latitude: 40.65618331667207,
      longitude: 29.41028253612248,
      size: 39746.62,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Doğası, eşsiz tarihi, ticari ve fiziki yapısıyla eğitim ve turizm kentine dönüşen, Yalova’da “arsaVev Yalova” projesiyle siz de hemen yerinizi alın… İstanbul, Kocaeli ve Bursa arasında köprü görevi gören bu diyar, gelişmiş deniz, hava ve kara ulaşım ağıyla merkezi bir konumda yer alıyor. Armutlu Yarımadası’nın kuzey kıyısındaki güzellikleri ve Samanlı Dağları’nın eteklerindeki serin esintisiyle, adeta doğa harikası bu konumda yeniden nefes alıp tazelenin! 39 bin 746 metrekarelik bu büyük proje, hayallerinizi gerçeğe dönüştürmek için “Köyde Doğal Yaşam” konseptiyle tasarlandı. Spor, oyun, tarım, yoga ve meditasyon alanları, bisiklet yolları ve köy pazarı gibi zenginleştirilmiş sosyal alanlarından faydalanabileceğiniz arsaVev Yalova’da, sevdiklerinizle mutlu bir yaşama davetlisiniz.",
      price: 3000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "189 Ada 21 Parsel" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/3.jpg",
            order: 3,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/4.jpg",
            order: 4,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/5.jpg",
            order: 5,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/6.jpg",
            order: 6,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/7.jpg",
            order: 7,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/8.jpg",
            order: 8,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-yalova/9.jpg",
            order: 9,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "İzmir",
      district: "Foça",
      neighborhood: "Yenifoça",
      streetAdress: "123 Example Street",
      latitude: 38.74112671207892,
      longitude: 26.84400254297645,
      size: 39746.62,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Ege bölgesinde bulunan Foça; saf kalabilmiş doğası, denizi ve tarihiyle eşsiz bir cennettir. Sahil ilçesi olma özelliğine sahip bu ilçe, mavi bayrağa sahip koyları, rengarenk limanları, taş evlerle donatılmış sokakları ve rengarenk limanlarıyla Türkiye’nin önemli tatil destinasyonları arasındadır. Siz de Foça ilçesinde doğayla iç içe, deniz manzaralı arsaVev Foça Villa Etabı’nda kaliteli bir yaşama sahip olabilirsiniz. Şimdi arsaVev’e gelin ekstra hiçbir ek ücret ödemeden arsa maliyetine villa sahibi olun.",
      price: 4000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "10948 Ada 5 Parsel" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/3.jpg",
            order: 3,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/4.jpg",
            order: 4,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/5.jpg",
            order: 5,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/6.jpg",
            order: 6,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/7.jpg",
            order: 7,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/8.jpg",
            order: 8,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/arsavev-foca/9.jpg",
            order: 9,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "Kocaeli",
      district: "Kandıra",
      neighborhood: "Kırkarmut",
      streetAdress: "123 Example Street",
      latitude: 40.99055282049923,
      longitude: 30.142600502331913,
      size: 5000.0,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Master Köy Evleri Kocaeli Kandıra Kırkarmut köyünün hemen yanında inşaa ediliyor. Doğa ile iç içe 10 adet özel evden oluşuyor. Her eve ait hobi tarlası sizlerin yaşamına sunuluyor. Master Köy Evleri toplam 2 katlı 80 m2 dir. Her evin kendine özel kış bahçesi ve otopark alanı bulunmaktadır. Master Köy Evlerinde her eve ait 280 m2 hobi bahçesi bulunmaktadır. Evinizinden bağımsız olan hobi bahçeleri evinize sadece 20 metre uzaklıktadır. Hobi bahçeniz sadece size özel olup bahçe duvarı ile çevirilecektir.",
      price: 500000.0,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "Parcel 1" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/3.jpg",
            order: 3,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/4.png",
            order: 4,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/5.png",
            order: 5,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/6.png",
            order: 6,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/7.png",
            order: 7,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/8.png",
            order: 8,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/9.png",
            order: 9,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/10.png",
            order: 10,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-kandira-koy-evleri/11.png",
            order: 11,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "Van",
      district: "Buzhane",
      neighborhood: "123 Example Neighborhood",
      streetAdress: "123 Example Street",
      latitude: 38.494317504185666,
      longitude: 43.337048076269994,
      size: 20000,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Bankasız, faizsiz, kefilsiz, Projemizde önce tapunuzu alırsınız sonra peşinatınızı ödersiniz. Kalan ödemenizi inşaat tamamlama hakediş ödeme planına göre aylık taksitlerle ödersiniz. Master Villavan projemiz Van İpekyolu ilçesin de inşaat ediliyor hem yatırım hem oturum için sizlere sunuyoruz. Projemiz güvenlikli toplam 20 adet lüks villadan oluşmaktadır. Her villanın kendine özel bahçesi ve otopark alanı bulunmaktadır. Projemiz özel mimari tasarımla yapılarak müşterilerimize hem müstakil hem site içinde yaşama fırsatı sunuyor. Doğa ile bütünlüğü korunarak özenle projelendirilmiş master Villavan projemiz merkeze 5dk Havalimanı’na 10 dk Van gölüne 6 dk mesafede bulunmaktadır. Doğa ile iç içe bir yaşam süreceğiniz projemizde tüm ayrıntılar sizler için özel tasarlanmıştır.",
      price: 6000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.reviewing,
      parcels: {
        create: [{ number: "Parcel 2" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villa/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villa/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villa/3.jpg",
            order: 3,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "Erzincan",
      district: "Üzümlü",
      neighborhood: "Bayırbağ",
      streetAdress: "123 Example Street",
      latitude: 39.69689640337872,
      longitude: 39.719144998616834,
      size: 30000,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Master Villas projesi modern taş evlerin doğa ile bütünlüğü korunarak özenle projelendirilmiştir. Master Villas Üzümlü Erzincan merkeze 20 dk Havalimanı’na 10 dk otogara 15 dk mesafede bulunmaktadır. Doğa ile iç içe bir yaşam süreceğiniz projemizde tüm ayrıntılar siz üyelerimize özel tasarlanmıştır. Toplam 24 adet 2+1, 3+1 ve 4+1 villalardan oluşan projemizde evlerinize ait müstakil bahçeler ve otopark alanı bulunmaktadır.",
      price: 7000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "Parcel 3" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villas-uzumlu/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villas-uzumlu/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villas-uzumlu/3.jpg",
            order: 3,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "Kocaeli",
      district: "Bahçecik",
      neighborhood: "123 Example Neighborhood",
      streetAdress: "123 Example Street",
      latitude: 39.69689640337872,
      longitude: 39.719144998616834,
      size: 50000,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Bankasız, faizsiz, kefilsiz, projemizde önce tapunuzu alırsınız sonra peşinatınızı ödersiniz. Kalan ödemenizi inşaat tamamlama hakediş ödeme planına göre aylık taksitlerle ödersiniz. Master Köy Doğa evleri projemiz Kocaeli Bahçecik sınırlarında doğanın içinde inşaat ediliyor. Hem yatırım hem oturum için sizlere sunuyoruz. Projemiz güvenlikli, yüzme havuzlu toplam 50 adet 2+1, 4+1 villadan oluşmaktadır. Her villanın kendine özel bahçesi ve otopark alanı bulunmaktadır. Projemiz özel mimari tasarımla yapılarak müşterilerimize hem müstakil hem site içinde yaşama fırsatı sunuyor. Doğa ile bütünlüğü korunarak özenle projelendirilmiş Master Köy Doğa evleri projemiz İstanbul’a 70 dk İzmit merkeze 20 dk Bahçecik merkeze 10 dk mesafede bulunmaktadır. Doğa ile iç içe bir yaşam süreceğiniz projemizde tüm ayrıntılar sizler için özel tasarlanmıştır.",
      price: 8000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "Parcel 4" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/masterkoy-doga-evleri/1.png",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/masterkoy-doga-evleri/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/masterkoy-doga-evleri/3.jpg",
            order: 3,
          },
        ],
      },
    },
    {
      format: LandFormat.sale,
      province: "Kocaeli",
      district: "Bahçecik",
      neighborhood: "123 Example Neighborhood",
      streetAdress: "123 Example Street",
      latitude: 40.75024312905305,
      longitude: 30.176194113629414,
      size: 50000,
      status: "Yapım Aşaması",
      zoningStatus: ZoningStatus.zoned,
      isOwner: true,
      description:
        "Master Kartepe Villas projesi Kocaeli ili Kartepe ilçesi Avluburun Mahallesinin hemen yanında inşaa ediliyor. Projemiz doğa ile iç içe Sapanca Gölü manzaralı harika bir lokasyonda bulunmaktadır. 16 adet villadan oluşan projemizde her villaya özel 100 m2 ile 215 m2 arasında değişiklik gösteren müstakil bahçeleriniz bulunmaktadır.",
      price: 9000000,
      userId: user.id,
      ownerType: OwnerType.user,
      publishStatus: PublishStatus.in_view,
      parcels: {
        create: [{ number: "Parcel 5" }],
      },
      photos: {
        create: [
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villas-kartepe/1.jpg",
            order: 1,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villas-kartepe/2.jpg",
            order: 2,
          },
          {
            url: "https://cdn.notuscreative.com/warsa-static-lands/master-villas-kartepe/3.jpg",
            order: 3,
          },
        ],
      },
    },
  ];

  const landTypes = ["Tarla", "Zeytinlik", "Orman", "Mera", "Bağ", "Boş Arsa"];

  for (const typeName of landTypes) {
    await prisma.landType.upsert({
      where: { name: typeName },
      update: {},
      create: { name: typeName },
    });
  }

  for (const landData of lands) {
    await prisma.land.create({
      data: landData,
    });
  }

  console.log(`Created ${lands.length} lands with their related data`);

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
