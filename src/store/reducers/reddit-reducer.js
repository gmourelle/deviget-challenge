import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  DISMISS_POST,
  DISMISS_ALL_POST,
  SELECT_POST,
  PAGER_CHANGE,
  RAISE_ERROR
} from '../constants';

const initialState = {
  posts: [],
  selectedPost: {},
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
      return {
        ...state,
        posts: action.payload.data,
        fetching: false
      };
    }

    case SELECT_POST:
      return {
        ...state,
        selectedPost: { ...action.payload }
      };

    case DISMISS_POST: {
      const newState = state.posts.children.filter(
        ({ data }) => data.id !== action.payload
      );

      return {
        ...state,
        posts: { ...state.posts, children: newState }
      };
    }

    case DISMISS_ALL_POST:
      return {
        ...state,
        posts: [],
        selectedPost: {}
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
