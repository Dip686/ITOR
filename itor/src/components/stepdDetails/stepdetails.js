import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';

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

class StepDetails extends React.Component {
  constructor (props) {
    super();
    this.state = {
      currentStep: props.naratorPros.defaultStep,
      stepDetails: props.stepsPros[props.naratorPros.defaultStep]
    };
  }
  render() {
    const stepDetails = this.state.stepDetails,
      stepDescHeight =  (window.innerHeight * 0.5) +'px';
    return (
      <Card fluid>
        <Card.Content header= {stepDetails.sampleHeader} />
        <Card.Content>
          <div style={{ "textAlign": "left", "overflow":"scroll", "height":stepDescHeight }} dangerouslySetInnerHTML={{ __html: stepDetails.content }}></div>
        </Card.Content>
        <Card.Content extra>
          <Icon style={{ 'float': 'left' }} size='large' name='arrow alternate circle left outline'></Icon>
          <Icon style={{ 'float': 'right' }} size='large' name='arrow alternate circle right outline'></Icon>
        </Card.Content>
      </Card>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepDetails);
