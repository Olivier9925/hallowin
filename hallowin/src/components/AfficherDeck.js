import React from "react";
import Card from "./Card";
import { RandomTab } from "./Helpers";

function AfficherDeck({ playerStack }) {
	playerStack = RandomTab(playerStack);
	let hands = [];
	for (let i = 0; i < Math.min(5, playerStack.length); i++) {
		hands[i] = playerStack[i];
	}

	//console.log(hand[4]["name"]);
	//console.log(hands);
	const deckStyle = {
		position: "absolute",
		bottom: "0",
		backgroundColor: "rgb(0,0,0,0.2)",
		padding: "30px",
		borderRadius: "20px",
		overflow: "hidden",
		margin: "0",
		width: "80vw",
		display: `flex`,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		alignItems: "stretch",
		alignContent: "stretch"
	};

	return (
		<div style={deckStyle}>
			{hands.map((item) => (
				<Card
					picture={item.picture}
					name={item.name}
					id={item.id}
					level={item.level}
					attack={item.attack}
					defense={item.defense}
					special={item.special}
					key={item.id}
				/>
			))}
		</div>
	);
}
export default AfficherDeck;
