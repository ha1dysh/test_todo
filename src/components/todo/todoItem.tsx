import { Todo } from 'components/App'

type Props = {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoItem({ todo, setTodos }: Props) {
  function completeTodo(id: number) {
    setTodos((s) =>
      s.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    )
  }

  function deleteTodo(id: number) {
    setTodos((s) => s.filter((s) => s.id !== id))
  }

  return (
    <div className="flex w-full flex-col justify-between gap-2 break-words p-2 border-gray sm:w-96">
      <div>
        <div
          className={`text-xl ${
            todo.isComplete ? 'text-gray-400 line-through' : ''
          }`}
        >
          {todo.title}
        </div>
        <div className={todo.isComplete ? 'text-gray-400 line-through' : ''}>
          {todo.text}
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <label className="flex items-center gap-1 rounded p-1 hover:bg-gray-100">
          <span className="cursor-pointer">COMPLETE</span>
          <input
            className="size-4 cursor-pointer"
            type="checkbox"
            data-testid="isComplete"
            checked={todo.isComplete}
            onChange={() => completeTodo(todo.id)}
          />
        </label>
        <button
          className="rounded bg-red-500 p-1 text-white hover:bg-red-600"
          data-testid="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          DELETE
        </button>
      </div>
    </div>
  )
}

export default TodoItem
