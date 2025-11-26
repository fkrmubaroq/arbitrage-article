import { getDb } from "../../lib/db.js";

const eventNames = [
  "click",
  "scroll",
  "video_play",
  "video_pause",
  "form_submit",
  "button_click",
  "link_click",
  "download",
  "share",
  "like",
  "comment",
  "search",
  "filter",
  "sort",
  "add_to_cart",
  "remove_from_cart",
  "checkout_start",
  "purchase",
  "newsletter_signup",
  "social_share",
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

function generateMeta(eventName: string): Record<string, unknown> {
  const metaOptions: Record<string, Record<string, unknown>> = {
    click: {
      element: getRandomElement(["button", "link", "image", "card"]),
      position: { x: Math.floor(Math.random() * 1920), y: Math.floor(Math.random() * 1080) },
    },
    scroll: {
      depth: Math.floor(Math.random() * 100),
      duration: Math.floor(Math.random() * 30000),
    },
    video_play: {
      video_id: `video_${Math.floor(Math.random() * 1000)}`,
      duration: Math.floor(Math.random() * 300),
    },
    form_submit: {
      form_id: `form_${Math.floor(Math.random() * 10)}`,
      fields_count: Math.floor(Math.random() * 10) + 1,
    },
    button_click: {
      button_id: `btn_${Math.floor(Math.random() * 100)}`,
      button_text: getRandomElement(["Subscribe", "Download", "Learn More", "Get Started"]),
    },
    link_click: {
      url: `https://example.com/${Math.random().toString(36).substring(7)}`,
      external: Math.random() > 0.5,
    },
    download: {
      file_name: `document_${Math.floor(Math.random() * 100)}.pdf`,
      file_size: Math.floor(Math.random() * 10000000),
    },
    share: {
      platform: getRandomElement(["facebook", "twitter", "linkedin", "whatsapp", "email"]),
      content_type: "article",
    },
    like: {
      content_id: Math.floor(Math.random() * 100),
      content_type: "article",
    },
    search: {
      query: getRandomElement(["investment", "trading", "finance", "crypto", "marketing"]),
      results_count: Math.floor(Math.random() * 100),
    },
    newsletter_signup: {
      email_domain: getRandomElement(["gmail.com", "yahoo.com", "outlook.com"]),
      source: getRandomElement(["homepage", "article", "popup"]),
    },
  };

  return metaOptions[eventName] || {
    value: Math.floor(Math.random() * 100),
    category: getRandomElement(["engagement", "conversion", "navigation"]),
  };
}

export async function seedEvents(): Promise<void> {
  const db = await getDb();

  for (let i = 0; i < 25; i++) {
    const sessionId = generateSessionId();
    const eventName = getRandomElement(eventNames);
    const meta = generateMeta(eventName);

    // Add some delay to spread timestamps
    const createdAt = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);

    await db.query(
      `INSERT INTO events (session_id, event_name, meta, created_at) 
       VALUES (?, ?, ?, ?)`,
      [sessionId, eventName, JSON.stringify(meta), createdAt],
    );
  }
}
