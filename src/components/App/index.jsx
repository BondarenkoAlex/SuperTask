import React from 'react';
import PropTypes from 'prop-types';

import '../style/font.scss';
import '../style/main.scss';
import style from './style.scss';

function App(props) {
  const { children } = props;
  return (
    <div className={style.project}>
      <h1>Список проектов</h1>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};
App.defaultProps = {};

export default App;

