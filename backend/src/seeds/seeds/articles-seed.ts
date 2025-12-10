import { getDb } from "../../lib/db.js";

const articles = [
  {
    slug: "cara-mendapatkan-passive-income-online",
    title: "10 Cara Mendapatkan Passive Income Online yang Terbukti",
    excerpt: "Pelajari berbagai cara menghasilkan passive income online yang telah terbukti efektif, dari investasi hingga bisnis digital.",
    category: "Finance",
    tags: ["passive income", "online business", "financial freedom"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    is_multi_page: false,
    meta_title: "10 Cara Mendapatkan Passive Income Online yang Terbukti 2024",
    meta_description: "Temukan 10 cara terbaik untuk menghasilkan passive income online. Panduan lengkap untuk pemula yang ingin mencapai financial freedom."
  },
  {
    slug: "investasi-saham-pemula-2024",
    title: "Panduan Lengkap Investasi Saham untuk Pemula 2024",
    excerpt: "Panduan komprehensif untuk memulai investasi saham, mulai dari dasar-dasar hingga strategi yang bisa diterapkan pemula.",
    category: "Investment",
    tags: ["investasi", "saham", "pemula", "trading"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
    is_multi_page: true,
    meta_title: "Panduan Investasi Saham untuk Pemula 2024 - Tips & Strategi",
    meta_description: "Pelajari cara investasi saham untuk pemula. Panduan lengkap dengan tips, strategi, dan langkah-langkah praktis memulai investasi saham."
  },
  {
    slug: "crypto-arbitrage-strategies",
    title: "Strategi Crypto Arbitrage yang Menguntungkan",
    excerpt: "Pelajari teknik crypto arbitrage yang bisa menghasilkan profit dengan memanfaatkan perbedaan harga di berbagai exchange.",
    category: "Crypto",
    tags: ["crypto", "arbitrage", "trading", "bitcoin"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    is_multi_page: false,
    meta_title: "Strategi Crypto Arbitrage yang Menguntungkan - Panduan Lengkap",
    meta_description: "Temukan strategi crypto arbitrage terbaik untuk mendapatkan profit. Panduan lengkap trading cryptocurrency dengan teknik arbitrage."
  },
  {
    slug: "affiliate-marketing-guide",
    title: "Panduan Lengkap Affiliate Marketing untuk Pemula",
    excerpt: "Mulai karir affiliate marketing dengan panduan lengkap ini. Pelajari cara memilih produk, membuat konten, dan mengoptimalkan konversi.",
    category: "Marketing",
    tags: ["affiliate marketing", "online business", "marketing", "pemula"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    is_multi_page: false,
    meta_title: "Panduan Affiliate Marketing untuk Pemula - Tips Sukses",
    meta_description: "Pelajari affiliate marketing dari dasar hingga advanced. Panduan lengkap untuk pemula yang ingin sukses di dunia affiliate marketing."
  },
  {
    slug: "dropshipping-success-tips",
    title: "7 Tips Sukses Dropshipping untuk Pemula",
    excerpt: "Raih kesuksesan dalam bisnis dropshipping dengan mengikuti 7 tips praktis ini yang telah terbukti efektif.",
    category: "Business",
    tags: ["dropshipping", "e-commerce", "online business", "tips"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    is_multi_page: false,
    meta_title: "7 Tips Sukses Dropshipping untuk Pemula - Panduan Praktis",
    meta_description: "Pelajari 7 tips sukses dropshipping yang wajib diketahui pemula. Strategi praktis untuk membangun bisnis dropshipping yang profitable."
  },
  {
    slug: "forex-trading-basics",
    title: "Dasar-dasar Forex Trading yang Wajib Diketahui",
    excerpt: "Pahami dasar-dasar forex trading sebelum memulai. Pelajari terminologi, analisis teknikal, dan manajemen risiko yang penting.",
    category: "Trading",
    tags: ["forex", "trading", "pemula", "investasi"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    is_multi_page: false,
    meta_title: "Dasar-dasar Forex Trading untuk Pemula - Panduan Lengkap",
    meta_description: "Pelajari dasar-dasar forex trading dari nol. Panduan lengkap untuk pemula yang ingin memahami dunia trading forex."
  },
  {
    slug: "build-ecommerce-website",
    title: "Cara Membangun Website E-commerce yang Profesional",
    excerpt: "Bangun website e-commerce profesional dengan panduan step-by-step ini. Dari pemilihan platform hingga optimasi konversi.",
    category: "Business",
    tags: ["e-commerce", "website", "online business", "web development"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
    is_multi_page: false,
    meta_title: "Cara Membangun Website E-commerce Profesional - Tutorial",
    meta_description: "Panduan lengkap membangun website e-commerce profesional. Tips memilih platform, desain, dan optimasi untuk meningkatkan penjualan."
  },
  {
    slug: "social-media-marketing-2024",
    title: "Strategi Social Media Marketing Terbaru 2024",
    excerpt: "Tingkatkan engagement dan konversi dengan strategi social media marketing terbaru yang efektif di tahun 2024.",
    category: "Marketing",
    tags: ["social media", "marketing", "digital marketing", "2024"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    is_multi_page: false,
    meta_title: "Strategi Social Media Marketing 2024 - Tips Terbaru",
    meta_description: "Pelajari strategi social media marketing terbaru 2024. Tips dan trik untuk meningkatkan engagement dan ROI di platform media sosial."
  },
  {
    slug: "real-estate-investment-guide",
    title: "Panduan Investasi Real Estate untuk Pemula",
    excerpt: "Mulai investasi real estate dengan modal terbatas. Pelajari strategi, tips, dan cara menghindari kesalahan umum dalam investasi properti.",
    category: "Investment",
    tags: ["real estate", "investasi", "properti", "pemula"],
    status: "published",
    cover_image_url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    is_multi_page: false,
    meta_title: "Panduan Investasi Real Estate untuk Pemula - Tips & Strategi",
    meta_description: "Pelajari cara investasi real estate untuk pemula. Panduan lengkap dengan strategi, tips, dan cara memulai investasi properti dengan modal terbatas."
  },
  {
    slug: "content-creation-monetization",
    title: "Cara Monetisasi Konten Kreatif di Era Digital",
    excerpt: "Ubah konten kreatif Anda menjadi sumber pendapatan. Pelajari berbagai cara monetisasi yang efektif di era digital.",
    category: "Business",
    tags: ["content creation", "monetization", "digital business", "creative"],
    status: "draft",
    cover_image_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    is_multi_page: false,
    meta_title: "Cara Monetisasi Konten Kreatif - Panduan Lengkap",
    meta_description: "Pelajari berbagai cara monetisasi konten kreatif di era digital. Tips dan strategi untuk mengubah konten menjadi sumber pendapatan."
  }
];

export async function seedArticles(): Promise<Array<{ id: number; slug: string }>> {
  const db = await getDb();
  const articleData: Array<{ id: number; slug: string }> = [];

  for (const article of articles) {
    const [result] = await db.query(
      `INSERT INTO articles (title, slug, excerpt, category, tags, status, cover_image_url, is_multi_page, meta_title, meta_description) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        article.title,
        article.slug,
        article.excerpt,
        article.category,
        JSON.stringify(article.tags),
        article.status,
        article.cover_image_url,
        article.is_multi_page,
        article.meta_title,
        article.meta_description,
      ],
    );
    const insertResult = result as { insertId: number };
    articleData.push({ id: insertResult.insertId, slug: article.slug });
  }

  return articleData;
}
