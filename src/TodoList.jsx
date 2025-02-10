import React from 'react'
import Todo from './Todo'

//keyはtodoの変数とtodoのコンポーネントがあるから
const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
}

export default TodoList

