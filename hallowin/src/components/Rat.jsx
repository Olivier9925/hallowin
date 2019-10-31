import React from "react";
import rat from "../graphics/rat.gif";
import "./rat.css";

function Rat(props) {
	const ratStyle = {
		position: "absolute",
		width: "800px",
		top: "200px",
		left: "0px"
	};

	return (
		<div>
			<div style={ratStyle}>
				<img src={rat} className={"slide-in-left"} />
			</div>
		</div>
	);
}

export default Rat;
