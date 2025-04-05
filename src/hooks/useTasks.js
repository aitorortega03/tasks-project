import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([])

  const getTasks = () => {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  }

  const saveTasks = (tasks) => {
    setTasks(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  useEffect(() => {
      const storedTasks = getTasks()
      if (storedTasks.length > 0) {
        setTasks(storedTasks)
      }
    }
    , [])

    return { tasks, saveTasks }
}