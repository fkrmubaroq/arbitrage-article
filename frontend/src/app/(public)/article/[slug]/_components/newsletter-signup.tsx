"use client";

import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  return (
    <div className="bg-primary/5 py-12">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and never miss new content like this.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-l-md border border-r-0 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
