import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Body from './Body/index';
import SideButtons from '../../components/SideButtons';

import style from './style.scss';

class ProjectHeader extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    const {
      title,
      count,
      isClosed,
      onAdd,
      onDelete,
      onOpenClose,
    } = this.props;
    return (
      <section className={style.sectionProject}>
        <header>
          <h2>{title}</h2>
        </header>
        <Body
          count={count}
          onAdd={onAdd}
        />
        <SideButtons
          onDelete={onDelete}
          onClick={onOpenClose}
        >
          {{
            true: 'Закрыть проект',
            false: 'Открыть проект',
          }[isClosed]}
        </SideButtons>
      </section>
    );
  }
}

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isClosed: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
};
ProjectHeader.defaultProps = {};

export default ProjectHeader;
