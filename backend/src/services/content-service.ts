import articleModel from "@/models/article-model";

async function splitContentIntoPages(id: number, content: string) {
    const parsed = JSON.parse(content) as ContentService.BlockNoteContent[];

    const pageIndex: number[] = [];
    parsed.forEach((item, index) => {
        if (item.type === "heading" && item.props.level === 1) {
            pageIndex.push(index);
        }
    });
    if (!pageIndex.length) return;
    const articlePages: Omit<ArticlePage, "id" | "createdAt" | "updatedAt">[] = [];
    for (let i = 0; i < pageIndex.length; i++) {
        const start = pageIndex[i];
        const end = (pageIndex[i + 1] - 1) || parsed.length;
        const pageContent = parsed.slice(start, end);
        articlePages.push({
            article_id: id,
            page_index: i + 1 || 1,
            title: pageContent[0].content[0].text || null,
            contents: JSON.stringify(pageContent),
        });
    }
    if (!articlePages.length) return;
    return articlePages;
}

export default {
    splitContentIntoPages,
}