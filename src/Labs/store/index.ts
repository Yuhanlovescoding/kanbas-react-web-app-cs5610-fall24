import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer"
import TodoList from "../Lab4/ReduxExamples/todos/TodoList";

const store = configureStore({
  reducer: { 
    helloReducer,
    counterReducer,
    addReducer,
    TodoList,
   },
  
});
export default store;