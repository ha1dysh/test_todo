import { useState } from 'react'
import { Todo } from 'components/App'

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoForm({ setTodos }: Props) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!title.trim().length) {
      return
    }

    setTodos((s) => [
      ...s,
      { title, text, isComplete: false, id: Math.random() }
    ])

    setTitle('')
    setText('')
  }

  return (
    <form
      className="m-auto flex w-full flex-col gap-2 p-2 border-gray sm:m-0 sm:w-96"
      onSubmit={onSubmit}
    >
      <h2 className="text-center text-2xl">ADD TODO</h2>

      <input
        className="w-full p-1 outline-none border-gray focus:shadow"
        type="text"
        placeholder="Title*"
        maxLength={320}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="h-32 w-full p-1 outline-none border-gray focus:shadow"
        placeholder="Text"
        maxLength={320}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="p-1 border-gray hover:bg-gray-100">ADD</button>
    </form>
  )
}

export default TodoForm
