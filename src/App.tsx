import React from "react";
import TodoList from "./components/TodoList";
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">My Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
