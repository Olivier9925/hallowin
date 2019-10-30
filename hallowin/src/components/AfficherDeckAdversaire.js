import React from "react";
import Card from "./Card";
import { RandomTab } from "./Helpers";
import card_back from "../graphics/card_back.jpg";

function AfficherDeckAdversaire({ computerStack }) {
	computerStack = RandomTab(computerStack);

	let hands = [];
	for (let i = 0; i < Math.min(5, computerStack.length); i++) {
		hands[i] = computerStack[i];
	}

	//console.log(hand[4]["name"]);
	//console.log(hands);
	const deckStyle = {
		backgroundColor: "rgb(0,0,0,0.2)",
		padding: "10px",
		borderRadius: "20px",
		overflow: "hidden",
		margin: "0 auto",
		width: "30vw",
		display: `flex`,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		alignItems: "baseline",
		position: "fixed",
		top: "5%",

	};

	const cardStyle = {
		width: "80px",
		height: "auto",
		margin: "2px"
	};

	return (
		<div style={deckStyle}>
			{hands.map(() => (
				<img src={card_back} style={cardStyle} />
			))}
		</div>
	);
}
export default AfficherDeckAdversaire;
