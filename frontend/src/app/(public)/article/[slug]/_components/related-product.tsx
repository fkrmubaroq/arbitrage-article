import { Button } from "@/components/ui/button";

export default function RelatedProduct() {
  return (
    <div className="my-8 border rounded-lg overflow-hidden">
      <div className="bg-primary/5 px-4 py-2 text-sm font-medium">
        Related Product
      </div>
      <div className="p-4 flex gap-4">
        <div className="w-24 h-24 bg-muted rounded-md shrink-0"></div>
        <div>
          <h4 className="font-medium mb-1">Product Title</h4>
          <p className="text-sm text-muted-foreground mb-2">
            A brief description of this related product that your readers might
            find useful.
          </p>
          <Button size="sm">Learn More</Button>
        </div>
      </div>
      <div className="bg-muted/20 px-4 py-2 text-xs text-muted-foreground">
        This recommendation includes affiliate links
      </div>
    </div>
  );
}
