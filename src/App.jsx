import { useState } from 'react'
import './App.css'

const tasksExamle = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Firebase', completed: false },
  { id: 3, text: 'Learn CSS', completed: false }
]

function App() {
  const [tasks, setTasks] = useState([])

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
          {/* Task list */}
          {tasks ?
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <input type="checkbox" />
                  <span>{task.text}</span>
                  <button>Delete</button>
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
              <span>Completed tasks </span>
              <span>0</span>
            </div>
            <div>
              <span>Porcentaje de Progreso </span>
              <span>0%</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
