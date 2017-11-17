import React, {Component} from 'react'
import dataCollector from './../utils/dataCollector'
import {BrowserRouter, Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: ''
        }
    
    }


    componentDidMount() {
        this.setState({author: localStorage.getItem('username')})
    }

    handleChange = (e) => {
        return localStorage.removeItem('token')
    }

    render() {
        return (
            <header>
                
            <span class="logo">☃</span><span class="header">SeenIt</span>
            <div id="profile">
            <span>{this.state.author}</span>|
            {/* <a href="#/logout">logout</a> */}
            <Link to='/'> <button 
            onClick={ e => this.handleChange(e)}
            
                       id="btnEditPost" 
                       type="submit" 
                       value="Logout">Logout</button></Link>
                     
            </div>
            </header>
        )
    }
}

export default Header