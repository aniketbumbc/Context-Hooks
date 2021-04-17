import React from 'react';
import './App.css';
import Acomponent from './componets/Acomponent';

export const userContext = React.createContext();
export const CityContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <userContext.Provider value={'Bunny'}>
        <CityContext.Provider value={'paris'}>
          <Acomponent />
        </CityContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
