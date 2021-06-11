import React from 'react';
import './App.css';
import Textbox from './components/common/Textbox'

//Components
import Header from './components/common/Header'
import Customers from './components/Customers'
import Custo from './components/Custo'


const App: React.FC = () => {
  const title="Express / React Test Environment (Typescript)"
  return (
    <div>
      <Header title={ title } />
      <Customers />
      <Custo />
      <Textbox text='Textbox'/>
    </div>
  );
}

export default App;