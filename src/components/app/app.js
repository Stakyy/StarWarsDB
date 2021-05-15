import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import ItemDetails from '../item-details';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';
// import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList,
} from '../sw-components';

export default class App extends Component {
  state = {
    selectedPerson: 1,
    hasError: false,
  };
  swapiService = new SwapiService();
  render() {
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth Year" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            {/* <PeoplePage /> */}

            <Row left={<PersonList />} right={<PersonDetails itemId={10} />} />

            <Row left={<StarshipList />} right={<StarshipDetails itemId={5} />} />

            <Row left={<PlanetList />} right={<PlanetDetails itemId={3} />} />

            {/* <PersonDetails/> */}

            {/* <ItemList getData={this.swapiService.getAllPeople}>
          {({ name }) => <span>{name}</span>}
        </ItemList>
        <ItemList getData={this.swapiService.getAllPlanets}>
          {({ name }) => <span>{name}</span>}
        </ItemList> */}

            {/* <ItemDetails personId={this.state.selectedPerson} /> */}

            {/* <div className="row mb2">
      <div className="col-md-6">
        <ItemList onItemSelected={() => {}} getData={this.swapiService.getAllStarships}>
          {({ name }) => <span>{name}</span>}
        </ItemList>
      </div>
      <div className="col-md-6">
        <ItemDetails personId={this.state.selectedPerson} />
      </div>
    </div> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
