import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onChangeSelected, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    // manual event listener always invoked first
    const clickEvent = (event) => {
      console.log("body");
      if (ref.current.contains(event.target)) {
        return; // exit
      }
      // unreachable
      setOpen(false);
    };
    document.body.addEventListener("click", clickEvent, { capture: true });
    return () => {
      // cleanup function show get invoked two times
      // 1. when component re-renders
      // 2. when component is no longer shown
      document.body.removeEventListener("click", clickEvent, { capture: true });
    };
  }, []);

  const renderList = options.map((option) => {
    if (selected.label !== option.label) {
      return (
        <div
          className="item"
          key={option.label}
          onClick={() => {
            console.log("items");
            onChangeSelected(option);
          }}
        >
          {option.label}
        </div>
      );
    }
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        {/* parent */}
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            console.log("drop-donwn");
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          {/* Child */}
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderList}
          </div>
        </div>
      </div>
      {/* <p style={{ color: "red" }}> {selected.value}!!!</p> */}
    </div>
  );
};

export default Dropdown;
