"use client";

import AceEditor from "react-ace";
import { CodeEditorWrapper } from "./CodeEditor.style";
import "ace-builds/src-noconflict/mode-jsx";

/*eslint-disable no-alert, no-console */
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

import { ProgrammingLanguages, EditorThemes } from "@/constants";
interface ICodeEditorProps {
  error?: string;
  value: string;
  mode?: string;
  theme?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<ICodeEditorProps> = (props) => {
  const { value, mode, theme, placeholder, onChange, error } = props;

  ProgrammingLanguages.forEach((lang) => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
  });

  EditorThemes.forEach((theme) =>
    require(`ace-builds/src-noconflict/theme-${theme}`)
  );

  return (
    <CodeEditorWrapper error={error}>
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
