import { useState } from 'react';
import Canvas from './componenet/Canvas';
import './style/App.css';

function App() {
  const [row, setRow] = useState(50)
  const [coll, setColl] = useState(30)
  return (
    <div className="App">
        <input value={row} onChange={event => setRow(event.target.value)} />
        <input value={coll} onChange={event => setColl(event.target.value)} />
        <div className={}>
          <Canvas row={row} coll={coll}/>
        </div>
    </div>
  );
}

export default App;