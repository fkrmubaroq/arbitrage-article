import * as v from "valibot";


export const createArticleSchema = v.object({
    title: v.pipe(v.string(), v.minLength(1, "Title is required")),
    slug: v.pipe(v.string(), v.minLength(1, "Slug is required")),
    excerpt: v.optional(v.string()),
    category_id: v.optional(v.nullable(v.string())),
    tags: v.optional(v.string()),
    status: v.optional(v.picklist(["draft", "published"], "Status must be 'draft' or 'published'")),
    cover_image_url: v.optional(v.nullable(v.string())),
    meta_title: v.optional(v.nullable(v.string())),
    meta_description: v.optional(v.nullable(v.string())),
    contents: v.pipe(v.string(), v.minLength(1, "Contents is required")),
});

export default {
    createArticleSchema,
}