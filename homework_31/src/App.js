import { useState } from "react";

import "./App.css";
import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";
import MyButton from "./components/UI/button/MyButton.js";
import MyInput from "./components/UI/input/MyInput.js";

function App() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="App">
      <h1>Список заміток</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <MyInput type="text" onInput={(e) => setInput(e.target.value)} />
        <MyButton type="submit">Додати</MyButton>
      </form>
      <div className="Todos">
        {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
