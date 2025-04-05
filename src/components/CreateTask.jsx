import { useState } from "react"

export function CreateTask({ handleCreateTask }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreateTask(inputValue)
    setInputValue('')
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </section>
  )
}