import React, { useState } from "react";
let count = 0;
const Sample = () => {
  const [getIndex, setIndex] = useState(0);
  const onButtonClick = () => {
    setIndex(++count);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>

      <h1>Current Count: {getIndex}</h1>
    </div>
  );
};
export default Sample;
