import { useRef, useState } from "react";
import "./InputTodo.css";

function InputTodo({
  todos,
  getTodo,
  editForm,
  hide,
  editRef,
  editInputRef,
  item,
  index,
  handleEditClose,
}) {
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef();

  const handleValue = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    getTodo(todo);
    setTodo("");
    inputRef.current.focus();
  };

  const handleEditValue = (e) => {
    setEditTodo(e.target.value);
  };

  const handleEditSave = () => {
    if (editTodo === "") {
      editInputRef.current.focus();
      setError(true);
    } else {
      setError(false);
      todos.splice(index, 1, editTodo);
      setTodo(editTodo);
      getTodo(todo);
      setEditTodo("");
      handleEditClose();
    }
  };

  return (
    <>
      {editForm ? (
        <div className={`input-todo ${hide}`} ref={editRef}>
          <h1 className="title">
            Editting {index + 1}. {item}
          </h1>
          <input
            ref={editInputRef}
            onChange={handleEditValue}
            value={editTodo}
            className="edit-input"
          />
          <button className="btn-add" onClick={handleEditSave}>
            Save
          </button>
          <button className="btn-add" onClick={handleEditClose}>
            Close
          </button>
          {error ? (
            <span className="error">Không được để trống!!!</span>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          <div className="input-todo">
            <h1 className="title">Input the thing you need Todo</h1>
            <input
              ref={inputRef}
              onChange={handleValue}
              value={todo}
              className="input"
            />
            <button className="btn-add" onClick={handleAdd}>
              Add
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default InputTodo;
