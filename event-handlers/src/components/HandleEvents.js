import React from "react";

// 1. onChange
// 2. onClick
// 3. onSubmit

// types of evetns controlled and uncontrolled
class HandleEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    //this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit = (events) => {
    events.preventDefault();
    // it losses the this context
    console.log(this.state.term);
  };
  // callback -> Uncontrolled evetns
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputChangeByState(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <div className="handle-events">
        <form onSubmit={(event) => this.onFormSubmit(event)}>
          <label>Search Items</label>
          <br />
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => this.onInputChangeByState(event)}
            // onChange={this.onInputChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default HandleEvents;
