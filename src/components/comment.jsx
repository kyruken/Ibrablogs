import React from 'react';

export default function Comment(props) {
    return (
        <div>
            <p>{props.comment}</p>
            <div>
                <p>{props.username}</p>
                <p>{props.timestamp}</p>
            </div>
        </div>
    )
}