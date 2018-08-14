import React from 'react'
import { connect } from 'react-redux'
import Post from '../components/post'
import PropTypes from 'prop-types'

function mapStateToProps(state) {
  return state
}

Post.propTypes = {
  posts: PropTypes.array
};

export default connect(//これが子コンポーネントで使える要素（props）
    mapStateToProps
)(Post)