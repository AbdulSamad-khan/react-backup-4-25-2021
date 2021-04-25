import React from "react";
import LanguageContext from "../context/LanguageContext";

const Field = () => {
  const translate = (value) => {
    return value === "urdu" ? "Nam" : "Name";
  };
  return (
    <div>
      <label>
        <LanguageContext.Consumer>
          {(value) => translate(value)}
        </LanguageContext.Consumer>
      </label>
      <input />
    </div>
  );
};

export default Field;
