
import './App.css';
import Part from './part.js';

function App({ parts }) {
    const partsList = [];
    for (let i = 0; i < parts.length; i++) {
        partsList.push(Part(parts[i]));
    }
  return (
    <div className="part">
          {partsList}
    </div>
  );
}

export default App;
