import React from 'react';
import './App.css';
import Part from './components/part.js';

function App({ parts }) {
    
    
    const partList = parts.map( data => <Part part={data} /> );
    
  return (
    <div className="parts">
          {partList}
    </div>
  );
}

export default App;
