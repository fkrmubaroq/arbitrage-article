import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ArticleFormValues } from "./form-article";
import { Input } from "@/components/ui/input";
import DropzoneFile from "@/components/ui/dropzone-file";
import { Textarea } from "@/components/ui/textarea";
import Selection from "@/components/ui/select";
import MultipleSelector from "@/components/ui/multiple-selection";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import SelectionTags from "@/components/ui/selection-tags";


const options = [
    { value: "next.js", label: "Next.js", },
    { value: "react", label: "React", },
    { value: "vue", label: "Vue.js", },
    { value: "angular", label: "Angular", },
    { value: "svelte", label: "Svelte", },
    { value: "nuxt.js", label: "Nuxt.js", },
    { value: "remix", label: "Remix", },
    { value: "astro", label: "Astro", },
    { value: "gatsby", label: "Gatsby", },
    { value: "solid", label: "SolidJS", },
];
const optionsCategory = [
    { value: "finance", label: "Finance", },
    { value: "investment", label: "Investment", },
    { value: "trading", label: "Trading", },
    { value: "business", label: "Business", },
    { value: "marketing", label: "Marketing", },
    { value: "technology", label: "Technology", },
    { value: "other", label: "Other", },
];
export default function FormArticleMetadata({ form }: { form: UseFormReturn<ArticleFormValues> }) {
    return <>
        <FormField
            control={form.control}
            name="slug"
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Slug</FieldLabel>
                    <Input {...field} placeholder="Enter slug" id={field.name} aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />

        <FormField
            control={form.control}
            name="cover_image_url"
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Cover Image</FieldLabel>
                    <DropzoneFile invalid={fieldState.invalid} onChange={(files) => field.onChange(files[0])} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />

        <FormField
            control={form.control}
            name="excerpt"
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Excerpt</FieldLabel>
                    <Textarea
                        {...field}
                        placeholder="Enter excerpt"
                        className="min-h-28 resize-none"
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field >
            )}
        />

        <FormField
            control={form.control}
            name="category_id"
            render={({ field: { value, onChange, ...field }, fieldState }) => (
                <Field
                    data-invalid={fieldState.invalid}
                >
                    <FieldLabel>Category</FieldLabel>
                    <Selection
                        {...field}
                        value={value}
                        onChange={onChange}
                        options={optionsCategory}
                        placeholder="Select category"
                        id={field.name}
                        invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />

        <FormField
            control={form.control}
            name="tags"
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Tags</FieldLabel>
                    <SelectionTags
                        invalid={fieldState.invalid}
                        placeholder="Select tags"
                        tags={options}
                        values={field.value || []}
                        onSelect={(value) => {
                            if (field.value?.includes(value)) {
                                field.onChange(field.value?.filter((v) => v !== value) || []);
                                return;
                            }
                            field.onChange([...(field.value || []), value]);
                        }}
                        onRemove={(value) => {
                            field.onChange(field.value?.filter((v) => v !== value) || []);
                        }}
                        onCreateNewTag={(value) => {
                            field.onChange([...(field.value || []), value]);
                        }}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    </>
}