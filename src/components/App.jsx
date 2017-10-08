import React from 'react';
import PropTypes from 'prop-types';

import './font.scss';
import ButtonFull from './components/ButtonFull';
import ButtonOutline from './components/ButtonOutline';
import Checkbox from './components/Checkbox';
import InputText from './components/InputText';
import ButtonClose from './components/ButtonClose';

function App() {
  return (
    <div>
      <div>
        Hello
      </div>
      <ButtonFull
        onClick={() => {}}
      >
        КНОПКА
      </ButtonFull>

      <ButtonOutline
        onClick={() => {}}
      >
        КНОПКА
      </ButtonOutline>

      <Checkbox
        onClick={() => {}}
      >
        КНОПКА
      </Checkbox>
      <InputText
        onChange={() => {}}
        value="Hello"
      />
      <ButtonClose/>
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;
