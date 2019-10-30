import React from 'react';
import '../App.css'

function HealthPoints({playerLifePoints, computerLifePoints}) {
    return (
        <div className='score'>
            <div className="points">Your HP<br/>{playerLifePoints}</div>
            <div className="points">Your opponent's HP<br/>{computerLifePoints}</div>
        </div>
    )   
}

export default HealthPoints;