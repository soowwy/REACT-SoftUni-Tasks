import React, {Component} from 'react'
import dataCollector from './../utils/dataCollector'
import reqHandler from './../utils/reqHandler'

export default class Register extends Component {
    constructor() {
        super()

        this.dataCollector = e => {
            this.setState(dataCollector(e))
        }


        this.Register = (e)=>{
            e.preventDefault()
            reqHandler.register(this.state).then(response=>{
                
                console.log(response)
            })

        }
    }

    render() {
        return (
            <form id="registerForm" onSubmit={e=>{this.Register(e)}}>
            <h2>Register</h2>
            <label>Username:</label>
            <input onChange={e => {this.dataCollector(e)}} name="username" type="text"/>
            <label>Password:</label>
            <input onChange={e => {this.dataCollector(e)}} name="password" type="password"/>
            <label>Repeat Password:</label>
            <input onChange={e => {this.dataCollector(e)}} name="repeatPass" type="password"/>
            <input id="btnRegister" value="Sign Up" type="submit"/>
        </form>
        )
    }

}