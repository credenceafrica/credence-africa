
"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import {
  $generateHtmlFromNodes,
  $generateNodesFromDOM,
} from "@lexical/html";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  LexicalEditor as LexicalEditorType,
  SELECTION_CHANGE_COMMAND,
  $getRoot,
  $insertNodes,
} from "lexical";
import { useCallback, useEffect, useState, useRef } from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { Button } from "./ui/button";

const editorTheme = {
  ltr: "text-left",
  rtl: "text-right",
  paragraph: "my-1",
  quote: "my-1 pl-4 border-l-4 border-gray-300",
  heading: {
    h1: "text-3xl font-bold my-2",
    h2: "text-2xl font-semibold my-2",
    h3: "text-xl font-semibold my-2",
  },
  list: {
    nested: {
      listitem: "list-disc list-inside",
    },
    ol: "list-decimal list-inside",
    ul: "list-disc list-inside",
    listitem: "my-1",
  },
  link: "text-blue-500 hover:underline",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "underline line-through",
    code: "bg-gray-200 p-1 rounded text-sm font-mono",
  },
  code: "bg-gray-200 p-2 rounded text-sm font-mono",
};

const editorNodes = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  AutoLinkNode,
  LinkNode,
];

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
    }
  }, []);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        updateToolbar();
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, updateToolbar]);

  return (
    <div className="flex gap-1 p-2 border-b">
      <Button
        type="button"
        size="icon"
        variant={isBold ? "secondary" : "ghost"}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
       type="button"
        size="icon"
        variant={isItalic ? "secondary" : "ghost"}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={isUnderline ? "secondary" : "ghost"}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
      >
        <Underline className="h-4 w-4" />
      </Button>
    </div>
  );
}

function UpdatePlugin({ onChange }: { onChange: (html: string) => void }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor, null);
        onChange(html);
      });
    });
  }, [editor, onChange]);
  return null;
}

function InitialContentPlugin({ initialHtml }: { initialHtml: string | null }) {
    const [editor] = useLexicalComposerContext();
    const isFirstRender = useRef(true);
  
    useEffect(() => {
      if (initialHtml && isFirstRender.current) {
          isFirstRender.current = false;
          editor.update(() => {
              const parser = new DOMParser();
              const dom = parser.parseFromString(initialHtml, 'text/html');
              const nodes = $generateNodesFromDOM(editor, dom);
              $getRoot().select();
              $insertNodes(nodes);
          });
      }
    }, [editor, initialHtml]);
  
    return null;
  }

export function LexicalEditor({
  onChange,
  initialValue,
}: {
  onChange: (html: string) => void;
  initialValue?: string | null;
}) {
  const initialConfig = {
    namespace: "InsightEditor",
    theme: editorTheme,
    onError: (error: Error) => {
      console.error(error);
    },
    nodes: editorNodes,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border rounded-md">
        <ToolbarPlugin />
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="p-4 min-h-[300px] prose dark:prose-invert prose-sm max-w-none focus:outline-none" />
            }
            placeholder={
              <div className="absolute top-4 left-4 text-muted-foreground pointer-events-none">
                Write your insight content here...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        <UpdatePlugin onChange={onChange} />
        {initialValue && <InitialContentPlugin initialHtml={initialValue} />}
      </div>
    </LexicalComposer>
  );
}
