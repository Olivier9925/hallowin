import React, { Component } from "react";
import Modal from "react-responsive-modal";
import YouDied from '../Images/youdied.jpg'
import '../App.css'


class Lose extends Component {
    state = {
        open: false
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
     
      render() {
        const { open } = this.state;
        return (
          <div>
            <button onClick={this.onOpenModal}>Open modal</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <h2 style={{fontFamily: 'Madjoe'}}>YOU DIED!</h2>
              <img 
                src={YouDied}
                alt='you died' />
            </Modal>
          </div>
        );
      }
}

export default Lose;