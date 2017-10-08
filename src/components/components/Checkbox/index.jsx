/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Checkbox extends PureComponent {
  render() {
    const {
      children,
      onClick,
    } = this.props;
    return (
      <div className={style.checkbox}>
        <input
          type="checkbox"
          id="auth_block_save_for"
          onClick={onClick}
        />
        <label htmlFor="auth_block_save_for">
          {children}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
Checkbox.defaultProps = {
  children: '[*checkbox*]',
};

export default Checkbox;
