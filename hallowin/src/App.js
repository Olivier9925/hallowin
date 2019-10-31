import React, { Component } from "react";
import "./App.css";
import Start from "./components/Start.js";
import Game from "./components/Game.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: false
		};
	}

	start = () => this.setState({ start: !this.state.start });

	render() {
		return <div className="App">{this.state.start ? <Game /> : <Start start={this.start} />}</div>;
	}
}

export default App;
