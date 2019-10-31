import React, { Component } from "react";
import YouDied from "./Images/youdied.jpg";
import "../App.css";
import "./Modal.css";

function Lose() {
		return (
			<div className="containerWinLose">
			<div className="modalWinLose">
				<h2>YOU DIED!</h2>
				<img src={YouDied} alt="you died" />
				<p>Try again ?</p>
			</div>
			</div>
		);
}

export default Lose;
