import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Word Game App</h1>
      <p>This is a simple app to input nine letters and play the game.</p>
      <label htmlFor="letters">Enter nine letters:</label>
      <input type="text" id="letters" name="letters" maxLength="9" />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);