'use client';
import React, { useState } from 'react';
// import './assets/css/app.css';

function  LikeCard({ name }) {
  const [likes, setLikes] = useState(0); // Initial value 0

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like 👍</button>
      
      
    
  
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Like Button App</h1>
      <LikeCard name="Amrita Singh Rao" />
      <LikeCard name="Priya Sehgal" />
    </div>
  );
}

export default App;