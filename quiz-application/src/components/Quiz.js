import React from "react";

export default ({ questions, index, onSetIndex, value, setValue }) => {
  const onAnswer = (event, index) => {
    onSetIndex(index);
    setValue(event.target.value);
  };

  const listQuestions = questions.map((question, id) => {
    return (
      <div key={id}>
        {question.question} <br />
        <input
          type="radio"
          value={question.option1}
          name="option"
          onClick={(e) => onAnswer(e, id)}
        />
        {question.option1} <br />
        <input
          type="radio"
          value={question.option2}
          name="option"
          onClick={(e) => onAnswer(e, id)}
        />
        {question.option2}
        <br />
        <input
          type="radio"
          value={question.option3}
          name="option"
          onClick={(e) => onAnswer(e, id)}
        />
        {question.option3}
        <div style={{ color: "green" }}>
          {index === id && question.answer === value ? "Right Answer" : ""}
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  });
  return <div> {listQuestions}</div>;
};
