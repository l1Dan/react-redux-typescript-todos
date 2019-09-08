import { TodoAction } from '../actions'
import { TODO_LIST, ADD_TODO, DELETE_TODO, INPUT_VALUE } from '../constants'
import { TodoState } from '../types'

export default (state: TodoState = { text: '', todos: [] }, action: TodoAction) => {
  switch (action.type) {
    case TODO_LIST: {
      const newState: TodoState = JSON.parse(JSON.stringify(state))
      newState.todos = action.payload
      return newState
    }
    case INPUT_VALUE: {
      const newState: TodoState = JSON.parse(JSON.stringify(state))
      newState.text = action.payload
      return newState
    }
    case ADD_TODO: {
      const newState: TodoState = JSON.parse(JSON.stringify(state))
      newState.todos = [action.payload, ...newState.todos]
      return newState
    }
    case DELETE_TODO: {
      const newState: TodoState = JSON.parse(JSON.stringify(state))
      newState.todos.splice(action.payload, 1)
      return newState
    }
  }
  return state
}