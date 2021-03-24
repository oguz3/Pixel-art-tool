import Pencil from '../icons/pencil';
import Eraser from '../icons/eraser';
import styles from './Button.module.css';
import { useState } from 'react';

function Button({type, activeItem, setActiveItem}){
  return(
    <button 
      className={`${styles.Button} ${activeItem === type ? 'ActiveBtn' : null}`}
      onClick={() => {setActiveItem(type); console.log(activeItem)}}
    >
        {type === 'pencil'
            ? <Pencil />
            : <Eraser />
        }
    </button>
  );
}

export default Button;