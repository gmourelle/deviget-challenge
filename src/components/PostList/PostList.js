import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { dismissAllPost, fetchPosts } from '../../store/actions';
import Post from './Post';

const PostList = () => {
  const { children, before, after } = useSelector(
    state => state.reddit.posts,
    shallowEqual
  );
  const dispatch = useDispatch();

  const onDismissAll = () => dispatch(dismissAllPost());
  const onPreviousPage = () => {
    dispatch(fetchPosts({ before }));
  };

  const onNextPage = () => {
    dispatch(fetchPosts({ after }));
  };

  return (
    <div className="posts__container">
      <div>Reddit posts</div>
      <div>
        <button type="button" disabled={!before} onClick={onPreviousPage}>
          Prev
        </button>
        <button disabled={!after} onClick={onNextPage} type="button">
          Next
        </button>
      </div>
      {children && children.map(post => <Post post={post.data} />)}
      <button type="button" onClick={onDismissAll}>
        dismiss All
      </button>
    </div>
  );
};

export default PostList;
