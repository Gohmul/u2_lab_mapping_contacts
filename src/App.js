import React from 'react';
import './App.css';
import contacts from "./data/contacts.json"


function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <ul>
        {contacts.map((props) => {
          
        })}
      </ul>
    </div>
  );
}

export default App;
