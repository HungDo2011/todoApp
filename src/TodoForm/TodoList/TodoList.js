import { useState } from "react";
import QuestionForm from "./QuestionForm/QuestionForm";
import "./TodoList.css";

function TodoList({ todos, handleRemove, getHide, getEditTodo }) {
  const [question, setQuestion] = useState(true);
  const [indexQuestion, setIndexQuestion] = useState(0);

  const handleEdit = (item, index) => {
    const unHide = "";
    getHide(unHide);
    getEditTodo(item, index);
  };

  const handleQuestion = (index) => {
    setIndexQuestion(index);
    setQuestion(false);
  };

  const handleCompleted = (index) => {
    const completedItem = document.querySelectorAll(".li-wrapper");
    completedItem[index].classList.add("completed");
    setQuestion(true);
    console.log(index);

    setTimeout(() => {
      handleRemove(index);
      completedItem[index].classList.remove("completed");
    }, 3000);
  };

  const handleUnCompleted = () => {
    setQuestion(true);
  };

  return (
    <div className="list-todo">
      <ul>
        {todos.map((item, index) => (
          <li className="li-wrapper" key={index}>
            <p className="todo-item">
              {index + 1}. {item}
            </p>

            <button
              className="btn-edit"
              onClick={() => handleEdit(item, index)}
            >
              Sửa
            </button>
            <button
              className="btn-completed"
              onClick={() => handleQuestion(index)}
            >
              Hoàn thành
            </button>
            <button className="btn-remove" onClick={() => handleRemove(index)}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
      {!question && (
        <QuestionForm
          handleUnCompleted={handleUnCompleted}
          handleCompleted={handleCompleted}
          index={indexQuestion}
        />
      )}
    </div>
  );
}

export default TodoList;
