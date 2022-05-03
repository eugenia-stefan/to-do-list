import React from "react";
import "./App.css";
import TodoForm from "./ToDoForm";

function Todo({ todo, index, completeTodo, removeTodo}) {
  return (<div 
    className="todo"
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >{todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Done</button>
      <button onClick={() => removeTodo(index)}>Remove</button>

    </div>
    </div>
    );
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Having lunch", isCompleted: false },
    { text: "Buying clothes", isCompleted: false },
    { text: "Meeting my friends", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index}
           index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
