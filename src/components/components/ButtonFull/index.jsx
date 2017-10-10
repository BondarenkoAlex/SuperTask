import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class ButtonFull extends PureComponent {
  render() {
    const {
      children,
      onClick,
      type,
    } = this.props;
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
