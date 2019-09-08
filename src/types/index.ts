export interface TodoItem {
  id: number
  title: string
  completed: boolean
}

export interface TodoState {
  text: string
  todos: TodoItem[]
}