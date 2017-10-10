/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={style.checkIcon}
    >
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  );
}

SearchIcon.propTypes = {};
SearchIcon.defaultProps = {};

export default SearchIcon;
