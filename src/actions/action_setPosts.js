import { SET_NEW_POST } from "../constants";
import  CONFIG  from '../config';

export const sendNewPost = (data, callback) => {

    // console.log('data from action new post', data);
    // console.log('data from action new post', JSON.stringify(data));
  return dispatch => {
      const { ROOT_URL, API_KEY } = CONFIG;
      fetch(`${ROOT_URL}/posts/?${API_KEY}`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
          .then(response => response.json())
          .then(data => dispatch(setNewPost(data)))
          .then(() => callback())
          .catch(error => console.log('error', error))
  }
};

export const setNewPost =(post) => {
    return {
        type: SET_NEW_POST,
        post
    }
};