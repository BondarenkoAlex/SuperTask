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
          {{
            false: 'Закрыть вакансию',
            true: 'Открыть вакансию',
          }[isClosed]}
        </SideButtons>
      </article>
    );
  }
}

Vacancy.propTypes = {
  title: PropTypes.string,
  isClosed: PropTypes.bool,
  onDelete: PropTypes.func,
  onOpenClose: PropTypes.func,
};
Vacancy.defaultProps = {};

export default Vacancy;
