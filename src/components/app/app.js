import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import './app.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log('switched ', Service.name);
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />{' '}
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} exact />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route
                  path="/planets/:id"
                  render={({ match }) => {
                    const { id } = match.params;

                    return <PlanetDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;

                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn} />}
                />
                <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
