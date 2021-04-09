import React from "react";

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  onClickCalulate = (event) => {
    this.setState({ term: eval(this.state.term) });
  };
  onClear = (event) => {
    this.setState({ term: "" });
  };
  onClick = (event) => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={(e) => {
            this.setState({ term: e.target.value });
          }}
          placeholder="enter a number here.. "
        />
        <br />
        <button onClick={this.onClick} value={`${this.state.term}+`}>
          +
        </button>
        <button onClick={this.onClick} value={`${this.state.term}-`}>
          -
        </button>
        <button onClick={this.onClick} value={`${this.state.term}*`}>
          *
        </button>
        <button onClick={this.onClick} value={`${this.state.term}/`}>
          /
        </button>
        <button onClick={this.onClick} value={`${this.state.term}1`}>
          1
        </button>
        <button onClick={this.onClick} value={`${this.state.term}2`}>
          2
        </button>
        <button onClick={this.onClick} value={`${this.state.term}3`}>
          3
        </button>
        <button onClick={this.onClick} value={`${this.state.term}4`}>
          4
        </button>
        <button onClick={this.onClick} value={`${this.state.term}5`}>
          5
        </button>
        <button onClick={this.onClick} value={`${this.state.term}6`}>
          6
        </button>
        <button onClick={this.onClick} value={`${this.state.term}7`}>
          7
        </button>
        <button onClick={this.onClick} value={`${this.state.term}8`}>
          8
        </button>
        <button onClick={this.onClick} value={`${this.state.term}9`}>
          9
        </button>
        <button onClick={this.onClick} value={`${this.state.term}0`}>
          0
        </button>
        <button onClick={this.onClickCalulate}>Calculate</button>
        <button onClick={this.onClear}>Clear</button>
      </div>
    );
  }
}

export default Calculate;
