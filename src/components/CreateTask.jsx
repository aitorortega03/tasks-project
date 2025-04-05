import { useState } from "react"

export function CreateTask({ tasks, saveTasks }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      id: tasks.length + 1,
      text: inputValue,
      completed: false
    }
    saveTasks([...tasks, newTask])
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