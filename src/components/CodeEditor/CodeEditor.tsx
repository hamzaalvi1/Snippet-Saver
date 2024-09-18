"use client";

import { CodeEditorWrapper } from "./CodeEditor.style";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";

interface ICodeEditorProps {
  value: string;
  mode?: string;
  theme?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<ICodeEditorProps> = (props) => {
  const { value, mode, theme, placeholder, onChange } = props;
  return (
    <CodeEditorWrapper>
      <AceEditor
        mode={mode || "javascript"}
        className="ace-code-snippet"
        placeholder={placeholder}
        theme={theme || "tomorrow"}
        name="snippet-code-editor"
        //   onLoad={this.onLoad}
        onChange={onChange}
        fontSize={14}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </CodeEditorWrapper>
  );
};

export default CodeEditor;
