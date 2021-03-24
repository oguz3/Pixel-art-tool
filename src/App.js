import { useState } from 'react';
import Canvas from './componenet/Canvas';
import styles from './style/App.module.css';
import Pencil from './icons/pencil';
import Eraser from './icons/eraser';

function App() {
  const [row, setRow] = useState(50)
  const [coll, setColl] = useState(50)
  return (
    <div className={styles.App}>
        <div className={styles.InputBox}>
          <div className={styles.Input}>
            <label>Width: </label>
            <input value={row} onChange={event => setRow(event.target.value)} />
          </div>
          <div className={styles.Input}>
            <label>Height: </label>
            <input value={coll} onChange={event => setColl(event.target.value)} />
          </div>
          <Pencil />
          <Eraser />
        </div>

        <div className={styles.CanvasBox}>
          <Canvas row={row} coll={coll}/>
        </div>

        <div className={styles.iconsBox}>
          <div>Icons made by <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed">pongsakornRed</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </div>
  );
}

export default App;