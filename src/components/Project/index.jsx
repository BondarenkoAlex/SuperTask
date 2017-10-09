import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Header from './Header';
import Vacancy from './Vacancy';
import style from './style.scss';

class Project extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <article className={style.project}>
        <Header />
        <Vacancy />
        <Vacancy />
        <Vacancy />
      </article>
    );
  }
}

Project.propTypes = {};
Project.defaultProps = {};

export default Project;
