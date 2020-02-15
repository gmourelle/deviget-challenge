import { URL_REDDIT } from '../constants';

export const getPosts = () =>
  fetch(URL_REDDIT)
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
