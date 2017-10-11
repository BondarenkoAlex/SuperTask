/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import VacancyListContainer from '../../containers/VacancyListContainer';
import style from './style.scss';

class Project extends PureComponent {
  render() {
    const {
      vacancies,
      isClosed,
      title,
      onAdd,
      onDelete,
      onOpenClose,
      isToogle,
      onClickHeader,
    } = this.props;
    const activeClass = isToogle
      ? 'active'
      : '';
    return (
      <article className={[style.project, activeClass].join(' ')}>
        <Header
          title={title}
          count={vacancies.length}
          isClosed={isClosed}
          onAdd={onAdd}
          onDelete={onDelete}
          onOpenClose={onOpenClose}
          onClickHeader={onClickHeader}
        />
        {isToogle && (
          <VacancyListContainer vacancies={vacancies} />
        )}
      </article>
    );
  }
}

Project.propTypes = {
  vacancies: PropTypes.array.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isToogle: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
  onClickHeader: PropTypes.func.isRequired,
};
Project.defaultProps = {};

export default Project;
