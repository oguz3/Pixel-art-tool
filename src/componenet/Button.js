import { connect } from 'react-redux';
import { setItem } from '../actions/index';
import Pencil from '../icons/pencil';
import Eraser from '../icons/eraser';
import styles from './Button.module.css';

function Button(props){
  return(
    <button 
      className={`${styles.Button} ${props.activeItem === props.type ? 'ActiveBtn' : null}`}
      onClick={() => {props.setItem(props.type)}}
    >
        {props.type === 'pencil'
            ? <Pencil />
            : <Eraser />
        }
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
      activeItem: state.activeItem,
  };
};

export default connect(mapStateToProps, { setItem })(Button);