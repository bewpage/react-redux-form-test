import { FETCH_POST } from '../constants';
import CONFIG from '../config';


export const requestPost = (id, callback) => {
  return dispatch => {
      const { ROOT_URL, API_KEY } = CONFIG;
      // console.log('fetchPost id from app', id);
      // console.log(`${ROOT_URL}/posts/${id}?${API_KEY}`);
      fetch(`${ROOT_URL}/posts/${id}?${API_KEY}`, {
          method: 'GET'
      })
          .then(resolve => {
              return resolve.json();
          })
          .then(data => {
              dispatch(fetchPost(data));
          })
          .catch(e => {
              console.log('error', e);
          })
  }
};


const fetchPost = (post) => {
  return {
      type: FETCH_POST,
      post
  }
};

