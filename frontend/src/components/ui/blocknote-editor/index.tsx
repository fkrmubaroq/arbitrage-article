"use client";
import "@blocknote/core/fonts/inter.css";
import { FormattingToolbar, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import * as Badge from "@/components/ui/badge";
import BlocknoteEditor from "@/components/ui/blocknote-editor";
import * as Button from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import * as Form from "@/components/ui/form";
import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Popover from "@/components/ui/popover";
import * as Select from "@/components/ui/select";
import * as Tabs from "@/components/ui/tabs";
import * as Tooltip from "@/components/ui/tooltip";
import { Block } from "@blocknote/core";

export default function EditorContent({ onChangeContent, defaultValue }: { onChangeContent: (content: Block[]) => void, defaultValue?: string }) {
    const { theme } = useTheme();

    const editor = useCreateBlockNote({
        initialContent: defaultValue ? JSON.parse(defaultValue) : [
            {
                type: "paragraph",
                content: []
            }
        ],
    });
    const editorRef = useRef<HTMLDivElement>(null);

    const onChangeEditorContent = () => {
        onChangeContent(editor.document);
        const isEmpty = editor.document.every(block => (block.content as any[])?.length === 0);
        const parentEl = editorRef.current?.querySelector(".blocknote-editor-container")?.parentElement;
        if (!isEmpty) {
            parentEl?.classList.remove("blocknote-content-empty");
            return;
        }

        parentEl?.classList.add("blocknote-content-empty");
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        onChangeEditorContent();
    }, [])


    return (
        <div ref={editorRef} className="blocknote-editor">
            <BlockNoteView
                theme={theme as "light" | "dark"}
                className="blocknote-editor-container"
                editor={editor}
                onChange={() => {
                    onChangeEditorContent();
                }}
                shadCNComponents={{
                    Select: Select as any,
                    Button: Button as any,
                    Badge: Badge as any,
                    Card: Card as any,
                    DropdownMenu: DropdownMenu as any,
                    Form: Form as any,
                    Input: Input as any,
                    Label: Label as any,
                    Popover: Popover as any,
                    Tabs: Tabs as any,
                    Tooltip: Tooltip as any,
                }}
            >
                <FormattingToolbar />
            </BlockNoteView>
        </div>
    );
}
