import React from 'react'
import '../App.css'

const TodoList: React.FC = () => {
  const todos: string[] = ['Task', 'Complete', 'Incomplete']

  return (
    <div className="todo-container">
      {todos.map((item, index) => (
        <div key={index} className="todo-item">
          {item}
        </div>
      ))}
    </div>
  )
}

export default TodoList
