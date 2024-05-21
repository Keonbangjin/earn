import React, { useEffect, useState } from 'react';

const SofaCard = () => {
  const [sofas, setSofas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/sofas')
      .then((response) => response.json())
      .then((data) => setSofas(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/sofas/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setSofas(sofas.filter((sofa) => sofa.id !== id));
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      {sofas.map((sofa) => (
        <div key={sofa.id} className="sofa-card">
          <img src={sofa.image} alt={sofa.name} />
          <h2>name:{sofa.name}</h2>
          <p>Price: {sofa.price}</p>
          <p>Desciption: {sofa.description}</p>
          <div>
            <span>Sizes: {sofa.sizes.join(', ')}</span>
          </div>
          <div>
            <span>Colors: {sofa.colors.join(', ')}</span>
          </div>
          <button onClick={() => handleDelete(sofa.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SofaCard;
