import { combineReducers } from 'redux';
import postReducer from './Posts';

export default combineReducers({
    posts: postReducer,
});
