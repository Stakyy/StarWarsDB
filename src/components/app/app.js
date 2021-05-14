import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
  state = {
    selectedPerson: 1,
    hasError: false,
  };
  swapiService = new SwapiService();
  render() {
    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={({ name, diameter }) => (
                <span>
                  {name} <button>{diameter}</button>
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={({ name, model }) => `${name} (${model})`}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}
      </div>
    );
  }
}
