export interface TrackingData {
  session_id: string;
  article_id?: number;
  path: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_term?: string;
  device: string;
  country?: string;
  referrer?: string;
}

export interface UtmParams {
  utm_source?: string;
  utm_campaign?: string;
  utm_term?: string;
}

export interface EventData {
  session_id: string;
  event_name: string;
  meta?: Record<string, unknown>;
}

