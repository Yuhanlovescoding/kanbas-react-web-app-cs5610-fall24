import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo}: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
        
      <li key={todo.id} className="list-group-item todo-item">
         {todo.title}
        <div className="button-group">
        <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"
                className="btn btn-primary"> Edit </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"
                className="counter-btn red-btn"> Delete </button>
        
           </div>
        </li>
        );}