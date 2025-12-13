"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BlocknoteEditor from "@/components/ui/blocknote-editor";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FormArticleMetadata from "./form-article-metadata";
import FormSEO from "./form-seo";
import { GlobeIcon, NewspaperIcon, SquarePenIcon } from "lucide-react";
import SlotHeaderItem from "@/components/slot-header-item";
import { Button } from "@/components/ui/button";

const articleFormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required"),
    excerpt: z.string().min(1, "Excerpt is required"),
    category_id: z.string().min(1, "Category is required"),
    tags: z.array(z.string()).min(1, "Tags are required"),
    cover_image_url: z.string().min(1, "Cover image is required"),
    meta_title: z.string().min(1, "Meta title is required"),
    meta_description: z.string().min(1, "Meta description is required"),
    contents: z.string().min(1, "Contents are required"),
});
export type ArticleFormValues = z.infer<typeof articleFormSchema>;
export default function FormArticle() {
    const form = useForm<ArticleFormValues>({
        resolver: zodResolver(articleFormSchema),
        defaultValues: {
            title: "",
            slug: "",
            excerpt: "",
            category_id: "",
            tags: [],
            cover_image_url: "",
            meta_title: "",
            meta_description: "",
            contents: "",
        },
    });

    const onSubmit = (values: ArticleFormValues) => {
        console.log(values);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-x-4">
                <div className="flex flex-col space-y-3 w-[70%]">
                    <Accordion type="single" collapsible defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="bg-gray-100 px-2 rounded-b-none border-l border-r border-t font-bold hover:bg-gray-200">
                                <div className="flex items-center gap-x-2 px-2">
                                    <NewspaperIcon
                                        className="size-3.5" />
                                    <span>Content</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 border-l border-r border-b px-3 rounded-b-md flex flex-col gap-y-3">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Enter title" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contents"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contents</FormLabel>
                                            <FormControl>
                                                <BlocknoteEditor />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="w-[30%] flex flex-col space-y-3 sticky top-0">
                    <Accordion type="multiple" defaultValue={["metadata", "seo"]}>
                        <AccordionItem value="metadata">
                            <AccordionTrigger className="bg-gray-100 px-2 rounded-b-none border-l border-r border-t font-semibold  hover:bg-gray-200">
                                <div className="flex items-center gap-x-2 px-2">
                                    <SquarePenIcon
                                        className="size-3.5" />
                                    <span>Metadata</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 border-l border-r border-b px-3 rounded-b-md flex flex-col gap-y-3">
                                <FormArticleMetadata form={form} />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="seo" className="mt-2">
                            <AccordionTrigger className="bg-gray-100 px-2 rounded-b-none border-l border-r border-t font-semibold  hover:bg-gray-200">
                                <div className="flex items-center gap-x-2 px-2">
                                    <GlobeIcon
                                        className="size-3.5" />
                                    <span>SEO</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 border-l border-r border-b px-3 rounded-b-md flex flex-col gap-y-3">
                                <FormSEO form={form} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>

                <SlotHeaderItem className="right-30">
                    <Button className="rounded-sm px-4" size="sm" type="submit">
                        Save
                    </Button>
                </SlotHeaderItem>
            </form>
        </Form>
    );
}
