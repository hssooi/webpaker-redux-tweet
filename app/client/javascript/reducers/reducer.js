import { combineReducers } from 'redux'
import index from './index'
import inc from './inc'

const calcApp = combineReducers({
  index,
  inc
})

export default calcApp