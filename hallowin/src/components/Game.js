import React from "react";
import axios from "axios";
import AfficherDeck from "./AfficherDeck";
import AfficherDeckAdversaire from "./AfficherDeckAdversaire";
import Lose from "./Lose";
import Win from "./Win";
import { RandomTab } from "./Helpers";
import '../App.css'
import HealthPoints from './HealthPoints'

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			playerStack: [],
			playerHands: [],
			computerStack: [],
			playerCurrentCard: null,
			computerCurrentCard: null,
			playerLifePoints: 15,
			computerLifePoints: 15,
			win: false,
			lose: true,
			playerTurn: false
		};
		this.getMonster = this.getMonster.bind(this);
		this.battle = this.battle.bind(this);
		this.selectPlayerCard = this.selectPlayerCard.bind(this);
		this.selectComputerCard = this.selectComputerCard.bind(this);
	}
	getMonster() {
		axios.get("https://hackathon-wild-hackoween.herokuapp.com/monsters").then(({ data }) => {
			let playerStack = RandomTab(data.monsters);
			let playerHands = playerStack.splice(0, 5);
			let computerStack = data.monsters;
			let computerHands = playerStack.splice(0, 1);

			this.setState({
				playerStack: playerStack,
				playerHands: playerHands,
				computerStack: computerStack,
				computerHands: computerHands
			});
		});
	}

	selectPlayerCard(card) {
		this.setState({ playerCurrentCard: card, playerTurn: !this.state.playerTurn });
	}

	selectComputerCard = (card) => {
		this.setState({ computerCurrentCard: card, playerTurn: !this.state.playerTurn });
	};

	componentDidMount() {
		this.getMonster();
		this.selectComputerCard();
	}

	battle() {
		const { playerCurrentCard } = this.state.playerCurrentCard;
		const { computerCurrentCard } = this.state.computerCurrentCard;

		if (playerCurrentCard.attack > computerCurrentCard.defense) {
			this.setState({
				computerLifePoints:
					this.state.computerLifePoints - (playerCurrentCard.attack - computerCurrentCard.defense)
			});
			if (this.state.computerLifePoints <= 0) {
				this.setState({ win: true });
			}
		}
		if (computerCurrentCard.attack > playerCurrentCard.defense) {
			this.setState({
				playerLifePoints:
					this.state.playerLifePoints - (computerCurrentCard.attack - playerCurrentCard.defense)
			});
			if (this.state.playerLifePoints <= 0) {
				this.setState({ lose: true });
			}
		}
	}

	render() {
		const containerStyle = {
			height: "100vh",
			width: "100vw",
			backgroundColor: "transparent",
			display: "flex",
			flexDirection: "column",
			flexWrap: "nowrap",
			justifyContent: "space-between",
			alignItems: "center",
			alignContent: "stretch"
		};
		return (
			<div style={containerStyle}>
				<AfficherDeckAdversaire computerStack={this.state.computerStack} />
				<AfficherDeck
					hands={this.state.playerHands}
					computerHands={this.state.computerHands}
					selectPlayerCard={this.selectPlayerCard}
					selectComputerCard={this.selectComputerCard}
				/>

                <HealthPoints playerLifePoints={this.state.playerLifePoints} computerLifePoints={this.state.computerLifePoints} />
				{this.state.lose && <Lose lose={this.state.lose} />}
				{this.state.win && <Win win={this.state.win} />}
			</div>
		);
	}
}

export default Game;
