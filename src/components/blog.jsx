import React from 'react';

export default function Blog(props) {
    const commentElements = props.comments.map(comment => {
        <div>{comment}</div>
    })
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>{props.timestamp}</p>

            <div>
                {commentElements}
            </div>
        </div>
    )
}