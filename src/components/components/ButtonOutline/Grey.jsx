import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import style from './style.scss';

class Gray extends PureComponent {
  render() {
    const {
      children,
      onClick,
    } = this.props;
    return (
      <Button
        className={style.buttonBlackOutline}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
}

Gray.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Gray.defaultProps = {};

export default Gray;
