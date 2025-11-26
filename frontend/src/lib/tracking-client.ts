"use client";

import type { TrackingData } from "@/types/tracking";
import { getSessionId } from "./client-utils";

export async function getTrackingDataClient(
  path: string,
  articleId?: number,
): Promise<TrackingData> {
  const sessionId = getSessionId() || `sess_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  
  // Get UTM from cookies
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || undefined;
    }
    return undefined;
  };

  const utm_source = getCookie("utm_source");
  const utm_campaign = getCookie("utm_campaign");
  const utm_term = getCookie("utm_term");

  // Simple device detection
  const device = /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop";

  return {
    session_id: sessionId,
    article_id: articleId,
    path,
    utm_source,
    utm_campaign,
    utm_term,
    device,
    referrer: document.referrer || undefined,
  };
}

export function parseUtmFromSearchParamsClient(
  searchParams: URLSearchParams,
): { utm_source?: string; utm_campaign?: string; utm_term?: string } {
  return {
    utm_source: searchParams.get("utm_source") || undefined,
    utm_campaign: searchParams.get("utm_campaign") || undefined,
    utm_term: searchParams.get("utm_term") || undefined,
  };
}

export function saveUtmToCookiesClient(utm: {
  utm_source?: string;
  utm_campaign?: string;
  utm_term?: string;
}): void {
  const setCookie = (name: string, value: string, days = 30) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  if (utm.utm_source) {
    setCookie("utm_source", utm.utm_source);
  }
  if (utm.utm_campaign) {
    setCookie("utm_campaign", utm.utm_campaign);
  }
  if (utm.utm_term) {
    setCookie("utm_term", utm.utm_term);
  }
}

