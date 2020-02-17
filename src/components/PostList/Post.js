import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';
import { selectPost, dismissPost } from '../../store/actions';
import dismiss from '../../assets/icons/icon-dismiss.svg';

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
      <div
        className={`post__status ${
          statusRead ? 'post__status--unread' : 'post__status--read'
        }`}
      />

      <div>{post.author}</div>
      <div>{moment(post.created_utc, 'X').fromNow()}</div>
      <div onClick={onSelectPost}>{post.title}</div>
      <div>
        {post.thumbnail.startsWith('http') && (
          <img alt="thumbnail" src={post.thumbnail} />
        )}
      </div>

      <button type="button" onClick={onDismiss}>
        <img alt="dismiss post" className="post__dismiss" src={dismiss} />{' '}
        Dismiss post
      </button>

      <div>{post.num_comments} comments</div>
    </div>
  );
};

export default Post;
