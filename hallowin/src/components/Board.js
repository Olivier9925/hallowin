import React from "react";
import rock from "../graphics/rock2.jpg";
import wood1 from "../graphics/wood1.png";
import wood2 from "../graphics/wood2.png";
import candle from"../graphics/candle.png";
import "./Board.css";


function Board(){
        return(
        <>
            <div id ="rockBoard" style = {{backgroundImage: `url(${rock})`, zIndex: "-10" }}>
                <img alt="" id="computerBoard" src= {wood1}/>
                <img alt="" id="playerBoard" src= {wood2}/>
            </div>
            <div id ="candleContainer" >
                <img alt="" id="candle1" src= {candle}/>
                <img alt="" id="candle2" src= {candle}/>
            </div>
        </>
        )
}

export default Board;