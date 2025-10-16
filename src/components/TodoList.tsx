const TodoList = () => {
  const todos = ["Task", "Do Complete", "Incomplete"];

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
