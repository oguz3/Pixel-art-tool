import { useState } from 'react';
import Canvas from './componenet/Canvas';
import './style/App.css';

function App() {
  const [row, setRow] = useState(4)
  const [coll, setColl] = useState(4)
  return (
    <div className="App">
        <input value={row} onChange={event => setRow(event.target.value)} />
        <input value={coll} onChange={event => setColl(event.target.value)} />
        <Canvas row={row} coll={coll}/>
    </div>
  );
}

export default App;