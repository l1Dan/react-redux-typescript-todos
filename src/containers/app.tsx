import { connect } from 'react-redux'

import { TodoState } from '../types'
import { inputValue, addTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

export default connect(
  (state: TodoState): TodoState => ({ text: state.text, todos: state.todos }),
  { inputValue, addTodo, deleteTodo }
)(TodoList)