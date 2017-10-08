import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class ButtonFull extends PureComponent {
  render() {
    const {
      children,
      onClick,
    } = this.props;
    return (
      <button
        className={style.buttonBg}
        type="button"
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
};
ButtonFull.defaultProps = {};

export default ButtonFull;
