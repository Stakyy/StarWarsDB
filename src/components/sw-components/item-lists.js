import React from 'react';

import ItemList from '../item-list';

import { withData, withSwapiservice, withChildFunction, compose } from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = compose(
  withSwapiservice(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);

const StarshipList = compose(
  withSwapiservice(mapStarshipsMethodsToProps),
  withData,
  withChildFunction(renderModelAndName),
)(ItemList);
const PlanetList = compose(
  withSwapiservice(mapPlanetsMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);

export { PersonList, StarshipList, PlanetList };
