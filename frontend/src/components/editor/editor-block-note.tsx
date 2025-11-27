"use client"
import "@/styles/blocknote-theme.css";
import { PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function EditorBlockNote({
  initialContent,
  onChangeContent,
  editable,
  className
}: {
  className?: string;
  initialContent?: string;
  onChangeContent?: (content: string) => void;
  editable?: boolean
}) {

  const { resolvedTheme } = useTheme();
  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  })

  useEffect(() => {
    if (editor && initialContent) {
      try {
        const parsed = JSON.parse(initialContent);
        editor.insertInlineContent(parsed)
      } catch (e) {
        console.error("Failed to parse initialContent", e);
      }
    }
  }, [editor, initialContent]);

  console.log("initial Content ", initialContent)
  return (
    <BlockNoteView

      className={className}
      editor={editor}
      editable={editable}
      onChange={() => {
        onChangeContent?.(JSON.stringify(editor.document));
      }}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}