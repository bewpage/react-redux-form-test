import { FETCH_POSTS } from "../constants";
import  CONFIG  from '../config';

export const requestFetchPosts = () => {
    return dispatch => {
        const { ROOT_URL, API_KEY } = CONFIG;
        // console.log('test data', ROOT_URL);
        // const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
        // const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
        // const API_KEY = '?key=bartek1234';
        fetch(`${ROOT_URL}/posts/?${API_KEY}`)
            .then(resolve => {
                return resolve.json();
            })
            .then(data => {
                dispatch(fetchPost(data));
            })
            .catch(e => {
                console.log('error', e);
            });
    }
};

export const fetchPost = (posts) => {
    return {
        type: FETCH_POSTS,
        posts
    }
};