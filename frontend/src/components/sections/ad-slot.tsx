"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { getSessionId } from "@/lib/client-utils";
import { useLogEvent } from "@/hooks/use-log-event";

interface AdSlotProps {
  position: "top" | "in-article" | "bottom" | "sidebar";
  className?: string;
}

export function AdSlot({ position, className }: AdSlotProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logEventMutation = useLogEvent();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger tracking event
            const sessionId = getSessionId();
            if (sessionId) {
              logEventMutation.mutate({
                session_id: sessionId,
                event_name: "ad_slot_viewed",
                meta: { position },
              });
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [position, logEventMutation]);

  const positionClasses = {
    top: "w-full h-[100px] md:h-[250px]",
    "in-article": "w-full h-[250px] md:h-[300px] my-8",
    bottom: "w-full h-[100px] md:h-[250px] mt-8",
    sidebar: "w-full h-[600px]",
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center justify-center bg-muted/50 rounded-lg border border-dashed",
        positionClasses[position],
        className,
      )}
    >
      {isVisible ? (
        <div className="text-center text-muted-foreground text-sm p-4">
          <p className="mb-2">Ad Slot: {position}</p>
          <p className="text-xs">
            {/* Paste your AdSense/MGID script here */}
            {/* Example: <script async src="..."></script> */}
          </p>
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-xs">
          Loading ad...
        </div>
      )}
    </div>
  );
}

