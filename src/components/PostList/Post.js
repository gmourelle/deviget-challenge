import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';
import { selectPost, dismissPost } from '../../store/actions';
import dismiss from '../../assets/icons/icon-dismiss.svg';
import arrow from '../../assets/icons/chevron-right.svg';

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
      <header className="post__header">
        <div
          className={`post__status ${
            statusRead ? 'post__status--unread' : 'post__status--read'
          }`}
        />
        <div className="post__title">
          <span>{post.author}</span>
          <span>{moment(post.created_utc, 'X').fromNow()}</span>
        </div>
      </header>
      <content className="post__content" onClick={onSelectPost}>
        <div className="post__thumbnail">
          {post.thumbnail.startsWith('http') && (
            <img alt="thumbnail" src={post.thumbnail} />
          )}
        </div>
        <span>{post.title}</span>
        <img alt="dismiss post" className="post__arrow" src={arrow} />
      </content>
      <footer className="post__footer">
        <button type="button" onClick={onDismiss}>
          <img alt="dismiss post" className="post__dismiss" src={dismiss} />
          Dismiss post
        </button>

        <div className="post__comments">{post.num_comments} comments</div>
      </footer>
    </div>
  );
};

export default Post;
