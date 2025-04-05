import './App.css'
import { useTasks } from './hooks/useTasks'
import { CreateTask } from './components/CreateTask'
import { TaskList } from './components/TaskList'
import { ProductivityStats } from './components/ProductivityStats'

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
        <ProductivityStats tasks={tasks} />
      </main>
    </div>
  )
}

export default App
