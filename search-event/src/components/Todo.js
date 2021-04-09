import React, { Component } from "react";

export default class App extends Component {
  state = {
    cart: ["Corn", "Potato"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    this.setState({ cart: this.state.cart.concat(this.state.input) });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.saveInput} />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>;
          })}
        </ol>
      </div>
    );
  }
}
