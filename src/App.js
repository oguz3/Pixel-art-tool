import { connect } from 'react-redux';
import { setRow, setColl, setColor } from './actions';
import Canvas from './componenet/Canvas';
import styles from './style/App.module.css';
import Button from './componenet/Button';

function App(props) {
  return (
    <div className={styles.App}>
      <h1>Pixel Art</h1>
      <div className={styles.Grid}>
        <div className={styles.InputBox}>
            <div className={styles.Input}>
              <label>Width: </label>
              <input value={props.row} onChange={event => props.setRow(event.target.value)} />
            </div>
            <div className={styles.Input}>
              <label>Height: </label>
              <input value={props.coll} onChange={event => props.setColl(event.target.value)} />
            </div>
            <div className={`${styles.Input} colorPicker`}>
              <label>Color: </label>
              <input type="color" value={props.color} onChange={event => props.setColor(event.target.value)} />
              <div className={styles.ColorPicker} style={{backgroundColor: `${props.color}`}}></div>
            </div>
            <div className={styles.BtnBox}>
                <Button type="pencil"/>
                <Button type="eraser"/>
                <Button type="grid"/>
            </div>
          </div>

          <div className={styles.CanvasArea}>
            <div className={styles.CanvasBox}>
              <Canvas/>
            </div>
          </div>

          <div className={styles.iconsBox}>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed">pongsakornRed</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      row: state.row,
      coll: state.coll,
      color: state.color,
      canvasToCode: state.canvasToCode
  };
};

export default connect(mapStateToProps, { setRow, setColl, setColor })(App);