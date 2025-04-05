export function TaskList({ tasks, handleCheckTask, handleDeleteTask }) {
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