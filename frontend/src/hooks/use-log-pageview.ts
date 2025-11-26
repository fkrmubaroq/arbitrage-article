"use client";

import { useMutation } from "@tanstack/react-query";
import type { TrackingData } from "@/types/tracking";
import { ENV } from "@/lib/env";

async function logPageview(data: TrackingData): Promise<void> {
  const response = await fetch(`${ENV.API_BASE_URL}/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to log pageview");
  }
}

export function useLogPageview() {
  return useMutation({
    mutationFn: logPageview,
    retry: 1, // Only retry once for tracking
  });
}

