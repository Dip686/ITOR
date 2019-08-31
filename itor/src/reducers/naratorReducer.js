import { config } from '../itor.config';

let narator = config.narator;
export default function naratorReducer (state = narator, action) {
  switch (action.type) {
    default:
      return state;
  }
}