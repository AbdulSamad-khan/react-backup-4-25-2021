import React, { useState } from "react";
import Field from "./Field";
import Button from "./Button";

const App = () => {
  const [expression, setExpression] = useState("");
  return (
    <div>
      <Field expression={expression} onChangeExpression={setExpression} />
      <Button expression={expression} onChangeExpression={setExpression} />
    </div>
  );
};

export default App;
