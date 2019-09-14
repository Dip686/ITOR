import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = (state /*, ownProps*/) => {
    let headerReducer = state.headerReducer;
    return {
      headerProps: headerReducer
    };
  }, mapDispatchToProps = () => {
    return {
    };
  };

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      style: {},
      header: props.headerProps
    };
  }
  render() {
    let state = this.state,
      header = state.header,
      title = header && header.title;
    if (title) {
      return (
        <Menu>
          <Grid columns='equal' divided padded>
            <Grid.Row textAlign='center' size='huge'>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Segment basic size='mini' style={{ 'fontSize': '16px' }}>
                  {title}
                </Segment>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu>
      );
    }
    return null;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);