import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Grid } from 'semantic-ui-react';
import Editor from '../ace/ace';
import Viewer from '../viewer/viewer';

const mapStateToProps = (state /*, ownProps*/) => {
    let editorReducer = state.editorReducer;
    return {
      editorPros: editorReducer
    };
  }, mapDispatchToProps = dispatch => {
    return {
      updateHeader: () => {
        dispatch({ type: 'HIDE_HEADER', payload: '' });
      }
    };
  };

class CodePen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCode: props.editorPros.currentCode,
    };
  }
  render() {
    const currentCode = this.state.currentCode;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='editor' active/>
        </Menu>

        <Segment>
          <Grid columns = {2}>
            <Grid.Row>
              <Grid.Column><Editor/> </Grid.Column>
              <Grid.Column><Viewer/></Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <Editor updateSrc={this.updateSrc} script = {this.state.script}/> */}
        </Segment>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodePen);