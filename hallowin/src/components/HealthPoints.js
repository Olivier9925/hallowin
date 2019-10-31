import React from 'react';
import potion from "../graphics/Potion_2.png";

import '../App.css'

function HealthPoints({playerLifePoints, computerLifePoints}) {
    return (
        <div className='score'>
            <div className="points" >Player HP<br/>{playerLifePoints}</div>
            <div style={{width: "20vw"}}></div>
            <div className="points" >Opponent HP<br/>{computerLifePoints}</div>
        </div>
    )   
}

export default HealthPoints;