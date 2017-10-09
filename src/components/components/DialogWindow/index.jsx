import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonClose from '../ButtonClose';
import style from './style.scss';

class DialogWindow extends PureComponent {
  render() {
    const { title, children, onClose } = this.props;
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
}

DialogWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};
DialogWindow.defaultProps = {
  title: '[*title*]',
  children: '[*children*]',
};

export default DialogWindow;
