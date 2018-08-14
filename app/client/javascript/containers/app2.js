import React from 'react'
import { connect } from 'react-redux'
import App2 from '../components/app2'
import AppActions from '../actions/app'

function mapStateToProps(state) {
    return { incval: state.inc.incval }
}

function mapDispatchToProps(dispatch) {
  return {
    Inc_Click: () => { dispatch(AppActions.inc())}
  }
}

export default connect(//これが子コンポーネントで使える要素（props）
    mapStateToProps,
  mapDispatchToProps,
)(App2)