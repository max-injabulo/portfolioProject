import AvailableItemsList from "./AvailableItemsList";
import { ITEMS } from './ITEMS';
import React, { useState } from 'react'
import { render } from 'react-dom'


function App() {
  return (
    <div>
      <h1>Available/Free Items</h1>
      {ITEMS.map( item => <AvailableItemsList item={item}/>)}
    </div>
  );
}

export default App;

