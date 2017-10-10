import React from 'react';
import PropTypes from 'prop-types';

import './style/font.scss';
import './style/main.scss';
import style from './style.scss';

import HeaderContainer from '../containers/HeaderContainer';
import ProjectListContainer from '../containers/ProjectListContainer';
import Project from './Project';
import Modal from './Modal';
import DialogWindow from './components/DialogWindow';

function App() {
  return (
    <div className={style.project}>
      <h1>Список проектов</h1>
      <HeaderContainer />
      <ProjectListContainer />
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;

/*

      <Project />
      <Project />
   <Modal>
        <DialogWindow
          title="Привет"
        />
      </Modal>

*/
