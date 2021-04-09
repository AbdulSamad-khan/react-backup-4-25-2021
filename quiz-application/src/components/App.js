import React, { useState } from "react";
import Quiz from "./Quiz";
export default () => {
  const [index, setIndex] = useState("");
  const [value, setValue] = useState("");
  let questions = [
    {
      question: "What is the capital of pakistan?",
      option1: "karachi",
      option2: "Islamabad",
      option3: "Lahore",
      answer: "Islamabad",
    },
    {
      question: "what's the national game of pakistan?",
      option1: "Cricket",
      option2: "Football",
      option3: "Hockey",
      answer: "Hockey",
    },
    {
      question: "What's the capital of province sindh ",
      option1: "Sukker",
      option2: "Larkana",
      option3: "Karachi",
      answer: "Karachi",
    },
  ];
  return (
    <div>
      <h1>Simple Quiz Application</h1>
      <Quiz
        questions={questions}
        index={index}
        onSetIndex={setIndex}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};
