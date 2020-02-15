import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { dismissAllPost } from '../../store/actions';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(state => state.reddit.posts, shallowEqual);
  const dispatch = useDispatch();

  const onDismissAll = () => dispatch(dismissAllPost());
  return (
    <div className="posts__container">
      {posts && posts.map(({ data }) => <Post post={data} />)}
      <button type="button" onClick={onDismissAll}>
        dismiss All
      </button>
    </div>
  );
};

export default PostList;
