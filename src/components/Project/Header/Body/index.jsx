import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import Green from '../../../components/ButtonOutline/Green';
import declOfNum from '../../../../utils/declOfNum';
import style from './style.scss';

class Body extends PureComponent {
  render() {
    const {
      count,
      onAdd,
    } = this.props;
    const title = declOfNum(count, ['вакансия', 'вакансии', 'вакансий']);
    return (
      <article className={style.articleBody}>
        <span className={style.articleSpan}>
          {count} {title}
        </span>
        <Green onClick={onAdd}>
          Добавить вакансию
        </Green>
      </article>
    );
  }
}

Body.propTypes = {
  count: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};
Body.defaultProps = {};

export default Body;
