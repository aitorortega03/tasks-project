import { useMemo, useState } from 'react'
import './App.css'

const tasksExamle = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Learn Firebase', completed: false },
  { id: 3, text: 'Learn CSS', completed: false }
]

function App() {
  const [tasks, setTasks] = useState(tasksExamle)

  const handleCheckTask = (taskId, event) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: event.target.checked }
      }
      return task
    })
    setTasks(newTasks)
  }

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
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
      <header>
        <h1>Tasks Project</h1>
      </header>
      <main>

        <section>
          <form>
            <input
              type="text"
              placeholder="Add new task"
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
