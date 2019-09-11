import { UPDATE_EDITOR_SRC } from '../actions/editorActions';
import { ADD_WORKING_SAMPLE } from '../actions/nartorActions';
let code = {
  currentCode: ''
};
export default function editorReducer (state = code, action) {
  switch (action.type) {
    case UPDATE_EDITOR_SRC:
      return { ...state, currentCode: action.payload };
    case ADD_WORKING_SAMPLE:
      return { ...state, currentCode: action.payload };
    default:
      return state;
  }
}