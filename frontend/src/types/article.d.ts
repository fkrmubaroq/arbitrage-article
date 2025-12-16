declare namespace ArticleApi {
    export interface PayloadArticle {
        id: number;
        title: string;
        slug: string;
        excerpt: string;
        category_id: number;
        tags: string[];
    }
    export interface PayloadCreateArticle {
        title: string;
        slug: string;
        excerpt: string;
        category_id?: string;
        tags: string;
        cover_image_url: File;
        meta_title: string;
        meta_description: string;
        contents: string;
    }
}