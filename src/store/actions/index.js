import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  DISMISS_POST,
  DISMISS_ALL_POST,
  SELECT_POST,
  PAGER_CHANGE,
  RAISE_ERROR
} from '../constants';
import getPosts from '../../services';
// import { PER_PAGE } from '../constants';

export function fetchPostsSuccess(data) {
  return { type: FETCH_POSTS_SUCCESS, payload: data };
}

export const postRequest = () => ({ type: FETCH_POSTS_REQUEST });

export const selectPost = post => ({
  type: SELECT_POST,
  payload: post
});

export const dismissPost = id => ({ type: DISMISS_POST, payload: id });

export const dismissAllPost = () => ({ type: DISMISS_ALL_POST });

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
      .catch(err => raiseError(err));
  };
};
