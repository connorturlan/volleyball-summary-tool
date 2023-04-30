import { useState } from "react";
import styles from "./InfoRow.module.scss";

function InfoRow({ obj, allReasons }) {
	const handleChange = (e) => {
		const target = e.target.id;
		obj[target] = e.target.value;
	};

	const options = allReasons.map((reason, i) => (
		<option value={`${i}:${reason}`}>{reason}</option>
	));

	return (
		<>
			<label className={`${styles.input} ${styles.pointNumber}`}>
				{obj.id}
			</label>
			<input
				onChange={handleChange}
				id="win"
				type="checkbox"
				className={`${styles.input} ${styles.success}`}
			/>
			<input
				onChange={handleChange}
				id="pn"
				type="number"
				className={`${styles.input} ${styles.playerNumber}`}
				min={0}
			/>
			<select
				id="r"
				onChange={handleChange}
				className={`${styles.input} ${styles.reason}`}
			>
				<option value="-1" defaultChecked>
					...
				</option>
				{options}
			</select>
		</>
	);
}

export default InfoRow;
