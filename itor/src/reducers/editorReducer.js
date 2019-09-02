import { UPDATE_EDITOR_SRC } from '../actions/editorActions';
let code = {
  currentCode: ''
};
export default function editorReducer (state = code, action) {
  switch (action.type) {
    case UPDATE_EDITOR_SRC:
      return {...state, currentCode: action.payload};
    default:
      return state;
  }
}