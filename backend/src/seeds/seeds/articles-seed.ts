import { getDb } from "../../lib/db.js";

const articles = [
  {
    slug: "cara-mendapatkan-passive-income-online",
    title: "10 Cara Mendapatkan Passive Income Online yang Terbukti",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    category: "Finance",
    content_html: "<p>Passive income adalah cara untuk menghasilkan uang tanpa harus bekerja aktif setiap hari. Berikut adalah 10 cara terbaik untuk memulai passive income online...</p>"
  },
  {
    slug: "investasi-saham-pemula-2024",
    title: "Panduan Lengkap Investasi Saham untuk Pemula 2024",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
    category: "Investment",
    content_html: "<p>Investasi saham bisa menjadi cara yang efektif untuk meningkatkan kekayaan jangka panjang. Dalam artikel ini, kita akan membahas dasar-dasar investasi saham...</p>"
  },
  {
    slug: "crypto-arbitrage-strategies",
    title: "Strategi Crypto Arbitrage yang Menguntungkan",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    category: "Crypto",
    content_html: "<p>Crypto arbitrage adalah teknik trading yang memanfaatkan perbedaan harga cryptocurrency di berbagai exchange. Mari kita pelajari strateginya...</p>"
  },
  {
    slug: "affiliate-marketing-guide",
    title: "Panduan Lengkap Affiliate Marketing untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    category: "Marketing",
    content_html: "<p>Affiliate marketing adalah salah satu cara populer untuk menghasilkan uang online. Pelajari cara memulai dan mengoptimalkan strategi affiliate marketing Anda...</p>"
  },
  {
    slug: "dropshipping-success-tips",
    title: "7 Tips Sukses Dropshipping untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    category: "Business",
    content_html: "<p>Dropshipping memungkinkan Anda menjual produk tanpa perlu menyimpan inventory. Berikut adalah tips-tips untuk sukses dalam bisnis dropshipping...</p>"
  },
  {
    slug: "forex-trading-basics",
    title: "Dasar-dasar Forex Trading yang Wajib Diketahui",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    category: "Trading",
    content_html: "<p>Forex trading adalah pasar keuangan terbesar di dunia. Pelajari dasar-dasar trading forex, dari terminologi hingga strategi dasar...</p>"
  },
  {
    slug: "build-ecommerce-website",
    title: "Cara Membangun Website E-commerce yang Profesional",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
    category: "Business",
    content_html: "<p>Membangun website e-commerce profesional tidak sesulit yang dibayangkan. Ikuti panduan langkah demi langkah ini untuk memulai...</p>"
  },
  {
    slug: "social-media-marketing-2024",
    title: "Strategi Social Media Marketing Terbaru 2024",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    category: "Marketing",
    content_html: "<p>Social media marketing terus berkembang. Pelajari strategi terbaru untuk memaksimalkan engagement dan konversi di platform media sosial...</p>"
  },
  {
    slug: "real-estate-investment-guide",
    title: "Panduan Investasi Real Estate untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    category: "Investment",
    content_html: "<p>Investasi real estate bisa menjadi sumber passive income yang stabil. Pelajari cara memulai investasi properti dengan modal terbatas...</p>"
  },
  {
    slug: "content-creation-monetization",
    title: "Cara Monetisasi Konten Kreatif di Era Digital",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    category: "Business",
    content_html: "<p>Konten kreatif bisa menjadi sumber pendapatan yang menguntungkan. Pelajari berbagai cara untuk memonetisasi konten Anda...</p>"
  },
  {
    slug: "stock-options-trading",
    title: "Memahami Stock Options Trading untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
    category: "Trading",
    content_html: "<p>Stock options adalah instrumen trading yang kompleks namun menarik. Pelajari dasar-dasar options trading dan strategi dasarnya...</p>"
  },
  {
    slug: "freelancing-success-tips",
    title: "Tips Sukses Menjadi Freelancer Profesional",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    category: "Career",
    content_html: "<p>Freelancing menawarkan kebebasan dan fleksibilitas. Pelajari cara membangun karir freelancing yang sukses dan berkelanjutan...</p>"
  },
  {
    slug: "budgeting-personal-finance",
    title: "Cara Membuat Budget yang Efektif untuk Keuangan Pribadi",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    category: "Finance",
    content_html: "<p>Budget yang baik adalah fondasi keuangan yang sehat. Pelajari cara membuat dan mengelola budget pribadi yang efektif...</p>"
  },
  {
    slug: "cryptocurrency-mining-guide",
    title: "Panduan Lengkap Cryptocurrency Mining untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    category: "Crypto",
    content_html: "<p>Crypto mining bisa menjadi cara untuk mendapatkan cryptocurrency. Pelajari dasar-dasar mining dan apa yang perlu dipersiapkan...</p>"
  },
  {
    slug: "online-course-creation",
    title: "Cara Membuat dan Menjual Online Course yang Sukses",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    category: "Business",
    content_html: "<p>Online course adalah cara yang efektif untuk berbagi pengetahuan sekaligus menghasilkan pendapatan. Pelajari cara membuat course yang menarik...</p>"
  },
  {
    slug: "etf-investment-strategy",
    title: "Strategi Investasi ETF untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
    category: "Investment",
    content_html: "<p>ETF (Exchange Traded Fund) adalah cara mudah untuk diversifikasi portofolio. Pelajari strategi investasi ETF yang tepat untuk pemula...</p>"
  },
  {
    slug: "google-ads-optimization",
    title: "Teknik Optimasi Google Ads untuk Maksimalkan ROI",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    category: "Marketing",
    content_html: "<p>Google Ads adalah platform iklan yang powerful. Pelajari teknik-teknik optimasi untuk mendapatkan ROI maksimal dari kampanye iklan Anda...</p>"
  },
  {
    slug: "digital-product-business",
    title: "Cara Membangun Bisnis Digital Product yang Menguntungkan",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    category: "Business",
    content_html: "<p>Digital product adalah salah satu cara terbaik untuk menghasilkan passive income. Pelajari cara membangun bisnis digital product dari awal...</p>"
  },
  {
    slug: "day-trading-vs-swing-trading",
    title: "Day Trading vs Swing Trading: Mana yang Cocok untuk Anda?",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    category: "Trading",
    content_html: "<p>Ada berbagai style trading, termasuk day trading dan swing trading. Pelajari perbedaannya dan tentukan mana yang sesuai dengan gaya Anda...</p>"
  },
  {
    slug: "credit-card-optimization",
    title: "Cara Mengoptimalkan Penggunaan Credit Card untuk Keuntungan Maksimal",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    category: "Finance",
    content_html: "<p>Credit card bisa menjadi alat finansial yang powerful jika digunakan dengan benar. Pelajari cara memaksimalkan manfaat credit card...</p>"
  },
  {
    slug: "nft-investment-guide",
    title: "Panduan Investasi NFT untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    category: "Crypto",
    content_html: "<p>NFT (Non-Fungible Token) telah menjadi tren investasi yang menarik. Pelajari dasar-dasar investasi NFT dan cara menghindari risiko...</p>"
  },
  {
    slug: "email-marketing-automation",
    title: "Cara Mengotomasi Email Marketing untuk Meningkatkan Konversi",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    category: "Marketing",
    content_html: "<p>Email marketing automation bisa meningkatkan efisiensi dan hasil kampanye Anda. Pelajari cara mengatur email automation yang efektif...</p>"
  },
  {
    slug: "retirement-planning-guide",
    title: "Panduan Perencanaan Pensiun yang Komprehensif",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    category: "Finance",
    content_html: "<p>Perencanaan pensiun yang baik adalah investasi untuk masa depan. Pelajari cara menyusun rencana pensiun yang solid dan realistis...</p>"
  },
  {
    slug: "remote-work-productivity",
    title: "Tips Meningkatkan Produktivitas saat Bekerja Remote",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    category: "Career",
    content_html: "<p>Bekerja remote menawarkan banyak keuntungan, namun juga tantangan tersendiri. Pelajari cara tetap produktif saat bekerja dari rumah...</p>"
  },
  {
    slug: "peer-to-peer-lending",
    title: "Investasi Peer-to-Peer Lending: Risiko dan Peluang",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    category: "Investment",
    content_html: "<p>P2P lending adalah alternatif investasi yang menarik. Pelajari cara kerjanya, risiko yang perlu diwaspadai, dan strategi untuk meminimalkan risiko...</p>"
  }
];

export async function seedArticles(): Promise<Array<{ id: number; slug: string }>> {
  const db = await getDb();
  const articleData: Array<{ id: number; slug: string }> = [];

  for (const article of articles) {
    const [result] = await db.query(
      `INSERT INTO articles (slug, title, thumbnail, category, content_html) 
       VALUES (?, ?, ?, ?, ?)`,
      [
        article.slug,
        article.title,
        article.thumbnail,
        article.category,
        article.content_html,
      ],
    );
    const insertResult = result as { insertId: number };
    articleData.push({ id: insertResult.insertId, slug: article.slug });
  }

  return articleData;
}
