import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectPost, dismissPost } from '../../store/actions';

const Post = ({ post }) => {
  const [statusRead, setStatusRead] = useState(false);
  const dispatch = useDispatch();
  const onDismiss = () => dispatch(dismissPost(post.id));
  const onSelectPost = () => {
    setStatusRead(true);
    dispatch(selectPost(post));
  };
  return (
    <div className="post__container">
      <div>{post.author}</div>
      <div onClick={onSelectPost}>{post.title}</div>
      <div>
        {post.thumbnail !== 'self' && (
          <img alt="thumbnail" src={post.thumbnail} />
        )}
      </div>
      <div className={`${statusRead ? 'post__read--unread' : 'post__read'}`}>
        <span>read</span>
      </div>
      <button type="button" onClick={onDismiss}>
        Dismiss
      </button>
    </div>
  );
};

export default Post;
