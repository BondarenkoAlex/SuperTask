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
    const {
      onAddProject,
      onOnlyOpen,
      onChangeSearch,
    } = this.props;
    return (
      <div className={style.header}>
        <div className={style.wrapInput}>
          <InputText onChange={onChangeSearch} />
        </div>
        <Checkbox onClick={onOnlyOpen}>
          Только открытые
        </Checkbox>
        <ButtonFull onClick={onAddProject}>
          Добавить проект
        </ButtonFull>
      </div>
    );
  }
}

Header.propTypes = {
  onAddProject: PropTypes.func,
  onOnlyOpen: PropTypes.func,
  onChangeSearch: PropTypes.func,
};
Header.defaultProps = {};

export default Header;
