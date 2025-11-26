import { getDb } from "../lib/db.js";
import type { EventData } from "../types/tracking.js";

export async function createEvent(data: EventData): Promise<void> {
  const db = await getDb();
  await db.query(
    `INSERT INTO events (session_id, event_name, meta) VALUES (?, ?, ?)`,
    [data.session_id, data.event_name, JSON.stringify(data.meta || {})],
  );
}

