import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Posts from './Posts';
import Axios from '../axios';
import { updatePost, setInitialLoad } from '../store/actions';

const Home = () => {
    const initialLoad = useSelector(state => state.post.initialLoad);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialLoad) {
            Axios.get('/posts')
                .then(res => {
                    const smallLists = res.data.slice(0, 20);
                    dispatch(setInitialLoad(false));
                    dispatch(updatePost(smallLists))
                })
                .catch(err => console.log(err))
        }
    }, []);
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>List of Posts</h1>
            <Posts />
        </>
    )
}

export default Home
