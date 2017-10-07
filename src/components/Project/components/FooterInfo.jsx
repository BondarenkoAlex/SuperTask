import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class FooterInfo extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is VacancyFooterInfo*]</div>
    );
  }
}

FooterInfo.propTypes = {};
FooterInfo.defaultProps = {};

export default FooterInfo;
