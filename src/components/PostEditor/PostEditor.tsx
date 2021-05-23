import React, { useEffect, useMemo, useState } from 'react';
import { BaseEditor, createEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { CustomElement, ParagraphElement } from '../../../slate';

interface Props {}

const Editor = (props: Props) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable autoCapitalize="false" autoCorrect="false" />
    </Slate>
  );
};

export default Editor;
