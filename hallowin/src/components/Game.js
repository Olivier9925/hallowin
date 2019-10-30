import React from 'react';
import axios from 'axios';
import AfficherDeck from "./AfficherDeck.js"

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            monster: []
        }
        this.getMonster = this.getMonster.bind(this)
    }

    getMonster() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            this.setState({ monster: data[0]})
        }) 
    }

    render() {
        return (
            <div>
                <AfficherDeck playerStack={this.state.playerStack} />
            </div>
        )
    }
}

export default Game