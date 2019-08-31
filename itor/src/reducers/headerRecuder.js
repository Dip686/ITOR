import { SHOW_HEADER, HIDE_HEADER } from '../actions/headerActions';
const initialState = {
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