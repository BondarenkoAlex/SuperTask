/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonClose from '../ButtonClose';
import style from './style.scss';

function DialogWindow(props) {
  const { title, children, onClose } = props;
  return (
    <section className={style.dialogWindow}>
      <header>
        <h3>{title}</h3>
        <div
          className={style.buttonClose}
          onClick={onClose}
          role="button"
          tabIndex="0"
        >
          <ButtonClose />
        </div>
      </header>
      <div className={style.hr} />
      <article>
        {children}
      </article>
    </section>
  );
}

DialogWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};
DialogWindow.defaultProps = {
  title: '[*title*]',
  children: '[*children*]',
};

export default DialogWindow;
