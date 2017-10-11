/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Body from './Body/index';
import SideButtons from '../../common/SideButtons';

import style from './style.scss';

class ProjectHeader extends PureComponent {
  render() {
    const {
      title,
      count,
      isClosed,
      onAdd,
      onDelete,
      onOpenClose,
      onClickHeader,
    } = this.props;
    return (
      <section className={style.sectionProject}>
        <header onClick={onClickHeader}>
          <h2>{title}</h2>
        </header>
        <Body
          count={count}
          isClosed={isClosed}
          onAdd={onAdd}
        />
        <SideButtons
          onDelete={onDelete}
          onClick={onOpenClose}
        >
          {{
            false: 'Закрыть проект',
            true: 'Открыть проект',
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
  onClickHeader: PropTypes.func.isRequired,
};
ProjectHeader.defaultProps = {};

export default ProjectHeader;
