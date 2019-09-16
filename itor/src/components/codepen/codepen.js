/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Grid, Button, Icon, Modal } from 'semantic-ui-react';
import Editor from '../ace/ace';
import Viewer from '../viewer/viewer';

const mapStateToProps = (state /*, ownProps*/) => {
    let editorReducer = state.editorReducer,
      naratorReducer = state.naratorReducer;
    return {
      editorPros: editorReducer,
      naratorPros: naratorReducer
    };
  }, mapDispatchToProps = dispatch => {
    return {
      setStep: (step) => {
        dispatch({ type: 'SET_STEP', payload: step });
      }
    };
  },
  onePointOnetwoSix = 1.126,
  twoThowsand = 2000;

class CodePen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCode: props.editorPros.currentCode,
      showModal: false
    };
  }
  _componentDidMount () {
    let codePen = this,
      videoConfigs = codePen.props.naratorPros.video;
    setTimeout(function(){  
      let ele = document.getElementById('itorVideoPlayer');
      ele.addEventListener('timeupdate', function itorTimeUpdate () {
        let currTime = ele.currentTime * 1000;
        for (let index = 0; index < videoConfigs.length; index++) {
          const videoConfig = videoConfigs[index],
            threshold = currTime / videoConfig.time;
          if ( threshold > 1 && threshold < onePointOnetwoSix) {
            codePen.props.setStep(videoConfig.step);
            codePen.setState({ showModal: false });
          }
        }
      });}, twoThowsand);
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
        <Modal open = {this.state.showModal} onOpen = {() => this._componentDidMount()} trigger={<Button onClick = {() => this.setState({ showModal: true })} floated='right' icon labelPosition='left'> <Icon name='play'/> Play</Button>}>
          <Modal.Header>Introduction</Modal.Header>
          <Modal.Content>
            <video id = "itorVideoPlayer" controls  width="100%">

              <source src="./recording.mov"
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