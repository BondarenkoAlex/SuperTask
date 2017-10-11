import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Green from '../../../common/ButtonOutline/Green';
import CkeckIcon from '../../../common/CkeckIcon';
import declOfNum from '../../../../utils/declOfNum';
import style from './style.scss';

class Body extends PureComponent {
  render() {
    const {
      count,
      isClosed,
      onAdd,
    } = this.props;
    const title = declOfNum(count, ['вакансия', 'вакансии', 'вакансий']);
    return (
      <article className={style.articleBody}>
        <span className={style.articleSpan}>
          {count} {title}
        </span>
        {{
          false: (
            <Green onClick={onAdd}>
              Добавить вакансию
            </Green>),
          true: (
            <div className={style.closed}>
              <CkeckIcon />
              <span>Проект закрыт, сотрудники наняты</span>
            </div>),
        }[isClosed]}

      </article>
    );
  }
}

Body.propTypes = {
  count: PropTypes.number.isRequired,
  isClosed: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
};
Body.defaultProps = {};

export default Body;
