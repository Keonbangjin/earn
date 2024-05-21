import React, { useState } from 'react';

const AddSofa = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [sizes, setSizes] = useState('');
  const [colors, setColors] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSofa = {
      name,
      price,
      description,
      sizes: sizes.split(',').map(size => size.trim()),
      colors: colors.split(',').map(color => color.trim()),
      image,
    };

    fetch('http://localhost:3000/sofas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSofa),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setName('');
        setPrice('');
        setDescription('');
        setSizes('');
        setColors('');
        setImage('');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Sofa</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Sizes (comma separated):
        <input
          type="text"
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
          required
        />
      </label>
      <label>
        Colors (comma separated):
        <input
          type="text"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Sofa</button>
    </form>
  );
};

export default AddSofa;
