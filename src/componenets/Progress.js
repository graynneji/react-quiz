function Progress({ index, numQuestions, points }) {
  return (
    <header className="progress">
      <p>
        Question <stron>{index + 1}</stron> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / X
      </p>
    </header>
  );
}
export default Progress;
