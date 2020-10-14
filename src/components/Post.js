import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Posts.css';

const Post = ({ clicked, post }) => {
    return (
        <Grid
            item
            onClick={() => clicked(post.id)}
            className="Post">
            <h1>{post.title}</h1>
            <div className="Info">
                <div className="UserId">UserID: {post.userId}</div>
            </div>
        </Grid>
    )
}

export default Post
