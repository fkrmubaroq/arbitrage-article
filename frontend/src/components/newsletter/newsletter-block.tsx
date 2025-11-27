import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import NewsletterSubscribe from "./newsletter-subscribe";

interface NewsletterBlockProps {
  form?: UseFormReturn<FieldValues>;
  preview?: boolean;
  onChange?: (values: unknown) => void;
  initialValues?: {
    title?: string;
    description?: string;
    variant?: "default" | "inline" | "block";
  };
}

const NewsletterBlock = ({
  preview = false,
  onChange,
  initialValues = {
    title: "Subscribe to our newsletter",
    description: "Get the latest articles and news delivered to your inbox.",
    variant: "default",
  },
}: NewsletterBlockProps) => {
  const [localValues, setLocalValues] = useState(initialValues);

  if (preview) {
    return (
      <NewsletterSubscribe
        title={localValues.title}
        description={localValues.description}
        variant={localValues.variant as "default" | "inline" | "block"}
      />
    );
  }

  const handleChange = (key: string, value: string) => {
    const newValues = {
      ...localValues,
      [key]: value,
    };
    setLocalValues(newValues);
    onChange?.(newValues);
  };

  return (
    <Card className="mb-4">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-4">
          <FormItem>
            <FormLabel>Newsletter Style</FormLabel>
            <Select
              value={localValues.variant}
              onValueChange={(value) => handleChange("variant", value)}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="default">Standard</SelectItem>
                <SelectItem value="inline">Inline (Compact)</SelectItem>
                <SelectItem value="block">Featured Box</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>

          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter newsletter title"
                value={localValues.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </FormControl>
          </FormItem>

          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter newsletter description"
                value={localValues.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={2}
              />
            </FormControl>
          </FormItem>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium mb-2">Preview</h4>
          <NewsletterSubscribe
            title={localValues.title}
            description={localValues.description}
            variant={localValues.variant as "default" | "inline" | "block"}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsletterBlock;
