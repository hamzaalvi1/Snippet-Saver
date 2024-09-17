"use client";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";


const CodeEditor = () => {
  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="javascript"
      theme="tomorrow"
      name="blah2"
      //   onLoad={this.onLoad}
      //   onChange={this.onChange}
      fontSize={14}
      lineHeight={19}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;
