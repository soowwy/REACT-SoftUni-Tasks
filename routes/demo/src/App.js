import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GuestHome from './components/auth/GuestHome'
import Wrapper from './components/common/LoggedWrapper'



class App extends Component {
    constructor() {
      super()
    this.state = {
      token: '',
      author: ''
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState({token:localStorage.getItem('token')})

    }
    this.setState({username: localStorage.getItem('author')})
  }


  render() {
    return (
      <BrowserRouter>
        <div>
       
          <Header />

          { this.state.token == '' ? <GuestHome/> : <Wrapper/>}
          
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}


export default App;
