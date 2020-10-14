import React, { useState, useEffect } from 'react';
import { CircularProgress, Button, Input } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../store/actions';
import './Posts.css';

const buttonStyle = {
    margin: '10px',
    border: '1px solid black'
}
const EditPost = (props) => {
    const post = useSelector(state => state.post.posts);
    const dispatch = useDispatch();

    const [editPost, setEditPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    useEffect(() => {
        if (post) {
            const editting = post.filter(el => el.id === parseInt(props.match.params.id));
            console.log('editting', editting[0].title)
            setEditPost(editting[0]);
            setTitle(editting[0].title);
        }
    }, [post])

    const inputChangeHandler = e => setTitle(e.target.value);

    const submitHandler = () => {
        setLoading(true);
        setTimeout(() => {
            const copyPosts = [...post];
            const editIndex = copyPosts.findIndex(el => el.id === parseInt(props.match.params.id));
            console.log('Editted Id', editIndex);
            if (editIndex > -1) {
                const item = copyPosts[editIndex];
                item.title = title;
                dispatch(updatePost(copyPosts));
                props.history.push('/')
            }
            setLoading(false);
        }, 2000);
    }

    const cancelHandler = () => props.history.push('/');

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Edit Title Page</h1>
            <h3>USERID:{props.match.params.id}</h3>
            <Input
                className="input"
                type="text"
                value={title}
                onChange={inputChangeHandler}
                autoFocus
            />
            <p>{editPost.title}</p>
            <>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitHandler}
                    style={buttonStyle}
                >
                    {loading ? (
                        <>
                            <CircularProgress size={14} />
                            EDIT
                        </>)
                        : 'EDIT'
                    }
                </Button>
                <Button
                    variant="contained"
                    onClick={cancelHandler}
                    style={buttonStyle}
                >
                    Cancel
                </Button>
            </>
        </div>
    )
}

export default EditPost
