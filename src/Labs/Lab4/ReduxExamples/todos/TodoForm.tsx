import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
   ) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item todo-item">
        <input defaultValue={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
          <div className="button-group">
          <button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
                className="counter-btn yellow-btn"> Update </button>
        <button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"
                className="counter-btn green-btn"> Add </button>
        </div>
      </li>
  );}
  