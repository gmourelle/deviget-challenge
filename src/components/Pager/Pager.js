import React from 'react';
import PropTypes from 'prop-types';

const Pager = ({ onClickPage, disabled, text }) => {
  return (
    <button
      type="button"
      className="pager__button"
      disabled={disabled}
      onClick={() => onClickPage()}
    >
      {text}
    </button>
  );
};

Pager.propTypes = {
  onClickPage: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Pager;
