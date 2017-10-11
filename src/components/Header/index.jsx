/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputText from '../common/InputText';
import Checkbox from '../common/Checkbox';
import ButtonFull from '../common/ButtonFull';
import style from './style.scss';

class Header extends PureComponent {
  render() {
    const {
      onAddProject,
      onOnlyOpen,
      onChangeSearch,
      isOnlyOpen,
      searchValue,
      placeholder,
    } = this.props;
    return (
      <div className={style.header}>
        <div className={style.wrapInput}>
          <InputText
            onChange={onChangeSearch}
            value={searchValue}
            placeholder={placeholder}
          />
        </div>
        <Checkbox
          onClick={onOnlyOpen}
          checked={isOnlyOpen}
        >
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
  isOnlyOpen: PropTypes.bool.isRequired,
  searchValue: PropTypes.string,
  placeholder: PropTypes.string,
};
Header.defaultProps = {
  placeholder: 'Поиск по вакансиям',
};

export default Header;
