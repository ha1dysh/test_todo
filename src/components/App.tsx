import { useState } from 'react'
import TodoForm from './todo/todoForm'
import TodoItem from './todo/todoItem'

export type Todo = {
  id: number
  title: string
  text: string
  isComplete: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[] | []>([])

  return (
    <div className="flex flex-wrap gap-2 p-2">
      <TodoForm setTodos={setTodos} />

      {todos.map((todo) => (
        <TodoItem todo={todo} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  )
}
