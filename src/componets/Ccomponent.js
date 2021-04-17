import React from 'react';
import { userContext, CityContext } from '../App';

function Ccomponent() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <CityContext.Consumer>
              {(city) => {
                return (
                  <div>
                    <h3>Context Name {user}</h3>
                    <br />
                    <h4>City {city}</h4>
                  </div>
                );
              }}
            </CityContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default Ccomponent;
