import React from "react";
import Board from "./Board";
import "../App.css";
import shieldStart from "../graphics/shield_start.png";

function App(props) {
	const buttonStartStyle = {
		width: "100vw",
		height: "100vh",
		position: `absolute`,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "stretch",
		alignContent: "center"
	};
	const shieldStyle = {
		height: "75vh",
		width: "auto",
		cursor: "pointer"
	};
	return (
		<div>
			<div style={buttonStartStyle}>
				<img src={shieldStart} style={shieldStyle} onClick={() => props.start()} />
			</div>
			<Board startDisplay={true} />
		</div>
	);
}

export default App;
