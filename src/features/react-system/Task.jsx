import PropTypes from 'prop-types'
import { useState } from 'react'

export default function ReactSystem() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Görev 1' },
    { id: 2, text: 'Görev 2' },
  ])

  function handleAdd() {
    const newId = tasks.length + 1
    const newTask = { id: newId, text: `Görev ${newId}` }
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <p>Toplam {tasks.length} görev var.</p>
      <TaskList tasks={tasks} />
      <button onClick={handleAdd}>Görev Ekle</button>
    </div>
  )
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}
