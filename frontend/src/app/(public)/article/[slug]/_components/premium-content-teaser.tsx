import { Button } from "@/components/ui/button";
import { ZapIcon } from "lucide-react";

export default function PremiumContentTeaser() {
  return (
    <div className="my-8 bg-primary/10 rounded-lg p-6 text-center">
      <ZapIcon className="h-8 w-8 mx-auto mb-4 text-primary" />
      <h3 className="text-xl font-bold mb-2">Unlock Premium Content</h3>
      <p className="text-muted-foreground mb-4">
        This article contains exclusive content available to our members. Join
        our community to access all premium articles and features.
      </p>
      <div className="flex justify-center gap-3">
        <Button>Sign Up</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}
