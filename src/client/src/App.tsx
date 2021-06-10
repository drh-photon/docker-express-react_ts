import React from 'react';
import './App.css';

//Components
import Header from './components/Header'
import Customers from './components/Customers'


const App: React.FC = () => {
  return (
    <div>
      <Header title="Typescript Test Environment" />
      <Customers />
    </div>
  );
}

export default App;