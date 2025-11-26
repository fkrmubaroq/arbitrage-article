"use client";

import { useMutation } from "@tanstack/react-query";
import type { EventData } from "@/types/tracking";
import { ENV } from "@/lib/env";

async function logEvent(data: EventData): Promise<void> {
  const response = await fetch(`${ENV.API_BASE_URL}/log/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to log event");
  }
}

export function useLogEvent() {
  return useMutation({
    mutationFn: logEvent,
    retry: 1, // Only retry once for tracking
  });
}

