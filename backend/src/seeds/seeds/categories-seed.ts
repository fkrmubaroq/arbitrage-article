import { getDb } from "../../lib/db.js";

const categories = [
  {
    name: "Finance",
    slug: "finance",
    description: "Artikel tentang keuangan, manajemen uang, dan financial planning"
  },
  {
    name: "Investment",
    slug: "investment",
    description: "Panduan investasi untuk berbagai instrumen keuangan"
  },
  {
    name: "Crypto",
    slug: "crypto",
    description: "Artikel tentang cryptocurrency, blockchain, dan trading crypto"
  },
  {
    name: "Marketing",
    slug: "marketing",
    description: "Strategi dan tips marketing digital untuk bisnis online"
  },
  {
    name: "Business",
    slug: "business",
    description: "Panduan membangun dan mengembangkan bisnis online"
  },
  {
    name: "Trading",
    slug: "trading",
    description: "Panduan trading forex, saham, dan instrumen keuangan lainnya"
  }
];

export async function seedCategories(): Promise<Map<string, number>> {
  const db = await getDb();
  const categoryMap = new Map<string, number>();

  for (const category of categories) {
    const [result] = await db.query(
      `INSERT INTO categories (name, slug, description) 
       VALUES (?, ?, ?)`,
      [
        category.name,
        category.slug,
        category.description,
      ],
    );
    const insertResult = result as { insertId: number };
    categoryMap.set(category.name, insertResult.insertId);
  }

  return categoryMap;
}

