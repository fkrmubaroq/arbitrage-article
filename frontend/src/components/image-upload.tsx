import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageIcon, Upload, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface ImageUploadProps {
  initialValue?:string;
  value: string;
  onChange: (file: File | null) => void;
  className?: string;
  label?: string;
}

const ImageUpload = ({
  initialValue,
  value,
  onChange,
  className,
  label = "Featured Image",
}: ImageUploadProps) => {
  const firstRender = useRef<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(value);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if(!initialValue) return;
    setPreviewUrl(initialValue);
    firstRender.current = false
  },[initialValue])
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        console.log("result", result);
        setPreviewUrl(result);
        onChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
        onChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreviewUrl("");
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm font-medium mb-1.5">{label}</p>

      {!previewUrl ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-md flex flex-col items-center justify-center p-8 transition-colors cursor-pointer",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/20 hover:border-primary/50"
          )}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <ImageIcon className="h-10 w-10 mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-1">
            Drag & drop an image here or click to browse
          </p>
          <p className="text-xs text-muted-foreground/70">
            PNG, JPG, GIF up to 5MB
          </p>
        </div>
      ) : (
        <div className="relative rounded-md overflow-hidden border">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full object-cover"
            style={{ maxHeight: "300px" }}
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              clearImage();
            }}
          >
            <X className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="absolute bottom-2 right-2"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-4 w-4 mr-1" /> Change
          </Button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
