/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function ButtonClose(props) {
  return (
    <svg
      viewBox="0 0 14 14"
      className={style.buttonClose}
    >
      <path
        fillRule="evenodd"
        d="M13.969 1.406L8.39 6.984l5.578 5.579-1.406 1.406L6.984 8.39l-5.578 5.578L0 12.563l5.578-5.579L0 1.406 1.406 0l5.578 5.578L12.563 0z"
      />
    </svg>
  );
}

ButtonClose.propTypes = {};
ButtonClose.defaultProps = {};

export default ButtonClose;
