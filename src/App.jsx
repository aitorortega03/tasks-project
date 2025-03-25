import './App.css'

function App() {

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
            <button type="submit">Addd task</button>
          </form>
        </section>

        <section>
          <button >Todas</button>
          <button >Activas</button>
          <button >Completadas</button>
        </section>

        <section>
          {/* Task list */}
        </section>

        <section>
          <h2>Productivity Stats</h2>
          <div>
            <div>
              <span>Completed tasks</span>
              <span>0</span>
            </div>
            <div>
              <span>Porcentaje de Progreso</span>
              <span>0%</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
