import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface NewsletterSubscribeProps {
  variant?: "default" | "inline" | "block";
  title?: string;
  description?: string;
}

const NewsletterSubscribe = ({
  variant = "default",
  title = "Subscribe to our newsletter",
  description = "Get the latest articles and news delivered to your inbox.",
}: NewsletterSubscribeProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast("Error",{
        description: "Please enter your email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // This is where you would integrate with your email service
      // For now, we'll just simulate a successful subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Success!",{
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    } catch (_) {
      toast("Something went wrong",{
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    );
  }

  if (variant === "block") {
    return (
      <div className="bg-primary/5 p-6 rounded-lg border">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;
