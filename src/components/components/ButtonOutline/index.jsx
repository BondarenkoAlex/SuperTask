import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class ButtonOutline extends PureComponent {
  render() {
    const {
      children,
      onClick,
    } = this.props;
    return (
      <button
        className={style.buttonBlackOutline}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

ButtonOutline.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
ButtonOutline.defaultProps = {};

export default ButtonOutline;
