import React from 'react';
import PropTypes from 'prop-types';

import Button from '../ButtonOutline/Button';
import style from './style.scss';

function SideButtons(props) {
  const {
    onClick,
    onDelete,
    children,
    isClosed,
  } = props;
  const cls = isClosed ? 'green' : 'gray';
  return (
    <aside className={style.buttonSet}>
      <div className={[style.buttonClick, cls].join(' ')}>
        <Button onClick={onClick}>
          {children}
        </Button>
      </div>
      <div className={style.buttonDelete}>
        <Button onClick={onDelete}>
          Удалить
        </Button>
      </div>
    </aside>
  );
}

SideButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  isClosed: PropTypes.bool,
};
SideButtons.defaultProps = {
  isClosed: false,
};

export default SideButtons;
