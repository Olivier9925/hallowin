import React, { Component } from "react";
import potion from "../graphics/Potion_2.png";
import sword from "../graphics/SwordAxe.png";
import hero from "../graphics/Hero.png";
import spiderWeb from "../graphics/spiderWeb.png";
import "./Card.css";



class Card extends Component {
    render(){
        const {name,
            level,
            attack,
            defense,
            picture,
            special} = this.props;
        return(
            <div id="cardBackground" style = {{backgroundImage : `url(${picture})`}}>
                <img id="spiderWeb" src={spiderWeb} alt=""></img>
                <div class="cardStats">
                    <img id="cardAttack" class="vignette" alt="" src= {sword}/>
                    <img class="vignette" id="cardLevel" alt="" src= {hero}/>
                    <img id="cardDefense" class="vignette" alt="" src = {potion}/>
                </div>
                <div class="cardStats">
                    <p>{attack}</p>
                    <p>{level}</p>
                    <p >{defense}</p>
                </div>
                <div id="cardDescription">
                    <p>{name}</p>
                    <p id="special">{special}</p>
                </div>
            </div>
        )
    }
}

export default Card;