"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write text here...</p>",
    autofocus: true,

  });

  return <EditorContent editor={editor} className="bg-gray-200 min-h-32" />;
};

export default Tiptap;
