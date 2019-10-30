import React from "react";
import Card from "./Card";

function AfficherDeck({ playerStack, selectCard }) {
	console.log("rre", playerStack);
	let hands = [];
	for (let i = 0; i < Math.min(5, playerStack.length); i++) {
		hands[i] = playerStack[i];
	}

	//console.log(hand[4]["name"]);
	//console.log(hands);
	return (
		<div>
			{hands.map((item) => (
				<Card
					picture={item.picture}
					name={item.name}
					id={item.id}
					level={item.level}
					attack={item.attack}
					defense={item.defense}
					special={item.special}
					key={item.name + item.id}
					onClick={selectCard(item.id)}
				/>
			))}
		</div>
	);
}
export default AfficherDeck;
