import { useState, useRef } from "react";
import "./App.css";
import InputTodo from "./TodoForm/InputTodo/InputTodo";
import TodoList from "./TodoForm/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [hide, setHide] = useState("none");
  const [item, setItem] = useState();
  const [index, setIndex] = useState();

  const editRef = useRef();
  const editInputRef = useRef();

  const getTodo = (value) => {
    setTodos([...todos, value]);
  };

  const getHide = (unHide) => {
    setHide(unHide);
    editInputRef.current.focus();
    editRef.current.scrollIntoView();
  };

  const getEditTodo = (item, index) => {
    setItem(item);
    setIndex(index);
  };

  const handleEditClose = () => {
    setHide("none");
    setTodos([...todos]);
  };

  const handleRemove = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
    setHide("none");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <InputTodo getTodo={getTodo} list={todos} editForm={false} />
        <InputTodo
          todos={todos}
          getTodo={getTodo}
          editForm
          hide={hide}
          editRef={editRef}
          editInputRef={editInputRef}
          item={item}
          index={index}
          handleEditClose={handleEditClose}
        />
        <TodoList
          todos={todos}
          handleRemove={handleRemove}
          getHide={getHide}
          getEditTodo={getEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
