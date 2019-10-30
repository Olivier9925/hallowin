import React from 'react';
import axios from 'axios';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            playerStack: [],
            computerStack: []
        }
        this.getMonster = this.getMonster.bind(this)
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

    render() {
        return (
        <div></div>
        )
    }
}

export default Game