import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../common/SearchIcon';
import CkeckIcon from '../../common/CkeckIcon';

import style from './style.scss';

class Body extends PureComponent {
  render() {
    const { isClosed } = this.props;
    return (
      <section className={style.vacancy}>
        {isClosed
          ? (
            <div>
              <CkeckIcon />
              <span>Вакансия закрыта, сотрудник нанят</span>
            </div>)
          : (
            <div>
              <SearchIcon />
              <span>Вакансия открыта, идет подбор кандидатов</span>
            </div>)}
      </section>
    );
  }
}

Body.propTypes = {
  isClosed: PropTypes.bool,
};
Body.defaultProps = {
  isClosed: true,
};

export default Body;
