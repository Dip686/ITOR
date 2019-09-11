/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import CodePen from '../codepen/codepen';
import Narator from '../narator/narator';
// import { steps } from '../../data/steps/steps';
// import { scripts } from '../../data/scripts/working-scripts';

export default class PlayGround extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }
  render() {
    return (
      <Grid divided>
        <Grid.Row style={{ 'padding': '2%' }}>
          <GridColumn width={4}>
            <Narator />
          </GridColumn>
          <GridColumn width={12}>
            <CodePen />
          </GridColumn>
        </Grid.Row>
      </Grid>
    );
  }
}