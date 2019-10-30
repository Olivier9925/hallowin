import React from "react";
import axios from "axios";
import AfficherDeck from "./AfficherDeck";

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			playerStack: [],
			computerStack: []
		};
		this.getMonster = this.getMonster.bind(this);
	}

	getMonster() {
		axios.get("https://hackathon-wild-hackoween.herokuapp.com/monsters").then(({ data }) => {
			//console.log(data);
			//console.log(data);
			this.setState({
				playerStack: data.monsters,
				computerStack: data.monsters
			});
		});
	}
	componentDidMount() {
		this.getMonster();
	}
	render() {
		return (
			<div>
				<AfficherDeck playerStack={this.state.playerStack} />
			</div>
		);
	}
}

export default Game;
