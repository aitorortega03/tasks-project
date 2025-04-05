import { useMemo } from 'react'
import './App.css'
import { useTasks } from './hooks/useTasks'
import { CreateTask } from './components/CreateTask'
import { TaskList } from './components/TaskList'

function App() {
  const { tasks, saveTasks } = useTasks()

  const handleCreateTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    }
    saveTasks([...tasks, newTask])
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

        <CreateTask handleCreateTask={handleCreateTask} />

        <section>
          <button>Todas</button>
          <button>Activas</button>
          <button>Completadas</button>
        </section>

        <TaskList tasks={tasks} saveTasks={saveTasks}/>

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
