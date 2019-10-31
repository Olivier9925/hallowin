import React from "react";
import Card from "./Card";

function AfficherDeck({ hands, selectPlayerCard , playerCurrentCard }) {
	//console.log(hand[4]["name"]);
	//console.log(hands);
	const deckStyle = {
		position: "absolute",
		bottom: "2vh",
		backgroundColor: "rgb(0,0,0,0.2)",
		padding: "30px",
		borderRadius: "20px",
		overflow: "hidden",
		margin: "0",
		width: "80vw",
		height: '35vh',
		display: `flex`,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "space-between",
		alignItems: "stretch",
		alignContent: "stretch",
		cursor: "pointer",
	};
	//console.log("hands = ", hands);
	return (
		<div style={deckStyle}>
			{hands.map((item) => (
				<div style={{width : "20vw"}} onClick={() => selectPlayerCard(item)} key={item.id}>
					{(playerCurrentCard.id !== item.id) &&<Card
						picture={item.picture}
						name={item.name}
						id={item.id}
						level={item.level}
						attack={item.attack}
						defense={item.defense}
						special={item.special}
					/>}
				</div>
			))}
		</div>
	);
}
export default AfficherDeck;
