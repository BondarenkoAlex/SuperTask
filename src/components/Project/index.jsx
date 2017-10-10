/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Header from './Header';
import VacancyListContainer from '../../containers/VacancyListContainer';
import style from './style.scss';

class Project extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    const {
      vacancies,
      isClosed,
      title,
      onAdd,
      onDelete,
      onOpenClose,
    } = this.props;
    return (
      <article className={style.project}>
        <Header
          title={title}
          count={vacancies.length}
          isClosed={isClosed}
          onAdd={onAdd}
          onDelete={onDelete}
          onOpenClose={onOpenClose}
        />
        <VacancyListContainer vacancies={vacancies} />
      </article>
    );
  }
}

Project.propTypes = {
  vacancies: PropTypes.array.isRequired,
  isClosed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
};
Project.defaultProps = {};

export default Project;
