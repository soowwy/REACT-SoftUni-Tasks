import React, {Component} from 'react'
import observerMenu from '../utils/observer'




let SingleChar = (props) => {
    return (
        
        <div onClick={() => observerMenu.executeObserver('params', {getParams:props.params})} className='par-char'>
            <img className='char-img' alt='char' src={props.params.url}/>

        </div>
        
    )
}



export default SingleChar