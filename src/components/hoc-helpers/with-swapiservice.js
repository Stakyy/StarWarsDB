import React from 'react';
import { SwapiServiceCunsumer } from '../swapi-service-context';

const withSwapiservice = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceCunsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceCunsumer>
    );
  };
};

export default withSwapiservice;
