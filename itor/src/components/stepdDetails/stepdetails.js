import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Icon, Grid } from 'semantic-ui-react';
import { ADD_WORKING_SAMPLE, UPDATE_STEP } from '../../actions/nartorActions';
import { PREVIOUS, NEXT } from '../../utils/constants';
const mapStateToProps = (state /*, ownProps*/) => {
    let naratorReducer = state.naratorReducer,
      stepsReducer = state.stepsReducer;
    return {
      naratorPros: naratorReducer,
      stepsPros: stepsReducer
    };
  }, mapDispatchToProps = dispatch => {
    return {
      addWorkingSample: (sample) => {
        dispatch({ type: ADD_WORKING_SAMPLE, payload: sample });
      },
      updateStep: (direction) => {
        if (direction === PREVIOUS) {
          dispatch({ type:UPDATE_STEP, payload: -1 });
        } else if (direction === NEXT) {
          dispatch({ type:UPDATE_STEP, payload: 1 });
        }
      }
    };
  };

class StepDetails extends React.Component {
  constructor (props) {
    super();
    this.state = {
      stepDetails: props.stepsPros[props.naratorPros.currentStep]
    };
  }
  render() {
    const Steps = this,
      currentStep = Steps.props.naratorPros.currentStep,
      stepDetails = Steps.props.stepsPros[currentStep],
      stepsLength = Steps.props.stepsPros.length,
      stepDescHeight =  (window.innerHeight * 0.5) +'px';
    return (
      <Card fluid>
        <Card.Content header= {stepDetails.sampleHeader} />
        <Card.Content>
          <div style={{ "textAlign": "left", "overflow":"scroll", "height":stepDescHeight }} dangerouslySetInnerHTML={{ __html: stepDetails.content }}></div>
        </Card.Content>
        <Card.Content extra>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>
                { 
                  (currentStep > 0) ?
                    <Icon onClick = { ()=> this.props.updateStep(PREVIOUS) } style={{ 'float': 'left', 'paddingTop': '5px' }} size='large' name='arrow alternate circle left outline'></Icon>
                    : null
                }
              </Grid.Column>
              <Grid.Column width={12}> <Button fluid onClick = { ()=> { this.props.addWorkingSample(stepDetails.workingSample);} } >Get the Working code</Button> </Grid.Column>
              <Grid.Column width={2}>
                { (currentStep !== stepsLength - 1) ?
                  <Icon onClick = { ()=> this.props.updateStep(NEXT) } style={{ 'float': 'right', 'paddingTop': '5px' }} size='large' name='arrow alternate circle right outline'></Icon>
                  : null
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepDetails);
