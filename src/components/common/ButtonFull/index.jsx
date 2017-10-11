import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function ButtonFull(props) {
  const {
    children,
    onClick,
    type,
  } = props;
  return (
    <button
      className={style.buttonBg}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonFull.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};
ButtonFull.defaultProps = {
  type: 'button',
};

export default ButtonFull;
