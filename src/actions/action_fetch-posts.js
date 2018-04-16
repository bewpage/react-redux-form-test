import { FETCH_POSTS, DELETE_POST } from "../constants";
import  CONFIG  from '../config';

export const requestFetchPosts = () => {
    return dispatch => {
        const { ROOT_URL, API_KEY } = CONFIG;
        fetch(`${ROOT_URL}/posts/?${API_KEY}`)
            .then(resolve => {
                return resolve.json();
            })
            .then(data => {
                dispatch(fetchPosts(data));
            })
            .catch(e => {
                console.log('error', e);
            });
    }
};

const fetchPosts = (posts) => {
    return {
        type: FETCH_POSTS,
        posts
    }
};


export const deletePost = (id, callback) => {
  return dispatch => {
      const { ROOT_URL, API_KEY } = CONFIG;
      // console.log('post to delete id: ', id);
      // console.log(`${ROOT_URL}/posts/${id}?${API_KEY}`);
      fetch(`${ROOT_URL}/posts/${id}?${API_KEY}`, {
          method: 'DELETE'
      })
          .then(() => dispatch(deletedPost(id)))
          .then(() => callback())
          .catch(e => console.log(e))
  }
};

const deletedPost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
};