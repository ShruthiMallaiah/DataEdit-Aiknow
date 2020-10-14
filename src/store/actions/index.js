export const UPDATE_POST = 'UPDATE_POST';
export const SET_INITIAL_LOAD = 'SET_INITIAL_LOAD';

export const updatePost = (data) => {
    console.log('Action data >>>>>', data);
    return {
        type: UPDATE_POST,
        posts: data
    }
}

export const setInitialLoad = (data) => {
    return {
        type: SET_INITIAL_LOAD,
        initialLoad: data
    }
}