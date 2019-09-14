/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Grid, Button, Icon, Modal } from 'semantic-ui-react';
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
        <Modal trigger={<Button floated='right' icon labelPosition='left'> <Icon name='play'/> Play</Button>}>
          <Modal.Header>Video Description</Modal.Header>
          <Modal.Content>
            <video controls  width="100%" id="video-loader">

              <source src="./mov_bbb.mp4"
                type="video/mp4" />
              Sorry, your browser doesnot support embedded videos...
            </video>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodePen);