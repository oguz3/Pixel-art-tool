import { connect } from 'react-redux';
import Canvas from './componenet/Canvas';
import InputBox from './componenet/input-box';
import Button from './componenet/Button';
import DownloadBtn from './componenet/download-btn';
import UploadBtn from './componenet/upload-btn';
import styles from './style/App.module.css';

function App(props) {
  return (
    <div className={styles.App}>
      <h1>Pixel Art</h1>
      <div className={styles.Grid}>
        <div className={styles.InputArea}>
            <InputBox />
            <div className={styles.BtnBox}>
                <Button type="pencil"/>
                <Button type="eraser"/>
                <Button type="grid"/>
            </div>
            <DownloadBtn />
            <UploadBtn />
          </div>
          <div className={styles.CanvasArea}>
            <div className={styles.CanvasBox}>
              <Canvas/>
            </div>
          </div>
          <div className={styles.AnimationArea}>
              <img src={props.imgdata} className={styles.PreviewImg}/>
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
      imgdata: state.imgdata
  };
};

export default connect(mapStateToProps)(App);