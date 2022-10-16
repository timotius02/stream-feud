import { component$ } from "@builder.io/qwik";
import { AnswerBox } from "../answer-box/answer-box";

interface Answers {
  [answer: string]: number;
}

interface AnswersBoardProps {
  answers: Answers;
}

export const AnswersBoard = component$((props: AnswersBoardProps) => {
  const { answers } = props;

  const keys = Object.keys(answers);
  return (
    <div class="columns-2 gap-4">
      {keys.map((answer) => (
        <AnswerBox answer={answer} votes={answers[answer]} />
      ))}
      {[...Array(8 - keys.length)].map(() => <AnswerBox />)}
    </div>
  );
});
