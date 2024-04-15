import { useQuizContext } from "../context/QuixContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuizContext();
  const question = questions.at(index);
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
