import React from "react";
import Transaction from "./Transaction";
const App = () => {
  return (
    <div className="ui placeholder segment">
      <h1>Expense Tracking App</h1>
      <div className="ui divider"></div>
      <Transaction />
    </div>
  );
};

export default App;
