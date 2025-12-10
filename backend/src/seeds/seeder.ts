import { getDb } from "../lib/db.js";
import { seedArticlePages } from "./seeds/article-pages-seed.js";
import { seedArticles } from "./seeds/articles-seed.js";
import { seedEvents } from "./seeds/events-seed.js";
import { seedPageviews } from "./seeds/pageviews-seed.js";

export async function clearTables() {
  const db = await getDb();
  console.log("🗑️  Clearing existing data...");
  
  try {
    // Disable foreign key checks temporarily
    await db.query("SET FOREIGN_KEY_CHECKS = 0");
    
    await db.query("TRUNCATE TABLE events");
    await db.query("TRUNCATE TABLE pageviews");
    await db.query("TRUNCATE TABLE article_pages");
    await db.query("TRUNCATE TABLE articles");
    
    // Re-enable foreign key checks
    await db.query("SET FOREIGN_KEY_CHECKS = 1");
    
    console.log("✅ Tables cleared successfully");
  } catch (error) {
    await db.query("SET FOREIGN_KEY_CHECKS = 1");
    throw error;
  }
}

export async function runSeeds() {
  console.log("🌱 Starting database seeding...\n");
  
  try {
    // Clear existing data
    await clearTables();
    
    // Seed articles first (pageviews and article_pages depend on articles)
    console.log("\n📝 Seeding articles...");
    const articles = await seedArticles();
    console.log(`✅ Seeded ${articles.length} articles`);
    
    // Seed article pages
    console.log("\n📄 Seeding article pages...");
    await seedArticlePages(articles);
    console.log("✅ Seeded article pages");
    
    // Seed pageviews
    console.log("\n👁️  Seeding pageviews...");
    await seedPageviews(articles);
    console.log("✅ Seeded 25 pageviews");
    
    // Seed events
    console.log("\n📊 Seeding events...");
    await seedEvents();
    console.log("✅ Seeded 25 events");
    
    console.log("\n✅ Database seeding completed successfully!");
  } catch (error) {
    console.error("\n❌ Error during seeding:", error);
    throw error;
  }
}
