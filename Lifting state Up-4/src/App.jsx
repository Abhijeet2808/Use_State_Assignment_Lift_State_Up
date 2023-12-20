import  { useState } from 'react';
import './App.css'; 

// Child functional component
const TodoList = ({ todos, onCompleteTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => onCompleteTodo(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Parent functional component
const Parent = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a React app', completed: false },
    { text: 'Deploy the React app', completed: false },
  ]);

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  return (
    <div className="parent">
      <label>Parent Component:</label>
      <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} />
    </div>
  );
};

export default Parent;
