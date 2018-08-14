// 初期ステート設定
const initialState = {
    incval: 1
}

// actionに応じてステート変更
export default function reducer2(state = initialState, action) {
    switch (action.type) {
        case 'INC': {
          return { incval: state.incval * 2}
        }
        default:
            return state
    }
}