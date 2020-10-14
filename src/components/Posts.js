import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';
import Post from './Post';

const Posts = ({ history }) => {
    const posts = useSelector(state => state.post.posts);
    const selectedPostHandler = id => history.push(`./edit/${id}`);

    if (!posts) {
        return (
            <div style={{ textAlign: 'center' }}>
                <CircularProgress size={50} color="black" />
            </div>
        )
    }

    return (
        <Grid container justify="center">
            {posts.map(el => (
                <Post
                    key={el.id}
                    post={el}
                    clicked={selectedPostHandler}
                />))}

        </Grid>
    )
}

export default withRouter(Posts);
