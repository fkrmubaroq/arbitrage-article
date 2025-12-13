import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ArticleFormValues } from "./form-article";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FormSEO({ form }: { form: UseFormReturn<ArticleFormValues> }) {
    return (
        <>
            <FormField
                control={form.control}
                name="meta_title"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Meta Title</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Meta Title" />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="meta_description"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Meta Description</FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder="Meta Description" className="min-h-28 resize-none" />
                        </FormControl>
                    </FormItem>
                )}
            />
        </>
    )
}