import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import StepDetails from '../stepdDetails/stepdetails.js';

const mapStateToProps = (state /*, ownProps*/) => {
    let naratorReducer = state.naratorReducer,
      stepsReducer = state.stepsReducer;
    return {
      naratorPros: naratorReducer,
      stepsPros: stepsReducer
    };
  }, mapDispatchToProps = dispatch => {
    return {
      updateHeader: () => {
        dispatch({ type: 'HIDE_HEADER', payload: '' });
      }
    };
  };

class Narator extends Component {
  render() {
    let state = this.props.naratorPros;
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Menu widths={1}>
            <Menu.Item>Step - {state.currentStep + 1}</Menu.Item>
          </Menu>
        </Grid.Row>
        <Grid.Row>
          <StepDetails/>
        </Grid.Row>
      </Grid>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Narator);