import { URL_REDDIT } from '../constants';

export const getPosts = pager => {
  const url = pager
    ? `${URL_REDDIT}&${Object.keys(pager)[0]}=${
        Object.values(pager)[0]
      }&count=10`
    : URL_REDDIT;

  return fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
};
