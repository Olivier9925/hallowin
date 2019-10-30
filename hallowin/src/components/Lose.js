import React, { Component } from "react";
import Modal from "react-responsive-modal";
import YouDied from "./Images/youdied.jpg";
import "../App.css";

const style = {
	fontFamily: "Madjoe",
	textAlign: "center"
};

class Lose extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};

		this.onOpenModal = this.onOpenModal.bind(this);
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	if(lose) {
		this.onOpenModal();
	}

	render() {
		const { open } = this.state;
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
