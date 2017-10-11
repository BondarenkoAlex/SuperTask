/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Vacancy from '../Vacancy';

class VacancyList extends PureComponent {
  render() {
    const {
      vacancies,
      onDelete,
      onOpenClose,
    } = this.props;
    return (
      <div>
        {
          Object.keys(vacancies).map((key) => {
            const vacancy = vacancies[key];
            const {
              id,
              title,
              isClosed,
            } = vacancy;
            const onDeleteLoc = () => { onDelete(id); };
            const onOpenCloseLoc = () => { onOpenClose(id); };
            return (
              <Vacancy
                key={id}
                isClosed={isClosed}
                title={title}
                onOpenClose={onOpenCloseLoc}
                onDelete={onDeleteLoc}
              />
            );
          })
        }
      </div>
    );
  }
}

VacancyList.propTypes = {
  vacancies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
};
VacancyList.defaultProps = {};

export default VacancyList;
