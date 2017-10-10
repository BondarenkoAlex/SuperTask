import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Grey from '../ButtonOutline/Grey';
import style from './style.scss';

class SideButtons extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    const {
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
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
SideButtons.defaultProps = {};

export default SideButtons;
