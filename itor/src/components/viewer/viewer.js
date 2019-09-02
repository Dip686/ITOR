import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = (state /*, ownProps*/) => {
    let editorReducer = state.editorReducer;
    return {
      editorProps: editorReducer
    };
  }, mapDispatchToProps = dispatch => {
    return {
      updateHeader: () => {
        dispatch({ type: 'HIDE_HEADER', payload: '' });
      }
    };
  };

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
      style: {}
    };
  }
  render() {
    let editorProps = this.props.editorProps;
    return (
      <Grid divided>
        <Grid.Row>
          <iframe width="100%"  height="500px" title="FC-Viewer" srcDoc= {editorProps.currentCode}></iframe>
        </Grid.Row>
      </Grid>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer);