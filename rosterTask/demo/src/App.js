import React, { Component } from 'react';
import './App.css';
import Slider from './components/slider'
import SingleChar from './components/Char'
import Roster from './components/Roster'
import Bio from './components/Bio'
import observerMenu from './utils/observer'

class App extends Component {

  
constructor() {
  super()

  this.state = {
    getParams: {
      url: 'https://avatarfiles.alphacoders.com/889/88985.png',
      bio: "Rick Sanchez is the co-eponymous main character and leading protagonist of the show. He is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his daughter's family, as well as the safety of their son, Morty. He is voiced by Justin Roiland."
      
    }

  }

  this.eventHandler = (newState) => {
    this.setState(newState)
    
  }

  console.log(this.state)

}

  componentWillMount() {
    observerMenu.addObserver("params", this.eventHandler)
}

  render() {
    return (
      <div className="App">
        
          <Slider />
          <Roster />
          <Bio urlData={(this.state)}/>
          
      </div>
    );
  }
}


export default App;
