import { FETCH_POSTS } from "../constants";
import { mapKeys } from 'lodash';

// const initialState = {
//   posts: {}
// };

const posts = (state = {}, action) => {
  switch(action.type){
      case FETCH_POSTS:
          const { posts } = action;
          return mapKeys(posts, 'id');
      default:
          return {
              state
          }
  }
};

export default posts;