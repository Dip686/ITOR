import { combineReducers } from 'redux';
import headerReducer from './headerRecuder';
import configReducer from './configReducer';
import naratorReducer from './naratorReducer';
import stepsReducer from './stepsReducer';
import editorReducer from './editorReducer';

const ITORReducers = combineReducers({
  headerReducer,
  configReducer,
  naratorReducer,
  stepsReducer,
  editorReducer
});
export default ITORReducers;