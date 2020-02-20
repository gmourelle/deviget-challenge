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
              <Fragment>
                <img src={post.thumbnail} alt="thumbnail" />

                <a
                  className="detail__href"
                  href={post.thumbnail}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Save to Gallery
                </a>
              </Fragment>
            )}
          </div>

          <p className="detail__title">{post.title}</p>
        </div>
      )}
    </Fragment>
  );
};

export default PostDetail;
