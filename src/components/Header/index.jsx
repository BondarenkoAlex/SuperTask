import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is Header*]</div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
