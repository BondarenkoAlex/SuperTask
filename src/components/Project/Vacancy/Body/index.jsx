import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

// import checkIcon from './img/checkIcon@3x.png';
// import searchIcon from './img/searchIcon@3x.png';
import SearchIcon from '../../../components/SearchIcon';
import CkeckIcon from '../../../components/CkeckIcon';

import style from './style.scss';

class Body extends PureComponent {
  render() {
    const { isClosed } = this.props;
    return (
      <article className={style.vacancy}>
        {{
          true: (
            <div>
              <CkeckIcon />
              <span>Вакансия закрыта, сотрудник нанят</span>
            </div>),
          false: (
            <div>
              <SearchIcon />
              <span>Вакансия открыта, идет подбор кандидатов</span>
            </div>),
        }[isClosed]}
      </article>
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
