import React, { Component } from 'react';
import './index.scss';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import AppHeader from './components/header/AppHeader';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
