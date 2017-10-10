/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

import Vacancy from '../components/Vacancy';

class VacancyListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  onOpenClose(id) {
    debugger;
  }

  onDelete(id) {
    debugger;
  }

  render() {
    const { vacancies } = this.props;
    return ([
      Object.keys(vacancies).map((key) => {
        const {
          id,
          title,
          isClosed,
        } = vacancies[key];
        const onDelete = () => { this.onDelete(id); };
        const onOpenClose = () => { this.onOpenClose(id); };
        return (
          <Vacancy
            key={id}
            isClosed={isClosed}
            title={title}
            onOpenClose={onOpenClose}
            onDelete={onDelete}
          />
        );
      }),
    ]);
  }
}

VacancyListContainer.propTypes = {
  vacancies: PropTypes.array.isRequired,
};
VacancyListContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(VacancyListContainer);
