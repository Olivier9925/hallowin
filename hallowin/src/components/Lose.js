import React, { Component } from "react";
import Modal from "react-responsive-modal";
import YouDied from "./Images/youdied.jpg";
import "../App.css";

const style = {
	fontFamily: "Madjoe",
	textAlign: 'center'
}

class Lose extends Component {
	constructor({ lose }) {
		super({ lose } )
	state = {
		open: false
	};
}

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		const { open } = this.state;
		lose ? onOpenModal : ''
		return (
			<div>
				<Modal open={open} onClose={this.onCloseModal} center>
					<h2 style={style}>YOU DIED!</h2>
					<img src={YouDied} alt="you died" />
				</Modal>
			</div>
		);
	}
}

export default Lose;
