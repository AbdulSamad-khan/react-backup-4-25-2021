import React from "react";

class TransactionList extends React.Component {
  onDelete = (event) => {
    let index = event.target.value;
    // inorder to delete we pass value from child to parent
    console.log(this.props);
    this.props.getIndex(index);
  };
  render() {
    const list = this.props.amounts.map((elements, index) => {
      return (
        <div key={index}>
          <li>
            {this.props.descriptions[index]} {elements}
            <button value={index} onClick={this.onDelete}>
              x
            </button>
          </li>
        </div>
      );
    });
    return (
      <div>
        <h3>Transaction List</h3>
        <ol>{list}</ol>
      </div>
    );
  }
}
export default TransactionList;
