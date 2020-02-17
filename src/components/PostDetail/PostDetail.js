import React, { Fragment } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const PostDetail = () => {
  const post = useSelector(state => state.reddit.selectedPost, shallowEqual);

  const isEmpty = Object.keys(post).length === 0;

  return (
    <Fragment>
      {!isEmpty && (
        <div className="detail__container">
          <div>{post.author}</div>
          <div>{post.title}</div>
          {post.thumbnail.startsWith('http') && (
            <div>
              <img src={post.thumbnail} alt="thumbnail" />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default PostDetail;
