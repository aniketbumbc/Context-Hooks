import React, { useContext } from 'react';
import Ccomponent from './Ccomponent';
import { userContext, CityContext, CountryContext } from '../App';

function Bcomponent() {
  const city = useContext(CityContext);
  const name = useContext(userContext);
  const country = useContext(CountryContext);
  return (
    <div>
      <h1>
        B component:- {city} --- {name}
      </h1>

      <h4 style={{ color: 'red' }}>{country}</h4>
      <Ccomponent />
    </div>
  );
}

export default Bcomponent;
