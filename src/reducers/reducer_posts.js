import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../constants";
import { mapKeys, omit } from 'lodash';

// const initialState = {
//   posts: {}
// };

const posts = (state = {}, action) => {
  switch(action.type){
      case DELETE_POST:
          const { id } = action;
          return omit(state, id);
      case FETCH_POST:
          const { post } = action;
          return {
              ...state,
              post
              // selected:{
              //     [post.id]: post
              // }
          };
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