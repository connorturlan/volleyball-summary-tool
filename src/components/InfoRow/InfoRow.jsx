import styles from "./InfoRow.module.scss";

function InfoRow({ obj }) {
	const handleChange = (e) => {
		const target = e.target.id;
		obj[target] = e.target.value;
	};

	return (
		<div className={styles.InfoRow}>
			<label>{obj.id}</label>
			<input
				onChange={handleChange}
				id="success"
				type="text"
				className={styles.success}
			/>
			<input
				onChange={handleChange}
				id="number"
				type="number"
				className={styles.playerNumber}
			/>
			<select
				id="reason"
				onChange={handleChange}
				className={styles.reason}
			>
				<option value="0">Miss-pass</option>
				<option value="1">Serve Ace</option>
				<option value="2">Serve Fault</option>
				<option value="3">Serve Out</option>
				<option value="4">Downball</option>
				<option value="5">Campfire</option>
				<option value="6">Double Touch</option>
				<option value="7">Four Touches</option>
				<option value="8">Net Fault</option>
				<option value="9">Foot Fault</option>
				<option value="10">Attack Fault</option>
				<option value="11">Rotation Fault</option>
			</select>
		</div>
	);
}

export default InfoRow;
