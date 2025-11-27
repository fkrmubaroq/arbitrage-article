
"use client"
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface AdUnitProps {
  placement: AdPlacement;
  className?: string;
  onAdClick?: (adId: string) => void;
  onAdImpression?: (adId: string) => void;
}

const AdUnit: React.FC<AdUnitProps> = ({
  placement,
  className,
}) => {

  const handleClick = () => {
    // In a real app, this would navigate to the ad's destination
    toast("Ad clicked", {
      description: "You've clicked on an advertisement",
    });
  };

  if (!placement.isActive) return null;

  return (
    <div
      className={cn(
        "relative border border-muted rounded-md overflow-hidden",
        className
      )}
    >
      <div className="absolute top-2 right-2 z-10 px-1.5 py-0.5 bg-black/40 rounded-sm text-xs text-white flex items-center">
        <span className="mr-1">Ad</span>
        <ExternalLink className="h-3 w-3" />
      </div>

      {placement.type === "banner" && (
        <div
          className="bg-muted/20 min-h-[100px] flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          {placement.imageUrl ? (
            <img
              src={placement.imageUrl}
              alt="Advertisement"
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="p-4 text-center">
              <p className="text-sm font-medium">Sponsored Content</p>
              <p className="text-xs text-muted-foreground mt-1">
                {placement.content || "Discover more"}
              </p>
            </div>
          )}
        </div>
      )}

      {placement.type === "native" && (
        <div className="p-4 cursor-pointer" onClick={handleClick}>
          <div className="flex items-center gap-3">
            {placement.imageUrl && (
              <div className="w-16 h-16 bg-muted rounded overflow-hidden shrink-0">
                <img
                  src={placement.imageUrl}
                  alt="Sponsored"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-xs text-muted-foreground mb-1">Sponsored</p>
              <p className="font-medium text-sm">
                {placement.content || "Sponsored content"}
              </p>
            </div>
          </div>
        </div>
      )}

      {placement.type === "affiliate" && (
        <div onClick={handleClick}>
          <div className="bg-primary/5 px-3 py-1.5 text-xs font-medium">
            Recommended for you
          </div>
          <div className="p-3 flex gap-3">
            {placement.imageUrl && (
              <div className="w-16 h-16 bg-muted rounded overflow-hidden shrink-0">
                <img
                  src={placement.imageUrl}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-sm font-medium">
                {placement.content || "Product recommendation"}
              </p>
              <p className="text-xs text-primary mt-2 hover:underline">
                Learn more
              </p>
            </div>
          </div>
        </div>
      )}

      {placement.type === "video" && (
        <div
          className="bg-muted/20 aspect-video flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <div className="p-4 text-center">
            <p className="text-sm font-medium">Video Advertisement</p>
            <p className="text-xs text-muted-foreground mt-1">
              {placement.content || "Click to play"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdUnit;
