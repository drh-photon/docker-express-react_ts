import React from 'react';

import Customers from './components/Customers'
import './App.css';

function Header ({ title}: {title: string }){
  return <h1>{title}</h1>;
}



function App() {
  return (
    <div>
      <Header title="Typescript Test Environment"/>
      <Customers />
    </div>
  );
}

export default App;
