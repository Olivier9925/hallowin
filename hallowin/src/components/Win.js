import React, { Component } from "react";
import Modal from "react-responsive-modal";
import YouWin from "./Images/youwin.png";
import "../App.css";

class Win extends Component {
	state = {
		open: false
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<button onClick={this.onOpenModal}>Open modal</button>
				<Modal open={open} onClose={this.onCloseModal} center>
					<h2 style={{ fontFamily: "Madjoe" }}>You destroyed your enemy!</h2>
					<img src={YouWin} alt="you win" />
				</Modal>
			</div>
		);
	}
}

export default Win;
