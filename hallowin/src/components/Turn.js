import React, { Component } from "react";

class Turn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				{console.log("computerHands = ", this.props.computerHands)}
				{console.log("playerCurrrentCard = ", this.props.playerCurrentCard)}
			</div>
		);
	}
}
export default Turn;
