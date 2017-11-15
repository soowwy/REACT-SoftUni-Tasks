import React, {Component} from 'react'

let Header = (props) => {
    return (
        <header>
        <span class="logo">☃</span><span class="header">SeenIt</span>
        <div id="profile"><span>pesho</span>|<a href="#/logout">logout</a></div>
        </header>
    )
}

export default Header