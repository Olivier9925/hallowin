import React, { Component } from "react";
import Card from "./Card";

const styleBattleGround = {
	position: 'fixed',
	top: '20%',
	left: '35%',
	width: '30%',
	height: "30%",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-around"
}
const stylePlayerCard = {
	position: 'relative',
	width: "45%",
	height: '90%',
}
class Turn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
	const {computerCurrentCard, playerCurrentCard} = this.props
		return (
			<div id="battle" style={styleBattleGround}>
				<div style = {{...stylePlayerCard , alignSelf: "flex-end", zIndex: "5"}}>
				{(playerCurrentCard.id > 0) && 
					<Card
						picture={playerCurrentCard.picture}
						name={playerCurrentCard.name}
						id={playerCurrentCard.id}
						level={playerCurrentCard.level}
						attack={playerCurrentCard.attack}
						defense={playerCurrentCard.defense}
						special={playerCurrentCard.special}
						/>}
				</div>
				<div style = {{...stylePlayerCard, alignSelf: "flex-start"}}>
					{(computerCurrentCard && computerCurrentCard.id > 0) && 
					<Card
						picture={computerCurrentCard.picture}
						name={computerCurrentCard.name}
						id={computerCurrentCard.id}
						level={computerCurrentCard.level}
						attack={computerCurrentCard.attack}
						defense={computerCurrentCard.defense}
						special={computerCurrentCard.special}
						/>}
				</div>
				
			</div>
		);
	}
}
export default Turn;
