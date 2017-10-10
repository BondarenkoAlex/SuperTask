import React from 'react';
import PropTypes from 'prop-types';
import ButtonFull from '../ButtonFull';
import DialogWindow from '../DialogWindow';
import Modal from '../../Modal';

import style from './style.scss';

function DeleteProjectVacancy(props) {
  const {
    onSubmit,
    onClose,
    name,
    title,
    // eslint-disable-next-line react/prop-types
    type,
  } = props;
  return (
    <Modal>
      <DialogWindow
        onClose={onClose}
        title={title}
      >
        <form onSubmit={onSubmit}>
          <div className={style.button}>
            <ButtonFull
              onClick={onSubmit}
              type={type}
            >
              {name}
            </ButtonFull>
          </div>
        </form>
      </DialogWindow>
    </Modal>


  );
}

DeleteProjectVacancy.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
DeleteProjectVacancy.defaultProps = {
  type: 'submit',
};

export default DeleteProjectVacancy;
