import React from "react";
import Card from "./Card";

let hand = [];

function AfficherDeck(props) {
	for (let i = 0; i < 5; i++) {
		hand.push(props.playerStack[i]);
	}

	return (
		<div>
			{hand.map((item) => (
				<Card
					picture={item.picture}
					name={item.name}
					id={item.id}
					level={item.level}
					attack={item.attack}
					defense={item.defense}
					special={item.special}
					key={item.name + item.id}
				/>
			))}
		</div>
	);
}
export default AfficherDeck;
