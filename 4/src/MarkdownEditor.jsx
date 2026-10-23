import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
    const containerRef = useRef(null);
    const editorRef = useRef(null);
    const onContentChangeRef = useRef(onContentChange);

    useEffect(() => {
        onContentChangeRef.current = onContentChange;
    }, [onContentChange]);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const editor = new Editor({
            el: containerRef.current,
            hideModeSwitch: true,
        });

        editorRef.current = editor;

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            onContentChangeRef.current?.(content);
        });

        return () => {
            editor.destroy();
            editorRef.current = null;
        };
    }, []);

    return <div ref={containerRef} />;
  // END
};

export default MarkdownEditor;
