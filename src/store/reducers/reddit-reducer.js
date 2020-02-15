import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_ALL_POST_SUCCESS,
  SELECTED_POST,
  PAGER_CHANGE,
  RAISE_ERROR
} from '../constants';

const initialState = {
  posts: {},
  postSelected: {},
  fetching: false,
  currentPage: 0,
  total: 0,
  error: ''
};

export const redditReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, fetching: true };

    case FETCH_POSTS_SUCCESS: {
      const posts = action.payload.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: { ...curr } }),
        {}
      );
      return {
        ...state,
        posts,
        fetching: false
      };
    }

    case SELECTED_POST:
      return { ...state, postSelected: action.payload };

    case DELETE_POST_SUCCESS: {
      const newState = state.posts.filter(post => post.id !== action.payload);

      return {
        ...state,
        currentPage: 0,
        posts: newState
      };
    }

    case DELETE_ALL_POST_SUCCESS:
      return {
        ...state,
        currentPage: 0,
        posts: {}
      };

    case PAGER_CHANGE:
      return {
        ...state,
        currentPage: action.payload
      };

    case RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
