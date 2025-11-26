import { Request, Response } from "express";
import { createPageview } from "../models/pageview-model.js";
import { createEvent } from "../models/event-model.js";
import type { TrackingData, EventData } from "../types/tracking.js";

export async function logPageview(req: Request, res: Response) {
  try {
    const {
      session_id,
      article_id,
      path,
      utm_source,
      utm_campaign,
      utm_term,
      device,
      country,
      referrer,
    } = req.body;

    if (!session_id || !path || !device) {
      return res.status(400).json({
        error: "Session ID, path, and device are required",
      });
    }

    const trackingData: TrackingData = {
      session_id,
      article_id,
      path,
      utm_source,
      utm_campaign,
      utm_term,
      device,
      country,
      referrer,
    };

    await createPageview(trackingData);
    res.json({ success: true });
  } catch (error) {
    console.error("Error logging pageview:", error);
    res.status(500).json({ error: "Failed to log pageview" });
  }
}

export async function logEvent(req: Request, res: Response) {
  try {
    const { session_id, event_name, meta } = req.body;

    if (!session_id || !event_name) {
      return res.status(400).json({
        error: "Session ID and event name are required",
      });
    }

    const eventData: EventData = {
      session_id,
      event_name,
      meta,
    };

    await createEvent(eventData);
    res.json({ success: true });
  } catch (error) {
    console.error("Error logging event:", error);
    res.status(500).json({ error: "Failed to log event" });
  }
}

