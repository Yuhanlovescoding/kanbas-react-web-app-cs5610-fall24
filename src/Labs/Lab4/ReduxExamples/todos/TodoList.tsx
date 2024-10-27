import React, { useState } from "react";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node"  }]);
  const [todo, setTodo] = useState({ id: "0", title: "Learn Mongo" });
  const addTodo = (todo: any) => {
    const newTodos = [ ...todos, { ...todo,
      id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "0", title: ""});
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "0", title: ""});
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item todo-item">
        <input defaultValue={todo.title}
            onChange={(e) =>
              setTodo({ ...todo,
                title: e.target.value })
            }
          />
          <div className="button-group">
          <button onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click" className="counter-btn yellow-btn">
            Update </button>
            <button onClick={() => addTodo(todo)}
                  id="wd-add-todo-click" className="counter-btn green-btn">
                    Add</button></div>
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item todo-item">
            {todo.title}
            <div className="button-group">
            <button onClick={() => setTodo(todo)}
                    id="wd-set-todo-click" className="btn btn-primary">
              Edit </button>
            <button onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click" className="counter-btn red-btn">
              Delete </button></div> 
          </li>
          
        ))}
      </ul>
      <hr/>
    </div>
  );
}
