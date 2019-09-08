import axios from 'axios'
import { all, put, takeLatest } from 'redux-saga/effects'
import { todoList } from '../actions'
import { TODO_LIST_REQUEST } from '../constants'

export function* todoListAsync() {
  try {
    const res = yield axios.get('https://jsonplaceholder.typicode.com/todos')
    yield put(todoList(res.data))
  } catch (err) {
    // yield put(todoList(res.data))
  }
}

export function* watchTodoList() {
  yield takeLatest(TODO_LIST_REQUEST, todoListAsync)
}

export default function* rootSaga() {
  yield all(
    [
      watchTodoList()
    ]
  )
}