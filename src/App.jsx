import { useState } from "react";
import InfoTable from "./components/InfoTable/InfoTable.jsx";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.app}>
			<h1 className={styles.app__title}>Volleyball Round Breakdown</h1>
			<InfoTable />
			<p className={styles.app__notice}>Made by Connor Turlan - 2023</p>
		</div>
	);
}

export default App;
