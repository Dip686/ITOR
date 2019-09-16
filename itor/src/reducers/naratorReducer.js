import { config } from '../itor.config';
import { UPDATE_STEP, SET_STEP } from './../actions/nartorActions';
let narator = config.narator;
export default function naratorReducer (state = narator, action) {
  switch (action.type) {
    case UPDATE_STEP:
      return { ...state, currentStep: state.currentStep + action.payload };
    case SET_STEP:
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
}

export function setNaratorInitialState (state) {
  narator = state;
  narator.currentStep = 0;
}