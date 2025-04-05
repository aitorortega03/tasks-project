import './App.css'
import { useTasks } from './hooks/useTasks'
import { CreateTask } from './components/CreateTask'
import { TaskList } from './components/TaskList'
import { ProductivityStats } from './components/ProductivityStats'

function App() {
  const { tasks, saveTasks } = useTasks()

  return (
    <div className='page'>
      <header>
        <h1>Tasks Project</h1>
      </header>
      <main>

        <CreateTask tasks={tasks} saveTasks={saveTasks} />

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
