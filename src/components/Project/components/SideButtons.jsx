import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Grey from '../../components/ButtonOutline/Grey';
import style from './style.scss';

class SideButtons extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    const {
      data,
      onClick,
      onDelete,
      children,
    } = this.props;
    return (
      <aside className={style.buttonSet}>
        <div className={style.buttonClick}>
          <Grey onClick={onClick}>
            {children}
          </Grey>
        </div>
        <div className={style.buttonDelete}>
          <Grey onClick={onDelete}>
            Удалить
          </Grey>
        </div>
      </aside>
    );
  }
}

SideButtons.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  children: PropTypes.string,
};
SideButtons.defaultProps = {};

export default SideButtons;
