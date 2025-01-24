import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.getElementById('root'));