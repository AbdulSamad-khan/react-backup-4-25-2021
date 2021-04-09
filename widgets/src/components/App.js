import React, { useState } from "react";
import Accordian from "./Accordian";
// import Sample from "./Sample";
import Searchopt1 from "./Searchopt1";
// functional Component
import Search from "./Search";
import Dropdown from "./Dropdown";
import CleanupFunction from "./CleanupFunction";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const App = () => {
  <h1> Header</h1>;
  const items = [
    {
      title: "What is React?",
      content: "React is fron-end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favourite js library among Engineers",
    },
    {
      title: "How do we use react",
      content: "You use react by creating component",
    },
  ];
  const options = [
    // 0
    {
      label: "red",
      value: "The color red",
    },
    // 1
    {
      label: "green",
      value: "The color green",
    },
    // 2
    {
      label: "yellow",
      value: "The color yellow",
    },
  ];
  const [selected, setSelection] = useState(options[0]);
  const [showToggle, setShowToggle] = useState(true);

  // creating an helper function for the routing

  const showAccordian = () => {
    return window.location.pathname === "/" ? (
      <Accordian items={items} />
    ) : null;
  };
  const showDropdown = () => {
    return window.location.pathname === "/dropdown" ? (
      <Dropdown
        options={options}
        selected={selected}
        onChangeSelected={setSelection}
        label={"Select Color"}
      />
    ) : null;
  };

  const doRouting = (componenet, route) => {
    return window.location.pathname === route ? componenet : null;
  };

  return (
    <div>
      <p>
        This is an bad appraoch of routing beacuse it refreshes the page every
        time when url changes , In react we don't want to do hardreload on such
        small activities
      </p>
      <Header />
      {/* accordian is a child componenet and passing props to accordian from app */}
      <div className="ui vertical steps">
        {/* <Accordian items={items} /> */}
        {/* <Sample /> */}
      </div>
      {/* <Searchopt1 /> */}
      {/* <Search /> */}

      <button
        onClick={() => {
          setShowToggle(!showToggle);
        }}
      >
        Toggle Button
      </button>
      {showToggle ? <CleanupFunction /> : null}

      {/* <Translate /> */}
      {/* {showAccordian()}
      {showDropdown()} */}

      {/* <Route route={"/"}>
        <Accordian items={items} />
      </Route>

      <Route route={"/list"}>
        <Search />
      </Route>
      <Route route={"/dropdown"}>
        <Dropdown
          options={options}
          selected={selected}
          onChangeSelected={setSelection}
        />
      </Route>
      <Route route={"/translate"}>
        <Translate />
      </Route> */}

      {/* {doRouting(<Accordian items={items} />, "/")} */}
    </div>
  );
};

export default App;
