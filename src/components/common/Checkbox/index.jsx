/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function Checkbox(props) {
  const {
    children,
    checked,
    onClick,
  } = props;
  return (
    <div className={[style.checkbox, style.checkboxGlobal]}>
      <input
        type="checkbox"
        id="auth_block_save_for"
        onClick={onClick}
        checked={checked}
      />
      <label htmlFor="auth_block_save_for">
        {children}
      </label>
    </div>
  );
}


Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  checked: PropTypes.bool,
};
Checkbox.defaultProps = {
  children: '[*checkbox*]',
  checked: false,
};

export default Checkbox;
