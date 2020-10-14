import { combineReducers } from 'redux';
import postReducer from './updatePostReducer';

const appReducer = combineReducers({
    post: postReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;