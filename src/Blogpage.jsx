import React from 'react';

export default function Blogpage(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>{props.timestamp}</p>
        </div>
    )
}