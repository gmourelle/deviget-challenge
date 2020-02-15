import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const PostDetail = () => {
  const post = useSelector(state => state.reddit.selectedPost, shallowEqual);
  return <div className="detail__container">{post.title}</div>;
};

export default PostDetail;
