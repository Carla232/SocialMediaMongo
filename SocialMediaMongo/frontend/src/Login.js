import React, { useState } from 'react';

const Login = () => {
  const [nume, setnume] = useState('');
  const [parola, setparola] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nume, parola }),
      });
      const data = await response.json();
      // Gestionează răspunsul și stocarea token-ului (dacă este cazul)
    } catch (error) {
      // Gestionează erorile de autentificare
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nume de utilizator"
        value={nume}
        onChange={(e) => setnume(e.target.value)}
      />
      <input
        type="parola"
        placeholder="Parolă"
        value={parola}
        onChange={(e) => setparola(e.target.value)}
      />
      <button onClick={handleLogin}>Logare</button>
    </div>
  );
};

export default Login;