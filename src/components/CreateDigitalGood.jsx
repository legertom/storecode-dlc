import React, { useState } from 'react';
import axios from 'axios';

const CreateDigitalGood = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const digitalGoodData = {
      title,
      description,
      price,
      imageUrl,
    };

    try {
      await axios.post('/api/digital-goods/new', digitalGoodData);
      alert('Digital good created successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    } catch (error) {
      console.error(error);
      alert('Error creating digital good.');
    }
  };

  return (
    <div>
      <h1>Create a New Digital Good</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Create Digital Good</button>
      </form>
    </div>
  );
};

export default CreateDigitalGood;
