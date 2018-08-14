// 初期ステート設定
const initialState = {
    posts: []
}

// const items = [
//   { content: 'AAA', user: {name: "aaa", image_name: "bb"}},
// ];

// actionに応じてステート変更
export default function post(state =initialState, action) {

  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return {posts: action.posts}
    case 'GET_POSTS_FAILURE':
      return state
    case 'GET_POSTS_REQUEST ':
      return state
    default:
      return state
  }

  return state;
}