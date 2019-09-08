import React, { ChangeEvent } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

import { AddTodoAction, DeleteAction, InputValueAction } from '../actions'
import { TodoItem } from '../types'

interface Props {
  text: string
  todos: TodoItem[]
  inputValue: (text: string) => InputValueAction
  addTodo: (todo: TodoItem) => AddTodoAction
  deleteTodo: (index: number) => DeleteAction
}

export default (props: Props) => {
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim()

    if (text.length === 0) return
    props.inputValue(text)
  }

  const addTodoButton = () => {
    const { text } = props
    if (text.length === 0) return

    props.addTodo({ id: Date.now(), title: text, completed: false })
    props.inputValue('')
  }

  const deleteTodoButton = (index: number) => {
    props.deleteTodo(index)
  }

  return (
    <div style={
      { margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
    }>
      <div>
        <Input
          onChange={changeInputValue}
          placeholder='Write Someting'
          value={props.text}
          style={{ width: '250px', marginRight: '10px' }}
        />
        <Button type='primary' onClick={addTodoButton}>增加</Button>
      </div>
      <div style={{ margin: '10px', width: '400px' }}>
        <List
          bordered
          dataSource={props.todos}
          renderItem={(todo, index) => (<List.Item key={todo.id} onClick={() => deleteTodoButton(index)}>{todo.title}</List.Item>)}
        >
        </List>
      </div >
    </div >
  )
}