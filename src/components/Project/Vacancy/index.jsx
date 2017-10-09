import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import SideButtons from '../components/SideButtons';
import Body from './Body';

import style from './style.scss';

class Vacancy extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <section className={style.sectionProject}>
        <header>
          <h4>Название первого вакансии</h4>
        </header>
        <Body isClosed={true} />
        <SideButtons
          data={{}}
          onDelete={() => {}}
          onClick={() => {}}
        >
          Закрыть вакансию
        </SideButtons>
      </section>
    );
  }
}

Vacancy.propTypes = {};
Vacancy.defaultProps = {};

export default Vacancy;
