import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">My Todo App</h1>
      </header>
      <div className="add-button-container">
        <button className="add-button">Add</button>
      </div>
      <TodoList />
    </div>
  )
}

export default App
