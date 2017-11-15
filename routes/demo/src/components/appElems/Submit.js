import React, {Component} from 'react'
import dataCollector from './../utils/dataCollector'
import reqHandler from './../utils/reqHandler'
import {Link} from 'react-router-dom'

class Submit extends Component {
    constructor() {
        super()


        this.dataCollector = (e) => {
            this.setState(dataCollector(e))
        }


        this.createPost = (e)=>{
            e.preventDefault(e)
            reqHandler.createPost(this.state).then(data=>{
                console.log(data)
            })
        }
    }

    componentDidMount() {
        this.setState({author: localStorage.getItem('username')})
    }


    render () {
        return (
            <div class="submitArea formContainer">
            {console.log(this.state)}
            <form id="editPostForm" class="submitForm" onSubmit={(e)=>{this.createPost(e)}}>
                <label>Link URL:</label>
                <input 
                       onChange={(e) => {this.dataCollector(e)}}
                       name="url" 
                       type="text"
                       />
                <label>Link Title:</label>
                <input 
                       onChange={(e) => {this.dataCollector(e)}}
                       name="title" 
                       type="text" 
                       />
                <label>Link Thumbnail Image (optional):</label>
                <input 
                       onChange={(e) => {this.dataCollector(e)}}
                       name="imageUrl" 
                       type="text"
                      />
                <label>Comment (optional):</label>
                <textarea 
                       onChange={(e) => {this.dataCollector(e)}}
                       name="description"></textarea>
                <Link to='/'> <input 
                       id="btnEditPost" 
                       type="submit" 
                       value="Edit Post"/></Link>
            </form>
            </div>
        )
    }
}

export default Submit