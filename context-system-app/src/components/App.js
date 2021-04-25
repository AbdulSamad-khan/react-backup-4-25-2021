import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ButtonColorContext from "../context/ButtonColorContext";
class App extends React.Component {
  constructor() {
    super();
    this.state = { language: "australia" };
  }
  render() {
    return (
      <div className="ui segment ui form">
        Select language:
        <br />
        <i
          className="au flag"
          onClick={() => this.setState({ language: "australia" })}
        ></i>
        <i
          className="pk flag"
          onClick={() => this.setState({ language: "urdu" })}
        ></i>
        <LanguageContext.Provider value={this.state.language}>
          <ButtonColorContext.Provider value="red">
            <UserCreate />
          </ButtonColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
