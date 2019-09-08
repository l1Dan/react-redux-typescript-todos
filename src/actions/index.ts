import { TodoItem } from '../types'
import { TODO_LIST, TODO_LIST_REQUEST, INPUT_VALUE, ADD_TODO, DELETE_TODO } from '../constants'

export interface TodoListAction {
  type: TODO_LIST
  payload: TodoItem[]
}

export interface InputValueAction {
  type: INPUT_VALUE
  payload: string
}

export interface AddTodoAction {
  type: ADD_TODO
  payload: TodoItem
}

export interface DeleteAction {
  type: DELETE_TODO
  payload: number
}

export interface TodoListAsyncAction {
  type: TODO_LIST_REQUEST
}

export type TodoAction = TodoListAction | TodoListAsyncAction | InputValueAction | AddTodoAction | DeleteAction

export const todoList = (todos: TodoItem[]): TodoListAction => ({ type: TODO_LIST, payload: todos })

export const inputValue = (text: string): InputValueAction => ({ type: INPUT_VALUE, payload: text })

export const addTodo = (todo: TodoItem): AddTodoAction => ({ type: ADD_TODO, payload: todo })

export const deleteTodo = (index: number): DeleteAction => ({ type: DELETE_TODO, payload: index })
