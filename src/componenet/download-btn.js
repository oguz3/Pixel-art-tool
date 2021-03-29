import { connect } from 'react-redux';

function DownloadBtn(props) {
    const downloadBtn = () => {
        let downloadItem = document.createElement('a');
        downloadItem.href = props.imgdata;
        downloadItem.download = `image-${props.cellSize}.png`;//Cell size
        downloadItem.click();
    }

    return (
        <button className='Btn' onClick={() => downloadBtn()}>
            Download
        </button>
    );
}

const mapStateToProps = (state) => {
  return {
    imgdata: state.imgdata,
    cellSize: state.cellSize
  };
};

export default connect(mapStateToProps)(DownloadBtn);