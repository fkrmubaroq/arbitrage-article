import { getDb } from "../../lib/db.js";

interface Article {
  id: number;
  slug: string;
}

// Define page contents for each article based on slug
const getArticlePages = (articleId: number, slug: string) => {
  const pages: Array<{
    article_id: number;
    page_index: number;
    title: string;
    contents: any;
  }> = [];

  switch (slug) {
    case "cara-mendapatkan-passive-income-online":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "10 Cara Mendapatkan Passive Income Online",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Passive income adalah cara untuk menghasilkan uang tanpa harus bekerja aktif setiap hari. Dalam artikel ini, kita akan membahas 10 cara terbaik untuk memulai passive income online yang telah terbukti efektif."
            },
            {
              type: "heading",
              level: 2,
              content: "1. Investasi Saham dan Dividen"
            },
            {
              type: "paragraph",
              content: "Investasi saham yang membayar dividen adalah salah satu cara klasik untuk mendapatkan passive income. Dengan memilih saham blue-chip yang konsisten membayar dividen, Anda bisa mendapatkan pendapatan rutin setiap kuartal."
            },
            {
              type: "heading",
              level: 2,
              content: "2. Affiliate Marketing"
            },
            {
              type: "paragraph",
              content: "Affiliate marketing memungkinkan Anda mendapatkan komisi dari setiap penjualan produk yang direkomendasikan. Buat konten berkualitas dan promosikan produk yang relevan dengan audiens Anda."
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
              alt: "Passive Income Strategies"
            },
            {
              type: "heading",
              level: 2,
              content: "3. Membuat Online Course"
            },
            {
              type: "paragraph",
              content: "Jika Anda memiliki keahlian tertentu, buatlah online course dan jual di platform seperti Udemy atau Skillshare. Setelah dibuat, course akan terus menghasilkan pendapatan."
            }
          ]
        }
      });
      break;

    case "investasi-saham-pemula-2024":
      // Multi-page article
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Pengenalan Investasi Saham",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Investasi saham adalah salah satu cara terbaik untuk meningkatkan kekayaan jangka panjang. Artikel ini akan membimbing Anda dari dasar hingga strategi praktis."
            },
            {
              type: "heading",
              level: 2,
              content: "Apa itu Saham?"
            },
            {
              type: "paragraph",
              content: "Saham adalah bukti kepemilikan sebagian dari sebuah perusahaan. Ketika Anda membeli saham, Anda menjadi pemilik sebagian dari perusahaan tersebut."
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
              alt: "Stock Market"
            }
          ]
        }
      });
      pages.push({
        article_id: articleId,
        page_index: 1,
        title: "Cara Memulai Investasi Saham",
        contents: {
          blocks: [
            {
              type: "heading",
              level: 2,
              content: "Langkah 1: Pilih Broker"
            },
            {
              type: "paragraph",
              content: "Pilih broker yang terpercaya dan memiliki biaya transaksi yang rendah. Beberapa broker populer di Indonesia termasuk Ajaib, Stockbit, dan IPOT."
            },
            {
              type: "heading",
              level: 2,
              content: "Langkah 2: Buka Rekening Sekuritas"
            },
            {
              type: "paragraph",
              content: "Setelah memilih broker, buka rekening sekuritas dengan menyiapkan dokumen KTP, NPWP, dan rekening bank."
            }
          ]
        }
      });
      pages.push({
        article_id: articleId,
        page_index: 2,
        title: "Strategi Investasi untuk Pemula",
        contents: {
          blocks: [
            {
              type: "heading",
              level: 2,
              content: "Diversifikasi Portofolio"
            },
            {
              type: "paragraph",
              content: "Jangan menaruh semua telur dalam satu keranjang. Diversifikasi investasi Anda ke berbagai sektor dan perusahaan untuk mengurangi risiko."
            },
            {
              type: "heading",
              level: 2,
              content: "Investasi Jangka Panjang"
            },
            {
              type: "paragraph",
              content: "Untuk pemula, strategi investasi jangka panjang (buy and hold) lebih disarankan daripada trading harian yang membutuhkan waktu dan keahlian lebih."
            }
          ]
        }
      });
      break;

    case "crypto-arbitrage-strategies":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Strategi Crypto Arbitrage",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Crypto arbitrage adalah teknik trading yang memanfaatkan perbedaan harga cryptocurrency di berbagai exchange untuk mendapatkan profit."
            },
            {
              type: "heading",
              level: 2,
              content: "Jenis-jenis Arbitrage"
            },
            {
              type: "paragraph",
              content: "Ada beberapa jenis arbitrage: spatial arbitrage (perbedaan harga antar exchange), triangular arbitrage (memanfaatkan perbedaan kurs), dan statistical arbitrage."
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
              alt: "Cryptocurrency Trading"
            }
          ]
        }
      });
      break;

    case "affiliate-marketing-guide":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Panduan Affiliate Marketing",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Affiliate marketing adalah salah satu cara populer untuk menghasilkan uang online. Pelajari cara memulai dan mengoptimalkan strategi affiliate marketing Anda."
            },
            {
              type: "heading",
              level: 2,
              content: "Memilih Program Affiliate"
            },
            {
              type: "paragraph",
              content: "Pilih program affiliate yang menawarkan komisi yang wajar dan produk yang relevan dengan niche Anda. Beberapa platform populer termasuk Amazon Associates, ShareASale, dan ClickBank."
            }
          ]
        }
      });
      break;

    case "dropshipping-success-tips":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "7 Tips Sukses Dropshipping",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Dropshipping memungkinkan Anda menjual produk tanpa perlu menyimpan inventory. Berikut adalah 7 tips untuk sukses dalam bisnis dropshipping."
            },
            {
              type: "heading",
              level: 2,
              content: "Tip 1: Pilih Niche yang Tepat"
            },
            {
              type: "paragraph",
              content: "Pilih niche yang memiliki permintaan tinggi namun persaingan tidak terlalu ketat. Lakukan riset pasar sebelum memulai."
            }
          ]
        }
      });
      break;

    case "forex-trading-basics":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Dasar-dasar Forex Trading",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Forex trading adalah pasar keuangan terbesar di dunia. Pelajari dasar-dasar trading forex, dari terminologi hingga strategi dasar."
            },
            {
              type: "heading",
              level: 2,
              content: "Apa itu Forex?"
            },
            {
              type: "paragraph",
              content: "Forex (Foreign Exchange) adalah pasar untuk memperdagangkan mata uang. Pasar ini buka 24 jam sehari, 5 hari seminggu."
            }
          ]
        }
      });
      break;

    case "build-ecommerce-website":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Membangun Website E-commerce",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Membangun website e-commerce profesional tidak sesulit yang dibayangkan. Ikuti panduan langkah demi langkah ini untuk memulai."
            },
            {
              type: "heading",
              level: 2,
              content: "Pilih Platform"
            },
            {
              type: "paragraph",
              content: "Pilih platform e-commerce yang sesuai kebutuhan. Shopify, WooCommerce, dan BigCommerce adalah beberapa pilihan populer."
            }
          ]
        }
      });
      break;

    case "social-media-marketing-2024":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Strategi Social Media Marketing 2024",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Social media marketing terus berkembang. Pelajari strategi terbaru untuk memaksimalkan engagement dan konversi di platform media sosial."
            },
            {
              type: "heading",
              level: 2,
              content: "Platform yang Tepat"
            },
            {
              type: "paragraph",
              content: "Setiap platform memiliki karakteristik audiens yang berbeda. Pilih platform yang sesuai dengan target market Anda."
            }
          ]
        }
      });
      break;

    case "real-estate-investment-guide":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Panduan Investasi Real Estate",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Investasi real estate bisa menjadi sumber passive income yang stabil. Pelajari cara memulai investasi properti dengan modal terbatas."
            },
            {
              type: "heading",
              level: 2,
              content: "Jenis Investasi Real Estate"
            },
            {
              type: "paragraph",
              content: "Ada berbagai jenis investasi real estate: properti sewa, REIT (Real Estate Investment Trust), dan crowdfunding properti."
            }
          ]
        }
      });
      break;

    case "content-creation-monetization":
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Monetisasi Konten Kreatif",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Konten kreatif bisa menjadi sumber pendapatan yang menguntungkan. Pelajari berbagai cara untuk memonetisasi konten Anda."
            },
            {
              type: "heading",
              level: 2,
              content: "Platform Monetisasi"
            },
            {
              type: "paragraph",
              content: "Beberapa platform yang bisa digunakan untuk monetisasi konten: YouTube Partner Program, Patreon, dan platform membership seperti Ko-fi."
            }
          ]
        }
      });
      break;

    default:
      // Default page for any article not specifically defined
      pages.push({
        article_id: articleId,
        page_index: 0,
        title: "Artikel",
        contents: {
          blocks: [
            {
              type: "paragraph",
              content: "Konten artikel akan segera tersedia."
            }
          ]
        }
      });
  }

  return pages;
};

export async function seedArticlePages(
  articles: Array<Article>
): Promise<void> {
  const db = await getDb();

  for (const article of articles) {
    const pages = getArticlePages(article.id, article.slug);

    for (const page of pages) {
      await db.query(
        `INSERT INTO article_pages (article_id, page_index, title, contents) 
         VALUES (?, ?, ?, ?)`,
        [
          page.article_id,
          page.page_index,
          page.title,
          JSON.stringify(page.contents),
        ],
      );
    }
  }
}

