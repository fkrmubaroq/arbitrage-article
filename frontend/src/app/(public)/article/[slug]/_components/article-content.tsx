"use client"
import EditorBlockNoteClient from '@/components/editor/editor-block-note';
import { Badge } from '@/components/ui/badge';

export default function ArticleContent({ content, tags }: { content: string; tags: string }) {
  const tagsParse = JSON.parse(tags || "[]") as string[];


  return (
    <article className="mt-5 border p-5">
      <EditorBlockNoteClient editable={false} initialContent={content} className='blocknote-editor-container ' />
      {tagsParse.length > 0 &&
        <div className="flex gap-x-2 flex-wrap">
          <span className="text-foreground text-xs italic">Tags </span>
          {tagsParse.map((tag, key) =>
            <Badge
              variant="outline"
              className="bg-primary/5 hover:bg-primary/10"
              key={key}
            >
              {tag}
            </Badge>
          )}
        </div>
      }
    </article>
  );
}
