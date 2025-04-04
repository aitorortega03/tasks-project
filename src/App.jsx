import { useEffect, useMemo, useState } from 'react'
import './App.css'

function getTasks() {
  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const storedTasks = getTasks()
    if (storedTasks.length > 0) {
      setTasks(storedTasks)
    }
  }
  , [])

  const handleCreateTask = (event) => {
    event.preventDefault()
    const newTask = {
      id: tasks.length + 1,
      text: inputValue,
      completed: false
    }
    setTasks([...tasks, newTask])
    setInputValue('')
    saveTasks([...tasks, newTask])
  }

  const handleCheckTask = (taskId, event) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: event.target.checked }
      }
      return task
    })
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  const completedTasksNumber = useMemo(() => {
    return tasks.filter(task => task.completed).length
  }, [tasks])

  const completedTaskPercentage = useMemo(() => {
    if (tasks.length === 0) return 0
    return Math.round((completedTasksNumber / tasks.length) * 100)
  }, [completedTasksNumber, tasks])

  return (
    <div className='page'>
      <header onClick={() => console.log(tasks)}>
        <h1>Tasks Project</h1>
      </header>
      <main>

        <section>
          <form onSubmit={handleCreateTask}>
            <input
              type="text"
              placeholder="Add new task"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit">Add task</button>
          </form>
        </section>

        <section>
          <button>Todas</button>
          <button>Activas</button>
          <button>Completadas</button>
        </section>

        <section>
          {tasks.length !== 0 ?
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <input type="checkbox" checked={task.completed} onChange={(event) => handleCheckTask(task.id, event)} />
                  <span>{task.text}</span>
                  <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>
              ))}
            </ul>
            : <p>No tasks</p>
          }
        </section>

        <section>
          <h2>Productivity Stats</h2>
          <div>
            <div>
              <span>Completed tasks: </span>
              <span>{completedTasksNumber}</span>
            </div>
            <div>
              <span>Porcentaje de Progreso: </span>
              <span>{completedTaskPercentage}%</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
