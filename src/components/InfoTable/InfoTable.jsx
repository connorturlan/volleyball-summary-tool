import { useEffect, useState } from "react";
import InfoRow from "../InfoRow/InfoRow";
import styles from "./InfoTable.module.scss";

const templateRow = {
	id: 0,
	success: true,
	playerNumber: 0,
	reason: "n/a",
};

function InfoTable(props) {
	const [childRows, setChildren] = useState([{ ...templateRow }]);

	const addTableRow = () => {
		setChildren([...childRows, { ...templateRow, id: childRows.length }]);
	};

	const outputTable = () => {
		console.log(childRows);
	};

	const children = childRows.map((row) => <InfoRow key={row.id} obj={row} />);

	return (
		<>
			<section className={styles.InfoTable}>{children}</section>
			<section className={styles.InfoControl}>
				<button onClick={addTableRow}>Add Row</button>
				<button onClick={outputTable}>Share</button>
			</section>
		</>
	);
}

export default InfoTable;
