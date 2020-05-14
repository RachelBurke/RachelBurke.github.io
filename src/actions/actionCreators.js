import {LOADING_PROFILE, GET_GIT_CONNECTED_PROFILE} from '../types/actionTypes';

export const getProfile = () => dispatch => {
  const url = 'https://gitconnected.com/v1/portfolio/rachelburke';
  dispatch({type: LOADING_PROFILE, loading: true, error: false});
  fetch(url)
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: GET_GIT_CONNECTED_PROFILE,
        user,
      });
    })
    .catch(dispatch({type: LOADING_PROFILE, loading: false, error: true}));
  dispatch({type: LOADING_PROFILE, loading: false, error: false});
};
