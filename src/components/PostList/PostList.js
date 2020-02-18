import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { dismissAllPost } from '../../store/actions';
import Post from './Post';

const PostList = () => {
  const { children } = useSelector(state => state.reddit.posts, shallowEqual);

  const dispatch = useDispatch();

  const onDismissAll = () => dispatch(dismissAllPost());

  return (
    <div className="posts__container">
      <TransitionGroup>
        {children &&
          children.map(post => (
            <CSSTransition
              key={post.data.id}
              timeout={1500}
              classNames="post-transition"
            >
              <Post key={post.data.id} post={post.data} />
            </CSSTransition>
          ))}
        <div className="posts__footer">
          <button type="button" onClick={onDismissAll}>
            Dismiss All
          </button>
        </div>
      </TransitionGroup>
    </div>
  );
};

export default PostList;
