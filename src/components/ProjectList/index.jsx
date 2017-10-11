/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProjectContainer from '../../containers/ProjectContainer';

import './style.scss';

class ProjectList extends PureComponent {
  render() {
    const {
      projects,
      vacancies,
      onAdd,
      onDelete,
      onOpenClose,
      onClickHeader,
    } = this.props;

    return (
      <div>
        {Object.keys(projects).map((key) => {
          const {
            id,
            title,
            isClosed,
            items,
          } = projects[key];
          const vacs = items.map(k => vacancies[k]);
          const onAddLoc = () => { onAdd(id); };
          const onDeleteLoc = () => { onDelete(id); };
          const onOpenCloseLoc = () => { onOpenClose(id); };
          return (
            <ProjectContainer
              key={id}
              vacancies={vacs}
              isClosed={isClosed}
              title={title}
              onAdd={onAddLoc}
              onDelete={onDeleteLoc}
              onOpenClose={onOpenCloseLoc}
              onClickHeader={onClickHeader}
            />
          );
        })}

      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.object.isRequired,
  vacancies: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
  onClickHeader: PropTypes.func.isRequired,
};
ProjectList.defaultProps = {};

export default ProjectList;

