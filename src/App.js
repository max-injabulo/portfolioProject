import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './itemsSlice';
import AvailableItemsList from './AvailableItemsList';

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
    <div>
      <h1>Available/Free Items</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <AvailableItemsList key={item.id} item={item} onDelete={() => handleDelete(item.id)} />
        ))
      ) : (
        <p>No available items</p>
      )}

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
