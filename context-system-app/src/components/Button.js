import React from "react";
import LanguageContext from "../context/LanguageContext";
import ButtonColorContext from "../context/ButtonColorContext";
class Button extends React.Component {
  // set the type in order to get data from context

  //   static contextType = LanguageContext;

  translate = (value) => {
    return value === "urdu" ? "Jama karwayen" : "submit";
  };
  render() {
    return (
      <div>
        {/* this will select color */}
        <ButtonColorContext.Consumer>
          {(color) => (
            <button className={`ui ${color} button`}>
              {/* 
                this will select language */}
              <LanguageContext.Consumer>
                {(value) => this.translate(value)}
              </LanguageContext.Consumer>
            </button>
          )}
        </ButtonColorContext.Consumer>
      </div>
    );
  }
}
export default Button;
