import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../../components/components/SearchIcon';
import CkeckIcon from '../../../components/components/CkeckIcon';

import style from './style.scss';

class Body extends PureComponent {
  render() {
    const { isClosed } = this.props;
    return (
      <section className={style.vacancy}>
        {{
          false: (
            <div>
              <SearchIcon />
              <span>Вакансия открыта, идет подбор кандидатов</span>
            </div>),
          true: (
            <div>
              <CkeckIcon />
              <span>Вакансия закрыта, сотрудник нанят</span>
            </div>),
        }[isClosed]}
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
