import { useEffect, useState } from "react";
import InfoRow from "../InfoRow/InfoRow";
import styles from "./InfoTable.module.scss";

const templateRow = {
	id: 1,
	win: true,
	pn: 0,
	r: "n/a",
};

const startingOptions = [
	"bad pass",
	"serve ace",
	"serve fault",
	"serve out",
	"downball",
	"campfire",
	"double touch",
	"four touches",
	"net fault",
	"foot fault",
	"attack fault",
	"rotation fault",
];

function InfoTable(props) {
	const [childRows, setChildren] = useState([{ ...templateRow }]);
	const [reasons, setReasons] = useState(startingOptions);

	const addReason = () => {
		const newReason = prompt("Enter new reason:");
		setReasons([...reasons, newReason]);
	};

	const addTableRow = () => {
		setChildren([
			...childRows,
			{ ...templateRow, id: childRows.length + 1 },
		]);
	};

	const outputTable = () => {
		window.open(
			`mailto:connorturlan@gmail.com?subject=round%20breakdown&body=${JSON.stringify(
				childRows
			)}`
		);
	};

	const resetTable = () => {
		if (confirm("Are you sure you want to reset the table?"))
			setChildren([{ ...templateRow }]);
	};

	const children = childRows.map((row) => (
		<InfoRow key={row.id} obj={row} allReasons={reasons} />
	));

	return (
		<>
			<section className={styles.InfoControl}>
				<button onClick={addTableRow}>Add Row</button>
				<button onClick={outputTable}>Share</button>
				<button onClick={resetTable}>Reset</button>
				<button onClick={addReason}>Add New Reason</button>
			</section>
			<section className={styles.InfoTable}>
				<h3 className={styles.InfoTitle}>#</h3>
				<h3 className={styles.InfoTitle}>win</h3>
				<h3 className={styles.InfoTitle}>player #</h3>
				<h3 className={styles.InfoTitle}>reason</h3>
				{children}
			</section>
		</>
	);
}

export default InfoTable;
