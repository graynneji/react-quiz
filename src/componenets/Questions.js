import Options from "./options";
function Questions({ questions, answer, dispatch }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <div className="options">
        <Options questions={questions} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}
export default Questions;
