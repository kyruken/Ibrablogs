import React from 'react';
import Comment from './components/comment';
export default function Blogpage(props) {
    
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3000/posts/${props.id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data.comments))
    })
    const commentElements = comments.map(comment => {
        return <Comment 
            comment={comment.comment}
            username={comment.username}
            timestamp={comment.timestamp}
            key={comment._id}
            id={comment._id}
        />

    })
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>{props.timestamp}</p>
            <h3>Comments</h3>
            {commentElements}
        </div>
    )
}