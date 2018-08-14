// 初期ステート設定
const initialState = {
    fuga: 0,
  hoge: 10
}

// actionに応じてステート変更
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            let val = parseFloat(action.v);
            return { fuga: state.fuga + val, hoge: state.hoge}
        }
        case 'DECREMENT': {
            return { fuga: state.fuga - 1, hoge: state.hoge + 1}
        }
        default:
            return state
    }
}