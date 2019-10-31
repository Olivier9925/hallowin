import React from "react";
import axios from "axios";
import AfficherDeck from "./AfficherDeck";
import AfficherDeckAdversaire from "./AfficherDeckAdversaire";
import Lose from "./Lose";
import Win from "./Win";
import Board from "./Board";
import { RandomTab } from "./Helpers";
import "../App.css";
import HealthPoints from "./HealthPoints";
import Turn from "./Turn";
import blood from "../graphics/blood.png"

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			playerStack: [],
			playerHands: [],
			computerStack: [],
			playerCurrentCard: {id: 0},
			computerCurrentCard: {id:0},
			playerLifePoints: 15,
			computerLifePoints: 15,
			win: false,
			lose: false,
			playerTurn: false,
			countTurn: 1,
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
			let computerCurrentCard = playerStack[0];

			this.setState({
				playerStack: playerStack,
				playerHands: playerHands,
				computerStack: computerStack,
				computerCurrentCard: computerCurrentCard,
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
		const { playerCurrentCard, computerCurrentCard  } = this.state;
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
	
	pioche(){
		let { playerCurrentCard, playerStack, playerHands, 
			computerCurrentCard,  computerStack, 
			countTurn} = this.state;
		playerHands = playerHands.filter(e=> e.id !== playerCurrentCard.id);
		let nbCard = playerHands.push(playerStack[0]);
		let nvellepioche = playerStack.shift();
		console.log(playerHands);
		computerCurrentCard = computerStack[countTurn];
		this.setState({
		playerHands : playerHands,
		countTurn : countTurn ++,
		playerCurrentCard: {id:0},
		computerCurrentCard: computerCurrentCard,
		playerStack : playerStack,
		})
		console.log(countTurn)
	}
	fight(){
		this.battle()
		setTimeout(this.pioche(),2000)
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
				<Board />
				<AfficherDeckAdversaire computerStack={this.state.computerStack} />
				<Turn playerCurrentCard={this.state.playerCurrentCard} computerCurrentCard={this.state.computerCurrentCard} />
				<AfficherDeck
					hands={this.state.playerHands}
					computerHands={this.state.computerHands}
					selectPlayerCard={this.selectPlayerCard}
					selectComputerCard={this.selectComputerCard}
					playerCurrentCard={this.state.playerCurrentCard}
				/>

				<HealthPoints
					playerLifePoints={this.state.playerLifePoints}
					computerLifePoints={this.state.computerLifePoints}
				/>
				{(this.state.playerCurrentCard.id > 0) && 
				<button id="button-go" onClick ={(e) => this.fight(e)}style={{backgroundImage:`url(${blood})`}}> Attack</button>}
				{this.state.lose && <Lose />}
				{this.state.win && <Win />}
			</div>
		);
	}
}

export default Game;
