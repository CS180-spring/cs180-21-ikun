import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiTest = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    // Fetch all items
    axios.get('/playerList')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreate = () => {
    // Create a new item
    axios.post('/items', { name: newItem })  //CHANGE!!!
      .then((response) => {
        setItems([...items, response.data]);
        setNewItem('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (itemId) => {
    // Delete an item
    axios.delete(`/items/${itemId}`)   //CHANGE!!!
      .then((response) => {
        setItems(items.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>API Test</h2>

      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APItesting;