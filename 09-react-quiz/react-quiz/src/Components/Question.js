import Options from "./Options";

function Question({ question }) {
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
