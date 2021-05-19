import React, { createContext } from 'react';
import './App.css';
import Acomponent from './componets/Acomponent';

export const userContext = React.createContext();
export const CityContext = React.createContext();
export const CountryContext = createContext();

function App() {
  return (
    <div className='App'>
      <userContext.Provider value={'Bunny'}>
        <CityContext.Provider value={'paris'}>
          <CountryContext.Provider value={'Germany'}>
            <Acomponent />
          </CountryContext.Provider>
        </CityContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
