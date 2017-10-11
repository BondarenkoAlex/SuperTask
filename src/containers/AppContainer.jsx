import React, { Component } from 'react';
import autoBind from 'react-autobind';
import App from '../components/App/index';
import HeaderContainer from '../containers/HeaderContainer';
import ProjectListContainer from '../containers/ProjectListContainer';

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      searchValue: undefined,
      isOnlyOpen: false,
    };
  }

  onOnlyOpen(e) {
    const checked = e.target.checked;
    // const isOnlyOpen = this.state;
    this.updateState({ isOnlyOpen: checked });
  }

  onChangeSearch(e) {
    const value = e.target.value;
    this.updateState({ searchValue: value });
  }

  updateState(payload) {
    this.setState({
      ...this.state,
      ...payload,
    });
  }

  render() {
    const {
      searchValue,
      isOnlyOpen,
    } = this.state;
    return (
      <App>
        <HeaderContainer
          onOnlyOpen={this.onOnlyOpen}
          onChangeSearch={this.onChangeSearch}
          searchValue={searchValue}
          isOnlyOpen={isOnlyOpen}
        />
        <ProjectListContainer
          searchValue={searchValue}
          isOnlyOpen={isOnlyOpen}
        />
      </App>
    );
  }
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};

export default AppContainer;
