import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import Green from '../../../components/ButtonOutline/Green';
import style from './style.scss';

class Body extends PureComponent {
  render() {
    const {
      data,
      onAdd,
    } = this.props;
    return (
      <article className={style.articleBody}>
        <span className={style.articleSpan}>
          {2} вакансии
        </span>
        <Green onClick={onAdd}>
          Добавить вакансию
        </Green>
      </article>
    );
  }
}

Body.propTypes = {
  data: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
};
Body.defaultProps = {};

export default Body;
