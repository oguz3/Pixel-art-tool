import { connect } from 'react-redux';
import { setUploadImg, setIsUpload } from '../actions';
import styles from './upload-btn.module.css'

function UploadBtn(props) {
    const changeHandler = (e) => {
        const file = [...e.target.files].pop();
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = e => {
        props.setUploadImg(e.target.result);
        props.setIsUpload(true);
        };
    };

    return (
        <span className={styles.box}>
            <button className='Btn'>Upload</button>
            <input className={styles.input} type="file" name="file" onChange={changeHandler} />
        </span>
    );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setUploadImg, setIsUpload })(UploadBtn);