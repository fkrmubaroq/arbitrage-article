import { getDb } from "../lib/db.js";
import type { TrackingData } from "../types/tracking.js";

export async function createPageview(data: TrackingData): Promise<void> {
  const db = await getDb();
  await db.query(
    `INSERT INTO pageviews (session_id, article_id, path, utm_source, utm_campaign, utm_term, device, country, referrer) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.session_id,
      data.article_id || null,
      data.path,
      data.utm_source || null,
      data.utm_campaign || null,
      data.utm_term || null,
      data.device,
      data.country || null,
      data.referrer || null,
    ],
  );
}

