import React from 'react';
import PropTypes from 'prop-types';

import ButtonFull from './components/ButtonFull';

function App() {
  return (
    <div>
      <div>
        Hello
      </div>
      <ButtonFull
        onClick={() => {}}
      >
        Кнопка
      </ButtonFull>
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;
