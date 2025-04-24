import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    setGreeting(`Hello ${name}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Greet</button>

      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default App;
