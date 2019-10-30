import React, { Component } from "react";
import shield from "../Graphics/shield.png"
import blood from "../Graphics/blood.png"
import crown from "../Graphics/crowns.png"

const vignetteStyle = {
    width : `20px`,
    height : `20px`,
    top: `10px`
}
const levelStyle = {
    width : `30px`,
    height : `30px`,
    top: `10px`
}
class Card extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {name,
            level,
            attack,
            defense,
            picture,
            special} = this.props;
        return(
            <div id="cardBackground" style = {{backgroundImage : `url(${picture})`}}>
                <div id="cardStats">
                    <div id="cardLevel" style = {{backgroundImage : `url(${crown})`, ...levelStyle}}>
                        {level}</div>
                    <div id="cardAttack" style = {{backgroundImage : `url(${blood})`, ...vignetteStyle}}>
                        {attack}</div>
                    <div id="cardDefense" style = {{backgroundImage : `url(${shield})`, ...vignetteStyle}}>
                        {defense}</div>
                </div>
                <div id="cardDescription">
                    <p>{name}</p>
                    <p>{special}</p>
                </div>
            </div>
        )
    }
}

export default Card