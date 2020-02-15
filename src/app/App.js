import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostList, PostDetail } from '../components';
import { fetchPosts } from '../store/actions';
import '../assets/scss/style.scss';

const App = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchPosts()), []);

  return (
    <div className="home__container">
      <PostList />
      <PostDetail />
    </div>
  );
};

export default App;
