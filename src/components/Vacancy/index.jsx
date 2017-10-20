import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SideButtons from '../common/SideButtons';
import Body from './Body';

import style from './style.scss';

class Vacancy extends PureComponent {
  render() {
    const {
      title,
      isClosed,
      onDelete,
      onOpenClose,
    } = this.props;
    return (
      <article className={style.articleProject}>
        <header>
          <h4>{title}</h4>
        </header>
        <Body isClosed={isClosed} />
        <SideButtons
          onDelete={onDelete}
          onClick={onOpenClose}
          isClosed={isClosed}
        >
          {isClosed
            ? 'Открыть вакансию'
            : 'Закрыть вакансию'}
        </SideButtons>
      </article>
    );
  }
}

Vacancy.propTypes = {
  title: PropTypes.string.isRequired,
  isClosed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
};
Vacancy.defaultProps = {};

export default Vacancy;
