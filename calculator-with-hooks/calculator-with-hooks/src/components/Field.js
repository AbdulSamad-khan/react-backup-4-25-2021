import React from "react";

const Field = ({ expression, onChangeExpression }) => {
  const calculate = (event) => {
    event.preventDefault();
    onChangeExpression(eval(expression));
  };
  return (
    <div>
      <form onSubmit={(e) => calculate(e)}>
        <label>Enter Expression</label>
        <input
          type="text"
          onChange={(e) => onChangeExpression(e.target.value)}
          value={expression}
        />
      </form>
    </div>
  );
};
export default Field;
