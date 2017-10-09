import React from 'react';
import PropTypes from 'prop-types';

import './style/font.scss';
import './style/main.scss';
import style from './style.scss';

import Header from './Header';
import Project from './Project';
import Modal from './Modal';
import DialogWindow from './components/DialogWindow';

function App() {
  return (
    <div className={style.project}>
      <h1>Список проектов</h1>
      <Header />
      <Project />
      <Project />
      <Modal>
        <DialogWindow
          title="Привет"
        />
      </Modal>
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;
