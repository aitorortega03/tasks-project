import { useMemo } from "react"

export function ProductivityStats({ tasks }) {

    const completedTasksNumber = useMemo(() => {
      return tasks.filter(task => task.completed).length
    }, [tasks])
  
    const completedTaskPercentage = useMemo(() => {
      if (tasks.length === 0) return 0
      return Math.round((completedTasksNumber / tasks.length) * 100)
    }, [completedTasksNumber, tasks])

  return (
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
  )
}