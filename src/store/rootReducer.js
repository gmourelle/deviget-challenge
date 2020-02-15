import { combineReducers } from 'redux';
import { redditReducer } from './reducers/reddit-reducer';

export const rootReducer = combineReducers({
  redditReducer
});
