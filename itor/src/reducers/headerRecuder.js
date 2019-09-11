import { SHOW_HEADER, HIDE_HEADER } from '../actions/headerActions';
let initialState = {
  visibility: true,
  title: 'variable Interactive Tutorial'
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_HEADER:
      return Object.assign({}, state, {
        visibility: true
      });
    case HIDE_HEADER:
      return Object.assign({}, state, {
        visibility: false
      });
    default:
      return state;
  }
}

export function setHeaderInitialState (state) {
  if (state != null) {
    initialState = state;
  } else {
    initialState.visibility = 'false';
    initialState.title = '';
  }
}