import "./QuestionForm.css";

function QuestionForm({ handleCompleted, index, handleUnCompleted }) {
  return (
    <div className="overlay">
      <div className="question-box">
        <h1 className="question-title">Chắc chưa?</h1>
        <div className="question-select">
          <button className="btn no" onClick={() => handleUnCompleted()}>
            No, not sure!
          </button>
          <button className="btn yes" onClick={() => handleCompleted(index)}>
            Yes!!!
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
