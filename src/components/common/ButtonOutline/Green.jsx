import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import style from './style.scss';

function Green(props) {
  const {
    children,
    onClick,
  } = props;
  return (
    <Button
      className={style.buttonGreenOutline}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

Green.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Green.defaultProps = {};

export default Green;
