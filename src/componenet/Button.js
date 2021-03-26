import { connect } from 'react-redux';
import { setItem, setGrid } from '../actions/index';
import Pencil from '../icons/pencil';
import Eraser from '../icons/eraser';
import Grid from '../icons/grid';
import styles from './Button.module.css';

function Button(props){

  const clickBtn = () => {
    props.setItem(props.type)
    if(props.type === 'grid'){
      props.setGrid(!props.hiddenGrid)
    }
  }

  const icon = () => {
    if(props.type === 'pencil'){
      return <Pencil />
    }else if(props.type === 'eraser'){
      return <Eraser />
    }else if(props.type === 'grid'){
      return <Grid />
    }
  }

  return(
    <button 
      className={`${styles.Button} ${props.activeItem === props.type ? 'ActiveBtn' : null}`}
      onClick={() => clickBtn()}
    >
        {icon()}
        {props.children}
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
      activeItem: state.activeItem,
      hiddenGrid: state.hiddenGrid,
  };
};

export default connect(mapStateToProps, { setItem, setGrid })(Button);