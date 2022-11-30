import React from 'react';

export default function Blog(props) {
    return (
        <div class="blog padding-all-1" onClick={props.handleClick}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>{props.timestamp}</p>
        </div>
    )
}