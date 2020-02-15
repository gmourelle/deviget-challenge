import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPost, dismissPost } from '../../store/actions';

import PropTypes from 'prop-types';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const onDismiss = () => dispatch(dismissPost(post.id));

  return (
    <div className="post__container" onClick={() => dispatch(selectPost(post))}>
      {post.title}
      <button type="button" onClick={onDismiss}>
        Dismiss
      </button>
    </div>
  );
};

Post.propTypes = {};

export default Post;
