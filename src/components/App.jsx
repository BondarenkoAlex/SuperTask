import React from 'react';
import PropTypes from 'prop-types';

import './style/font.scss';
import './style/main.scss';
import style from './style.scss';

import Header from './Header';
import Project from './Project';

function App() {
  return (
    <div className={style.project}>
      <h1>Список проектов</h1>
      <Header />
      <Project />
      <Project />
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;
