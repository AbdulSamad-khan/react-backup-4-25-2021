// search bar is an class component beacuse it's going to handle the user input

// we dont want to to do api call inside SearchBar so that we will do doing in App
// child communicating with parent

import React from "react";

class SearchBar extends React.Component {
  /*The best way to handle the event is using the controlled event handlers using states in react*/

  constructor(props) {
    super(props);
    this.state = { term: "" };
    //this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Event Handler function can be of any name
  // onInputChange(event) {
  //   console.log(event.target.value);
  //   console.log(this);
  //   console.log(this);
  // }

  // onInputClick(event) {
  //     console.log("Event get Clicked!");
  // }
  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term);
    // sending props from child to parent by tricking
    this.props.onSubmit(this.state.term); // invoking or function call
  };
  render() {
    return (
      <div className="ui container segment" style={{ marginTop: "20px" }}>
        {/* while submitting form it automaticaly refreshes the page to prevent 
                the default behaviour we use  event.preventDefault() inside call back on
                onSubmit*/}

        <form
          // onSubmit={(event) => this.onFormSubmit(event)}
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label>Search Items </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              // onChange={this.onInputChange}
              placeholder="Search here.. "
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
