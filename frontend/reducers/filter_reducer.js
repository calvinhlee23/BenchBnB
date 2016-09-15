import {FilterConstants} from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = {
      bounds: {}
  };

export const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      const newFilter = {bounds: action.bounds};
      return merge({}, state, newFilter);
    default:
      return state;
  }
};
