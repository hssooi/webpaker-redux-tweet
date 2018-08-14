import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/app'

function mapStateToProps(state) {
    // これで
  return { fuga: state.index.fuga }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
    return {
        Increment_Click: (v) => { dispatch(AppActions.increment(v))},
        Decrement_Click: () => { dispatch(AppActions.decrement())}
    }
}

export default connect(//これが子コンポーネントで使える要素（props）
    mapStateToProps,
    mapDispatchToProps
)(App)