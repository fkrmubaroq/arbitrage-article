import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { KeyboardEvent, useState } from "react";

interface TagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
}

const TagInput = ({
  value,
  onChange,
  placeholder = "Add tags...",
  maxTags = 10,
}: TagInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // If user presses Enter or comma
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue.trim());
    }
  };

  const addTag = (tag: string) => {
    // Remove any commas and trim whitespace
    tag = tag.replace(/,/g, "").trim();

    // Don't add empty tags or exceed maxTags
    if (!tag || value.includes(tag) || value.length >= maxTags) {
      setInputValue("");
      return;
    }

    onChange([...value, tag]);
    setInputValue("");
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1 py-1 px-2"
          >
            {tag}
            <X
              className="h-3 w-3 cursor-pointer hover:text-destructive"
              onClick={() => removeTag(tag)}
            />
          </Badge>
        ))}
      </div>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          if (inputValue.trim()) {
            addTag(inputValue);
          }
        }}
        placeholder={
          value.length >= maxTags
            ? `Maximum ${maxTags} tags reached`
            : placeholder
        }
        disabled={value.length >= maxTags}
        className="w-full"
      />
      <p className="text-xs text-muted-foreground mt-1">
        Press Enter or comma to add a tag. {value.length}/{maxTags} tags.
      </p>
    </div>
  );
};

export default TagInput;
