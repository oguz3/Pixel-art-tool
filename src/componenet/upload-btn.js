import { connect } from 'react-redux';
import { setUploadImg, setIsUpload } from '../actions';

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
        <input type="file" name="file" onChange={changeHandler} />
    );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setUploadImg, setIsUpload })(UploadBtn);