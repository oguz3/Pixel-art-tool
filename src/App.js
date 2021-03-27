import { connect } from 'react-redux';
import { setRow, setColl, setColor, setUploadImg, setIsUpload } from './actions';
import Canvas from './componenet/Canvas';
import styles from './style/App.module.css';
import Button from './componenet/Button';

function App(props) {

  function downloadBtn () {
    let downloadItem = document.createElement('a');
    downloadItem.href = props.imgdata;
    downloadItem.download = 'image.png';
    downloadItem.click();
  }

  const changeHandler = (e) => {
    const file = [...e.target.files].pop();
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = e => {
      props.setUploadImg(e.target.result);
      props.setIsUpload(true);
      console.log(props.uploadImg)
      console.log(e.target.result)
    };
	};

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

            <button onClick={() => downloadBtn()}>
              download
            </button>

            <input type="file" name="file" onChange={changeHandler} />
             
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
      row: state.row,
      coll: state.coll,
      color: state.color,
      imgdata: state.imgdata,
      isUpload: state.isUpload,
      uploadImg: state.uploadImg,
  };
};

export default connect(mapStateToProps, { setRow, setColl, setColor, setUploadImg, setIsUpload })(App);