import React from 'react';
import { userContext, CityContext, CountryContext } from '../App';

function Ccomponent() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <CityContext.Consumer>
              {(city) => {
                return (
                  <CountryContext.Consumer>
                    {(country) => {
                      return (
                        <div>
                          <h3>Context Name {user}</h3>
                          <br />
                          <h4>City {city}</h4>
                          <h5 style={{ color: 'green' }}>{country}</h5>
                        </div>
                      );
                    }}
                  </CountryContext.Consumer>
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
