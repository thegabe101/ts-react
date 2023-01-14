import React from 'react';
import './App.css';
import {Person} from './components/Person';
import { useState } from 'react';
import { Country } from './components/Person';

//enums help to condense the number of options available

function App() {

  return (
    <div className="App">
      <Person name="John" email="john@gmail.com" age= {22} isMarried={true} friends={['John, Jacob, Mary, Annie']} country={Country.Brazil} profession={['Doctor, Programmer, Runner, Carer']}/>
    </div>
  );
}

export default App;
