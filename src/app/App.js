import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostList, PostDetail, Header, Pager } from '../components';
import { fetchPosts } from '../store/actions';
import '../assets/scss/style.scss';

const App = () => {
  const fetching = useSelector(state => state.reddit.fetching);
  const { before, after } = useSelector(state => state.reddit.posts);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchPosts()), []);

  const onPreviousPage = () => {
    dispatch(fetchPosts({ before }));
  };

  const onNextPage = () => {
    dispatch(fetchPosts({ after }));
  };

  return (
    <div className="home__container">
      <div className="home__left">
        <div className="home__header">
          <Header />
          <div className="home__pager">
            <Pager
              text="Prev"
              disabled={!before}
              onClickPage={onPreviousPage}
            />
            <Pager text="Next" disabled={!after} onClickPage={onNextPage} />
          </div>
        </div>

        <div className="home__content">
          {fetching ? (
            <div className="home__spinner">Loading...</div>
          ) : (
            <PostList />
          )}
        </div>
      </div>
      <div className="home__posts">
        <PostDetail />
      </div>
    </div>
  );
};

export default App;
