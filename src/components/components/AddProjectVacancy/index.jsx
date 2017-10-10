import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import ButtonFull from '../ButtonFull';
import style from './style.scss';

function AddProjectVacancy(props) {
  const {
    onSubmit,
    onChangeName,
    value,
    placeholder,
    // eslint-disable-next-line react/prop-types
    type,
  } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className={style.button}>
        <ButtonFull
          onClick={onSubmit}
          type={type}
        >
          Создать
        </ButtonFull>
      </div>
      <div className={style.input}>
        <InputText
          onChange={onChangeName}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </form>
  );
}

AddProjectVacancy.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
AddProjectVacancy.defaultProps = {
  type: 'submit',
};

export default AddProjectVacancy;
