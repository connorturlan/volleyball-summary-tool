import { useEffect, useState } from "react";
import InfoRow from "../InfoRow/InfoRow";
import styles from "./InfoTable.module.scss";

const templateRow = {
	id: 1,
	success: true,
	playerNumber: 0,
	reason: "n/a",
};

function InfoTable(props) {
	const [childRows, setChildren] = useState([{ ...templateRow }]);

	const addTableRow = () => {
		setChildren([
			...childRows,
			{ ...templateRow, id: childRows.length + 1 },
		]);
	};

	const outputTable = () => {
		console.log(childRows);
	};

	const resetTable = () => {
		setChildren([{ ...templateRow }]);
	};

	const children = childRows.map((row) => <InfoRow key={row.id} obj={row} />);

	return (
		<>
			<section className={styles.InfoControl}>
				<button onClick={addTableRow}>Add Row</button>
				<button onClick={outputTable}>Share</button>
				<button onClick={resetTable}>Reset</button>
			</section>
			<section className={styles.InfoTitle}>
				<h3>#</h3>
				<h3>win</h3>
				<h3>player #</h3>
				<h3>reason</h3>
			</section>
			<section className={styles.InfoTable}>{children}</section>
		</>
	);
}

export default InfoTable;
