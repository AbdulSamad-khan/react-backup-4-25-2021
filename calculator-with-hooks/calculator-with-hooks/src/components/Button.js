import React from "react";

const Button = ({ expression, onChangeExpression }) => {
  const buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+", "-", "*", "/"];
  const calculate = () => {
    onChangeExpression(eval(expression));
  };
  const buttonList = buttonValues.map((elements) => {
    return (
      <button
        key={elements}
        value={`${expression}${elements}`}
        onClick={(e) => onChangeExpression(e.target.value)}
      >
        {elements}
      </button>
    );
  });
  return (
    <div>
      {buttonList}
      <button onClick={calculate}>=</button>
    </div>
  );
};

export default Button;
