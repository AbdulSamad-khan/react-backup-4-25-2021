import React, { useState } from "react";
// React is an object
const Accordian = (props) => {
  // intialize state
  console.log(React);

  const [activeIndex, setActiveIndex] = useState(null);

  // helper function
  const onTitleClicked = (index) => {
    setActiveIndex(index); // update the state
  };
  // rendering the list/array using map function
  const listItems = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={index}>
        {/* title  div */}
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i
            className="big angle double down icon"
            style={{ color: "blue" }}
          ></i>
          {item.title}
        </div>
        {/* content div */}
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{listItems}</div>;
};
export default Accordian;
