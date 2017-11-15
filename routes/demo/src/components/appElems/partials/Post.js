import React from 'react'
import dateConvertor from './../../utils/dateConvertor'

let Post = props => {
    return (
        <article class="post">
           
        <div class="col rank">
            <span>{props.index}</span>
        </div>
        <div class="col thumbnail">
            <a href={props.props.url}>
                <img src={props.props.imageUrl}/>
            </a>
        </div>
        <div class="post-content">
            <div class="title">
                <a href={props.props.url}>
                {props.props.title}
                </a>
            </div>
            <div class="details">
                <div class="info">
                    submitted {dateConvertor(props.props._kmd._lmt)} by {props.props.author}
                </div>
                <div class="controls">
                    <ul>
                        <li class="action"><a class="commentsLink" href="#">comments</a></li>
                        <li class="action"><a class="editLink" href="#">edit</a></li>
                        <li class="action"><a class="deleteLink" href="#">delete</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </article>
    )
}

export default Post