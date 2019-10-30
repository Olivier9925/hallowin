import React from 'react';
import axios from 'axios';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            playerStack: [],
            computerStack: [],
            playerCurrentCard: null,
            computerCurrentCard: null,
            playerLifePoints: 15,
            computerLifePoints: 15,
        }
        this.getMonster = this.getMonster.bind(this)
        this.battle = this.battle.bind(this)
    }

    componentDidMount() {
        this.getMonster()
    }

    getMonster() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            this.setState({ 
                playerStack: data.monsters,
                computerStack: data.monsters
            })
        }) 
    }

    battle() {
        const { playerCurrentCard } = this.state.playerCurrentCard;
        const { computerCurrentCard } = this.state.computerCurrentCard;
            if (playerCurrentCard.attack > computerCurrentCard.defense) {
                this.setState({ 
                    computerLifePoints: computerLifePoints - (playerCurrentCard.attack - computerCurrentCard.defense)
                })
            }
            if (computerCurrentCard.attack > playerCurrentCard.defense) {
                this.setState({
                    playerLifePoints: playerLifePoints - (computerCurrentCard.attack - computerCurrentCard.defense)
                })
            }
            
    }

    render() {
        return (
        <div></div>
        )
    }
}

export default Game