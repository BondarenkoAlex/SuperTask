import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import ButtonFull from '../ButtonFull';
import style from './style.scss';

function ProjectAdd(props) {
  const {
    onCreate,
    onChangeName,
    value,
    placeholder,
    type,
  } = props;
  return (
    <form onSubmit={onCreate}>
      <div
        className={style.button}
        key="button-create"
      >
        <ButtonFull
          onClick={onCreate}
          type={type}
        >
          Создать
        </ButtonFull>
      </div>
      <div
        className={style.input}
        key="input-create"
      >
        <InputText
          onChange={onChangeName}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </form>
  );
}

ProjectAdd.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
ProjectAdd.defaultProps = {
  type: 'submit',
};

export default ProjectAdd;
