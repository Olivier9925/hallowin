import React from "react";
import Card from "./Card";

function AfficherDeck({ hands, selectPlayerCard }) {
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
		width: "95vw",
		display: `flex`,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		alignItems: "stretch",
		alignContent: "stretch",
		cursor: "pointer"
	};

	return (
		<div style={deckStyle}>
			{hands.map((item) => (
				<div onClick={() => selectPlayerCard(item)} key={item.id}>
					<Card
						picture={item.picture}
						name={item.name}
						id={item.id}
						level={item.level}
						attack={item.attack}
						defense={item.defense}
						special={item.special}
					/>
				</div>
			))}
		</div>
	);
}
export default AfficherDeck;
