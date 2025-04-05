export function TaskList({ tasks, saveTasks }) {

const handleCheckTask = (taskId, event) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: event.target.checked }
      }
      return task
    })
    saveTasks(newTasks)
  }

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    saveTasks(newTasks)
  }

  return (
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
  )
}