import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/twilight';
import 'brace/ext/language_tools';
import 'brace/snippets/html';
import { connect } from 'react-redux';
import { UPDATE_EDITOR_SRC } from '../../actions/editorActions';

const mapStateToProps = (state /*, ownProps*/) => {
    let editorReducer = state.editorReducer;
    return {
      editorProps: editorReducer
    };
  }, mapDispatchToProps = dispatch => {
    return {
      updateEditor: (src) => {
        dispatch({ type: UPDATE_EDITOR_SRC, payload: src });
      }
    };
  };

class Editor extends Component {
  onChange (newValue) {
    this.props.updateEditor(newValue);
  }
  render() {
    let editorProps = this.props.editorProps;
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
        value = {editorProps.currentCode}
        onChange = {(newValue)=>{this.onChange(newValue);}}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);