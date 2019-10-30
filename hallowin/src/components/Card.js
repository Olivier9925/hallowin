import React, { Component } from "react";
import shield from "../Graphics/shield.png"
import blood from "../Graphics/blood.png"
import crown from "../Graphics/crowns.png"

const vignetteStyle = {
    width : `20px`,
    height : `20px`,
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
            description,
            special} = this.props;
        return(
            <div id="cardBackground">
                <div id="cardLevel" style = {backgroundImage: `url(${crown})`, {...levelStyle}}>
                    {level}</div>
                <div id="cardAttack" style = {backgroundImage: `url(${blood})`, {...vignetteStyle}}>
                    {attack}</div>
                <div id="cardDefense" style = {backgroundImage: `url(${shield})`, {...vignetteStyle}}>
                    {defense}</div>
                <div id="cardStats">
                    <p>{special}</p>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}