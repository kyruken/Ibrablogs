import React from 'react';
import axios from 'axios';
import Comment from './components/comment';
export default function Blogpage(props) {
    
    const [comments, setComments] = React.useState([]);

    //Using reverse method to show most recent comment at top aka end of array
    React.useEffect(() => {
        fetch(`http://localhost:3000/posts/${props.id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data.comments.reverse()))
    }, [])
    const commentElements = comments.map(comment => {
        return <Comment 
            comment={comment.comment}
            username={comment.username}
            timestamp={comment.timestamp}
        />
    })

    function handleSubmit(e) {
        e.preventDefault();

        const newComment = {
            username: e.target.username.value,
            comment: e.target.comment.value,
            //Assigning new Date() by itself is assigning an object to timestamp
            //Therefore you must make it a string or else you get errors -_-
            timestamp: `${new Date()}`
        }

        //Axios doesn't send data by default as a url-encoded body
        //https://axios-http.com/docs/urlencoded
        //Solution found above ^
        const params = new URLSearchParams();
        params.append('username', e.target.username.value);
        params.append('comment', e.target.comment.value);
        axios.post(`http://localhost:3000/posts/${props.id}/comments`, params);

        setComments(prevComments => {
            const commentsArray = [newComment, ...prevComments];
            return commentsArray;
        })
    }
    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>{props.timestamp}</p>
            <h3>Post a comment</h3>
            <form method='POST' action={`http://localhost:3000/posts/${props.id}/comments`} onSubmit={handleSubmit}>
                <input type='text' name='username' id='username' placeholder='Username'/>
                <input type='text' name='comment' id='comment' placeholder='Comment'/>
                <button type='submit'>Submit</button>
            </form>
            <h3>Comments</h3>
            {commentElements}
        </div>
    )
}