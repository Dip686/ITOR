import { config } from '../itor.config';

let steps = config.narator.steps;
export default function stepsReducer (state = steps, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export function setStepsInitialState (state) {
  steps = state;
}