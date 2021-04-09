import React from "react";
import TransactionList from "./TransactionList";

class Transaction extends React.Component {
  state = {
    amount: "", // made for input
    description: "",
    amt: [], // made for listing
    desc: [], // made for listing
    expense: [], // to calculate the sum of expense
    income: [], // to calculate the sum of income
    incomeResult: 0,
    expenseResult: 0,
  };
  onAddTransaction = () => {
    let { amt, desc, amount, description, income, expense } = this.state;
    amt.push(amount);
    desc.push(description);
    this.setState({ amt: amt, desc: desc });
    if (amount > 0) {
      income.push(amount);
      this.setState({ income: income });

      let result = this.state.income.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      );
      this.setState({ incomeResult: result });
    } else {
      expense.push(amount);
      this.setState({ income: expense });
      let result = this.state.expense.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      );
      this.setState({ expenseResult: result });
    }
  };
  deleteLists(index) {
    let { amt, desc } = this.state;
    // delete from list of amounts
    amt.splice(index, 1);
    this.setState({ amt: amt });

    desc.splice(index, 1);
    this.setState({ desc: desc });
  }
  totalBalance() {
    return (
      Math.abs(this.state.incomeResult) - Math.abs(this.state.expenseResult)
    );
  }
  render() {
    return (
      <div>
        <h3> Current Balance </h3>
        Total Balance: ${this.totalBalance()}
        <h3>Transaction Summary</h3>
        Income: ${this.state.incomeResult}
        <br />
        expense: ${Math.abs(this.state.expenseResult)}
        <TransactionList
          amounts={this.state.amt}
          descriptions={this.state.desc}
          getIndex={(index) => this.deleteLists(index)}
        />
        <label htmlFor="description">Description</label>
        <br />
        <div className="ui input">
          <input
            type="text"
            id="description"
            onChange={(e) => this.setState({ description: e.target.value })}
          />
        </div>
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <div className="ui input">
          <input
            type="text"
            id="amount"
            onChange={(e) => this.setState({ amount: e.target.value })}
          />
        </div>
        <br />
        <button
          className="ui violet button left floated"
          onClick={() => {
            this.onAddTransaction();
          }}
          style={{ marginTop: "5px" }}
        >
          Add transaction
        </button>
      </div>
    );
  }
}
export default Transaction;
