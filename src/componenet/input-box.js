import { connect } from "react-redux";
import { setRow, setColl, setColor } from "../actions";
import styles from "./input-box.module.css";

function InputBox(props) {
	return (
		<div className={styles.Box}>
			<div className={styles.Input}>
				<label>Width: </label>
				<input
					value={props.row}
					onChange={(event) => props.setRow(event.target.value)}
				/>
			</div>
			<div className={styles.Input}>
				<label>Height: </label>
				<input
					value={props.coll}
					onChange={(event) => props.setColl(event.target.value)}
				/>
			</div>
			<div className={`${styles.Input} colorPicker`}>
				<label>Color: </label>
				<input
					type="color"
					value={props.color}
					onChange={(event) => props.setColor(event.target.value)}
				/>
				<div
					className={styles.ColorPicker}
					style={{ backgroundColor: `${props.color}` }}
				></div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
        row: state.row,
        coll: state.coll,
        color: state.color,
    };
};

export default connect(mapStateToProps, { setRow, setColl, setColor })(InputBox);
