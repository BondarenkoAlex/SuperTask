import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/ButtonOutline/Button';
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
        <div>
          <span className={style.articleSpan}>
            {count} {title}
          </span>
          {isClosed
            ? (
              <div className={style.closed}>
                <CkeckIcon />
                <span>Проект закрыт, сотрудники наняты</span>
              </div>)
            : (
              <div className={[style.addVacancy, 'green'].join(' ')}>
                <Button onClick={onAdd}>
                Добавить вакансию
                </Button>
              </div>)}
        </div>
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
