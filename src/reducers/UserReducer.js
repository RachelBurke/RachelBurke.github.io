import * as type from '../types/actionTypes';

export const initialState = {
  loading: false,
  error: false,
  user: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_GIT_CONNECTED_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    case type.LOADING_PROFILE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
