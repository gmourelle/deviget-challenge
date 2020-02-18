import React, { Fragment } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const PostDetail = () => {
  const post = useSelector(state => state.reddit.selectedPost, shallowEqual);

  const isEmpty = Object.keys(post).length === 0;

  return (
    <Fragment>
      {!isEmpty && (
        <div className="detail__container">
          <span className="detail__author">{post.author}</span>

          <div className="detail__thumbnail">
            {post.thumbnail.startsWith('http') && (
              <img src={post.thumbnail} alt="thumbnail" />
            )}
          </div>

          <div>{post.title}</div>
        </div>
      )}
    </Fragment>
  );
};

export default PostDetail;
