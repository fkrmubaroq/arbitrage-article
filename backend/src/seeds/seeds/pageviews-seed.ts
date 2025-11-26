import { getDb } from "../../lib/db.js";

const devices = ["desktop", "mobile", "tablet"];
const countries = ["ID", "US", "SG", "MY", "AU", "GB", "DE", "FR", "JP", "KR"];
const utmSources = ["google", "facebook", "twitter", "linkedin", "direct", "email", "referral"];
const utmCampaigns = ["summer_sale", "new_product", "blog_promotion", "newsletter", "social_media"];
const utmTerms = ["investment", "trading", "finance", "crypto", "marketing", "business"];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

function generatePath(article: { id: number; slug: string } | null): string {
  if (article) {
    return `/articles/${article.slug}`;
  }
  const pages = ["/", "/privacy-policy", "/terms", "/about", "/contact"];
  return getRandomElement(pages);
}

function generateReferrer(): string | null {
  const referrers = [
    "https://google.com",
    "https://facebook.com",
    "https://twitter.com",
    "https://linkedin.com",
    "https://reddit.com",
    "https://youtube.com",
    null,
  ];
  return getRandomElement(referrers);
}

export async function seedPageviews(articles: Array<{ id: number; slug: string }>): Promise<void> {
  const db = await getDb();

  for (let i = 0; i < 25; i++) {
    const article = i % 3 === 0 ? null : getRandomElement(articles);
    const sessionId = generateSessionId();
    const path = generatePath(article);
    const device = getRandomElement(devices);
    const country = getRandomElement(countries);
    const utmSource = Math.random() > 0.4 ? getRandomElement(utmSources) : null;
    const utmCampaign = utmSource ? getRandomElement(utmCampaigns) : null;
    const utmTerm = utmCampaign ? getRandomElement(utmTerms) : null;
    const referrer = generateReferrer();

    // Add some delay to spread timestamps
    const createdAt = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);

    await db.query(
      `INSERT INTO pageviews (session_id, article_id, path, utm_source, utm_campaign, utm_term, device, country, referrer, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        sessionId,
        article?.id || null,
        path,
        utmSource,
        utmCampaign,
        utmTerm,
        device,
        country,
        referrer,
        createdAt,
      ],
    );
  }
}
