import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Body from './Body/index';
import SideButtons from '../components/SideButtons';

import style from './style.scss';

class ProjectHeader extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    const {
      data,
      onAdd,
      onDelete,
      onProject,
    } = this.props;
    return (
      <section className={style.sectionProject}>
        <header>
          <h2>Очень-очень длинное название третьего проекта, которое переносится на две строки</h2>
        </header>
        <Body
          data={data}
          onAdd={() => {}}
        />
        <SideButtons
          data={data}
          onDelete={() => {}}
          onClick={() => {}}
        >
          Закрыть проект
        </SideButtons>
      </section>
    );
  }
}

ProjectHeader.propTypes = {};
ProjectHeader.defaultProps = {
  data: {},
};

export default ProjectHeader;
