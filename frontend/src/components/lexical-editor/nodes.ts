import { CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import {
    HeadingNode,
    QuoteNode,
} from "@lexical/rich-text";
  
  export const nodes = [
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    CodeNode,
    LinkNode,
    AutoLinkNode,
  ];
  