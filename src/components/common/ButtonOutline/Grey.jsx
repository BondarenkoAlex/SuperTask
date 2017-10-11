import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import style from './style.scss';

function Gray(props) {
  const {
    children,
    onClick,
  } = props;
  return (
    <Button
      className={style.buttonBlackOutline}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

Gray.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Gray.defaultProps = {};

export default Gray;
