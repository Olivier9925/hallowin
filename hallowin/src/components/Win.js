import React, { Component } from "react";
import YouWin from "./Images/youwin.png";
import "../App.css";
import "./Modal.css"

function Win() {

		return (
			<div className="containerWinLose">
				<div className="modalWinLose">
					<p>You destroyed your enemy!</p>
					<img src={YouWin} alt="you win" />
					<p>Go back to battle ?</p>
				</div>
			</div>
		);
}

export default Win;
