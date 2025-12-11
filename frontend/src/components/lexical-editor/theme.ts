import type { EditorThemeClasses } from "lexical";

export const theme: EditorThemeClasses = {
  paragraph: "editor-paragraph",
  text: {
    bold: "editor-text-bold",
    italic: "editor-text-italic",
    underline: "editor-text-underline",
    strikethrough: "editor-text-strikethrough",
    code: "editor-text-code",
  },
  quote: "editor-quote",
  list: {
    ul: "editor-ul",
    ol: "editor-ol",
    listitem: "editor-list-item",
    nested: {
      listitem: "editor-nested-list-item",
    },
  },
  code: "editor-code",
};
