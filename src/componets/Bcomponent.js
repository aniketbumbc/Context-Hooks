import React, { useContext } from 'react';
import Ccomponent from './Ccomponent';
import { userContext, CityContext } from '../App';

function Bcomponent() {
  const city = useContext(CityContext);
  const name = useContext(userContext);
  return (
    <div>
      <h1>
        B component:- {city} --- {name}
      </h1>
      <Ccomponent />
    </div>
  );
}

export default Bcomponent;
