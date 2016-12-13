import * as actions from '../actions/types';

export default function dependencies(state = [], action) {
  switch(action.type) {
    case actions.ADD_BUNDLE_DEPENDENCIES:
      return state.concat(actions.data);
    case actions.SET_BUNDLE_DEPENDENCIES:
      return action.dependencies;
    default:
      return state;
  }
}
