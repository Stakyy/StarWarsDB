import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';

import DummySwapiService from '../../services/dummy-swapi-service';

import SwapiService from '../../services/swapi-service';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import './app.css';
export default class App extends Component {
  state = {
    selectedPerson: 1,
    hasError: false,
    swapiService: new SwapiService(),
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
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <PeoplePage />
            <StarshipsPage />
            <PlanetsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
