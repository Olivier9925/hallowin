import React from 'react';
import axios from 'axios';

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
            <div></div>
        )
    }
}

export default Game