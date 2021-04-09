import React from "react";

class Event extends React.Component {
  onInputChange(event) {
    //console.log(event.target.value);
    console.log(this); // this value
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange} />
      </div>
    );
  }
}

export default Event;
