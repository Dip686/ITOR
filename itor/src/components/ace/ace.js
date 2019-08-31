import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/twilight';
import 'brace/ext/language_tools';
import 'brace/snippets/html';

export default class Editor extends Component {
  render() {
    return (
      <AceEditor
        placeholder="Placeholder Text"
        mode="html"
        theme="twilight"
        name="blah2"
        width="100%"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.src}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
    );
  }
}