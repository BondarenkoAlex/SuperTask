import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function InputText(props) {
  const {
    value,
    placeholder,
    onChange,
  } = props;
  return (
    <input
      type="text"
      value={value}
      className={style.inputText}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
InputText.defaultProps = {
  value: '',
  placeholder: '[*placeholder*]',
};

export default InputText;
