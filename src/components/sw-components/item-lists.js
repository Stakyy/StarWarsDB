import React from 'react';

import ItemList from '../item-list';

import { withData, withSwapiservice } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

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

const ListWithChildren = withChildFunction(ItemList, ({ name }) => <span>{name}</span>);

const PersonList = withSwapiservice(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps,
);

const StarshipList = withSwapiservice(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipsMethodsToProps,
);

const PlanetList = withSwapiservice(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetsMethodsToProps,
);

export { PersonList, StarshipList, PlanetList };
