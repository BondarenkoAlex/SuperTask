import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import InputText from '../components/InputText';
import Checkbox from '../components/Checkbox';
import ButtonFull from '../components/ButtonFull';
import style from './style.scss';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div className={style.header}>
        <InputText onChange={() => {}} />
        <Checkbox onClick={() => {}}>
          Только открытые
        </Checkbox>
        <ButtonFull onClick={() => {}}>
          Добавить проект
        </ButtonFull>
      </div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
