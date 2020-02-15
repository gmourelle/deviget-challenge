import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_ALL_POST_SUCCESS,
  SELECTED_POST,
  PAGER_CHANGE,
  RAISE_ERROR
} from '../constants';
import { getPosts } from '../../services';
// import { PER_PAGE } from '../constants';

export function fetchPostsSuccess(data) {
  return { type: FETCH_POSTS_SUCCESS, payload: { data } };
}

export const postRequest = () => ({ type: FETCH_POSTS_REQUEST });

export const selectPostSuccess = player => ({
  type: SELECTED_POST,
  payload: player
});

export const pagerChange = page => ({
  type: PAGER_CHANGE,
  payload: page
});

export const raiseError = error => ({
  type: RAISE_ERROR,
  payload: error
});

export const fetchPosts = () => {
  return dispatch => {
    dispatch(postRequest());

    getPosts()
      .then(data => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch(err => err);
  };
};
