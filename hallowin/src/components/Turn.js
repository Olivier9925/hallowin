import React, { Component } from "react";
import Card from "./Card";

const styleBattleGround = {
	position: 'fixed',
	top: '20%',
	left: '35%',
	width: '30%',
	height: "50%",
	display: "flex",
	flexDirection: "row"
}
const stylePlayerCard = {
	position: 'relative',
	width: "50%",
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
				<div style = {stylePlayerCard}>
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
				<div style = {stylePlayerCard}>
				{(playerCurrentCard.id > 0) && 
					<Card
						picture={playerCurrentCard.picture}
						name={playerCurrentCard.name}
						id={playerCurrentCard.id}
						level={playerCurrentCard.level}
						attack={playerCurrentCard.attack}
						defense={playerCurrentCard.defense}
						special={playerCurrentCard.special}
						style = {stylePlayerCard}/>}
				</div>
				
			</div>
		);
	}
}
export default Turn;
