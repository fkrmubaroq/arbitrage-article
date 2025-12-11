"use client"
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { nodes } from './nodes';
import ToolbarPlugin from './plugins/toolbar-plugin';

const theme = {
  autocomplete: 'PlaygroundEditorTheme__autocomplete',
  blockCursor: 'PlaygroundEditorTheme__blockCursor',
  characterLimit: 'PlaygroundEditorTheme__characterLimit',
  code: 'PlaygroundEditorTheme__code',
  codeHighlight: {
    atrule: 'PlaygroundEditorTheme__tokenAttr',
    attr: 'PlaygroundEditorTheme__tokenAttr',
    boolean: 'PlaygroundEditorTheme__tokenProperty',
    builtin: 'PlaygroundEditorTheme__tokenSelector',
    cdata: 'PlaygroundEditorTheme__tokenComment',
    char: 'PlaygroundEditorTheme__tokenSelector',
    class: 'PlaygroundEditorTheme__tokenFunction',
    'class-name': 'PlaygroundEditorTheme__tokenFunction',
    comment: 'PlaygroundEditorTheme__tokenComment',
    constant: 'PlaygroundEditorTheme__tokenProperty',
    deleted: 'PlaygroundEditorTheme__tokenDeleted',
    doctype: 'PlaygroundEditorTheme__tokenComment',
    entity: 'PlaygroundEditorTheme__tokenOperator',
    function: 'PlaygroundEditorTheme__tokenFunction',
    important: 'PlaygroundEditorTheme__tokenVariable',
    inserted: 'PlaygroundEditorTheme__tokenInserted',
    keyword: 'PlaygroundEditorTheme__tokenAttr',
    namespace: 'PlaygroundEditorTheme__tokenVariable',
    number: 'PlaygroundEditorTheme__tokenProperty',
    operator: 'PlaygroundEditorTheme__tokenOperator',
    prolog: 'PlaygroundEditorTheme__tokenComment',
    property: 'PlaygroundEditorTheme__tokenProperty',
    punctuation: 'PlaygroundEditorTheme__tokenPunctuation',
    regex: 'PlaygroundEditorTheme__tokenVariable',
    selector: 'PlaygroundEditorTheme__tokenSelector',
    string: 'PlaygroundEditorTheme__tokenSelector',
    symbol: 'PlaygroundEditorTheme__tokenProperty',
    tag: 'PlaygroundEditorTheme__tokenProperty',
    unchanged: 'PlaygroundEditorTheme__tokenUnchanged',
    url: 'PlaygroundEditorTheme__tokenOperator',
    variable: 'PlaygroundEditorTheme__tokenVariable',
  },
  embedBlock: {
    base: 'PlaygroundEditorTheme__embedBlock',
    focus: 'PlaygroundEditorTheme__embedBlockFocus',
  },
  hashtag: 'PlaygroundEditorTheme__hashtag',
  heading: {
    h1: 'PlaygroundEditorTheme__h1',
    h2: 'PlaygroundEditorTheme__h2',
    h3: 'PlaygroundEditorTheme__h3',
    h4: 'PlaygroundEditorTheme__h4',
    h5: 'PlaygroundEditorTheme__h5',
    h6: 'PlaygroundEditorTheme__h6',
  },
  hr: 'PlaygroundEditorTheme__hr',
  hrSelected: 'PlaygroundEditorTheme__hrSelected',
  image: 'editor-image',
  indent: 'PlaygroundEditorTheme__indent',
  layoutContainer: 'PlaygroundEditorTheme__layoutContainer',
  layoutItem: 'PlaygroundEditorTheme__layoutItem',
  link: 'PlaygroundEditorTheme__link',
  list: {
    checklist: 'PlaygroundEditorTheme__checklist',
    listitem: 'PlaygroundEditorTheme__listItem',
    listitemChecked: 'PlaygroundEditorTheme__listItemChecked',
    listitemUnchecked: 'PlaygroundEditorTheme__listItemUnchecked',
    nested: {
      listitem: 'PlaygroundEditorTheme__nestedListItem',
    },
    olDepth: [
      'PlaygroundEditorTheme__ol1',
      'PlaygroundEditorTheme__ol2',
      'PlaygroundEditorTheme__ol3',
      'PlaygroundEditorTheme__ol4',
      'PlaygroundEditorTheme__ol5',
    ],
    ul: 'PlaygroundEditorTheme__ul',
  },
  mark: 'PlaygroundEditorTheme__mark',
  markOverlap: 'PlaygroundEditorTheme__markOverlap',
  paragraph: 'PlaygroundEditorTheme__paragraph',
  quote: 'PlaygroundEditorTheme__quote',
  specialText: 'PlaygroundEditorTheme__specialText',
  tab: 'PlaygroundEditorTheme__tabNode',
  table: 'PlaygroundEditorTheme__table',
  tableAddColumns: 'PlaygroundEditorTheme__tableAddColumns',
  tableAddRows: 'PlaygroundEditorTheme__tableAddRows',
  tableAlignment: {
    center: 'PlaygroundEditorTheme__tableAlignmentCenter',
    right: 'PlaygroundEditorTheme__tableAlignmentRight',
  },
  tableCell: 'PlaygroundEditorTheme__tableCell',
  tableCellActionButton: 'PlaygroundEditorTheme__tableCellActionButton',
  tableCellActionButtonContainer:
    'PlaygroundEditorTheme__tableCellActionButtonContainer',
  tableCellHeader: 'PlaygroundEditorTheme__tableCellHeader',
  tableCellResizer: 'PlaygroundEditorTheme__tableCellResizer',
  tableCellSelected: 'PlaygroundEditorTheme__tableCellSelected',
  tableFrozenColumn: 'PlaygroundEditorTheme__tableFrozenColumn',
  tableFrozenRow: 'PlaygroundEditorTheme__tableFrozenRow',
  tableRowStriping: 'PlaygroundEditorTheme__tableRowStriping',
  tableScrollableWrapper: 'PlaygroundEditorTheme__tableScrollableWrapper',
  tableSelected: 'PlaygroundEditorTheme__tableSelected',
  tableSelection: 'PlaygroundEditorTheme__tableSelection',
  text: {
    bold: 'PlaygroundEditorTheme__textBold',
    capitalize: 'PlaygroundEditorTheme__textCapitalize',
    code: 'PlaygroundEditorTheme__textCode',
    highlight: 'PlaygroundEditorTheme__textHighlight',
    italic: 'PlaygroundEditorTheme__textItalic',
    lowercase: 'PlaygroundEditorTheme__textLowercase',
    strikethrough: 'PlaygroundEditorTheme__textStrikethrough',
    subscript: 'PlaygroundEditorTheme__textSubscript',
    superscript: 'PlaygroundEditorTheme__textSuperscript',
    underline: 'PlaygroundEditorTheme__textUnderline',
    underlineStrikethrough: 'PlaygroundEditorTheme__textUnderlineStrikethrough',
    uppercase: 'PlaygroundEditorTheme__textUppercase',
  },
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

export default function LexicalEditor() {

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes
  };

  return <LexicalComposer initialConfig={initialConfig}>
    <ToolbarPlugin />
    <div className="editor-container relative bg-input/30 rounded-b-md   border-b border-l border-r border-input">

      <RichTextPlugin
        contentEditable={<ContentEditable className="outline-none w-full p-4 min-h-[200px]" />}
        placeholder={<div className="text-gray-400 absolute top-4 left-4 pointer-events-none">Tulis sesuatu...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />

      <HistoryPlugin />
      <AutoFocusPlugin />
      <ListPlugin />
      <LinkPlugin />
    </div>
  </LexicalComposer>
}