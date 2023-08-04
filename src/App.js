import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './itemsSlice';
import AvailableItemsList from './AvailableItemsList';
import { Container, Row, Col, Button } from 'reactstrap';

function App() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length,
      description,
      location,
    };
    dispatch(addItem(newItem));
    setDescription('');
    setLocation('');
  };

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div class="container" style={{ background: 'linear-gradient(135deg, #5156ae, #00ff00)' }}>

      <div class="row">
        <h1>Available/Free Items</h1>
      </div>
      <br />

      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
          <AvailableItemsList key={item.id} item={item} onDelete={() => handleDelete(item.id)} />
          <br />
          </div>
          ))
      ) : (
        <p>No Donated Items to Display</p>
      )}
        <h3>Add an item to donate:</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <button type="submit">Add Donation</button>
      </form>
    </div>
  );
}

export default App;
