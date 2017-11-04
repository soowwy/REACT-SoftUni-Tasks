import React, { Component } from 'react';
import SingleChar from './Char'
import observerMenu from '../utils/observer'


class Bio extends Component {
constructor(props) {
        super(props)
        
        this.state = {
            url: this.props
        }

}

    render() {
        
            return (
                <div>
                
                <fieldset>
                <SingleChar params={({url: this.props.urlData.getParams.url})}/>
                
                <p>{this.props.urlData.getParams.bio}</p>
                
                </fieldset>
            </div>
            )
        }

   
}

export default Bio