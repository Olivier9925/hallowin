import React, { Component } from "react";
import potion from "../graphics/Potion_2.png";
import sword from "../graphics/SwordAxe.png";
import hero from "../graphics/Hero.png";
import spiderWeb from "../graphics/spiderWeb.png";
import "./Card.css";

class Card extends Component {
	render() {
		const { name, level, attack, defense, picture, special } = this.props;
		return (
			<div id="cardBackground" style={{ backgroundImage: `url(${picture})` }}>
				<img id="spiderWeb" src={spiderWeb} alt=""></img>
				<div className="cardStats">
					<img id="cardAttack" className="vignette" src={sword} alt="attack" />
					<img className="vignette" id="cardLevel" src={hero} alt="level" />
					<img id="cardDefense" className="vignette" src={potion} alt="defense" />
				</div>
				<div className="cardStats">
					<p>{attack}</p>
					<p>{level}</p>
					<p>{defense}</p>
				</div>
				<div id="cardDescription">
					<p>{name}</p>
					<p id="special">{special}</p>
				</div>
			</div>
		);
	}
}

export default Card;
