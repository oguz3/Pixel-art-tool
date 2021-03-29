import { connect } from 'react-redux';

function DownloadBtn(props) {
    const downloadBtn = () => {
        let downloadItem = document.createElement('a');
        downloadItem.href = props.imgdata;
        downloadItem.download = 'image.png';
        downloadItem.click();
    }

    return (
        <button onClick={() => downloadBtn()}>
            download
        </button>
    );
}

const mapStateToProps = (state) => {
  return {
    imgdata: state.imgdata,
  };
};

export default connect(mapStateToProps)(DownloadBtn);