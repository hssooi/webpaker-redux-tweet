export default {
  increment: (v) => {
    return {
      type: 'INCREMENT',
      v: v
    }
  },
  decrement: () => {
    return {type: 'DECREMENT'}
  },
  inc: () => {
    return {type: 'INC'}
  }
}

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: data
  }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
  type: GET_POSTS_FAILURE,
    error
}

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    return fetch('http://localhost:3000/api/v1/posts.json')
      .then((response) =>{
        return response.json()
      })
      .then((data)=>{
        dispatch(getPostsSuccess(data))
      }
      );
  }
}